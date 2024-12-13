import Button from "@/components/Button";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import PricingSection from "@/components/PricingSection";
import TestimonialCard from "@/components/TestimonialCard";
import { clients } from "@/constans/clients";
import { features, featuresBlock } from "@/constans/feature";
import { testimonials } from "@/constans/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
        <div className="container relative">
            <Image src="/images/bg.png" width={1920} height={1080} alt="home" className="absolute -z-50 w-full h-full -top-20 left-0 opacity-10"/>
            {/* home section */}
            <section className="relative" id="home">
                <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 left-40"/>
                <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 right-40"/>
                <div className="flex flex-col text-center space-y-12">
                    <div className="flex flex-col items-center space-y-6">
                        <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <ArrowRightCircle className="inline ml-1 w-4 h-4"/>
                        </p>
                        <Heading title="Ipsum desktop publishing software." />
                        <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="flex items-center gap-4">
                            <Button>Get Started <MoveRight className="w-4 h-4"/></Button>
                            <Link href="#pricing">
                                <Button variant="outline">View pricing</Button>
                            </Link>
                        </div>
                    </div>
                    <Image src="/images/Hero-image.svg" width={670} height={370} alt="hero" className="mx-auto shadow-xl"/>
                </div>
            </section>
            {/* clients section */}
            <section id="clients" className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4">
                {clients.map((client, index)=>(
                    <Image key={index} src={client.imageURL} alt={client.alt} width={120} height={80} className="w-40 md:w-full mx-auto"/>
                ))}
            </section>
            {/* feature section */}
            <section id="features" className="flex flex-col gap-y-12 md:gap-y-28">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* <Image src="/images/bg2.png" width={1920} height={1080} alt="second banner" className="absolute -z-50 top-0 left-0 opacity-5"/> */}
                    <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
                        <Heading title="Powerful features to help you manage all your leads."/>
                        <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque est corrupti omnis quo molestiae adipisci pariatur ea repellat animi neque tempora officia. Consectetur harum dicta perspiciatis sapiente magnam inventore.</p>
                        <Button>Get Started</Button>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {features.map((feature ,index) => (
                            <FeatureCard key={index} {...feature}/>
                        ))}
                    </div>
                </div>
                {featuresBlock.map((item, index)=>(
                    <FeatureBlock key={index} {...item} />
                ))}
            </section>
            <PricingSection/>
            {/* testimonials section */}
            <section id="testimonials" className="flex flex-col gap-8">
                <Heading title="Meet our customers" isCentered/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((testimonial , index) =>(
                        <TestimonialCard key={index} {...testimonial}/>
                    ))}
                </div>
            </section>
        </div>
    </main>
  );
}
