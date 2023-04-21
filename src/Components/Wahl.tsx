import React from 'react'
import { Kachel } from './Kachel'

export default function Wahl() {
    return (
        <div className="relative">
            <div className="bg-gradient-to-br inset-0 from-lime-500 via-lime-600 to-lime-700 h-[calc(100vh-32rem)] flex justify-around pt-12 absolute">

            <div className=" w-full h-full pt-12 flex flex-col gap-4 z-50 absolute text-center">
                <div>
                    <span className="font-bold text-6xl text-white">|</span>
                    <span className="text-white text-5xl">Du hast die Wahl: </span>

                    <span className='text-gray-700 text-5xl'>Abi-Coach</span>
                </div>
            </div>

            <div className='flex px-96 gap-8 absolute w-full h-full z-50 -bottom-60'>
                <Kachel
                    title="Online Nachhilfe"
                    text="Entscheide dich zwischen einer Nachhilfe-Stunde und Nachhilfe im Abo."
                    button={true}
                />

                <Kachel
                    title="Mathe Abi-Coach Vorbereitungskurse"
                    text="Lernen die wichtigsten Mathe-Skills für deine Abschlussprüfung."
                    button={true}
                />


            </div>
            </div>
        </div>
    )
}
