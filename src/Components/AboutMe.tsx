import Image from 'next/image'
import React from 'react'
import dominik from '../../public/dominik_with_bg.jpg'
import { FaRocket } from 'react-icons/fa'

export default function AboutMe() {
    return (
        <div id='aboutMe' className="grid-cols-3 grid-rows-3 grid px-96 gap-2 py-12">

            <div className="col-span-1 row-span-3 rounded-md overflow-hidden"
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >
                <Image
                    alt="Mountains"
                    src={dominik as HTMLImageElement}
                    fill
                />
            </div>

            <div className="col-span-2 row-span-2 py-12 px-20 bg-gray-200 rounded-md">
                <h6 className="text-xl font-semibold text-green-500">
                    {'///'} Über mich
                </h6>
                <h1 className="text-xl font-semibold ">Hey, ich bin Dominik</h1>
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
            <div className="col-span-2 row-span-1 bg-lime-500 p-4 rounded-md flex flex-col gap-4">
                <div className="h-1/3 w-1/3">
                    <FaRocket className="w-12 h-12 text-white" />
                </div>
                <div>
                    <span className="text-white text-xl font-semibold">
                        Meine Mission
                    </span>

                    <p className="text-white">
                        Schülerinnen und Schüler interaktiv beim Lernen
                        unterstützen.
                    </p>
                </div>
            </div>
        </div>
    )
}
