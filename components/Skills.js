export default function Skills() {
    return (
        <section
            id="skills"
            className="container flex flex-col gap-4 scroll-mt-[60px]"
        >
            <h2>Skills</h2>
            <ul className="flex font-sans flex-wrap gap-y-2 text-white">
                <li className="border rounded-full p-2 mr-3 bg-indigo">
                    React
                </li>
                <li className="border rounded-full p-2 mr-3 bg-indigo">
                    Next JS
                </li>
                <li className="border rounded-full p-2 mr-3 bg-indigo">
                    Tailwind CSS
                </li>
                <li className="border rounded-full p-2 mr-3 bg-indigo">
                    Strapi
                </li>
                <li className="border rounded-full p-2 mr-3 bg-indigo">
                    WordPress
                </li>
            </ul>
            <ul className="flex font-sans flex-wrap gap-y-2">
                <li className="border rounded-full p-2 mr-3">HTML5</li>
                <li className="border rounded-full p-2 mr-3">CSS3</li>
                <li className="border rounded-full p-2 mr-3">JavaScript</li>
                <li className="border rounded-full p-2 mr-3">Bootstrap</li>
                <li className="border rounded-full p-2 mr-3">Shadcn</li>
                <li className="border rounded-full p-2 mr-3">MySQL</li>
                <li className="border rounded-full p-2 mr-3">MongoDB</li>
                <li className="border rounded-full p-2 mr-3">HubSpot</li>
            </ul>

            <h3>Tools</h3>
            <ul className="flex flex-wrap gap-y-2">
                <li className="border rounded-full p-2 mr-3">GitHub</li>
                <li className="border rounded-full p-2 mr-3">Docker</li>
                <li className="border rounded-full p-2 mr-3">Postman</li>
                <li className="border rounded-full p-2 mr-3">Figma</li>
            </ul>
        </section>
    );
}
