'use client'
import { usePathname } from "next/navigation"
import { RiGamepadFill,RiInformationLine,RiQuestionLine } from "@remixicon/react"
import Link from "next/link"
export default function NavButtons(){
    const pathname = usePathname()
    return (
        <>
    <nav className="sm:hidden flex min-h-[40px]
    [&_a]:w-[100px]
    [&_a]:text-md [&_a]:border-1 
    [&_a]:text-white [&_a]:border-[#1178e4]
    [&_a]:font-bold [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a:hover]:text-[#022a6c]">
        <Link className={`
        ${pathname==="/"||pathname==="/play"?'bg-[#f6e100] text-[#022b71]!':
            'bg-gradient-to-t from-[#003191] to-[#00247d]'}
            hover:bg-none
            hover:bg-white
        `}
        href="/">
            <RiGamepadFill className="size-6"/> Play
        </Link>

        <Link className={`
        ${pathname === "/about"?'bg-[#f6e100] text-[#022b71]!':
            'bg-gradient-to-t from-[#003191] to-[#00247d]'}
            hover:bg-none
            hover:bg-white
            `}
        href="/about">
            <RiInformationLine className="size-6" />
        </Link>

        <Link className={`
        ${pathname === "/how-to-play"?'bg-[#f6e100] text-[#022b71]!':
            'bg-gradient-to-t from-[#003191] to-[#00247d]'}
            hover:bg-none
            hover:bg-white
        `}
        href="/how-to-play">
            <RiQuestionLine className="size-6" />
        </Link>
    </nav>


    <nav className="hidden sm:flex sm:flex-col [&_a]:px-2 lg:flex-row min-h-[60px] 2xl:min-h-[80px]
    lg:[&_a]:min-h-[60px] 2xl:[&_a]:min-h-[80px]
    lg:[&_a]:min-w-[230px]
    [&_a]:min-w-40 2xl:[&_a]:min-w-60 
    [&_a]:text-xl [&_a]:border-2 
    [&_a]:text-white [&_a]:border-[#1178e4]
    [&_a]:font-bold [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a:hover]:text-[#022a6c]">
        <Link className={`rounded-t-md lg:rounded-t-none lg:rounded-l-md lg:rounded-tl-md
        ${pathname==="/"||pathname==="/play"?'bg-[#f6e100] text-[#022b71]!':
            'bg-gradient-to-t from-[#003191] to-[#00247d]'} -mr-[2px]
            hover:bg-none
            hover:bg-white
        `}
        href="/">
            <RiGamepadFill className="size-8 mr-1"/> Play
        </Link>

        <Link className={`
        ${pathname === "/about"?'bg-[#f6e100] text-[#022b71]!':
            'bg-gradient-to-t from-[#003191] to-[#00247d]'} -mr-[2px] -mt-[2px] lg:mt-0
            hover:bg-none
            hover:bg-white
            `}
        href="/about">
            <RiInformationLine className="size-8 mr-1" />About the game
        </Link>

        <Link className={`rounded-b-md lg:rounded-b-none lg:rounded-r-md lg:rounded-br-md
        ${pathname === "/how-to-play"?'bg-[#f6e100] text-[#022b71]!':
            'bg-gradient-to-t from-[#003191] to-[#00247d]'} -mr-[2px] -mt-[2px] lg:mt-0
            hover:bg-none
            hover:bg-white
            mb-1 lg:mb-0 
        `}
        href="/how-to-play">
            <RiQuestionLine className="size-8 mr-1" /> How to play
        </Link>
    </nav>
    </>
    )
}
