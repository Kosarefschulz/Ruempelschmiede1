export default function DatenschutzPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                1. Datenschutz auf einen Blick
              </h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr 
                ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend 
                der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                3. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-semibold text-gray-800 mb-2">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h3>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <h3 className="font-semibold text-gray-800 mb-2">
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular 
                eingeben.
              </p>
              
              <h3 className="font-semibold text-gray-800 mb-2">
                Wofür nutzen wir Ihre Daten?
              </h3>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der 
                Website zu gewährleisten. Andere Daten können zur Analyse Ihres 
                Nutzerverhaltens verwendet werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                4. Analyse-Tools und Tools von Drittanbietern
              </h2>
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet 
                werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                5. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}