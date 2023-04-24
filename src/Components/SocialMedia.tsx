import React from 'react'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'

export default function SocialMedia() {
    return (
        <div className="flex flex-wrap justify-center py-4 bg-stone-200 items-center gap-2 sm:gap-4 px-4">
            <span className="text-xl font-semibold mb-2 sm:mb-0">
                Folge mir auf:
            </span>
            <div className="flex gap-2">
                <button
                    style={{
                        background:
                            'radial-gradient(circle at 30% 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
                    }}
                    className="px-2 sm:px-4 py-1 sm:py-3 text-xs sm:text-white font-semibold rounded-lg flex items-center mb-2 sm:mb-0"
                >
                    <FiInstagram className="inline-block mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Instagram
                </button>
                <button className="px-2 sm:px-4 py-1 sm:py-3 text-xs sm:text-white rounded-lg font-semibold bg-[#CD211F] flex items-center mb-2 sm:mb-0">
                    <FiYoutube className="inline-block mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Youtube
                </button>
                <button className="px-2 sm:px-4 py-1 sm:py-3 text-xs sm:text-white font-semibold rounded-lg bg-[#3b5998] flex items-center mb-2 sm:mb-0">
                    <FiFacebook className="inline-block mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Facebook
                </button>
            </div>
        </div>
    )
}
