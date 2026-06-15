import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Check, Copy, Send, Mail, RefreshCw, KeyRound, ArrowRight } from "lucide-react";

export default function DirectInquiry() {
  const [numA, setNumA] = useState(14);
  const [numB, setNumB] = useState(3);
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const revealedEmail = "info@eleganttaste.com";

  // Generate a random math challenge on mount
  useEffect(() => {
    generateNewChallenge();
  }, []);

  const generateNewChallenge = () => {
    const a = Math.floor(Math.random() * 11) + 8; // 8 to 18
    const b = Math.floor(Math.random() * 8) + 3;  // 3 to 10
    setNumA(a);
    setNumB(b);
    setUserAnswer("");
    setErrorMsg("");
    setIsVerified(false);
  };

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();
    const correctSum = numA + numB;
    const parsedUserAnswer = parseInt(userAnswer.trim(), 10);

    if (parsedUserAnswer === correctSum) {
      setIsVerified(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Verification code incorrect. Please try again.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(revealedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailSubject = encodeURIComponent("Domain Purchase Inquiry: eleganttaste.com");
  const mailBody = encodeURIComponent(
    "Hello,\n\nI am contacting you regarding the buyout or licensing of the premium domain eleganttaste.com.\n\nPlease let me know your price expectation or if you prefer to finalize through Afternic/GoDaddy escrow.\n\nBest regards,"
  );
  const mailtoString = `mailto:${revealedEmail}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <section id="bespoke_inquiry_section" className="py-20 px-4 md:px-12 bg-[#121315] text-white relative flex-grow flex items-center justify-center">
      {/* Subtle brand lighting gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-luxury-gold/5 opacity-40 pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 border border-luxury-gold/30 px-3.5 py-1.5 rounded-full bg-white/5">
            <ShieldCheck className="w-4 h-4 text-luxury-gold" />
            <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-gold font-bold">
              PORTFOLIO REGISTRY DESK
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white">
            Secure Partnership & <span className="italic text-luxury-gold font-normal">Direct Acquisition</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold/40 mx-auto" />
          <p className="font-sans font-light text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Elegant Taste Gastronomy offers exclusive boutique domains like <strong className="text-white">eleganttaste.com</strong> for purchase. Out of respect for high-net-worth transactional privacy, registry access is securely protected from scrapers.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!isVerified ? (
              <motion.div
                key="verification-challenge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#1a1c1e] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6 text-center"
              >
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 text-luxury-gold bg-[#222428] flex items-center justify-center mx-auto">
                  <KeyRound className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-light text-white">
                    Unlock Administrative Contact
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Solve this quick security riddle to reveal the primary administrative inbox and launch immediate negotiation.
                  </p>
                </div>

                <form onSubmit={handleVerify} className="space-y-4">
                  <div className="p-4 bg-[#212327] rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="font-serif text-lg text-luxury-gold font-light tracking-wide">
                      What is <strong className="text-white font-bold">{numA} + {numB}</strong> ?
                    </span>
                    
                    <button
                      type="button"
                      onClick={generateNewChallenge}
                      className="p-1.5 hover:bg-white/5 text-gray-400 hover:text-white rounded transition-colors"
                      title="New puzzle code"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1 text-left">
                    <input
                      type="text"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Enter code details..."
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        setErrorMsg("");
                      }}
                      className="w-full bg-[#212327] text-white border border-white/10 rounded-lg px-4 py-3 text-sm text-center font-mono focus:outline-none focus:border-luxury-gold/70 transition-colors"
                    />
                    {errorMsg && (
                      <p className="text-[11px] text-red-400 text-center mt-1 uppercase tracking-wide font-sans font-semibold">
                        {errorMsg}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-sans font-semibold text-xs tracking-widest uppercase rounded shadow-lg transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Verify Answer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="verification-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#1a1c1e] border border-[#2e7d32]/30 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6 text-center"
              >
                <div className="w-12 h-12 rounded-full border border-emerald-500 text-emerald-400 bg-emerald-950/20 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-light text-white">
                    Identity Confirmed
                  </h3>
                  <span className="text-[10px] uppercase text-emerald-400 tracking-widest font-semibold font-sans">
                    Registry Details Revealed
                  </span>
                  <div className="w-12 h-[1px] bg-luxury-gold/30 mx-auto mt-2" />
                </div>

                {/* Primary Direct Inbox Reveal Card */}
                <div className="p-4 bg-black/40 border border-luxury-gold/20 rounded-xl space-y-3.5">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#9ca3af] block font-semibold leading-none">
                    Administrative Contact Desk
                  </span>
                  
                  <div className="flex items-center justify-between gap-2 xs:gap-3 bg-black/40 rounded px-2.5 xs:px-3.5 py-2.5 border border-white/5 overflow-hidden">
                    <span className="font-serif text-xs xs:text-sm md:text-base text-white select-all font-semibold tracking-wide truncate break-all">
                      {revealedEmail}
                    </span>
                    <button
                      onClick={handleCopy}
                      className={`p-2 rounded transition-all flex items-center justify-center shrink-0 ${
                        copied 
                          ? "bg-[#2e7d32] text-white" 
                          : "bg-white/5 text-gray-300 hover:text-white"
                      }`}
                      title={copied ? "Copied!" : "Copy Email"}
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <p className="font-sans font-light text-gray-400 text-xs leading-relaxed">
                  We look forward to reviewing your valuation concept. Direct registrants receive rapid security escrow handling and 0% brokerage overhead protection.
                </p>

                {/* Direct Action Email Trigger */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={generateNewChallenge}
                    className="flex-1 py-3 border border-white/10 hover:border-white text-gray-300 text-xs font-sans tracking-widest uppercase rounded cursor-pointer transition-colors"
                  >
                    Lock Registry
                  </button>
                  
                  <a
                    href={mailtoString}
                    className="flex-1 py-3 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal text-xs font-sans font-bold tracking-widest uppercase rounded cursor-pointer transition-colors flex items-center justify-center space-x-1.5 shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email Directly</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto pt-4 text-center">
          <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
            <h4 className="font-serif text-sm text-white">Immediate Registrar Push</h4>
            <p className="text-xs text-gray-400 font-light font-sans">
              Clean and seamless registration transfers directly to GoDaddy, Cloudflare, Namecheap, or any registrar of choice.
            </p>
          </div>
          <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
            <h4 className="font-serif text-sm text-white">Full Escrow Protection</h4>
            <p className="text-xs text-gray-400 font-light font-sans">
              All acquisitions can be closed directly under Escrow.com or major marketplace protections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
