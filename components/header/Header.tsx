import logo from "@/public/logo.png"
import Image from "next/image"
import NavButtons from "./NavButtons"
export default function Header(){
    return(
        <header className="bg-gradient-to-r from-[#002b7c] to-[#00184d] 
        border-b-[#2077f8] border-b-[3px]
        grid grid-cols-1 sm:grid-cols-3 items-center pt-2 
        min-h-[60px] sm:min-h-[127px]">
            <Image src={logo} alt="Logo"
            className="ml-5 justify-self-start 2xl:justify-self-center
            w-auto h-[80%] lg:h-[90%] hidden sm:block"/>
            <nav className="justify-self-center">
                <NavButtons/>
            </nav>
            <div/>
        </header>
    )
}