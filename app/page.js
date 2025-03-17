import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Name from '@/components/Name';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-8">
                {/* <div className="bg-[#96B3FF]"> */}
                <Name />
                <About />
                {/* </div> */}
                <Projects />
                <Skills />
                <Certifications />
            </div>
        </>
    );
}
