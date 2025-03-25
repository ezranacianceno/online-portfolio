import Link from 'next/link';

export default function Certifications() {
    return (
        <section id="certifications" className="container scroll-mt-[60px]">
            <h2 className="mb-4">Certifications</h2>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">
                        Zuitt{"'"}s Web Developer Course
                    </p>
                    <p>Zuitt Coding Bootcamp</p>
                    <p>September 2022</p>
                    <Link
                        href="http://share.zertify.zuitt.co/certificate/dac754c6-eeb7-4dd4-ace9-84dcce293935"
                        className="underline hover:opacity-50"
                    >
                        View Certificate
                    </Link>
                </div>
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">Introduction to PHP</p>
                    <p>Zuitt Coding Bootcamp</p>
                    <p>November 2022</p>
                    <Link
                        href="http://share.zertify.zuitt.co/certificate/1956b606-8b2e-4e12-8291-7f176f3d0bcb"
                        className="underline hover:opacity-50"
                    >
                        View Certificate
                    </Link>
                </div>
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">
                        Introduction to Laravel
                    </p>
                    <p>Zuitt Coding Bootcamp</p>
                    <p>November 2022</p>
                    <Link
                        href="http://share.zertify.zuitt.co/certificate/2ec6d05e-ac82-4939-b64d-c12236cfe98f"
                        className="underline hover:opacity-50"
                    >
                        View Certificate
                    </Link>
                </div>
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">
                        Introduction to MySQL
                    </p>
                    <p>Zuitt Coding Bootcamp</p>
                    <p>November 2022</p>
                    <Link
                        href="http://share.zertify.zuitt.co/certificate/639238ea-92e6-42d6-a768-3b51f93eef1d"
                        className="underline hover:opacity-50"
                    >
                        View Certificate
                    </Link>
                </div>
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">
                        Introduction to Unit Testing
                    </p>
                    <p>Zuitt Coding Bootcamp</p>
                    <p>November 2022</p>
                    <Link
                        href="http://share.zertify.zuitt.co/certificate/7f84c95f-4c6a-4e8d-8a1c-d17d9489adb6"
                        className="underline hover:opacity-50"
                    >
                        View Certificate
                    </Link>
                </div>
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">
                        HubSpot CMS for Developers
                    </p>
                    <p>HubSpot Academy</p>
                    <p>July 2024 - August 2025</p>
                    <Link
                        href="https://app.hubspot.com/academy/achievements/9c8rlgds/en/1/ezra-nacianceno/hubspot-cms-for-developers"
                        className="underline hover:opacity-50"
                    >
                        View Certificate
                    </Link>
                </div>
                <div className="border-1 border-black rounded-lg p-4">
                    <p className="text-md font-semibold">
                        The Fundamentals of Digital Marketing
                    </p>
                    <p>Google Digital Garage</p>
                    <p>January 2022</p>
                    <p>Credential ID XBK TE4 LJ3</p>
                </div>
            </div>
        </section>
    );
}
