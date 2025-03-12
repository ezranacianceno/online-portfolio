'use client';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-rose-quartz text-white text-lg">
            <div className="container p-4 flex justify-between">
                <Link href="/">Ezra</Link>
                <div className="flex items-center">
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <IoMdClose size={24} />
                        ) : (
                            <RxHamburgerMenu size={20} />
                        )}
                    </button>
                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="">
                            <ul className="flex flex-col md:hidden gap-6 w-1/2 absolute z-[99] top-14 right-0 p-4 h-full bg-rose-quartz/80">
                                <li>
                                    <Link
                                        href="#home"
                                        onClick={() => {
                                            // e.preventDefault();
                                            // document
                                            //     .getElementById('home')
                                            //     .scrollIntoView({
                                            //         behavior: 'smooth',
                                            //     });
                                            setIsOpen(!isOpen);
                                        }}
                                        className="w-full flex"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex"
                                    >
                                        {' '}
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#about"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex"
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <li>
                        <Link href="#home">Home</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
