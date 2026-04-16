import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const links = [
        { name: 'Castaway', href: '#castaway' },
        { name: 'Orange Hill', href: '#orangehill' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center">
            {/* NAVBAR */}
            <motion.div
                animate={{
                    backgroundColor: scrolled ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.05)',
                    backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
                    borderColor: scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.10)',
                }}
                transition={{ duration: 0.4 }}
                className="mt-5 w-[92%] max-w-6xl border rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg shadow-black/20"
            >
                {/* LOGO */}
                <img src="/logo.png" alt="Elite Valet" className="h-8 md:h-9 object-contain opacity-90 hover:opacity-100 transition" />

                {/* DESKTOP (UNCHANGED - RESTORED) */}
                <div className="hidden md:flex gap-10 text-sm text-white/70">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="relative group tracking-wide hover:text-white transition">
                            {link.name}
                            <span className="absolute left-0 -bottom-2 h-px w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* DESKTOP BUTTON (RESTORED IDEA) */}
                <button className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-sm tracking-wide hover:scale-[1.03] active:scale-[0.98] transition">Book</button>

                {/* MOBILE HAMBURGER (ANIMATED) */}
                <button onClick={() => setOpen(true)} className="md:hidden flex flex-col gap-1.25">
                    <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white" />
                    <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white/80" />
                    <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white/60" />
                </button>
            </motion.div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 right-0 w-[80%] h-full bg-black/90 backdrop-blur-xl p-8 flex flex-col gap-8 z-50"
                    >
                        {/* CLOSE */}
                        <button className="text-white text-sm self-end" onClick={() => setOpen(false)}>
                            Close
                        </button>

                        {/* LINKS (ANIMATED STAGGER) */}
                        <div className="flex flex-col gap-6 mt-10">
                            <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Locations</p>

                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="text-white text-xl font-light"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* BOOK CTA */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 pt-6 border-t border-white/10">
                            <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Request</p>

                            <a href="#book" onClick={() => setOpen(false)} className="mt-4 inline-block px-5 py-3 bg-white text-black rounded-full text-sm tracking-wide">
                                Book Valet
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
