"use client"

import Link from "next/link"
import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { ImLocation } from "react-icons/im";





const Footer = () => {


    


    
  return (
    <div 
    className="flex flex-col items-center gap-5"
    style={{background:"rgba(255,255,255, 0.5)", backdropFilter:"blur(10px)"}}
    >

        <footer 
        className="flex justify-around items-start flex-wrap gap-5 mt-10 p-10 w-[100%]" 
        >
            <div className="w-[300px]">
                <h1 className="font-bold my-3 text-primary">ISDS SHOES</h1>
                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, ex sit? Libero hic, nam, qui inventore asperiores dolor optio est ducimus officiis, ipsam exercitationem facilis. Cum voluptas similique ex maxime!</small>
            </div>
            
            <div>
                <h1 className="text-xl text-primary mb-5">About Us</h1>
                <div className="flex flex-col gap-2">
                    <Link href={""}>About Us</Link>
                    <Link href={""}>product</Link>
                    <Link href={""}>FAQ</Link>
                    <Link href={""}>Copyright</Link>
                    <Link href={""}>Contact</Link>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-primary mb-5">Categories</h1>
                <div className="flex flex-col gap-2">
                    <Link href={""}>Nike</Link>
                    <Link href={""}>Puma</Link>
                    <Link href={""}>Adiddas</Link>
                    <Link href={""}>Rolex</Link>
                    <Link href={""}>Apple</Link>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-primary mb-5">Resources</h1>
                <div className="flex flex-col gap-2">
                    <Link href={""}>Blog</Link>
                    <Link href={""}>Newsletter</Link>
                    <Link href={""}>About</Link>
                    <Link href={""}>Technology</Link>
                    <Link href={""}>Profile</Link>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-primary mb-5">Get in Touch</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-primary"/>
                        <Link href={""}>+2348 159 832 838</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-primary"/>
                        <Link href={""}>hanafitaofiq95@gmail.com</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <ImLocation className="text-primary" size={20}/>
                        <Link href={""}>Kwara state, Ilorin</Link>
                    </div>
                </div>
            </div>
        </footer>
        <hr />
        <h2 className="mb-5">Copyright &copy; {new Date().getFullYear()}</h2>
    </div>
  )
}

export default Footer