export interface Product {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  industries: string[];
}

export const products: Product[] = [
  {
    id: "sodium-silicate-liquid",
    title: "Sodium Silicate Liquid for Industrial Applications",
    shortTitle: "Sodium Silicate Liquid",
    description: "A high-performance bonding and sealing solution ideal for use in detergents, cement, paper, and more. Our liquid silicates ensure superior adhesion, stability, and durability across demanding industrial processes.",
    fullDescription: "Sodium Silicate Liquid, commonly known as water glass, is one of our flagship products. This versatile chemical compound is formed by fusing high-purity silica sand and soda ash at high temperatures, followed by dissolution in water. Our liquid silicate is available in various ratios and concentrations to meet specific industry requirements. The product offers excellent bonding, sealing, and binding properties, making it indispensable across multiple industrial applications.",
    image: "/product/Sodium Silicate Liquid.png",
    applications: [
      "Adhesive & Binder Applications",
      "Water Treatment & Soil Stabilization",
      "Cleaning & Detergent Manufacturing",
      "Paper & Pulp Industry",
      "Cement & Concrete Applications",
      "Textile Processing"
    ],
    specifications: [
      { label: "Physical Form", value: "Clear to slightly hazy liquid" },
      { label: "Silica Content (SiO2)", value: "25-30%" },
      { label: "Sodium Oxide (Na2O)", value: "8-14%" },
      { label: "Ratio (SiO2:Na2O)", value: "1.8 to 3.3" },
      { label: "Specific Gravity", value: "1.30 - 1.55 g/cm³" },
      { label: "pH Value", value: "11 - 13" }
    ],
    features: [
      "High bonding strength",
      "Excellent thermal stability",
      "Good film-forming properties",
      "Non-toxic and eco-friendly",
      "Customizable ratios available",
      "Consistent quality and purity"
    ],
    industries: ["Detergent", "Ceramic", "Foundry", "Construction", "Paper", "Textile"]
  },
  {
    id: "sodium-silicate-powder",
    title: "Sodium Silicate Powder - High Quality Industrial Grade",
    shortTitle: "Sodium Silicate Powder",
    description: "Our company is actively engaged as a supplier, exporter, and supplier of a wide range of Sodium Silicate Powder in India. These products are produced using high-quality raw materials and advanced machinery at our factory premises under the close supervision of our highly skilled technical team.",
    fullDescription: "Sodium Silicate Powder (Na2O·mSiO2), also known as water glass powder, is a versatile inorganic compound manufactured through controlled processes using high-quality raw materials. Available in multiple modulus ratios from low to high, our sodium silicate powder offers exceptional performance across various industrial applications. The product is manufactured under strict quality controls and is available in different grades to meet specific industry requirements.",
    image: "/product/Sodium Silicate Powder.png",
    applications: [
      "Construction chemicals, waterproofing, ceramic industries",
      "Concrete hardener, concrete admixture, electrodes.",
      "Oilfield chemicals, drilling muds, sewage treatment",
      "Coal-mine leak sealing, surgical cottons, binding refractory materials",
      "Textile auxiliaries — dyeing, printing and sizing",
      "Washing soap, detergent cake, toilet soap",
      "Quick-drying and reinforcing agent for cement",
      "Anti-corrosion agent and stabilizer for bleaching agents",
      "Paperboard, ceramics, metal extraction & refining, molding & core making",
      "Catalysts, pigments, adhesives and foundry applications"
    ],
    specifications: [
      { label: "Chemical Name", value: "Sodium Silicate Powder" },
      { label: "CAS No", value: "1344-09-8" },
      { label: "Chemical Formula", value: "Na2O·mSiO2" },
      { label: "EINECS Number", value: "215-687-4" },
      { label: "HSN Code", value: "28391900" },
      { label: "IUPAC Name", value: "Disodium; dioxido(oxo)silane" },
      { label: "Weight Ratio (Grade I)", value: "2.00 ± 0.10" },
      { label: "Weight Ratio (Grade II)", value: "2.20 ± 0.10" },
      { label: "Weight Ratio (Grade III)", value: "2.90 ± 0.10" },
      { label: "Weight Ratio (Grade IV)", value: "3.10 ± 0.10" },
      { label: "Na₂O Content (Grade I)", value: "25 – 29%" },
      { label: "Na₂O Content (Grade II)", value: "26 – 30%" },
      { label: "Na₂O Content (Grade III)", value: "18 – 22%" },
      { label: "Na₂O Content (Grade IV)", value: "20 – 23%" },
      { label: "SiO₂ Content (Grade I)", value: "54 – 58%" },
      { label: "SiO₂ Content (Grade II)", value: "55 – 60%" },
      { label: "SiO₂ Content (Grade III)", value: "60 – 66%" },
      { label: "SiO₂ Content (Grade IV)", value: "62 – 66%" },
      { label: "Density", value: "150 – 750 gm/liter" },
      { label: "Moisture", value: "5% Max" },
      { label: "Appearance", value: "White free flowing Powder/Granules" },
      { label: "Transport Information", value: "NONH for all modes of transport" }
    ],
    features: [
      "High-quality raw materials and advanced machinery",
      "Close supervision by highly skilled technical team",
      "Available in multiple modulus ratios (Low to High)",
      "White free flowing powder/granules form",
      "Controlled moisture content (5% max)",
      "ISO 9001:2015 certified manufacturing",
      "NABL certified laboratory testing",
      "BIS standard testing processes",
      "Regular instrument calibration",
      "Consistent quality and purity",
      "Safe transport classification (NONH)",
      "Multiple grade options for specific applications"
    ],
    industries: ["Construction", "Ceramic", "Detergent", "Textile", "Oil & Gas", "Paper", "Metal Processing", "Foundry", "Chemical"]
  },
  {
    id: "sodium-silicate-glass",
    title: "High-Purity Sodium Silicate Glass",
    shortTitle: "Sodium Silicate Glass",
    description: "A foundational material for liquid silicate production, our Sodium Silicate Glass delivers exceptional purity, stability, and consistency for advanced industrial use.",
    fullDescription: "Sodium Silicate Glass, also known as cullet, is the solid form of sodium silicate produced by fusing silica sand and soda ash in high-temperature furnaces. This glass-like material serves as the primary raw material for producing liquid sodium silicate and other silicate derivatives. Our silicate glass is manufactured under strict quality controls to ensure consistent chemical composition and purity.",
    image: "/product/Sodium Silicate Glass.png",
    applications: [
      "Raw Material for Liquid Silicates",
      "Glass & Ceramics Manufacturing",
      "Industrial Adhesive Formulations",
      "Refractory Production",
      "Foundry Binders",
      "Chemical Manufacturing"
    ],
    specifications: [
      { label: "Physical Form", value: "Solid glass lumps/granules" },
      { label: "Silica Content (SiO2)", value: "65-75%" },
      { label: "Sodium Oxide (Na2O)", value: "20-30%" },
      { label: "Ratio (SiO2:Na2O)", value: "2.0 to 3.3" },
      { label: "Appearance", value: "Transparent to translucent" },
      { label: "Particle Size", value: "As per requirement" }
    ],
    features: [
      "High purity levels",
      "Consistent chemical composition",
      "Easy to dissolve",
      "Long-term storage stability",
      "Versatile raw material",
      "Available in various ratios"
    ],
    industries: ["Chemical", "Glass", "Ceramic", "Foundry", "Construction"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};