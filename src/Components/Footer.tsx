import Image from 'next/image'
import React from 'react'
import logo from '../../public/Logo_Nachhilfe_Hesse.svg'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <div className="bg-stone-600 w-full grid px-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:px-24 2xl:px-96 justify-items-center py-8 gap-4">
                <div>
                    <Image
                        src={logo as HTMLImageElement}
                        width={300}
                        alt={'tets'}
                    />
                    <div className="text-white">
                        <span className="font-semibold">Nachhilfe Heße:</span>
                        Deine optimale Prüfungsvorbereitung in Mathematik,
                        Informatik & Wirtschaft.
                    </div>
                </div>
                <div className="text-white hidden md:flex flex-col gap-2">
                    <span className="font-bold">Kontaktdaten</span>
                    <div>
                        <span>Tel.</span> 0176 / 44469647
                    </div>

                    <div>
                        <span>Mail.</span>{' '}
                        <a href="mailto:info@dominikhesse.de">
                            info@dominikhesse.de
                        </a>
                    </div>
                </div>
                <div className="text-white hidden md:flex flex-col gap-2">
                    <span className="font-bold">Deine Vorteile</span>
                    <ul className=" list-inside">
                        <li>Optimal vorbereitet</li>
                        <li>individ. Lernmaterialien</li>
                        <li>Digitale Unterlagen</li>
                        <li>Lernen mit Abstand</li>
                        <li>persönlicher Kontakt</li>
                    </ul>
                </div>

                <div className="text-white hidden md:flex flex-col gap-2">
                    <span className="font-bold">Schnellmenü</span>

                    <ul>
                        <li>Referenzen</li>
                        <li>Gratis Testen</li>
                        <li>Mathe Abi-Coach</li>
                        <li>Kurse & Preise</li>
                    </ul>
                </div>

                <div className="flex gap-8 pt-2">
                    <Link href={'https://www.facebook.com/NachhilfeHesse'}>
                        <FaFacebook className="w-8 h-8 " />
                    </Link>
                    <Link
                        href={
                            'https://www.instagram.com/nachhilfe_dominikhesse/?__coig_restricted=1'
                        }
                    >
                        <FaInstagram className="w-8 h-8 " />
                    </Link>
                    <Link
                        href={
                            'https://www.youtube.com/channel/UCiz6pL6XSgurzsRuIhqm8Jg'
                        }
                    >
                        <FaYoutube className="w-8 h-8 " />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 xl:px-96 py-8 place-items-center bg-stone-600 border-t border-white text-white gap-4">
                <div>@ 2023 - Nachhilfe Heße</div>
                <div>
                    <Link href={'/imprint'}>Impressum</Link> |{' '}
                    <Link href={'/privacy'}>Datenschutz</Link>
                </div>
                <div>
                    Made by{' '}
                    <Link
                        href={'https://www.davidschlueter.com/de'}
                        className="text-green-500"
                    >
                        David Schlueter
                    </Link>
                </div>
            </div>
        </div>
    )
}
