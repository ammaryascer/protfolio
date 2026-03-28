"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";
import { Globe, GraduationCap } from "lucide-react";

export function InternationalExposure() {
    return (
        <section id="international" className="py-20 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <SectionReveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                        Intercultural & International Experience
                    </h2>
                </SectionReveal>

                <div className="space-y-20">
                    {/* Languages Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                            <Globe className="text-purple-600" />
                            Languages
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                            {portfolioData.languages.map((lang, index) => (
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
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                                    {lang.language}
                                                </h3>
                                                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2.5 py-1 rounded-full border border-purple-100 dark:border-purple-900/30">
                                                    {lang.proficiency}
                                                </span>
                                            </div>

                                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 mb-6 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${lang.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"
                                                />
                                            </div>

                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                                                {lang.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Exchange Program Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
                            <GraduationCap className="text-purple-600" />
                            International Exchange
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                            {/* @ts-ignore */}
                            {portfolioData.international && portfolioData.international.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="group flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden h-full transition-all duration-300 hover:scale-[1.05] hover:ring-4 hover:ring-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10"
                                >
                                    {/* Image Section */}
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                            {/* Optional overlay content */}
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 flex-1 flex flex-col relative overflow-hidden">
                                        <div className="relative z-10 flex flex-col h-full">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {item.tags.map((tag: string) => (
                                                    <span key={tag} className="px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-lg border border-purple-100 dark:border-purple-900/30">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
