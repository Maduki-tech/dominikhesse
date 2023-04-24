import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Logo_Nachhilfe_Hesse.svg'
import { FiArrowRightCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface Props {
    isOpen: boolean
}

const HamburgerIcon = ({ isOpen }: Props) => (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <style jsx>{`
            .hamburger-icon {
                width: 30px;
                height: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .hamburger-icon span {
                width: 100%;
                height: 3px;
                background-color: #000;
                transition: all 0.3s ease;
            }
            .hamburger-icon.open span:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
            }
            .hamburger-icon.open span:nth-child(2) {
                opacity: 0;
            }
            .hamburger-icon.open span:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
            }
        `}</style>
    </div>
)

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    React.useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isMenuOpen])

    return (
        <nav className="border-b relative">
            <div className="flex flex-wrap items-center justify-between bg-stone-600 p-4 xl:p-6 xl:px-96">
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
                    +49176/44469647 |{' '}
                    <a href="mailto:info@dominikhesse.de">
                        info@dominikhesse.de{' '}
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 xl:px-96">
                <button
                    className="text-xl font-bold focus:outline-none xl:hidden"
                    onClick={toggleMenu}
                >
                    <HamburgerIcon isOpen={isMenuOpen} />
                </button>
            </div>

            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } xl:flex xl:items-center items-center xl:justify-evenly absolute right-0 w-1/2 xl:w-auto bg-opacity-80 bg-white px-6 xl:px-96 xl:bg-transparent xl:py-0 xl:relative`}
                style={{
                    zIndex: 10,
                    top: '100%',
                    transition: 'all 0.3s ease-in-out',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="py-4"
                >
                    <Link href="/">
                        <Image
                            src={logo as HTMLImageElement}
                            alt="Picture of the Logo"
                            width={300}
                        />
                    </Link>
                </motion.div>
                <div className="flex flex-col gap-4 xl:flex-row xl:gap-4 text-lg font-semibold text-black">
                    <Link
                        href="/#aboutMe"
                        scroll={false}
                        className="hover:underline hover:text-green-500"
                        onClick={closeMenu}
                    >
                        Über mich
                    </Link>

                    <Link
                        href="/#Testimonials"
                        className="hover:underline hover:text-green-500"
                        onClick={closeMenu}
                    >
                        Testimonials
                    </Link>
                </div>

                <div className="flex flex-col gap-4 xl:flex-row xl:gap-4">
                    <Link
                        href={'/Online-Nachhilfe'}
                        className="px-3 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white flex items-center
                        hover:bg-gray-100 hover:border hover:border-black hover:text-green-500"
                    >
                        Online-Nachhilfe
                        <FiArrowRightCircle className="inline-block ml-2" />
                    </Link>
                    <Link
                        href={'https://matheabicoach.de/'}
                        className="px-3 py-2 border border-green-500 rounded-lg bg-green-500 text-white flex items-center
                       
                        hover:bg-gray-700 hover:border hover:border-black hover:text-white"
                    >
                        Mathe Abi-Coach
                        <FiArrowRightCircle className="inline-block ml-2" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
