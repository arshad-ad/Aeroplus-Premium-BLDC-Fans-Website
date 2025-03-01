import { Features } from "@/app/components/Features";
import Hero from "./components/Hero";
import SuperProdect from "./components/SuperProdect";
import { About } from "./components/About";
import ContactSection from "./components/Contact";
import ProductCard from "./components/Prodect";
import Footer from "./components/Footer";
import { FloatingNavDemo } from "./components/Navbar";


export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className=" max-w-7xl w-full space-y-6">
    <FloatingNavDemo/>
    <Hero/>
    <About/>
    <Features/>
    <SuperProdect/>
    <ProductCard/>
    <ContactSection/>
    <Footer/>
    </div>
   </main>
  );
}
