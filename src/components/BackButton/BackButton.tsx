'use client'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
    const router = useRouter();

    return (
        <button onClick={router.back} className='lg:bg-[#f2f2f2] sm:bg-transparent flex flex-row p-3 text-center rounded-lg lg:hover:bg-[#e8e6e6] items-center'>
            <ChevronLeft className='mr-1 sm:mr-4' />
            <span className='hidden sm:inline'>Back</span>
        </button>
    ) 
}

export default BackButton
