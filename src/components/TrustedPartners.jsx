// 1. IMPORT MEIN SE "SiLogitechg" KO MITA DEIN
import { SiGoogle, SiAmd, SiCisco, SiSpotify, SiStripe } from "react-icons/si";

const TrustedPartners = () => {
  const partners = [
    { id: 1, icon: <SiGoogle className="w-16 h-6 md:w-20 md:h-8" />, name: "Google" },
    { id: 2, icon: <SiAmd className="w-16 h-6 md:w-20 md:h-8" />, name: "AMD" },
    { id: 3, icon: <SiCisco className="w-16 h-8 md:w-20 md:h-10" />, name: "Cisco" },
    { id: 4, icon: <SiStripe className="w-14 h-6 md:w-18 md:h-8" />, name: "Stripe" },
    // 2. YAHAN SE WOH LINE BHI HATA DEIN JO SiLogitechg USE KAR RAHI THI
    { id: 6, icon: <SiSpotify className="w-18 h-6 md:w-22 md:h-8" />, name: "Spotify" },
  ];
  
  // ... baqi code waisa hi rahega

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-[#113529] py-12 border-t border-b border-white/[0.04] overflow-hidden relative select-none">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a1913] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a1913] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-center text-[10px] md:text-xs font-semibold text-emerald-500/60 uppercase tracking-[0.25em] mb-8">
          Trusted by the world's best companies
        </p>

        <div className="w-full flex overflow-hidden">
          <div className="flex gap-16 md:gap-28 whitespace-nowrap animate-marquee items-center justify-center">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="text-white/90 hover:text-white/80 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
                title={partner.name}
              >
                {partner.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;