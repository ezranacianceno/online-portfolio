import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="font-varela text-dark-grey">Online Portfolio</h1>
                <p className="text-denim">Hello everyone! What is up?</p>
            </div>
        </>
    );
}
