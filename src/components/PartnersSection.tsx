const partners = [
  { name: "Detergent Industries", logo: "DI" },
  { name: "Ceramic Solutions", logo: "CS" },
  { name: "Construction Corp", logo: "CC" },
  { name: "Chemical Works", logo: "CW" },
  { name: "Industrial Group", logo: "IG" },
  { name: "Global Manufacturing", logo: "GM" },
  { name: "Foundry Partners", logo: "FP" },
  { name: "Textile Industries", logo: "TI" },
  { name: "Water Treatment Co", logo: "WTC" },
  { name: "Mining Solutions", logo: "MS" },
  { name: "Pharmaceutical Ltd", logo: "PL" },
  { name: "Steel Works", logo: "SW" },
];

const PartnersSection = () => {
  return (
    <section 
      className="section-padding overflow-hidden relative"
      style={{
        backgroundImage: 'url("/background-image.png")',
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 sm:w-8 h-[2px] bg-primary" />
            <span className="section-subtitle">Partners</span>
            <div className="w-6 sm:w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="section-title">Global Partners</h2>
        </div>

        {/* Partners Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-3 sm:mx-6 lg:mx-8 bg-background border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 w-36 h-24 sm:w-44 sm:h-28 lg:w-48 lg:h-32 flex items-center justify-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                      <span className="text-sm sm:text-base lg:text-lg font-display font-bold text-primary">
                        {partner.logo}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-background border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-foreground text-sm sm:text-base">Trusted by 100+ Companies</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Across 25+ Countries Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;