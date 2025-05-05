/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect } from "react";

const BirthdayCountdown = () => {
    // Set countdown for 10 days from now
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 10);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime(); // ✅ Type-safe

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center text-white rounded-lg shadow-lg">
            <div className="flex items-center text-lg space-x-2 lg:space-x-4">
                <div className="flex flex-col items-center">
                    <span className="font-bold">{timeLeft.days}</span>
                </div><span>:</span>
                <div className="flex flex-col items-center">
                    <span className="font-bold">{timeLeft.hours}</span>
                </div><span>:</span>
                <div className="flex flex-col items-center">
                    <span className="font-bold">{timeLeft.minutes}</span>
                </div><span>:</span>
                <div className="flex flex-col items-center">
                    <span className="font-bold">{timeLeft.seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default BirthdayCountdown;
