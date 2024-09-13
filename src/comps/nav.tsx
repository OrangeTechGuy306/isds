"use client"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from 'react';



const Navbar = () => {

  const [count, setCount] = useState(0)

  const getTotalItems = ()=>{
    //  eslint-disable-next-line
    const cart = JSON.parse(localStorage.getItem("cart") as any)
    setCount(cart.length)
  }

  useEffect(()=>{
    getTotalItems()
  },[count])

  return (
    <nav className='flex justify-around flex-wrap items-center py-5 px-2 bg-glass w-[100%]' style={{position:"fixed", top:0, left:0, zIndex:998438}}>
        <h1 className='bg-black text-white p-1 px-2'>ISDS</h1>
        <div className='flex items-center gap-3'>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
        </div>
        <div className=''>
            <Link href={"/cart"}>
                <Badge>{count}</Badge>
                <BsCart4/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar