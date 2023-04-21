import React from 'react'
import { Kachel } from './Kachel'

export default function Services() {
    return (
        <section className="bg-gray-300 mt-32 flex flex-col items-center justify-center gap-8 py-28">
            <h5 className="text-green-500 text-xl">
                {'///'} Leistung | Service
            </h5>

            <h1 className="text-4xl text-gray-600">Warum Nachhilfe Heße? </h1>
            <div className="flex gap-8 px-96">
                <Kachel
                    title="Optimal vorbereitet"
                    text="Wir erstellen dir individ. Lernmaterialien für deine nächsten Klausuren, damit du optimal vorbereitet bist."
                />

                <Kachel
                    title="Digitale Unterlagen"
                    text="Deine Unterlagen stehen dir Online zur Verfügung, damit du die Möglichkeit hast von überall darauf zuzugreifen."
                />

                <Kachel
                    title="Online & Offline"
                    text="Lerne mit der E-Plattform, nehme an Online-Nachhilfe-Stunden oder an einem der Veranstaltungen teil."
                />
            </div>
        </section>
    )
}
