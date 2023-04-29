import React from 'react';
import { Kachel } from './Kachel';

export default function Services() {
    return (
        <section className="bg-gray-300 xl:mt-32 flex flex-col items-center justify-center gap-8 py-28">
            <h5 className="text-primary text-xl">
                {'///'} Leistung | Service
            </h5>

            <h1 className="text-4xl text-blackBG">Warum Nachhilfe Heße? </h1>
            <div className="flex flex-col md:grid md:grid-cols-3 xl:flex-row gap-8 px-4 md:px-8 xl:px-24 2xl:px-96">
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
    );
}

