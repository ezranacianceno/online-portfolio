import { IoIosInformationCircleOutline } from 'react-icons/io';

export default function About() {
    return (
        <section
            id="about"
            className="container flex flex-col gap-4 scroll-mt-[70px]"
        >
            <div className="flex items-center gap-4">
                <IoIosInformationCircleOutline
                    className="text-denim"
                    size={30}
                />
                <h2>About</h2>
            </div>
            <p className="leading-7">
                I am a Front-End Developer specializing in Next JS and Tailwind
                CSS. I have 3 years of work experience, creating modern,
                accessible, search-engine-optimized (SEO) websites and web
                applications. I also have hands-on experience with Content
                Management Systems such as WordPress. My background in project
                management, adaptability, and perseverance empower me to
                collaborate effectively in team environments and successful
                project outcomes.
            </p>
        </section>
    );
}
