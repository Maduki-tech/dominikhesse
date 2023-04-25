import Image from 'next/image'
import React from 'react'
import dominik from '../../public/dominik_with_bg.jpg'
import { FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <div
            id="aboutMe"
            className="grid grid-cols-1 xl:grid-cols-5 xl:grid-rows-3 px-4 md:px-8 xl:px-24 2xl:px-96 gap-2 py-12"
        >
            <div
                className="xl:col-span-2 xl:row-span-3 rounded-md overflow-hidden"
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >
                <Image
                    alt="Mountains"
                    src={dominik as HTMLImageElement}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>

            <div className="xl:col-span-3 xl:row-span-2 py-12 px-10 bg-gray-200 rounded-md">
                <h6 className="text-xl font-semibold text-green-500">
                    {'///'} Über mich
                </h6>
                <h1 className="text-xl font-semibold">Hey, ich bin Dominik</h1>
                <p className="text-lg">
                    96er-Baujahr und wohne in Mülheim an der Ruhr. Bereits
                    während meiner Abi-Zeit (2013-2016) habe ich meine ersten
                    Nachhilfeschüler betreut, teilweise bis zu sieben Schüler
                    zeitgleich. Seit 2016 arbeite ich in einem mittelständigen
                    IT-Dienstleistungs Unternehmen. Anfang 2019 habe ich meine
                    Ausbildung als Fachinformatiker Fachrichtung
                    Systemintegration erfolgreich abgeschlossen. Zu meinen
                    alltäglichen Aufgaben gehört das Betreuen und Administrieren
                    der Firewall-Infrastruktur. Aktuell studiere ich neben der
                    Arbeit Wirtschaftsinformatik. Meine Hobbys sind Crossfit und
                    Extremhindernisläufe (oder auch Obstacle Course Racing).
                </p>
            </div>
            <div className="xl:col-span-3 xl:row-span-1 bg-lime-500 p-4 rounded-md flex flex-col gap-4 group">
                <motion.div
                    className="h-1/3 w-1/3"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <FaRocket className="w-12 h-12 text-white" />
                </motion.div>
                <div>
                    <span className="text-white text-xl font-semibold group-hover:text-2xl transition-all duration-150">
                        Meine Mission
                    </span>

                    <p className="text-white group-hover:text-lg transition-all duration-150">
                        Schülerinnen und Schüler interaktiv beim Lernen
                        unterstützen.
                    </p>
                </div>
            </div>
        </div>
    )
}
