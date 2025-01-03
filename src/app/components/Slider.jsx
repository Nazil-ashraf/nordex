

import React, { useState, useEffect } from "react";
import "../globals.css";
import manImage from "../../../public/images/main.jpeg";
import cableImage from "../../../public/images/cable.jpeg";
import wireImage from "../../../public/images/wire.jpeg";
import Image from "next/image";

const Slider = () => {
    const [currDeg, setCurrDeg] = useState(0);
    const [active, setActive] = useState(0);

    const slides = [
        {
            image: cableImage,
            year: "1483 - 1484",
            name: "BIRTH OF VENUS",
        },
        {
            image: wireImage,
            year: "1481 - 1484",
            name: "BIRTH OF VENUS",
        }, {
            image: manImage,
            year: "1481 - 1484",
            name: "BIRTH OF VENUS",
        },


    ];

    const handleNext = () => {
        const newDeg = currDeg - 360 / slides.length;
        const newActive = active === slides.length - 1 ? 0 : active + 1;
        setCurrDeg(newDeg);
        setActive(newActive);
    };
    console.log(currDeg, 'av')

    const handlePrev = () => {
        const newDeg = currDeg + 180;
        const newActive = active === 0 ? slides.length - 1 : active - 1;
        setCurrDeg(newDeg);
        setActive(newActive);
    };

    // Auto-rotation logic
    useEffect(() => {
        const autoRotate = setInterval(() => {
            handleNext();
        }, 4000); // Rotate every 4 seconds

        return () => clearInterval(autoRotate); // Cleanup on component unmount
    }, [currDeg, active]); // Dependencies

    return (
        <div className="slider">
            <div
                className="wrapper"
                style={{
                    transform: `rotateY(${currDeg}deg)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`item item${index + 1} ${active === index ? "active" : ""}`}
                        style={{
                            transform: `rotateY(${(360 / slides.length) * index
                                }deg) translateZ(300px)`,
                        }}
                    >
                        <Image
                            src={slide.image}
                            alt="hero image"
                            width={300}
                            height={300}
                            className={'rounded-xl  sm:w-[200px] md:w-[200px] lg:w-[300px]'}
                        />
                    </div>
                    // <div
                    //     key={index}
                    //     className={`item item${index + 1} ${active === index ? "active" : ""}`}
                    //     style={{ backgroundImage: `url(${slide.image})` }}
                    // >
                    //     <div className="item__info">
                    //         <p className="item__year">
                    //             <span>{slide.year}</span>
                    //         </p>
                    //         <p className="item__name">
                    //             <span>{slide.name}</span>
                    //         </p>
                    //         <a href="#" className="btn">
                    //             <span>Discover more</span>
                    //         </a>
                    //     </div>
                    // </div>
                ))}
            </div>

        </div>
    );
};

export default Slider;

