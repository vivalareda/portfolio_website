"use client";

import React, { useState, useEffect } from 'react';

const phrases = ['React.', 'DevOps.', 'Python.'];
const gradients = [
    "bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text",
    "bg-gradient-to-r from-indigo-800 via-indigo-400 to-indigo-600 text-transparent bg-clip-text",
    "bg-gradient-to-r from-red-500 via-orange-500 to-orange-400 text-transparent bg-clip-text",
    "bg-gradient-to-r from-light-blue-200 via-light-blue-400 to-blue-600 text-transparent bg-clip-text",
    "bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 text-transparent bg-clip-text",
    "bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600 text-transparent bg-clip-text",
    "bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-transparent bg-clip-text",
    "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-transparent bg-clip-text",
    "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text",
    "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
];

const ConsoleText: React.FC = () => {
    const [text, setText] = useState<string>(' ');
    const [currentGradient, setCurrentGradient] = useState<string>(gradients[0]);
    const [arrayIndex, setArrayIndex] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateDisplay();
        }, 200);

        const blinkId = setInterval(() => {
            const consoleElem = document.getElementById('console');
            if (consoleElem) {
                consoleElem.classList.toggle('hidden');
            }
        }, 500);

        return () => {
            clearInterval(intervalId);
            clearInterval(blinkId);
        };
    }, [currentIndex, direction, currentGradient, arrayIndex]);

    const updateDisplay = () => {
        const phrase = phrases[arrayIndex];
        if (!currentGradient) {
            setCurrentGradient(gradients[Math.floor(Math.random() * gradients.length)]);
        }
        if (currentIndex === phrase.length) {
            setTimeout(() => {
                setDirection(-1);
            }, 800);
        } else if (currentIndex === 0 && direction === -1) {
            setTimeout(() => {
                setCurrentGradient(gradients[Math.floor(Math.random() * gradients.length)]);
                setDirection(1);
                setArrayIndex(arrayIndex === phrases.length - 1 ? 0 : arrayIndex + 1);
                setCurrentIndex(0);
            }, 300);
        } else if (currentIndex <= phrase.length && direction === 1) {
            setText(phrase.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
        } else if (direction === -1) {
            setText(phrase.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className='text-white font-bold text-4xl h-52 w-96 mx-auto text-left flex items-center justify-center'>
            <span>I used&nbsp;</span>
            <span id='text' className={currentGradient}>{text}</span>
            <div className='inline-block ml-1' id='console'>&#95;</div>
        </div>
    );
};

export default ConsoleText;
