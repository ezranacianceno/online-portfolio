import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-4 scroll-mt-[70px]">
            <h2>Projects</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch gap-4">
                <Link href="https://upria.sence1.com/" target="_blank">
                    <div className="border flex flex-col gap-4 border-gray-300 p-6 rounded-2xl h-full flex-1">
                        <p className="text-xl text-denim underline">Upria</p>
                        <Image
                            src="/img_upria.png"
                            width={300}
                            height={300}
                            alt="Preview image of Upria's webiste"
                            className="w-full xl:h-[350px]"
                        />
                        <p>
                            Upria is a full-stack real estate platform I
                            contributed to while working in Sence1. It is
                            designed for real estate agents to manage property
                            listings and client inquiries efficiently.
                        </p>
                        <p>Tech Stack:</p>
                        <ul className="flex flex-wrap gap-y-2 text-dark-grey">
                            <li className="border rounded-full p-2 mr-3">
                                Next JS
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                Tailwind CSS
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                Shadcn
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                Laravel
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                MySQL
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                Docker
                            </li>
                        </ul>
                    </div>
                </Link>
                <Link
                    href="https://ezranacianceno.github.io/webportfolio/"
                    target="_blank"
                >
                    <div className="border flex flex-col gap-4 border-gray-300 p-6 rounded-2xl h-full flex-1">
                        <p className="text-xl text-denim underline">
                            Web Portfolio 2022-2024
                        </p>
                        <Image
                            src="/img_portfolio.png"
                            width={300}
                            height={300}
                            alt="Preview image of Upria's webiste"
                            className="w-full xl:h-[350px]"
                        />
                        <p>
                            This was my online portfolio from 2022 to 2024 to
                            showcase my practice projects and my skills in plain
                            HTML and CSS.
                        </p>
                        <p>Tech Stack:</p>
                        <ul className="flex flex-wrap gap-y-2 text-dark-grey">
                            <li className="border rounded-full p-2 mr-3">
                                HTML 5
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                CSS 3
                            </li>
                        </ul>
                    </div>
                </Link>
                <Link
                    href="https://ezranacianceno.github.io/frontend-mentor/FrontendMentor3/"
                    target="_blank"
                >
                    <div className="border flex flex-col gap-4 border-gray-300 p-6 rounded-2xl h-full flex-1">
                        <p className="text-xl text-denim underline">
                            Responsive and Accessbile Rating Component
                        </p>
                        <Image
                            src="/img_rating.png"
                            width={300}
                            height={300}
                            alt="Preview image of Upria's webiste"
                            className="w-full xl:h-[350px]"
                        />
                        <p>
                            A responsive and keyboard accessible component in
                            plain HTML, CSS, JavaScript (JQuery).
                        </p>
                        <p>Tech Stack:</p>
                        <ul className="flex flex-wrap gap-y-2 text-dark-grey">
                            <li className="border rounded-full p-2 mr-3">
                                HTML 5
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                CSS 3
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                JavaScript
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                jQuery
                            </li>
                        </ul>
                    </div>
                </Link>
                <Link
                    href="https://ezranacianceno.github.io/frontend-mentor/FrontendMentor2/"
                    target="_blank"
                >
                    <div className="border flex flex-col gap-4 border-gray-300 p-6 rounded-2xl h-full flex-1">
                        <p className="text-xl text-denim underline">
                            Responsive Results Summary Component
                        </p>
                        <Image
                            src="/img_results.png"
                            width={300}
                            height={300}
                            alt="Preview image of Upria's webiste"
                            className="w-full xl:h-[350px]"
                        />
                        <p>A responsive component in plain HTML and CSS.</p>
                        <p>Tech Stack:</p>
                        <ul className="flex flex-wrap gap-y-2 text-dark-grey">
                            <li className="border rounded-full p-2 mr-3">
                                HTML 5
                            </li>
                            <li className="border rounded-full p-2 mr-3">
                                CSS 3
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        </section>
    );
}
