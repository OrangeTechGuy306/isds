"use client"
import Footer from '@/comps/footer'
import Navbar from '@/comps/nav'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import img from "@/assets/23.png"
import { Button } from '@/components/ui/button'
import { BsCart4 } from "react-icons/bs";
import { products } from "@/utils/products";
// import {toast, Toaster} from "sonner"
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'



interface ProductType{
  id: number;
  name: string;
  brand: string;
  gender: string;
  category: string;
  price: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string | StaticImport;
  slug: string;
}




const ProductViewPage = ({ params }: { params: { slug: string } }) => {


  const [product, setProduct] = useState<ProductType>()

  const fetchProduct = () => {

    const product = products.find((product) => product.id === parseInt(params.slug));
    
    if (product){
      //eslint-disable-next-line
      setProduct(product as any); 
    } else {
        console.log("Product not found");
    }
};

  useEffect(()=>{
    fetchProduct()
  },[params.slug])

  // interface CartItem {
  //   id: number;
  //   name: string;
  //   brand: string;
  //   price: number;
  //   imageURL: string | StaticImport;
  // }
      
      // const getCartItems = (): CartItem[] => {
      //   const cart = localStorage.getItem("cart");
      //   return cart ? JSON.parse(cart) : [];
      // };

      
      // const addToCart = (
      //   id: number,
      //   name: string,
      //   brand: string,
      //   price: number,
      //   imageURL: string,
      // ) => {
      //   const cartItems = getCartItems();
      
      //   // Check if item already exists
       
      //   const itemExists = cartItems.some(item => item.id === id);
      
      //   if (itemExists) {
      //     toast.warning("Product already added to cart");
      //   } else {
      //     cartItems.push({
      //       id, 
      //       name,
      //       brand,
      //       price,
      //       imageURL
      //     });
      //     localStorage.setItem("cart", JSON.stringify(cartItems));
      //     toast.success("Product added to the cart");
      //   }
      // };


  return (
    <div>
    <Navbar/>
    {/* <Toaster richColors position="top-right"/> */}
    <section className='min-h-screen flex items-center justify-center flex-wrap w-[90%] mx-auto gap-5'>
        {product?.imageURL && <Image src={product.imageURL} unoptimized alt='' width={500} height={500}className='flex-1'/>}
        <div className='flex-1 flex flex-col gap-5'>
            <h1 className='font-bold text-3xl'>{product?.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cum. Tempora quas optio hic dolores. Repellat eligendi temporibus cumque alias, ducimus recusandae libero consequuntur molestias, dignissimos adipisci, commodi rerum iste.</p>
            <h1 className='font-bold text-3xl'>&#8358;{product?.price}</h1>
            <Button className='flex justify-center items-center gap-5'><BsCart4/> <span>ADD TO CART</span></Button>
        </div>
    </section>
    <h1 className='text-2xl font-bold w-[90%] mx-auto'>Related Brand</h1>
    <section className='w-[90%] mx-auto'>
      <div className="flex justify-center items-center gap-5 my-3 flex-wrap">
        {
            products.map((p, i)=>(
                <div key={i} className="w-[250px] overflow-hidden rounded-xl flex flex-col items-center gap-5">
                    <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                      <Image src={p.imageURL} unoptimized alt="" width={300} height={300}/>
                    </div>
                    <div className="text-center">
                      <h1>{p.name}</h1>
                      <h3 className="font-bold text-xl">&#8358;{p.price}</h3>
                    </div>
                    <div className="flex items-center w-[100%]">
                      <Button  className="flex-1 rounded-none"><BsCart4/></Button>
                      <Link href={""} className="flex-1 text-center bg-slate-900 text-white py-2">View</Link>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
    <Footer/>
</div>

  )
}

export default ProductViewPage