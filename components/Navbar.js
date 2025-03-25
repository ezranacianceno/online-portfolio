'use client';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-neon-blue text-white text-lg sticky top-0 z-99">
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
                            <ul className="flex flex-col md:hidden gap-6 w-1/2 absolute z-[99] top-14 right-0 p-4 h-screen bg-neon-blue/80">
                                <li>
                                    <Link
                                        href="#about"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                        className="w-full flex text-white"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#projects"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                        className="w-full flex"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#skills"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex"
                                    >
                                        {' '}
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#certifications"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex"
                                    >
                                        Certifications
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="#certifications">Certifications</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
