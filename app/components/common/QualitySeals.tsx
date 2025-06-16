export default function QualitySeals() {
  return (
    <section className="py-16 bg-gray-100 border-t-4 border-[#C73E3A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
            Geprüfte Qualität & Zertifizierungen
          </h2>
          <p className="text-lg text-gray-700">
            Vertrauen Sie auf unsere zertifizierte Expertise und geprüfte Qualität
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Qualitätssiegel */}
          <div className="flex flex-col items-center">
            <img 
              src="/images/qualitaets-siegel.png" 
              alt="Rümpelschmiede Qualitätssiegel" 
              className="h-40 w-40 mb-4 drop-shadow-lg hover:scale-105 transition-transform"
            />
            <p className="text-sm text-gray-600 text-center max-w-[200px]">
              Geprüfte Qualität und professioneller Service
            </p>
          </div>

          {/* Datenschutzsiegel */}
          <div className="flex flex-col items-center">
            <img 
              src="/images/datenschutz-siegel.png" 
              alt="Rümpelschmiede Datenschutzverordnung Siegel" 
              className="h-40 w-40 mb-4 drop-shadow-lg hover:scale-105 transition-transform"
            />
            <p className="text-sm text-gray-600 text-center max-w-[200px]">
              DSGVO-konforme Datenverarbeitung garantiert
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700">
            Unsere Qualifikationen garantieren Ihnen professionellen Service auf höchstem Niveau
          </p>
        </div>
      </div>
    </section>
  );
}