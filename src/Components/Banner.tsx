import Image from 'next/image'
import React from 'react'
import dominik from '../../public/dominik.png'
import { FiArrowDownCircle } from 'react-icons/fi'
import { easeIn, easeOut, motion } from "framer-motion"

export default function Banner() {
    return (
        <div className="bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 h-[calc(100vh-16.5rem)] flex justify-around pt-12 px-96">
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
                <button className="bg-gray-700 py-2 px-3 text-white rounded-lg w-fit flex items-center animate-bounce hover:animate-none  ">
                    <FiArrowDownCircle className="inline-block mr-2" />
                    Erfahre Mehr
                </button>
            </div>

            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 100 }}
                transition={{ duration: 1, ease: easeOut}}
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >
                <Image
                    alt="Mountains"
                    src={dominik as HTMLImageElement}
                    fill
                    objectFit="contain"
                />
            </motion.div>
        </div>
    )
}
