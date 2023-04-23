import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Navbar from '~/Components/Navbar'

const index = () => {
    return (
        <div>
            <Navbar />
            <main className="bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 h-[calc(100vh-16.5rem)] pt-12 px-96">
                <div className=" h-full pt-32 flex flex-col gap-4 justify-start">
                    <p className="text-4xl text-white">| Fach: Mathematik</p>
                    <p className="text-4xl text-white">
                        Lernzetteln, Videos und Lern-Karteikarten{' '}
                    </p>
                </div>
            </main>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-3 gap-4">
                    <Dropdown
                        title="Lernzetteln"
                        content={{
                            title: 'Lernzetteln',
                            list: [
                                'Lernzetteln 1',
                                'Lernzetteln 2',
                                'Lernzetteln 3',
                                'Lernzetteln 4',
                                'Lernzetteln 5',
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

interface DropdownProps {
    title: string
    content: {
        title: string
        list: string[]
    }
}

const Dropdown = ({ title, content }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative w-full">
            <button
                onClick={toggleDropdown}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left"
            >
                {title}
            </button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="dropdown"
                unmountOnExit
            >
                <div className="absolute bg-white mt-2 w-full border border-gray-200 rounded shadow">
                    <p className="text-black px-4 py-2 font-semibold">
                        {content.title}
                    </p>
                    <ul>
                        {content.list.map((item, index) => (
                            <li
                                key={index}
                                className="text-black px-4 py-2 border-t border-gray-200"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </CSSTransition>
        </div>
    )
}
export default index
