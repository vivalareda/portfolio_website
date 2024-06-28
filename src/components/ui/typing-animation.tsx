"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

interface TypingAnimationProps {
  startAnimation: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ startAnimation }) => {
  const gradients = [
    "linear-gradient(90deg, rgba(255,105,180,1) 0%, rgba(255,255,0,1) 50%, rgba(0,191,255,1) 100%)",
    "linear-gradient(90deg, rgba(72,61,139,1) 0%, rgba(123,104,238,1) 50%, rgba(106,90,205,1) 100%)",
    "linear-gradient(90deg, rgba(255,69,0,1) 0%, rgba(255,140,0,1) 50%, rgba(255,165,0,1) 100%)",
    "linear-gradient(90deg, rgba(173,216,230,1) 0%, rgba(135,206,250,1) 50%, rgba(70,130,180,1) 100%)",
    "linear-gradient(90deg, rgba(189,183,107,1) 0%, rgba(238,232,170,1) 50%, rgba(245,245,220,1) 100%)",
    "linear-gradient(90deg, rgba(255,182,193,1) 0%, rgba(255,192,203,1) 50%, rgba(255,240,245,1) 100%)",
    "linear-gradient(90deg, rgba(0,100,0,1) 0%, rgba(34,139,34,1) 50%, rgba(46,139,87,1) 100%)",
    "linear-gradient(90deg, rgba(70,130,180,1) 0%, rgba(100,149,237,1) 50%, rgba(30,144,255,1) 100%)",
    "linear-gradient(90deg, rgba(255,99,71,1) 0%, rgba(255,127,80,1) 50%, rgba(255,69,0,1) 100%)",
    "linear-gradient(90deg, rgba(219,112,147,1) 0%, rgba(255,105,180,1) 50%, rgba(255,20,147,1) 100%)"
  ];
  const consoleRef = useRef(null);
  const devopsRef = useRef<HTMLHeadingElement>(null!);
  const [text, setText] = useState("DevOps.");
  const [currentIndex, setCurrentIndex] = useState(5);
  const [increasing, setIncreasing] = useState(true);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [gradientStyle, setGradientStyle] = useState({});

  const updateGradient = (gradient: string) => {
    setGradientStyle({
      backgroundImage: gradient,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      WebkitTextFillColor: 'transparent'
    });
  };

  const textArray = ["DevOps.", "Frontend.", "Backend.", "Fullstack."];

  useEffect(() => {
    if (!startAnimation) return;

    if (Object.keys(gradientStyle).length === 0) {
      updateGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }

    if (increasing) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
        }, 300);

        return () => clearTimeout(timeout);
      } else {
        const pauseTimeout = setTimeout(() => {
          setIncreasing(false);
        }, 2000);

        return () => clearTimeout(pauseTimeout);
      }
    } else {
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentIndex(currentIndex - 1);
        }, 300);

        return () => clearTimeout(timeout);
      } else {
        const nextArrayIndex = (arrayIndex + 1) % textArray.length;
        setArrayIndex(nextArrayIndex);
        setText(textArray[nextArrayIndex]);
        updateGradient(gradients[Math.floor(Math.random() * gradients.length)]);
      }
    }

    if (currentIndex === text.length) {
      setIncreasing(false);
    }

    if (currentIndex === 0 && !increasing) {
      setIncreasing(true);
    }
  }, [currentIndex, text.length, increasing, startAnimation]);

  useEffect(() => {
    if (!startAnimation) return;
    if (consoleRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, delay: 1});
      tl.to(consoleRef.current, { duration: 0, autoAlpha: 1 })
        .to(consoleRef.current, { duration: 0, autoAlpha: 0, delay: 0.4 });
    }

  }, [startAnimation]);

  useEffect(() => {
    if (startAnimation) {
      gsap.fromTo("#topAnimationText", { opacity: 0 }, { opacity: 1, duration: 1 });
      gsap.fromTo("#animation-component", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });

    }
  }, [startAnimation]);

  return (
    <div className="w-full flex flex-col items-center text-center">
      <h1 id="topAnimationText" ref={devopsRef} className="text-4xl font-bold tracking-tight text-black sm:text-6xl p-4 opacity-0">
        I specialize in
      </h1>
      <div className="flex items-center justify-center">
        <h1
          id="animation-component"
          ref={devopsRef}
          style={{ ...gradientStyle, textAlign: 'left' }}
          className="text-4xl font-bold tracking-tight sm:text-6xl p-1 opacity-0"
        >
          {text.substring(0, currentIndex)}
        </h1>
        <div
          id="animation-component"
          ref={consoleRef}
          className="text-4xl font-bold tracking-tight text-black sm:text-6xl p-1 opacity-0"
        >
          _
        </div>
      </div>
    </div>
  );
};

export default TypingAnimation;
