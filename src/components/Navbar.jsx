import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../index.scss";
import { Link } from "react-router-dom";
import image from './logo.png';

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Events', url: '/events' },
    { title: 'Resources', url: '/resources' },
    { title: 'Team', url: '/teamrender' },
    { title: 'Join Us', url: 'https://forms.gle/4QDbDdNBTfHYCUAB6' }, 
    { title: 'Contact', url: '/contactus' }
];

const bgColor = 'bg-gray-800 bg-opacity-70';
const mobileBgColor = 'bg-gray-800 bg-opacity-100';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <nav className={`fixed z-10 top-0 w-full ${bgColor} shadow-md z-50`}>
                <div className="flex justify-between mx-auto items-center py-4 px-4 md:px-8 h-20 ">
                    <div className="flex-shrink-0">
                        <img src={image} alt="Logo" className="w-32 right-1" />
                    </div>
                    {!isMobile ? (
                        <ul className="flex-grow flex justify-center gap-8 md:gap-16 items-center text-center">
                            {navLinks.map((link, index) => (
                                <li key={index} className="text-sm text-white">
                                    {link.title === 'Join Us' ? (
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white cursor-pointer px-3 py-2 rounded transition duration-200 ease-in-out hover:bg-white hover:text-gray-800"
                                            style={{ userSelect: 'none' }}
                                        >
                                            {link.title}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.url}
                                            className="text-white cursor-pointer px-3 py-2 rounded transition duration-200 ease-in-out hover:bg-white hover:text-gray-800"
                                            style={{ userSelect: 'none' }}
                                        >
                                            {link.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex justify-end items-center text-white">
                            <FaBars onClick={toggleModal} className="text-white cursor-pointer" />
                        </div>
                    )}
                </div>
                {isMobile && showModal && (
                    <div className="fixed inset-0 flex justify-center items-center z-40 transition-opacity duration-300 ease-in-out">
                        <div className={`absolute inset-0 ${mobileBgColor} transition-opacity duration-300 ease-in-out`} />
                        <FaTimes
                            className="absolute top-6 right-4 text-white cursor-pointer"
                            onClick={toggleModal}
                            style={{ fontSize: '16px' }}
                        />
                        <div className="relative w-full">
                            <div className="flex flex-col gap-8 items-center justify-center h-full">
                                {navLinks.map((link, index) => (
                                    <span key={index} className="text-2xl text-white">
                                        {link.title === 'Join Us' ? (
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white cursor-pointer px-3 py-2 rounded transition duration-200 ease-in-out hover:bg-white hover:text-gray-800"
                                                style={{ userSelect: 'none' }}
                                                onClick={toggleModal}
                                            >
                                                {link.title}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.url}
                                                className="text-white cursor-pointer px-3 py-2 rounded transition duration-200 ease-in-out hover:bg-white hover:text-gray-800"
                                                style={{ userSelect: 'none' }}
                                                onClick={toggleModal}
                                            >
                                                {link.title}
                                            </Link>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
