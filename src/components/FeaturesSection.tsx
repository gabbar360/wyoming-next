import { Beaker, Users, Factory } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Precision Chemistry",
    description: "Our formulations are crafted with scientific accuracy to meet global industry standards.",
  },
  {
    icon: Users,
    title: "Expertise You Can Trust",
    description: "Decades of experience drive our ability to deliver reliable and tailored silicate solutions.",
  },
  {
    icon: Factory,
    title: "Cutting-Edge Facilities",
    description: "State-of-the-art machinery built for efficiency, sustainability, and reliable quality.",
  },
];

const FeaturesSection = () => {
  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: 'url("/background-image.png")',
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;