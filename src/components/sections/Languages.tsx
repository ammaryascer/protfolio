"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";

export function Languages() {
    return (
        <section id="languages" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                        Languages & Proficiency
                    </h2>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioData.languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm"
                        >
                            <div className="flex justify-between items-end mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {lang.language}
                                </h3>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    {lang.proficiency}
                                </span>
                            </div>

                            <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                                />
                            </div>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {lang.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
