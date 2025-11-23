"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("Welcome to the inner circle.");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setSubmitted(true);
                setMessage(data.message || "Welcome to the inner circle.");
                setEmail("");
                // Success state remains indefinitely or until refresh
            }
        } catch (error) {
            console.error('Failed to submit:', error);
        }
    };

    return (
        <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* CSS Backgrounds */}
            <div className="absolute inset-0 -z-20 bg-slate-950" />
            <div className="absolute inset-0 -z-10 stars" />

            {/* Horizon Glow at Bottom */}
            <motion.div
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute bottom-[-35vh] left-1/2 h-[80vh] w-[180vw] -translate-x-1/2 rounded-[100%] bg-slate-900 shadow-[0_0_100px_50px_rgba(59,130,246,0.3)]"
            />
            <div className="absolute bottom-[-35vh] left-1/2 h-[80vh] w-[180vw] -translate-x-1/2 rounded-[100%] border-t border-slate-700/50 bg-slate-950 shadow-[0_-20px_100px_20px_rgba(255,255,255,0.1)]" />
            <div className="absolute bottom-[-34vh] left-1/2 h-[80vh] w-[178vw] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />

            <div className="container relative z-10 mx-auto max-w-3xl">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm"
                >
                    Join the waitlist
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mb-6 text-5xl font-medium tracking-tight text-white sm:text-7xl"
                >
                    Wholesession is the future of
                    <span className="font-serif italic text-slate-200"> learning.</span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mb-10 text-lg text-slate-400 sm:text-xl max-w-xl mx-auto font-light"
                >
                    Master advanced STEM skills in small cohorts, taught by elite engineers and researchers from the world's leading companies.
                </motion.p>

                {/* Form / Success Message */}
                <div className="h-16"> {/* Fixed height container to prevent layout shift */}
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center justify-center gap-2 text-lg font-medium text-blue-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                                <span>{message}</span>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                onSubmit={handleSubmit}
                                className="mx-auto flex max-w-md items-center gap-2 rounded-lg bg-slate-800/50 p-1.5 backdrop-blur-sm border border-slate-700/50"
                            >
                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-10 border-none bg-transparent px-3 text-sm text-white placeholder:text-slate-500 focus-visible:ring-0"
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    className="h-9 shrink-0 whitespace-nowrap px-4 font-medium text-black cursor-pointer h-12"
                                >
                                    Get Notified
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
