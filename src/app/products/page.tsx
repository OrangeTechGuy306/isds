"use client"
import Footer from "@/comps/footer";
import Navbar from "@/comps/nav";
import Image from "next/image";
// import proHeroImg from "@/assets/23.png";
import { Button } from "@/components/ui/button";
import { products } from "@/utils/products";
import {toast, Toaster} from "sonner"
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { Input } from "@/components/ui/input";
// import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


// interface ProductType{
  // id: number;
  // name: string;
  // brand: string;
  // gender: string;
  // category: string;
  // price: number;
  // is_in_inventory: boolean;
  // items_left: number;
  // imageURL: string | StaticImport;
  // slug: string;
// }



const ProductsPages = () => {


    // const cartKey = "cart";

    // const [count, setCount] = useState(1)
    // const [cartItems, setCartItems] = useState<ProductType[]>([]);

// Define a type for cart items
interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageURL: string | StaticImport;
}

const getCartItems = (): CartItem[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const addToCart = (id: number,
  name: string,
  brand: string,
  price: number,
  imageURL: string,
) => {
  const cartItems = getCartItems();

  // Check if item already exists
 
  const itemExists = cartItems.some(item => item.id === id);

  if (itemExists) {
    toast.warning("Product already added to cart");
  } else {
    cartItems.push({
      id, 
      name,
      brand,
      price,
      imageURL
    });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success("Product added to the cart");
  }
};


// const increment = (id: number) => {

//     setCartItems(prevItems =>
//       prevItems.map(item =>
//           item.id === id
//               ? { ...item, quantity: item.items_left + 1 }
//               : item
//       )
//   );        
    
//   };
 

    // //  eslint-disable-next-line
    //   const decrement = (q:number)=>{
    //       // e.preventDefault()
    //       if(count > 1){
    //         setCount(count - 1 )
    //       }else{
    //         toast.warning("1 Item must be left")
    //       }
    //   }


    

  return (
    <div className="">
        <Toaster richColors position="top-right"/>
      <Navbar />

        <div className="pt-[100px]">
              <section className="min-h-[80vh] heroProduct flex justify-around items-center flex-wrap rounded-xl">
                {/* <div>
                  <h1 className="font-bold text-5xl">
                    Get the Best <br /> Sneaker
                  </h1>
                  <small>Our Store provide the best Sneakers</small>
                </div>
                <Image src={proHeroImg} alt="" width={400} height={400} /> */}
              </section>
        </div>

      <section className="mt-10 w-[90%] mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Shop from Our Store</h1>
          <small>Get the best sneakers from us</small>
        </div>
        <section>
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
                        <div className="flex justify-center items-center">
                            <button onClick={()=>{}} className="w-[20px] h-[20px] bg-black text-white rounded-md flex justify-center items-center cursor-pointer " type="submit">-</button>
                            <Input type="number" value={1} className="w-[70px] h-[20px] text-black text-center" readOnly/>
                            <button onClick={()=>{}} type="submit" className="w-[20px] h-[20px] bg-black text-white rounded-md flex justify-center items-center cursor-pointer " >+</button>
                        </div>
                        <div className="flex items-center w-[100%]">
                          <Button onClick={()=>addToCart(p.id, p.name, p.brand, p.price, p.imageURL)} className="flex-1 rounded-none"><BsCart4/></Button>
                          <Link href={`/view/${p.id}`} className="flex-1 text-center bg-slate-900 text-white py-2">View</Link>
                        </div>
                    </div>
                ))
            }
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPages;
