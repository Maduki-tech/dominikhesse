import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Logo_Nachhilfe_Hesse.svg'
import {FiArrowRightCircle} from 'react-icons/fi'

export default function Navbar() {
    return (
        <nav className="border-b ">
            <div className="flex flex-wrap items-center justify-between bg-stone-600 p-6 px-96">
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

            <div className="py-6 flex items-center justify-around px-96">
            <Link href="/">
                <Image
                    src={logo as HTMLImageElement}
                    alt="Picture of the Logo"
                    width={300}
                />
            </Link>

                <div className="flex gap-4 text-lg font-semibold">
                    <Link href="/#aboutMe" scroll={false}>Über mich</Link>

                    <Link href="/#Testimonials">Testimonials</Link>
                </div>

                {/* TODO: Add Hover and ICONS */}
                <div className="flex gap-4">
                    <Link
                        href={'/Online-Nachhilfe'}
                        className="px-3 py-2 rounded-lg bg-gray-700 text-white flex items-center"
                    >
                        Online-Nachhilfe
                        <FiArrowRightCircle className="inline-block ml-2" />
                    </Link>
                    <Link href={'https://matheabicoach.de/'} className="px-3 py-2 rounded-lg bg-green-500 text-white flex items-center">
                        Mathe Abi-Coach
                        <FiArrowRightCircle className="inline-block ml-2" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
