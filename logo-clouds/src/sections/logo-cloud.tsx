"use client"

import { Marquee } from "@/components/marquee";
import { logoClouds, logoCloudsMobile } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoCloudProps {
    isTransparent?: boolean;
}

const LogoCloud = ({ isTransparent = false }: LogoCloudProps) => {
    return (
        <section className=" w-full py-12 z-20 relative">
            <div className=" container hidden md:block mx-auto w-full">
                <div className="max-w-4xl mx-auto grid md:grid-cols-4 w-full gap-y-7 px-12 py-6 relative group">
                    <div className={`absolute inset-0 ${isTransparent ? 'bg-transparent backdrop-blur-sm' : 'bg-black/60 backdrop-blur-xs'}  z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out`}>
                        <Link href="/showcase">
                            <span className="flex text-white hover:text-white/70 items-center gap-1 text-[15px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <p>Companies using Astrae</p>
                                <ChevronRight className=" size-5" />
                            </span>
                        </Link>
                    </div>
                    {logoClouds.map((logo, index) => (
                        <motion.div
                            key={index}
                            className="relative h-12 w-[180px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image fill src={logo.image} alt={logo.name} className="object-contain" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className=" w-full relative md:hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[20%] z-[1] bg-gradient-to-r from-black to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-[20%] z-[1] bg-gradient-to-l from-black to-transparent" />
                <Marquee className="[--gap:-0rem]">
                    <div className="flex items-center">
                        {logoCloudsMobile.map((logo, index) => (
                            <div key={index} className="relative h-9 w-[148px]">
                                <Image fill src={logo.image} alt={logo.name} className="object-contain" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}

export default LogoCloud;