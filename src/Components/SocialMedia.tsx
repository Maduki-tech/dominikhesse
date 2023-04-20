import React from 'react'

export default function SocialMedia() {
    return (
        <div className='flex justify-center py-4 bg-stone-200 items-center gap-4'>
            <span className='text-2xl font-semibold'>Folge mir auf:</span>
            <button className='px-3 py-2 text-white rounded-lg bg-blue-700'>Facebook</button>
            <button className='px-3 py-2 text-white rounded-lg bg-gradient-to-tr from-red-500 via-red-400 to-purple-400'>Instagram</button>
            <button className='px-3 py-2 text-white rounded-lg bg-red-600'>Youtube</button>
        </div>
    )
}
