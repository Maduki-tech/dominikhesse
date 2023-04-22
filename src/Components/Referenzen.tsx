import Image from 'next/image'
import React from 'react'

import gesu from '../../public/Companys/Gesu.png'
import uni_essen from '../../public/Companys/Uni_Essen.png'
import bildungscampus from '../../public/Companys/Bildungscampus.png'

export default function Referenzen() {
    return (
        <div className='w-screen bg-gray-200 flex flex-col justify-center items-center gap-8 py-8'>
            <div className='text-3xl'>
                <span className='text-green-500'>{'///'} Referenzen</span>
                <span className='text-gray-700'>Kooperationen</span>
            </div>

            <div className='flex gap-8 px-96'>
                <Image
                    src={gesu as HTMLImageElement}
                    height={100}
                    alt="Logo of the company"
                />
                <Image
                    src={uni_essen as HTMLImageElement}
                    height={100}
                    alt="Logo of the company"
                />

                <Image
                    src={bildungscampus as HTMLImageElement}
                    height={100}
                    alt="Logo of the company"
                />
            </div>
        </div>
    )
}
