import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function SodiumSilicateLiquidPage() {
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
                Home → Products → Sodium Silicate Liquid
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sodium Silicate Liquid
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
      <section className="section-padding bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Product Gallery */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6">
                <img 
                  src="/product/Sodium Silicate Liquid.png" 
                  alt="Sodium Silicate Liquid"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Chemical Identifiers Table - Mobile Optimized */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="p-2 sm:p-3 text-left">Parameter</th>
                        <th className="p-2 sm:p-3 text-left">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">Chemical Name</td>
                        <td className="p-2 sm:p-3">Sodium Silicate Liquid</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">CAS No</td>
                        <td className="p-2 sm:p-3">1344-09-8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">Chemical Formula</td>
                        <td className="p-2 sm:p-3">Na₂O·SiO₃</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">EINECS Number</td>
                        <td className="p-2 sm:p-3">215-687-4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">HSN Code</td>
                        <td className="p-2 sm:p-3">28391900</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">MDL Number</td>
                        <td className="p-2 sm:p-3">MFCD00003492</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">IUPAC Name</td>
                        <td className="p-2 sm:p-3 break-all">disodium; dioxido(oxo)silane; hydrate</td>
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 font-medium bg-gray-50">SMILES</td>
                        <td className="p-2 sm:p-3 break-all">[Na+].[Na+].[O-][Si]([O-])=O.O</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <h2 className="responsive-subheading font-bold text-gray-800 mb-4">Sodium Silicate Liquid</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 responsive-text leading-relaxed">
                  We offer Sodium Silicate in liquid form for specific industrial applications where the liquid property of the chemical is highly effective. We manufacture high-quality silicates that are produced to match our customer's expectations. For special requirements, we customize the liquid so that it can be integrated with the highest efficacy into the products of our clients.
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 responsive-text leading-relaxed">
                  Sodium Silicate Liquid is produced by dissolving silicate solids with water or by a hydrothermal process, which is carried out by reacting caustic lye and fine crystalline silica in autoclaves under intense pressure.
                </p>

                {/* Technical Datasheet */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    📋 Technical Datasheet
                  </h3>
                  <div className="space-y-2">
                    {[
                      "PDF Sodium Silicate Liquid Low Modulus I",
                      "PDF Sodium Silicate Liquid Low Modulus II", 
                      "PDF Sodium Silicate Liquid Low Modulus III",
                      "PDF Sodium Silicate Liquid High Modulus IV",
                      "PDF Sodium Silicate Liquid High Modulus V",
                      "PDF Sodium Silicate Liquid High Modulus VI"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded">
                        <span className="text-xs sm:text-sm text-gray-700 pr-2">{item}</span>
                        <Download className="w-4 h-4 text-red-600 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Datasheet */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    🛡️ Safety Datasheet
                  </h3>
                  <div className="bg-gray-50 p-2 sm:p-3 rounded flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-700">SDS Sodium Silicate Liquid</span>
                    <Download className="w-4 h-4 text-red-600" />
                  </div>
                </div>

                {/* Customized Silicates */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Customized Silicates</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    Don't find what you're looking for? We're happy to customize Sodium Silicate Liquid as per your requirements.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
                    Let's Discuss →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Identifiers */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Chemical Identifiers</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Parameter</th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">Chemical Name</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">Sodium Silicate Liquid</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">CAS No</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">1344-09-8</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">Chemical Formula</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">Na₂O·SiO₃</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">EINECS Number</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">215-687-4</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">HSN Code</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">28391900</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">MDL Number</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">MFCD00003492</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">IUPAC Name</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base break-all">disodium; dioxido(oxo)silane; hydrate</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">SMILES</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base break-all">[Na+].[Na+].[O-][Si]([O-])=O.O</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">Transport Information</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">Non-hazardous for all modes of transport</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">GHS Pictogram</td>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">GHS Exclamation Pictogram</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Synonyms */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Synonyms</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Sr. No.</th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Synonym Names</th>
                  </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                  <td className="p-3 sm:p-4 font-medium bg-gray-50 text-center text-sm sm:text-base">1</td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">Sodium silicate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">2</td>
                  <td className="p-4">Disodium oxosilanediolate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">3</td>
                  <td className="p-4">Sodium siliconate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">4</td>
                  <td className="p-4">Sodium polysilicate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">5</td>
                  <td className="p-4">Sodium sesquisilicate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">6</td>
                  <td className="p-4">Disodium metasilicate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">7</td>
                  <td className="p-4">Disodium silicate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">8</td>
                  <td className="p-4">Sodium silicon oxide hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">9</td>
                  <td className="p-4">Disodium monosilicate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">10</td>
                  <td className="p-4">Sodium oxosilanediolate hydrate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">11</td>
                  <td className="p-4">Sodium trisilicate trihydrate</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-medium bg-gray-50 text-center text-sm sm:text-base">12</td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">Sodium water glass</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Table - Low Modulus */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Sodium Silicate Liquid Properties - Low Modulus</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-2 sm:p-3 lg:p-4 text-left text-xs sm:text-sm lg:text-base">Parameter</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">Unit</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">I (Alkaline) 52° Baume</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">II (Alkaline) 56° Baume</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">III (Alkaline) 62° Baume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Appearance</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">-</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">Colorless Liquid</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">Colorless Liquid</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">Colorless Liquid</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Weight Ratio</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">-</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">2.20 ± 0.10</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">2.20 ± 0.10</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.65 ± 0.10</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Molar Ratio</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">-</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">2.27 ± 0.10</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">2.27 ± 0.10</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.70 ± 0.10</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Na₂O Content</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">%</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">14.5 - 15.5</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">16.5 - 17.5</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">21 - 22</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">SiO₂ Content</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">%</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">32 - 35</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">35 - 37</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">33 - 36</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Total Dissolved Solid</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">%</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">46 - 52</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">52 - 54</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">55 - 58</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">pH</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">-</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">11 - 12</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">11 - 12</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">11 - 12</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Baume (Degree)</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">°Be</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">52 - 53</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">56 - 57</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">61 - 62</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Specific Gravity</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">-</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.560 - 1.600</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.640 - 1.660</td>
                    <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.640 - 1.660</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Table - High Modulus */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Sodium Silicate Liquid Properties - High Modulus</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-2 sm:p-3 lg:p-4 text-left text-xs sm:text-sm lg:text-base">Parameter</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">Unit</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">IV (Neutral) 30° Baume</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">V (Neutral) 35° Baume</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">VI (Neutral) 38° Baume</th>
                    <th className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">VII (Neutral) 40° Baume</th>
                  </tr>
                </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Appearance</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">Colorless Liquid</td>
                  <td className="p-4 text-center">Colorless Liquid</td>
                  <td className="p-4 text-center">Colorless Liquid</td>
                  <td className="p-4 text-center">Colorless Liquid</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Weight Ratio</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">3.20 ± 0.10</td>
                  <td className="p-4 text-center">3.20 ± 0.10</td>
                  <td className="p-4 text-center">3.20 ± 0.10</td>
                  <td className="p-4 text-center">3.20 ± 0.10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Molar Ratio</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">3.30 ± 0.10</td>
                  <td className="p-4 text-center">3.30 ± 0.10</td>
                  <td className="p-4 text-center">3.30 ± 0.10</td>
                  <td className="p-4 text-center">3.30 ± 0.10</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Na₂O Content</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">6.0 - 7.1</td>
                  <td className="p-4 text-center">7.5 - 8.0</td>
                  <td className="p-4 text-center">8.25 - 8.75</td>
                  <td className="p-4 text-center">8.75 - 9.50</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">SiO₂ Content</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">20 - 24</td>
                  <td className="p-4 text-center">24 - 27</td>
                  <td className="p-4 text-center">27.5 - 28.5</td>
                  <td className="p-4 text-center">28.5 - 30.5</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Total Dissolved Solid</td>
                  <td className="p-4 text-center">%</td>
                  <td className="p-4 text-center">26 - 31</td>
                  <td className="p-4 text-center">32 - 35</td>
                  <td className="p-4 text-center">35.5 - 37</td>
                  <td className="p-4 text-center">37 - 40</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">pH</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">10 - 11</td>
                  <td className="p-4 text-center">10 - 11</td>
                  <td className="p-4 text-center">10 - 11</td>
                  <td className="p-4 text-center">10 - 11</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Baume (Degree)</td>
                  <td className="p-4 text-center">°Be</td>
                  <td className="p-4 text-center">30 - 32</td>
                  <td className="p-4 text-center">35 - 36</td>
                  <td className="p-4 text-center">38</td>
                  <td className="p-4 text-center">40</td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 lg:p-4 font-medium text-xs sm:text-sm lg:text-base">Specific Gravity</td>
                  <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">-</td>
                  <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.250 - 1.300</td>
                  <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.330 - 1.360</td>
                  <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.370 - 1.380</td>
                  <td className="p-2 sm:p-3 lg:p-4 text-center text-xs sm:text-sm lg:text-base">1.380 - 1.400</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Main Applications */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Main Applications</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Sr. No.</th>
                  <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Application Areas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">1</td>
                  <td className="p-4">Widely used in the mechanical industry for casting, grinding wheel manufacturing, and as a metal corrosion inhibitor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">2</td>
                  <td className="p-4">Applied in the construction industry for manufacturing quick-drying cement, acid-resistant cement, waterproofing oil, soil curing agents, and refractory materials</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">3</td>
                  <td className="p-4">Used in agriculture for producing silica-based fertilizers</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">4</td>
                  <td className="p-4">Acts as a high-viscosity adhesive for cardboard, corrugated boxes, cartons, and paper tubes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">5</td>
                  <td className="p-4">Used in the petroleum industry to manufacture silica-alumina catalysts for petroleum catalysis and cracking</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">6</td>
                  <td className="p-4">In the chemical industry, it is used to produce silica, zeolite molecular sieves, precipitated silica, and various silicates. It serves as a raw material in detergents, soaps, and cleaning compounds</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">7</td>
                  <td className="p-4">In the textile industry, used as a dyeing aid, bleaching agent, and sizing material</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">8</td>
                  <td className="p-4">Extensively used in machinery applications such as precision casting, grinding wheel production, and as a metal preservative</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">9</td>
                  <td className="p-4">Applied in mining for mineral processing, waterproofing, and plugging operations</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">10</td>
                  <td className="p-4">Imparts fireproof properties to wood when treated with sodium silicate solution</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">11</td>
                  <td className="p-4">Used in detergents and cleaning compounds as a builder, softener, and water treatment aid</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">12</td>
                  <td className="p-4">Integral in paperboard, ceramics, and construction materials manufacturing</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">13</td>
                  <td className="p-4">Utilized in ceramics and refractory applications for enhanced strength and bonding</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">14</td>
                  <td className="p-4">Essential in pulp & paper processing, adhesives, and surface coatings</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50 text-center">15</td>
                  <td className="p-4">Used in paint and pigment production as a binder and biocide component</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-medium bg-gray-50 text-center text-sm sm:text-base">16</td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">Involved in manufacturing catalysts, silica gels, bleaching agents, and in foundry molds, ore treatments, drilling fluids, and waterproof cements</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety Information */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Sodium Silicate Liquid – Health & Safety Information</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Parameter</th>
                  <th className="p-3 sm:p-4 text-left text-sm sm:text-base">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Signal Word</td>
                  <td className="p-4">Warning</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Hazard Statements</td>
                  <td className="p-4">H315-H319-H335</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Precautionary Statements</td>
                  <td className="p-4">P261-P280-P305+P351+P338-P321-P405</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Hazard Codes</td>
                  <td className="p-4">Xi</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Risk Codes</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium bg-gray-50">Safety Statements</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">Transport Information</td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">NONH for all modes of transport</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Facility */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4">
          <h2 className="responsive-subheading font-bold text-gray-800 mb-6 sm:mb-8">Testing Facility</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
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
                  <td className="p-3 sm:p-4 font-medium bg-gray-50 text-sm sm:text-base">Laboratory Accreditation</td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base">NABL Certified Laboratory</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote */}
      <section 
        className="py-16 bg-gradient-to-r from-secondary/50 to-secondary/30 relative"
        style={{
          backgroundImage: 'url("/background-image.png")',
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      >
        
      </section>

      <Footer />
    </div>
  );
}