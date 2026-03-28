"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden relative"
                >
                    <div className="p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-fuchsia-500/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                                Need a Professional Interpreter?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
                                I&apos;m currently available for freelance interpretation (OPI/VRI) and pharmaceutical consultation.
                                Let&apos;s collaborate to ensure clear and accurate communication.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
                                <a
                                    href={`mailto:${portfolioData.personalInfo.email}`}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-600/25 active:scale-95 w-full md:w-auto"
                                >
                                    <Mail size={20} />
                                    Email Me
                                </a>
                                <a
                                    href={`https://wa.me/${portfolioData.personalInfo.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-95 w-full md:w-auto"
                                >
                                    <Phone size={20} />
                                    WhatsApp
                                </a>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mt-8 text-sm font-medium">
                                <MapPin size={16} className="text-purple-500" />
                                <span>{portfolioData.personalInfo.address}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
