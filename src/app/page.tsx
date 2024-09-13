"use client"
import { Button } from "@/components/ui/button";
import Navbar from "@/comps/nav";
import Image from "next/image";
import heroImg from "@/assets/18.webp"
import new1 from "@/assets/19.webp"
import new2 from "@/assets/21.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "@/comps/footer";



export default function Home() {
  return (
        <div>


            <Navbar/>
            <section className="min-h-[100vh] flex justify-around items-center flex-wrap">
                <div className="flex flex-col gap-3 ">
                    <h1>GRAB YOUR PAIR TODAY</h1>
                    <h1 className="font-bold text-4xl">NEW COLLECTION</h1>
                    <small>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Reprehenderit, consequatur?</small>
                    <Button className="bg-black text-white rounded-xl">Shop Now</Button>
                </div>
                <Image src={heroImg} alt="" width={600} height={600}/>
            </section>

            <section>
                <div className="text-center flex flex-col items-center gap-3">
                    <h1 className="font-bold text-3xl ">New Products</h1>
                    <small className="">For a decade, Flight Club has changed the landscape of Sneaker retail</small>
                    <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl"><span>All Products</span> <FaLongArrowAltRight/></Button>
                </div>

              <div className="flex justify-center items-center gap-5 my-3 flex-wrap">
                    <div className="overflow-hidden bg-glass w-[250px] flex flex-col items-center p-3 rounded-xl">
                      <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                        <Image src={heroImg} alt="" width={200} height={200}/>
                      </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1>Sneaker 1</h1>
                            <h1 className="font-bold text-xl">&#8358;{Intl.NumberFormat().format(3000)}</h1>
                            <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-glass w-[250px] flex flex-col items-center p-3 rounded-xl">
                    <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                        <Image src={new1} alt="" width={200} height={200}/>
                      </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1>Sneaker 1</h1>
                            <h1 className="font-bold text-xl">&#8358;{Intl.NumberFormat().format(3000)}</h1>
                            <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-glass w-[250px] flex flex-col items-center p-3 rounded-xl">
                    <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                        <Image src={new2} alt="" width={200} height={200}/>
                      </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1>Sneaker 1</h1>
                            <h1 className="font-bold text-xl">&#8358;{Intl.NumberFormat().format(3000)}</h1>
                            <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl">Add to Cart</Button>
                        </div>
                    </div>
              </div>

            </section>


            <section className="banner1 w-[90%] h-[50vh] mx-auto rounded-xl my-10">
                
            </section>

            <section>
                <div className="text-center flex flex-col items-center gap-3">
                    <h1 className="font-bold text-3xl ">Best Selling Products</h1>
                    <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl"><span>All Products</span> <FaLongArrowAltRight/></Button>
                </div>

              <div className="flex justify-center items-center gap-5 my-3 flex-wrap">
                    <div className="overflow-hidden bg-glass w-[250px] flex flex-col items-center p-3 rounded-xl">
                      <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                        <Image src={heroImg} alt="" width={200} height={200}/>
                      </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1>Sneaker 1</h1>
                            <h1 className="font-bold text-xl">&#8358;{Intl.NumberFormat().format(3000)}</h1>
                            <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-glass w-[250px] flex flex-col items-center p-3 rounded-xl">
                    <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                        <Image src={new1} alt="" width={200} height={200}/>
                      </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1>Sneaker 1</h1>
                            <h1 className="font-bold text-xl">&#8358;{Intl.NumberFormat().format(3000)}</h1>
                            <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-glass w-[250px] flex flex-col items-center p-3 rounded-xl">
                    <div className="w-[100%] h-[200px] overflow-hidden flex justify-center items-center">
                        <Image src={new2} alt="" width={200} height={200}/>
                      </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1>Sneaker 1</h1>
                            <h1 className="font-bold text-xl">&#8358;{Intl.NumberFormat().format(3000)}</h1>
                            <Button className="bg-transparent border-2 border-slate-300 text-black rounded-2xl">Add to Cart</Button>
                        </div>
                    </div>
              </div>

            </section>


            <section className="banner2 w-[90%] h-[50vh] mx-auto rounded-xl my-10">
                
            </section>


            <Footer/>

        </div>
  );
}
