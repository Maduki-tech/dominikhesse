import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Logo_Nachhilfe_Hesse.svg';

export default function Navbar() {
    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between bg-stone-600 p-6">
                <div className="mr-6 flex flex-shrink-0 items-center text-white">
                    <span className="text-md font-thin tracking-tight">
                        Nachhilfe in{' '}
                        <span className="font-semibold">Mathematik</span>,{' '}
                        <span className="font-semibold">Informatik</span> &{' '}
                        <span className="font-semibold">Wirtschaft</span>
                    </span>
                </div>
                <div className="flex flex-wrap items-center justify-center text-white">
                    {/* TODO: ADD ICONS */}
                    +49176/44469647 | info@dominikhesse.de | Mitglieder-Login
                </div>
            </div>

            <div className='p-6 flex items-center justify-around'>
                <Image
                    src={logo as HTMLImageElement}
                    alt="Picture of the author"
                    width={300}
                />

                <div className="flex gap-4 text-lg font-semibold">
                    <Link href="/">Uber mich</Link>

                    <Link href="/">Testimonials</Link>

                    <Link href="/">Gratis testen</Link>
                </div>

                {/* TODO: Add Hover and ICONS */}
                <div className="flex gap-4">
                    <button className='px-3 py-2 rounded-lg bg-gray-700 text-white'>Online-Nachhilfe</button>
                    <button className='px-3 py-2 rounded-lg bg-green-500 text-white'>Mathe Abi-Coach</button>
                </div>
            </div>
        </nav>
    )
}
