import React, { useEffect, useState } from 'react'
import { Kachel } from './Kachel'
import { motion } from 'framer-motion'

export default function Wahl() {
    const listofWorkds = ['Online Nachhilfe', 'Abi-Coach']
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) =>
                currentIndex === listofWorkds.length - 1 ? 0 : currentIndex + 1
            )
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 flex flex-col gap-8 justify-around py-12 px-2">
            <div className="w-full h-full flex flex-col gap-4 px-4 md:px-24 xl:px-24 2xl:px-96">
                <div>
                    <span className="font-bold text-6xl text-white">|</span>
                    <span className="text-white text-2xl md:text-4xl xl:text-5xl">
                        Du hast die Wahl:{' '}
                    </span>
                    <motion.span
                        key={currentIndex}
                        exit={{ x: '100px', opacity: 0 }}
                        animate={{ x: 2, opacity: 1 }}
                        initial={{ x: '-100px', opacity: 0 }}
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                        }}
                        className="text-gray-700 text-2xl md:text-4xl xl:text-5xl"
                    >
                        {listofWorkds[currentIndex]}
                    </motion.span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:px-24 2xl:px-96 gap-8 w-full">
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
    )
}

