import { motion } from 'framer-motion'
import Link from 'next/link'
import { type Url } from 'url'

interface KachelProps {
    title: string
    text: string
    buttonHref?: string | Url
    button?: boolean
}
export function Kachel({ title, text, buttonHref, button }: KachelProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl px-20 py-8 text-center flex flex-col items-center justify-center gap-4 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
        >
            <div className="w-32 h-32 bg-green-500 rounded-full relative">
                <span className="absolute inset-0 flex items-center justify-center mt-4">
                    <svg
                        className="h-20 w-20 text-white m-auto font-semibold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707,3.293 C17.098,3.684 17.098,4.316 16.707,4.707 L8.707,12.707 C8.512,12.902 8.256,13 8,13 C7.744,13 7.488,12.902 7.293,12.707 L3.293,8.707 C2.902,8.316 2.902,7.684 3.293,7.293 C3.684,6.902 4.316,6.902 4.707,7.293 L8,10.586 L15.293,3.293 C15.684,2.902 16.316,2.902 16.707,3.293 Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>

            <h3 className="text-2xl font-semibold">{title}</h3>
            <hr className="w-full text-gray-600 border-t-2" />
            <p className="text-gray-600 text-xl">{text}</p>

            {button && buttonHref !== undefined && (
                <Link
                    href={buttonHref}
                    scroll={false}
                    className="bg-gray-700 px-6 py-2 text-white rounded-lg w-fit hover:bg-green-500"
                >
                    Los Geht
                </Link>
            )}
            {button && buttonHref === undefined && (
                <button className="bg-gray-700 px-6 py-2 text-white rounded-lg w-fit hover:bg-green-500">
                    Los Geht
                </button>
            )}
        </motion.div>
    )
}
