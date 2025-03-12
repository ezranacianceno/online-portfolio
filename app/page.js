import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Name from '@/components/Name';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container flex flex-col gap-8">
                <Name />
                <About />
                <Skills />
                <Certifications />
            </div>
        </>
    );
}
