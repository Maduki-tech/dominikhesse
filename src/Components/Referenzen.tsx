import Image from 'next/image'
import React from 'react'

import gesu from '../../public/Companys/Gesu.png'
import uni_essen from '../../public/Companys/Uni_Essen.png'
import bildungscampus from '../../public/Companys/Bildungscampus.png'

export default function Referenzen() {
    return (
        <div className="w-full bg-gray-200 flex flex-col justify-center items-center gap-8 py-8">
            <div className="text-2xl md:text-3xl">
                <span className="text-primary">{'///'} Referenzen </span>
                <span className="text-gray-700">Kooperationen</span>
            </div>

            <div className="grid grid-cols-3 xl:gap-20 place-items-center xl:px-96">
                <Image
                    src={gesu as HTMLImageElement}
                    layout="responsive"
                    objectFit="cover"
                    alt="Logo of the company"
                />
                <Image
                    src={uni_essen as HTMLImageElement}
                    layout="responsive"
                    objectFit="cover"
                    alt="Logo of the company"
                />

                <Image
                    src={bildungscampus as HTMLImageElement}
                    layout="responsive"
                    objectFit="cover"
                    alt="Logo of the company"
                />
            </div>
        </div>
    )
}
