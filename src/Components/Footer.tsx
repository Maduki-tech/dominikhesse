import Image from 'next/image'
import React from 'react'
import logo from '../../public/Logo_Nachhilfe_Hesse.svg'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className="bg-stone-600 w-screen grid grid-cols-4 px-96 place-items-center py-8">
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
                <div className="text-white flex flex-col gap-2">
                    <span>Kontaktdaten</span>
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
                <div className="text-white">
                    <span className="font-semibold">Deine Vorteile</span>
                    <ul>
                        <li>Optimal vorbereitet</li>
                        <li>individ. Lernmaterialien</li>
                        <li>Digitale Unterlagen</li>
                        <li>Lernen mit Abstand</li>
                        <li>persönlicher Kontakt</li>
                    </ul>
                </div>
                <div className="text-white">
                    <span className="font-semibold">Schnellmenü</span>

                    <ul>
                        <li>Referenzen</li>
                        <li>Gratis Testen</li>
                        <li>Mathe Abi-Coach</li>
                        <li>Kurse & Preise</li>
                    </ul>
                </div>

                <div className="flex gap-8">
                    <div className="w-8 h-8 bg-red-100"></div>
                    <div className="w-8 h-8 bg-red-100"></div>
                    <div className="w-8 h-8 bg-red-100"></div>
                </div>
            </div>
            <div className='grid grid-cols-3 px-96 py-8 place-items-center bg-stone-600 border-t border-white text-white'>
                <div>@ 2023 - Nachhilfe Heße</div>
                <div><Link href={'impressum'}>Impressum</Link> | <Link href={'datenschutz'}>Datenschutz</Link></div>
                <div>Made by <Link href={'https://www.davidschlueter.com/de'} className='text-green-500'>David Schlueter</Link></div>
            </div>
        </div>
    )
}
