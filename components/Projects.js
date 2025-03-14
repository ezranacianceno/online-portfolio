import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-4">
            <h2>Projects</h2>
            <Link href="https://upria.sence1.com/" target="_blank">
                <div className="border flex flex-col gap-4 border-gray-300 p-6 rounded-2xl">
                    <p className="text-xl text-denim underline">Upria</p>
                    <Image
                        src="/img_upria.png"
                        width={300}
                        height={300}
                        alt="Preview image of Upria's webiste"
                        className="w-full"
                    />
                    <p>
                        Upria is a full-stack real estate platform designed for
                        real estate agents to manage property listings and
                        client inquiries efficiently.
                    </p>
                    <p>Tech Stack:</p>
                    <ul className="flex flex-wrap gap-y-2 mt-1 text-dark-grey">
                        <li className="border rounded-full p-2 mr-3">
                            Next JS
                        </li>
                        <li className="border rounded-full p-2 mr-3">
                            Tailwind CSS
                        </li>
                        <li className="border rounded-full p-2 mr-3">Shadcn</li>
                        <li className="border rounded-full p-2 mr-3">
                            Laravel
                        </li>
                        <li className="border rounded-full p-2 mr-3">MySQL</li>
                        <li className="border rounded-full p-2 mr-3">Docker</li>
                    </ul>
                </div>
            </Link>
        </section>
    );
}
