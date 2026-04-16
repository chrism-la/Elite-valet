import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();

    // subtle cinematic movement (NOT zoom heavy)
    const y = useTransform(scrollY, [0, 500], [0, 80]);
    const opacity = useTransform(scrollY, [0, 250], [1, 0]);

    const textY = useTransform(scrollY, [0, 400], [0, 40]);

    return (
        <div className="h-screen w-full relative overflow-hidden flex items-end">
            {/* VIDEO (cinematic focus reveal) */}
            <motion.div
                initial={{ opacity: 0, filter: 'blur(14px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full"
            >
                <video className="w-full h-full object-cover scale-[1.05]" autoPlay muted loop playsInline>
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* OVERLAY (dynamic cinematic depth) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

            {/* CONTENT */}
            <motion.div style={{ y, opacity }} className="relative w-full px-5 sm:px-6 md:px-16 pb-12 md:pb-20">
                <motion.div style={{ y: textY }} className="max-w-xl">
                    {/* TEXT */}
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed"
                    >
                        Luxury valet parking designed for private events, hotels, high-profile venues and restaurants — executed with{' '}
                        <span className="italic text-[#C9A227] drop-shadow-[0_0_16px_rgba(201,162,39,0.4)]">professionalism</span>.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4">
                        {/* DESKTOP ONLY BOOK */}
                        <button className="hidden md:flex px-6 py-3 bg-white text-black rounded-full text-sm hover:scale-[1.03] transition">Book</button>

                        {/* VIEW GALLERY */}
                        <button className="hidden md:flex px-6 py-3 border border-white/25 text-white rounded-full text-sm hover:bg-white/10 transition items-center gap-2">
                            View Gallery <ArrowUpRight size={16} />
                        </button>

                        {/* MOBILE LINK */}
                        <a href="#gallery" className="md:hidden text-white/80 text-sm tracking-wide hover:text-white transition">
                            View Gallery →
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
            >
                <p className="text-xs tracking-[0.35em] uppercase">Scroll</p>

                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-0.5 h-10 bg-white/40 rounded-full" />
            </motion.div>
        </div>
    );
}
