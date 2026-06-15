import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Proxy route to serve Firebase config safely to client without Rollup warnings
  app.get("/api/firebase-config", (req, res) => {
    try {
      const configPath = path.join(process.cwd(), "firebase-applet-config.json");
      if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, "utf-8");
        const parsed = JSON.parse(fileContent);
        return res.json(parsed);
      }
    } catch (e) {
      console.error("Failed to read firebase config:", e);
    }
    return res.status(404).json({ error: "Firebase config not found. Local Storage fallback enabled." });
  });

  // API Route: Gastronomy Concierge Menu Generator
  app.post("/api/concierge", async (req, res) => {
    try {
      const { mood, ingredients, occasion, dietary } = req.body;

      let ai;
      try {
        ai = getGeminiClient();
      } catch (err: any) {
        return res.status(500).json({
          error: "Gemini API client not initialized. Please ensure GEMINI_API_KEY is configured in Settings > Secrets.",
          details: err.message,
        });
      }

      const prompt = `Design a premium, classical modern tasting menu customized for:
- Dining Mood: ${mood || "Fine Gastronomy"}
- Occasion: ${occasion || "Bespoke Dining Experience"}
- Included/Requested Ingredients: ${ingredients || "Seasonal fine harvest"}
- Dietary Restrictions: ${dietary || "None"}

Ensure the dishes feel authentic, premium, and humanly crafted, using exact professional cooking vocabulary, seasonal ingredients, and precise preparation descriptions. Avoid science fiction jargon, generic AI hyperbole, or references to computer algorithms, matrices, or physical equations. The descriptions must match print menu styles from elite restaurants like Eleven Madison Park or French Laundry.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: `You are the talented Executive Chef of Elegant Taste (eleganttaste.com), a world-class premium private culinary kitchen. 
You draft bespoke private tasting menus with clean modern techniques, grounded in French-rooted culinary craftsmanship. Your descriptions are realistic, clear, professional, and focus beautifully on fresh texture pairings, real kitchen techniques (e.g., braised, butter-basted, emulsion, reduced glaze), and flavor balance without sounding pretentious, overly sci-fi, or automated.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: "The name of the exclusive culinary collection or experience (e.g. 'Le Jardin d'Amour Tasting Menu')",
              },
              description: {
                type: Type.STRING,
                description: "A gorgeous, poetic description of the menu's theme and style.",
              },
              mood: {
                type: Type.STRING,
                description: "The targeted elegant mood or dining aesthetic.",
              },
              dishes: {
                type: Type.ARRAY,
                description: "The orchestrated course-by-course menu. Include exactly 3 to 5 courses in total.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    course: {
                      type: Type.STRING,
                      description: "The dining phase: Amuse-Bouche, Appetizer, Entrée, Palate Cleanser, or Dessert",
                    },
                    name: {
                      type: Type.STRING,
                      description: "The exquisite gourmet title of the dish.",
                    },
                    description: {
                      type: Type.STRING,
                      description: "A sensory description of the flavors, textures, presentation, and preparation method.",
                    },
                    ingredients: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "The precise gourmet ingredients featured in the dish.",
                    },
                    chefNotes: {
                      type: Type.STRING,
                      description: "Personal insight or staging instruction by the master chef on why this dish was chosen.",
                    },
                  },
                  required: ["course", "name", "description", "ingredients", "chefNotes"],
                },
              },
              pairing: {
                type: Type.OBJECT,
                description: "A unified beverage pairing matching the entire tasting menu experience.",
                properties: {
                  beverage: {
                    type: Type.STRING,
                    description: "The name of the vintage wine, champagne, cellar selection, or elegant botanical mocktail.",
                  },
                  whyItWorks: {
                    type: Type.STRING,
                    description: "The flavor-science on why this pairing elevates the profile of the crafted courses.",
                  },
                  temperature: {
                    type: Type.STRING,
                    description: "The recommended service temperature (e.g. 'Chilled at 8°C' or 'Cellar temp 16°C').",
                  },
                },
                required: ["beverage", "whyItWorks", "temperature"],
              },
              estimatedPrepTime: {
                type: Type.STRING,
                description: "Approximate time or duration (e.g. '2.5 Hours of Masterful Assembly').",
              },
              chefMotto: {
                type: Type.STRING,
                description: "A final inspiring quote or words from Chef Gomez.",
              },
            },
            required: ["title", "description", "mood", "dishes", "pairing", "estimatedPrepTime", "chefMotto"],
          },
        },
      });

      const responseText = response.text || "{}";
      const parsedMenu = JSON.parse(responseText.trim());
      return res.json(parsedMenu);
    } catch (error: any) {
      console.error("Error in Gastronomy Concierge endpoint:", error);
      return res.status(500).json({
        error: "Failed to assemble the couture gastronomy menu.",
        details: error.message || String(error),
      });
    }
  });

  // Vite Integration & Static Assets
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Elegant Taste Gastronomy server running on host 0.0.0.0, port ${PORT}`);
  });
}

startServer();
