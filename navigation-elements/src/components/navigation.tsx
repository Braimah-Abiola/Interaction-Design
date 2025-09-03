"use client"

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";


const Navigation = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className=" fixed top-6 z-[100] w-full px-4"
        >
            <nav className=" w-full max-w-xl mx-auto">
                <div className={`bg-background/60 backdrop-blur-md transition-all duration-300 border border-white/10 ${open ? 'rounded-3xl' : ' rounded-[2rem]'}`}>
                    <div className=" w-full py-2.5 pl-6 pr-6 md:py-2 md:pl-4 md:pr-2 flex items-center justify-between md:justify-baseline gap-6">
                        <Link href="/">
                            <div className=" relative h-9 w-[120px]">
                                <Image fill src="/assets/logo.png" quality={100} className=" object-contain" alt="Logo" />
                            </div>
                        </Link>

                        <aside className="">
                            <motion.button
                                initial="hide"
                                animate={open ? "show" : "hide"}
                                onClick={toggleMenu}
                                className="flex flex-col space-y-1.5 h-8 w-12 items-center justify-center relative z-[2147483006]"
                                aria-label={open ? "Close menu" : "Open menu"}
                            >
                                <motion.span
                                    variants={{
                                        hide: {
                                            rotate: 0,
                                        },
                                        show: {
                                            rotate: 45,
                                            y: 4,
                                        },
                                    }}
                                    className="w-[28px] bg-primary rounded-full h-[2.4px] block"
                                ></motion.span>
                                <motion.span
                                    variants={{
                                        hide: {
                                            rotate: 0,
                                        },
                                        show: {
                                            rotate: -45,
                                            y: -4,
                                        },
                                    }}
                                    className="w-[28px] bg-primary rounded-full h-[2.4px] block"
                                ></motion.span>
                            </motion.button>
                        </aside>
                    </div>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.1,
                                            },
                                        },
                                    }}
                                    className="px-6 pb-4 pt-6 space-y-2"
                                >
                                    {["Home", "Features", "Testimonials", "FAQ"].map((item) => (
                                        <motion.div
                                            key={item}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={`#${item.toLowerCase()}`}
                                                className="block py-1 text-white/80 font-medium md:text-lg hover:text-white transition-colors duration-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="pt-4 pb-4"
                                    >
                                        <Link
                                            className=" w-full"
                                            href="#download"
                                            onClick={() => setOpen(false)}
                                        >
                                            <Button className="w-full">
                                                Download App
                                            </Button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </motion.header>
    );
}

export default Navigation;