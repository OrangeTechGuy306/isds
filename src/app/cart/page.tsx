"use client"
import Footer from '@/comps/footer'
import Navbar from '@/comps/nav'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import cartImg from "@/assets/1.png"
import { Button } from '@/components/ui/button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { toast, Toaster } from 'sonner'


interface CartItem {
    id: number;
    name: string;
    brand: string;
    price: number;
    imageURL: string | StaticImport;
  }


const CartPage = () => {

    const [carts, setCarts] = useState([])
    // const [empty, setEmpty] = useState("")

    const fetchCart = ()=>{

        const cart = localStorage.getItem("cart")

        if(cart){
            //  eslint-disable-next-line
            const formattedJson = JSON.parse(cart as any)
            setCarts(formattedJson)
        }
    }
    const getCartItems = (): CartItem[] => {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
      };

      const removeFromCart = (id: number) => {
        const cartItems = getCartItems();
      
        // Filter out the item to be removed
        const updatedCartItems = cartItems.filter(item => item.id !== id);
      
        // Update localStorage with the new cart
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        fetchCart()
        // Notify user that the item was removed
        toast.success("Product removed from the cart");
      };

    useEffect(()=>{
        fetchCart()
    },[])


  return (
    <div className=''>
        <Toaster richColors position='top-right'/>
        <Navbar/>

        <section className='min-h-screen pt-[100px] px-5'>

            <div>
                <h1 className='font-bold text-xl text-center'>My Carts</h1>
            </div>
                <hr className='my-5' />
          {  
            carts !== null ? carts.map((c:CartItem, i)=>(
                <div className='flex justify-between items-center bg-glass rounded-xl p-3 flex-wrap my-3' key={i}>
                    <div>
                        <Image src={c.imageURL} unoptimized alt='' width={100} height={100}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1>{c.name}</h1>
                        <p>{c.brand}</p> 
                        <Button className='bg-red-500 w-[max-content]' onClick={()=>{removeFromCart(c.id)}}>Remove</Button>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>&#8358;{c.price}</h1>
                    </div>
                </div>
            ))
            : <h1>NO ITEM IN THE CART</h1>
        }
        </section>
        <Footer/>
    </div>
  )
}

export default CartPage