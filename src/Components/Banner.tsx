import Image from 'next/image';
import React from 'react';
import dominik from '../../public/dominik.png';
import { FiArrowDownCircle } from 'react-icons/fi';
import { easeOut, motion } from 'framer-motion';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 h-[calc(100vh-16.5rem)] flex flex-col md:flex-row justify-around items-center p-4 xl:pt-12 xl:px-96">
            <div className="w-full md:w-1/3 h-full flex flex-col gap-4">
                <div>
                    <span className="font-bold text-xl">|</span>{' '}
                    <span className="text-white text-lg">
                        Willkommen bei Nachhilfe Hesse
                    </span>
                </div>
                <p className="text-white text-4xl font-semibold text-center md:text-left">
                    Deine Optimale Vorbereitung fur die nachste Klausur
                </p>
                <p className="text-white text-center md:text-left">
                    in den Fachern Mathematik, Informatik & Wirtschaft
                </p>
                <Link
                    href={'/#aboutMe'}
                    scroll={false}
                    className="animate-bounce hover:animate-none px-3 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white flex items-center justify-center
                        w-fit hover:bg-gray-100 hover:border hover:border-black hover:text-green-500 self-center md:self-start"
                >
                    <FiArrowDownCircle className="inline-block mr-2" />
                    Erfahre Mehr
                </Link>
            </div>

            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 100 }}
                transition={{
                    x: { type: 'spring', stiffness: 50, damping: 10 },
                    duration: 0.5,
                    ease: easeOut,
                }}
                className='w-full hidden h-full md:flex flex-col justify-center items-center'
            >
                <Image
                    alt="Mountains"
                    src={dominik as HTMLImageElement}
                    fill
                    objectFit="contain"
                />
            </motion.div>
        </div>
    );
}

