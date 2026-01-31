"use client";

const clients = [
  "TechFlow",
  "FoodieHub",
  "StyleCraft",
  "HealthPlus",
  "EcoSmart",
  "FinanceNow",
  "TravelBee",
  "GameZone",
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by Leading Brands
        </p>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
          
          {/* Scrolling logos */}
          <div className="flex gap-12 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex items-center justify-center min-w-[160px] h-16 px-6 bg-background rounded-xl border border-border"
              >
                <span className="text-lg font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
