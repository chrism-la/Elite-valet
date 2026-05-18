'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CountUp from '@/components/CountUp';

const stats = [
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 250, suffix: '+', label: 'Events Managed' },
    { number: 100, suffix: '%', label: 'Licensed & Insured' },
    { number: 10, suffix: '+', label: 'Cities serviced' },
];

export default function Stats() {
    return (
        <section className="bg-[#0B0B0F] px-6 md:px-16 py-20 md:py-24">
            <div className="max-w-6xl mx-auto">
                {/* HEADER */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className="mb-20 max-w-3xl">
                    <p className="text-[#C9A227] text-xs tracking-[0.45em] uppercase mb-5 opacity-90">Our Experience</p>
                    <div className="w-12 h-px bg-[#C9A227]/60 mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
                        <span className="text-white">Licensed & Insured</span>
                        <span className="text-white/50"> — delivering a higher standard of valet service.</span>
                    </h2>
                </motion.div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.7,
                                ease: 'easeOut',
                            }}
                            className="flex flex-col items-start"
                        >
                            <div className="flex flex-col items-start gap-4">
                                {/* Icon */}
                                <div className="w-8 h-8 rounded-full border border-[#C9A227]/40 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-[#C9A227]" />
                                </div>

                                {/* Number */}
                                <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                                    <span className="text-[#C9A227]">
                                        <CountUp end={stat.number} />
                                    </span>
                                    <span className="text-white ml-1.5 text-2xl md:text-3xl align-top">{stat.suffix}</span>
                                </h3>

                                {/* Label */}
                                <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
