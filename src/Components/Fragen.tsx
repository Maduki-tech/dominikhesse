import React from 'react'
import { Kachel } from './Kachel'

export default function Fragen() {
    return (
        <div className="grid grid-cols-2 px-96 gap-8 place-items-center bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 py-8">
            <div>
                <div className="flex-col flex text-white gap-8 w-3/4">
                    <span className="text-3xl">Hast du Fragen?</span>
                    <span className="text-xl font-thin">
                        Dann schreibe mir eine Nachricht über das
                        Kontaktformular und ich werde mich dann so schnell wie
                        möglich bei dir melden.
                    </span>

                    <button className="bg-gray-700 px-6 py-2 text-white rounded-lg w-fit">
                        Los Geht
                    </button>
                </div>
            </div>
            <div>
                <Kachel
                    title="Whatsapp Chat"
                    text="Du kannst mich auch über Whatsapp erreichen."
                    buttonHref='https://api.whatsapp.com/send?phone=4917644469647&text=Hey%20Dominik,%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Online-Nachhilfe.%20Melde%20dich%20doch%20gerne%20einmal%20bei%20mir!'
                    button={true}
                />
            </div>
        </div>
    )
}
