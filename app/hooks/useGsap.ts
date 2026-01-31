"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface UseGsapAnimationOptions {
    animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "zoom" | "reveal";
    delay?: number;
    duration?: number;
    stagger?: number;
}

export function useGsapAnimation<T extends HTMLElement>(options: UseGsapAnimationOptions = {}) {
    const ref = useRef<T>(null);
    const { animation = "fadeUp", delay = 0, duration = 1, stagger = 0.1 } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        let ctx: gsap.Context;

        const animations: Record<string, () => void> = {
            fadeUp: () => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration,
                        delay,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            },
            fadeIn: () => {
                gsap.fromTo(
                    element,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration,
                        delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            },
            slideLeft: () => {
                gsap.fromTo(
                    element,
                    { opacity: 0, x: 100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration,
                        delay,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            },
            slideRight: () => {
                gsap.fromTo(
                    element,
                    { opacity: 0, x: -100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration,
                        delay,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            },
            zoom: () => {
                gsap.fromTo(
                    element,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration,
                        delay,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            },
            reveal: () => {
                gsap.fromTo(
                    element,
                    { clipPath: "inset(0 100% 0 0)" },
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration,
                        delay,
                        ease: "power3.inOut",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            },
        };

        ctx = gsap.context(() => {
            if (animations[animation]) {
                animations[animation]();
            }
        });

        return () => ctx.revert();
    }, [animation, delay, duration, stagger]);

    return ref;
}

// Hook for staggered children animations
export function useGsapStagger<T extends HTMLElement>(selector: string, options: UseGsapAnimationOptions = {}) {
    const ref = useRef<T>(null);
    const { delay = 0, duration = 0.8, stagger = 0.15 } = options;

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                selector,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [selector, delay, duration, stagger]);

    return ref;
}

// Counter animation hook
export function useCounterAnimation(targetValue: number, duration: number = 2) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const ctx = gsap.context(() => {
            const counter = { value: 0 };

            gsap.to(counter, {
                value: targetValue,
                duration,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                onUpdate: () => {
                    element.textContent = Math.round(counter.value).toString();
                },
            });
        });

        return () => ctx.revert();
    }, [targetValue, duration]);

    return ref;
}
