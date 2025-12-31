"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <SectionReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                        Testimonials
                    </h2>
                </SectionReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {portfolioData.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md transition-all relative"
                        >
                            <Quote size={40} className="text-blue-100 dark:text-blue-900/30 absolute top-6 right-6" />

                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 dark:text-white text-sm">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
