'use client';

import { motion } from 'framer-motion';

export default function AboutStory() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0F] px-6 md:px-16 py-20 md:py-28">
            {/* Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gold top-right glow */}
                <div className="absolute top-0 right-0 h-105 w-105 bg-[#C9A227]/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />

                {/* Soft white bottom-left glow */}
                <div className="absolute bottom-0 left-0 h-90 w-90 bg-white/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="md:col-span-5"
                >
                    <div className="w-10 h-px bg-white/20 mb-6" />

                    <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">Built on experience. Defined by execution.</h2>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
                    className="md:col-span-6 md:col-start-7 space-y-8 text-white/55 text-[15px] md:text-base leading-relaxed"
                >
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        Founded in 2013, Elite Car Valet has provided premium valet service across the Los Angeles County, including Beverly Hills, Studio City, Hollywood, Sunset Plaza, and Burbank.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
                        Our team brings real-world experience in managing private events, restaurants, hotels, and high-end venues — with a focus on timing, presentation, and operational precision.
                    </motion.p>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                        Fully licensed and insured, we operate with a standard built on trust, consistency, and a level of service that reflects the expectations of the environments we work in.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
