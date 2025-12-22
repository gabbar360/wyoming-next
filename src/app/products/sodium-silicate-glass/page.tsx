import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function SodiumSilicateGlassPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section 
        className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 pt-24 md:pt-32 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <nav className="text-sm mb-4 opacity-90">
                Home → Products → Sodium Silicate Glass (Lumps/Cullet)
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sodium Silicate Glass (Lumps/Cullet)
              </h1>
            </div>
            <div className="flex justify-end">
              <div className="bg-white/10 rounded-full p-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">WCD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery & Info */}
      <section 
        className="py-16 bg-secondary/30 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 mb-6">
                <img 
                  src="/product/Sodium Silicate Glass.png" 
                  alt="Sodium Silicate Glass Lumps/Cullet"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Chemical Identifiers Table */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-3 text-left">Parameter</th>
                      <th className="p-3 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">Chemical Name</td>
                      <td className="p-3">Sodium Silicate Glass</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">CAS No</td>
                      <td className="p-3">1344-09-8, 1069885</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">Chemical Formula</td>
                      <td className="p-3">Na₂O·SiO₃</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">EINECS Number</td>
                      <td className="p-3">231-130-8</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">HSN Code</td>
                      <td className="p-3">28391900</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">MDL Number</td>
                      <td className="p-3">MFCD00003492</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium bg-gray-50">IUPAC Name</td>
                      <td className="p-3">Disodium; dioxido(oxo)silane</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">SMILES</td>
                      <td className="p-3">[O-][Si](=O)[O-].[Na+].[Na+]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sodium Silicate Glass (Lumps/Cullet)</h2>
                <p className="text-gray-600 mb-6">
                  Furnace Process: Silicon dioxide (silica sand) is fused with sodium carbonate (soda ash) in a furnace. 
                  This process allows for ratios of silica (SiO₂) to Na₂O from 2.0 to 3.4. Glass briquettes (also called lumps) are produced, which can be sold.
                </p>

                {/* Technical Datasheet */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    📋 Technical Datasheet
                  </h3>
                  <div className="space-y-2">
                    {[
                      "TDS Sodium Silicate Glass 22 Alkali",
                      "TDS Sodium Silicate Glass 2.2R", 
                      "TDS Sodium Silicate Glass 2.3R",
                      "TDS Sodium Silicate Glass 2.4R",
                      "TDS Sodium Silicate Glass 2.5R",
                      "TDS Sodium Silicate Glass 3.2R"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                        <span className="text-sm text-gray-700">{item}</span>
                        <Download className="w-4 h-4 text-red-600" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Datasheet */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    🛡️ Safety Datasheet
                  </h3>
                  <div className="bg-gray-50 p-3 rounded flex items-center justify-between">
                    <span className="text-sm text-gray-700">SDS Sodium Silicate Glass (Lumps/Cullet)</span>
                    <Download className="w-4 h-4 text-red-600" />
                  </div>
                </div>

                {/* Customized Silicates */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Customized Silicates</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Can't find what you're looking for? We're happy to work with you to adjust our products to fit your specific needs.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Get in Touch →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Identifiers */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Chemical Identifiers</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Parameter</th>
                  <th className="p-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Chemical Name</td>
                  <td className="p-4">Sodium Silicate Glass</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">CAS No</td>
                  <td className="p-4">1344-09-8, 1069885</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Chemical Formula</td>
                  <td className="p-4">Na₂O·SiO₃</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">EINECS Number</td>
                  <td className="p-4">231-130-8</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">HSN Code</td>
                  <td className="p-4">28391900</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">MDL Number</td>
                  <td className="p-4">MFCD00003492</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">IUPAC Name</td>
                  <td className="p-4">Disodium; dioxido(oxo)silane</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">SMILES</td>
                  <td className="p-4">[O-][Si](=O)[O-].[Na+].[Na+]</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50">Transport Information</td>
                  <td className="p-4">NONH for all modes of transport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Synonyms */}
      <section 
        className="py-16 bg-secondary/30 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Synonyms</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Sr. No.</th>
                  <th className="p-4 text-left">Synonym Names</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">1</td>
                  <td className="p-4">Sodium Disilicate Glass, Sodium Trisilicate Glass, Sodium water Glass</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">2</td>
                  <td className="p-4">Silicic Acid Sodium Salt, Sodium Siliconate, Hydrous Sodium Silicate Sodium Silicate, Disodium Oxosilanediol</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">3</td>
                  <td className="p-4">Sodium Polysilicate, Sodium Sesquisilicate</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50 text-center">4</td>
                  <td className="p-4">Disodium Metasilicate Disodium Silicate, Sodium Silicon Oxide, Disodium Monosilicate Hydrate, Sodium Oxosilanediolate, Sodium Siliconate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Properties Table - Low Modulus */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sodium Silicate Glass (Lumps/Cullet) Properties - Low Modulus</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Parameter</th>
                  <th className="p-4 text-center">Unit</th>
                  <th className="p-4 text-center">I (Alkaline)</th>
                  <th className="p-4 text-center">II (Alkaline)</th>
                  <th className="p-4 text-center">III (Alkaline)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Appearance</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">Clear Lumps with light blue color</td>
                  <td className="p-4 text-center">Clear Lumps with light blue color</td>
                  <td className="p-4 text-center">Clear Lumps with light blue color</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Weight Ratio</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">2.20 ± 0.10</td>
                  <td className="p-4 text-center">2.30 ± 0.10</td>
                  <td className="p-4 text-center">1.55 ± 0.10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Molar Ratio</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">2.27 ± 0.10</td>
                  <td className="p-4 text-center">2.37 ± 0.10</td>
                  <td className="p-4 text-center">1.60 ± 0.10</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Na₂O Content</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">29 - 31</td>
                  <td className="p-4 text-center">29 - 30</td>
                  <td className="p-4 text-center">38 - 40</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">SiO₂ Content</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">66 - 70</td>
                  <td className="p-4 text-center">68 - 70</td>
                  <td className="p-4 text-center">60 - 62</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Total Dissolved Solid</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">99.5 Min</td>
                  <td className="p-4 text-center">99.5 Min</td>
                  <td className="p-4 text-center">99.5 Min</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">pH</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">11 - 12</td>
                  <td className="p-4 text-center">11 - 12</td>
                  <td className="p-4 text-center">11 - 12</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Insoluble</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">0.5 Max</td>
                  <td className="p-4 text-center">0.5 Max</td>
                  <td className="p-4 text-center">0.5 Max</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Properties Table - High Modulus */}
      <section 
        className="py-16 bg-secondary/30 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sodium Silicate Glass (Lumps/Cullet) Properties - High Modulus</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Parameter</th>
                  <th className="p-4 text-center">Unit</th>
                  <th className="p-4 text-center">IV (Neutral)</th>
                  <th className="p-4 text-center">V (Neutral)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Appearance</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">Clear Lumps with light blue color</td>
                  <td className="p-4 text-center">Clear Lumps with light blue color</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Weight Ratio</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">3.20 ± 0.10</td>
                  <td className="p-4 text-center">3.30 ± 0.10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Molar Ratio</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">3.30 ± 0.10</td>
                  <td className="p-4 text-center">3.40 ± 0.10</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Na₂O Content</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">23.5 - 24.5</td>
                  <td className="p-4 text-center">22.50 - 23.50</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">SiO₂ Content</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">75.5 - 76.50</td>
                  <td className="p-4 text-center">76 - 77</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Total Dissolved Solid</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">99.00 Min</td>
                  <td className="p-4 text-center">99.00 Min</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">pH</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">10 - 11</td>
                  <td className="p-4 text-center">10 - 11</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Insoluble</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">1.0 Max</td>
                  <td className="p-4 text-center">1.0 Max</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Main Applications */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Main Applications</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Sr. No.</th>
                  <th className="p-4 text-left">Application Areas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">1</td>
                  <td className="p-4">Used in detergents and cleaning compounds as a builder, dispersant, and processing aid for improved cleaning efficiency.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">2</td>
                  <td className="p-4">Applied in paperboard production and construction materials as a strengthening, binding, and surface treatment agent.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">3</td>
                  <td className="p-4">Utilized in ceramics and metal extraction or refining processes for its fluxing, binding, and purifying properties.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">4</td>
                  <td className="p-4">Used in molding and core making to enhance sand binding strength and dimensional stability.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">5</td>
                  <td className="p-4">Employed in petroleum production and refining for drilling fluids, catalyst supports, and corrosion control.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">6</td>
                  <td className="p-4">Applied in pulp and paper processing as a bleaching, coating, and deinking aid.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">7</td>
                  <td className="p-4">Used in textile manufacturing for fiber treatment, dye fixation, and fabric finishing.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">8</td>
                  <td className="p-4">Utilized in paints and coatings as a pigment dispersant, binder component, and biocide stabilizer.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">9</td>
                  <td className="p-4">Applied in adhesives and glues as a reinforcing and bonding additive.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50 text-center">10</td>
                  <td className="p-4">Used in catalysts, silica gels, detergents, bleaching agents, ore treatments, foundry molds, drilling fluids, waterproof cements, and fireproofing compounds for enhanced stability, strength, and performance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Health & Safety Information */}
      <section 
        className="py-16 bg-secondary/30 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sodium Silicate Glass (Lumps/Cullet) – Health & Safety Information</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Parameter</th>
                  <th className="p-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Signal Word</td>
                  <td className="p-4">Warning</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Hazard Statements</td>
                  <td className="p-4">H315–H319–H335</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Precautionary Statements</td>
                  <td className="p-4">P261–P280–P305+P351+P338–P321–P405</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Hazard Codes</td>
                  <td className="p-4">Xi</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Safety Statements</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Transport Information</td>
                  <td className="p-4">NONH for all modes of transport</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50">GHS Pictogram</td>
                  <td className="p-4">GHS Exclamation Pictogram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testing Facility */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Testing Facility</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Testing Parameter</th>
                  <th className="p-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Testing Standards</td>
                  <td className="p-4">Bureau of Indian Standards (BIS)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Laboratory Type</td>
                  <td className="p-4">In-house Laboratory</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Instrument Calibration</td>
                  <td className="p-4">Regularly Calibrated</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Quality Certification</td>
                  <td className="p-4">ISO 9001:2015 Certified</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium bg-gray-50">Laboratory Accreditation</td>
                  <td className="p-4">NABL Certified Laboratory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600">
              All the parameters are tested in our <strong>in-house laboratory</strong> using processes issued by the <strong>Bureau of Indian Standards (BIS)</strong>. 
              The instruments used in the testing process are regularly calibrated. 
              All our products are approved, and we are an <strong>ISO 9001 2015 company</strong> and <strong>NABL Certified</strong> Laboratory.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}