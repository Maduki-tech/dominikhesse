// pages/imprint.tsx
import React from 'react'
import Footer from '~/Components/Footer'
import Navbar from '~/Components/Navbar'
export default function Impressum() {
    return (
        <>
            <Navbar />
            <div className="xl:px-96 py-12">
                <h1 className="text-4xl font-semibold mb-4">Impressum</h1>
                <div className="leading-loose text-lg">
                    <h2 className="font-semibold">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Vorname Nachname
                        <br />
                        Straße und Hausnummer
                        <br />
                        PLZ Ort
                    </p>

                    <h2 className="font-semibold mt-6">Kontakt</h2>
                    <p>
                        Telefon: +49 176 44469647
                        <br />
                        E-Mail: info@dominikhesse.de
                    </p>

                    <h2 className="font-semibold mt-6">Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a
                        Umsatzsteuergesetz:
                        <br />
                        DE123456789
                    </p>

                    <h2 className="font-semibold mt-6">Haftungsausschluss</h2>
                    <h3 className="font-semibold">Haftung für Inhalte</h3>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                        eigene Inhalte auf diesen Seiten nach den allgemeinen
                        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                        als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine
                        rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                        von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unberührt. Eine diesbezügliche Haftung ist
                        jedoch erst ab dem Zeitpunkt der Kenntnis einer
                        konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                        von entsprechenden Rechtsverletzungen werden wir diese
                        Inhalte umgehend entfernen.
                    </p>
                    {/* You can add more sections related to the Impressum information here. */}
                    <h3 className="font-semibold">Haftung für Links</h3>
                    <p>
                        Unser Angebot enthält Links zu externen Websites
                        Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine
                        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten verantwortlich. Die verlinkten Seiten wurden zum
                        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                        überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                        Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten
                        Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend
                        entfernen.
                    </p>
                    <h3 className="font-semibold">Urheberrecht</h3>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den
                        privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um
                        einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Inhalte umgehend
                        entfernen.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
