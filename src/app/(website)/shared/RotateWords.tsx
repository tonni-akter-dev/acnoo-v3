'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import * as React from 'react';

type StaggeredWordFadeProps = {
    words: string[];
    className?: string;
};

export const RotateWords: React.FC<StaggeredWordFadeProps> = ({
    words,
    className = '',
}) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);
    const variants = {
        hidden: { opacity: 0 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.07 },
        }),
    };

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className={`inline-flex items-center  gradient_text ${className}`}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial="hidden"
                    animate={isInView ? 'show' : ''}
                    exit="hidden"
                    className="flex"
                >
                    {words[index].split('').map((letter, i) => (
                        <motion.span key={i} variants={variants} custom={i}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};
