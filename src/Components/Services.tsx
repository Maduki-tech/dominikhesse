import React from 'react'

export default function Services() {
    return (
        <section className="bg-gray-300 mt-32 flex flex-col items-center justify-center">
            <h5 className="text-green-500 ">{'///'} Leistung | Service</h5>

            <h1 className="text-4xl text-gray-600">Warum Nachhilfe Heße? </h1>
            <div className="flex gap-4 px-72">
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

interface KachelProps {
    title: string
    text: string
}

function Kachel({ title, text }: KachelProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg px-20 py-8 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-32 h-32 bg-green-500 rounded-full"></div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <hr className="w-full text-gray-600 border-t-2" />
            <p className="text-gray-600 text-xl">{text}</p>
        </div>
    )
}
