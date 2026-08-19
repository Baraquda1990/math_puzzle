import {RiCopyrightLine} from "@remixicon/react"
import Link from "next/link"
export default function Footer(){
    return(
        <footer className="bg-[#01143b] min-h-[60px] w-full border-t-[#063d89] border-t-[2px]
            text-center text-white text-sm justify-center items-center gap-1
            hidden md:flex">
            <RiCopyrightLine /> 2026 Math Puzzle. <a href="https://github.com/Baraquda1990">Design by BaraqudaStudio.</a>
        
        <nav className="flex space-x-3 [&_a]:pl-2 [&_a:hover]:text-[#ffd70f]">
            <Link href="/">Play</Link>
            <Link href="/about" className="border-l-[1px]">About</Link>
            <Link href="/how-to-play" className="border-l-[1px]">How to Play</Link>
        </nav>
        </footer>
    )
}