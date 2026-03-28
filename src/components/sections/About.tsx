"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";
import { SectionReveal } from "@/components/common/SectionReveal";

import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <SectionReveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                        About Me
                    </h2>
                </SectionReveal>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:ring-4 hover:ring-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="p-5 md:p-12 relative overflow-hidden">
                            {/* Decorative Background Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-fuchsia-500/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                            <div className="relative z-10">
                                <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10 break-words hyphens-auto">
                                    {portfolioData.personalInfo.bio.split('\n\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                                    <a
                                        href="#contact"
                                        className="flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-purple-600/20 transition-all hover:-translate-y-0.5"
                                    >
                                        Get in Touch
                                        <ArrowRight size={18} />
                                    </a>
                                    <a
                                        href={`${BASE_PATH}/resume.pdf`}
                                        className="flex items-center gap-2 px-8 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5"
                                    >
                                        Download CV
                                        <Download size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
