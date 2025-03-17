import Image from 'next/image';
export default function Name() {
    return (
        <div className="container flex gap-4 items-center">
            <Image
                src="/img_coffee.png"
                width={50}
                height={50}
                alt="coffee icon"
                className="w-14 h-14"
            />
            <div className="flex flex-col">
                <h1 className="font-varela text-dark-grey">Ezra Nacianceno</h1>
                <p>Front-End Developer</p>
            </div>
        </div>
    );
}
