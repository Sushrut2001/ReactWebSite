import { useEffect, useState } from 'react'
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.webp'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpg'

import myImage from '../assets/Banner.png'
const HeroSection = () => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const [isHovered, setIshovered] = useState(false);

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ]


    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);// cleanup on unmount
    }, [isHovered]);

    const nextSlide = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setcurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };


    return (
        <div>
            <div className="">
                <img src={myImage} alt="" className='md:h-screen h-auto w-screen ' />
            </div>
            <div className='bg-[#0C4D2E] h-screen'>
                <div className='pt-5' onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
                    <div className='flex justify-center'>
                        <div>

                            <img className='h-[500px] w-[500px]' src={images[currentIndex]} alt={`Slide ${currentIndex}`}></img>
                        </div>
                    </div>

                    <button onClick={prevSlide}>Prev</button>
                    <button onClick={nextSlide}>Next</button>
                    <div>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setcurrentIndex(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                                    }`}
                            ></button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeroSection