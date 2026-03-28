"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";

export function Leadership() {
    return (
        <section id="leadership" className="py-20 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <SectionReveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                        Leadership & Organizational Governance
                    </h2>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {/* @ts-ignore - leadership exists now */}
                    {portfolioData.leadership.map((item: any, index: number) => (
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
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight min-h-[3rem] flex items-center">
                                        {item.role}
                                    </h3>

                                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                                        {item.company}
                                    </p>

                                    <div className="mb-6 flex-1">
                                        {Array.isArray(item.description) ? (
                                            <ul className="space-y-2">
                                                {item.description.map((desc: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                                        <span className="px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                                            {item.period}
                                        </span>
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
