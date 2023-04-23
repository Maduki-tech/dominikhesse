import Link from 'next/link'
import React from 'react'
import { Url } from 'url'

export default function Onlinenachhilfe() {
    return (
        <div>
            <section className="md:px-52 xl:px-96">
                <div className="py-8">
                    <h1 className=" text-5xl text-green-500">
                        <span className="text-stone-500">Online</span>Nachhilfe
                    </h1>
                    <p className="text-2xl text-stone-500 w-1/2 pt-4">
                        Entscheide dich zwischen einer einmaligen
                        Online-Nachhilfe-Stunde und der Nachhilfe im Abo
                    </p>
                </div>

                <div className="grid grid-cols-2  gap-8 py-8">
                    <PriceElement
                        title="Einzel-Online-Nachhilfe"
                        preis={30}
                        preisDauer="pro 45 Minuten"
                        buttonHref="https://api.whatsapp.com/send/?phone=4917644469647&text=Hey+Dominik%2C+ich+interesiere+mich+f%C3%BCr+eine+45-min%C3%BCtige+Nachhilfe-Stunde+f%C3%BCr+30%E2%82%AC.+Melde+dich+doch+gerne+einmal+bei+mir%21+&type=phone_number&app_absent=0"
                        leistungen={[
                            'Gratis-Bonus: Aufzeichnung',
                            'Optional: angepasste Lernmaterialien (5€ Aufpreis)',
                        ]}
                    />
                    <PriceElement
                        title="Nachhilfe-Abo"
                        preis={99}
                        preisDauer="pro Monat"
                        buttonHref={'https://api.whatsapp.com/send/?phone=4917644469647&text=Hey+Dominik%2C+ich+interesiere+mich+f%C3%BCr+das+Nachhilfe-Abo+f%C3%BCr+99%E2%82%AC+pro+Monat.+Melde+dich+doch+gerne+einmal+bei+mir%21+&type=phone_number&app_absent=0'}
                        leistungen={[
                            'bis zu vier Unterrichts-Stunden pro Monat möglich',
                            'Gratis-Bonus: Aufzeichnung',
                            'Inklusive: angepasste Lernmaterialien',
                        ]}
                    />
                </div>
                <div className="py-4">
                    <span className="text-green-500 font-semibold text-xl">
                        {'///'} Hinweis: Vorrausetzung für die Online-Nachhilfe
                    </span>
                    <p className="text-lg text-stone-500">
                        Eine stabile Internetverbindung und ein PC, Tablet oder
                        Smartphone mit Kamera/Webcam und Mikrofon
                    </p>
                </div>
            </section>
        </div>
    )
}


interface priceProps {
    title: string
    preis: number
    buttonHref: string | Url
    preisDauer: string
    leistungen: string[]
}

function PriceElement({ title, preis, buttonHref, preisDauer, leistungen }: priceProps) {
    return (
        <div className="bg-gray-100 rounded-md overflow-hidden ">
            <div className="w-full py-8 text-white bg-green-500 text-center text-3xl font-semibold">
                <h1>{title}</h1>
            </div>
            <div className="flex flex-col items-center p-8">
                <div>
                    <span className="text-3xl">{preis}</span>
                    <span className="text-xl">€</span>
                </div>
                <div>{preisDauer}</div>
            </div>

            <ul className="p-8 text-stone-500 text-center text-lg h-52">
                {leistungen.map((leistung, idx) =>
                    idx === 1 ? (
                        <li
                            key={idx}
                            className="border-y border-dotted border-spacing-y-2.5 border-green-400 py-2"
                        >
                            {leistung}
                        </li>
                    ) : (
                        <li key={idx} className="py-2">
                            {leistung}
                        </li>
                    )
                )}
            </ul>
            <div className="flex justify-center items-end py-4">
                <Link
                href={buttonHref}
                    className={`${
                        leistungen.length < 3 ? 'bg-green-500' : 'bg-gray-500'
                    } px-2 py-3 text-center rounded-lg text-white font-semibold`}
                >
                    Jetzt Buchen! (Hier Klicken!)
                </Link>
            </div>
        </div>
    )
}
