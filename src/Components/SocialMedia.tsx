import React from 'react'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'

export default function SocialMedia() {
    return (
        <div className="flex justify-center py-4 bg-stone-200 items-center gap-4">
            <span className="text-2xl font-semibold">Folge mir auf:</span>
            <button className="px-8 py-3 text-white font-semibold rounded-lg bg-[#3b5998] flex items-center">
                <FiFacebook className="inline-block mr-2 w-5 h-5" />
                Facebook
            </button>
            <button
                style={{
                    background:
                        'radial-gradient(circle at 30% 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
                }}
                className="px-8 py-3 text-white font-semibold rounded-lg flex items-center"
            >
                <FiInstagram className="inline-block mr-2 w-5 h-5" />
                Instagram
            </button>
            <button className="px-8 py-3 text-white rounded-lg font-semibold bg-[#CD211F] flex items-center">
                <FiYoutube className="inline-block mr-2 w-5 h-5" />
                Youtube
            </button>
        </div>
    )
}
