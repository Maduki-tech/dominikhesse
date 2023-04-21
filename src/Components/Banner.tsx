import Image from 'next/image'
import React from 'react'
import dominik from '../../public/dominik.png'

export default function Banner() {
    return (
        <div className="bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 h-[calc(100vh-16.5rem)] flex justify-around pt-12">
            <div className="w-1/3 h-full pt-32 flex flex-col gap-4">
                <div>
                    <span className="font-bold text-xl">|</span>{' '}
                    <span className="text-white text-lg">
                        Willkommen bei Nachhilfe Hesse
                    </span>
                </div>
                <p className="text-white text-4xl font-semibold">
                    Deine Optimale Vorbereitung fur die nachste Klausur
                </p>
                <p className="text-white ">
                    in den Fachern Mathematik, Informatik & Wirtschaft
                </p>
                <button className="bg-gray-700 py-2 px-3 text-white rounded-lg w-fit">
                    Erfahre Mehr
                </button>
            </div>

            <Image
                src={dominik as HTMLImageElement}
                alt="Picture of the author"
                width={450}
            />
        </div>
    )
}
