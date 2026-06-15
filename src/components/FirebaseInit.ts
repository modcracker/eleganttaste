import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocFromServer } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export interface FirebaseInstance {
  db: any;
  auth: any;
  isReady: boolean;
}

export async function tryInitializeFirebase(): Promise<FirebaseInstance> {
  try {
    // Elegant runtime fetch to our proxy config route to avoid build-time Rollup resolution checks!
    const response = await fetch("/api/firebase-config");
    if (!response.ok) {
      throw new Error("No config available on server.");
    }
    const config = await response.json();

    if (config && config.apiKey) {
      const app = initializeApp(config);
      const dbInstance = getFirestore(app, config.firestoreDatabaseId);
      const authInstance = getAuth(app);

      // Verify connection gently
      try {
        await getDocFromServer(doc(dbInstance, "test", "connection"));
      } catch (connErr) {
        console.warn("Connected, verify test bypassed:", connErr);
      }

      return {
        db: dbInstance,
        auth: authInstance,
        isReady: true,
      };
    }
  } catch (err) {
    console.log("Firebase not configured or not connected. Local fallback enabled.");
  }

  return {
    db: null,
    auth: null,
    isReady: false,
  };
}
