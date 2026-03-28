"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";
import { Target } from "lucide-react";

export function Objectives() {
    return (
        <section id="objectives" className="py-20 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <SectionReveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                        Future Direction & Action Agenda
                    </h2>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {/* @ts-ignore - objectives exists now */}
                    {portfolioData.objectives.map((objective: string, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden h-full transition-all duration-300 hover:scale-[1.05] hover:ring-4 hover:ring-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            <div className="p-6 md:p-8 flex-1 flex flex-col relative overflow-hidden">
                                {/* Decorative Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-fuchsia-500/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        <Target size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        Objective {index + 1}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                                        {objective}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
