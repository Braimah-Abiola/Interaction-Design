"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqData } from "@/constants";

import { motion } from "framer-motion";
import { useState } from "react";

const Faqs = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className=" w-full py-20">
            <div className=" container mx-auto px-4 md:px-0 flex flex-col items-center">
                <motion.div
                    initial={false}
                    animate={open ? "open" : "closed"}
                    style={{
                        overflow: "hidden",
                    }}
                    variants={{
                        open: {
                            height: "fit-content",
                        },
                        closed: {
                            height: 380,
                        },
                    }} className=" relative w-full h-fit mt-12">

                    <Accordion
                        type="single"
                        collapsible
                        className="w-full max-w-3xl mx-auto"
                        defaultValue="item-1"
                    >
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={`${faq.id}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <motion.div
                        variants={{
                            open: {
                                bottom: "0%",
                                zIndex: -10,
                            },
                            closed: {
                                bottom: "0%",
                            },
                        }}
                        className="absolute inset-x-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-background h-1/2"
                    />
                </motion.div>
                <Button variant="secondary" onClick={() => setOpen((pv: boolean) => !pv)} className="mt-4 w-fit">
                    {open ? (
                        <>
                            <p>Show less</p>
                        </>
                    ) : (
                        <>
                            <p>Show all FAQs</p>
                        </>
                    )}
                </Button>
            </div>
        </section >
    );
}

export default Faqs;