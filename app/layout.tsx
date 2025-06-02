import './globals.css'
import Header from './Header'
import Footer from './Footer'

export const metadata = {
  title: 'Rümpelschmiede - Professionelle Entrümpelung',
  description: 'Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung Deutschlandweit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
