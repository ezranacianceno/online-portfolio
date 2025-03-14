import { Lexend, Osawald, Oswald } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
    variable: '--font-lexend',
    subsets: ['latin'],
});

const oswald = Oswald({
    variable: '--font-oswald',
    subsets: ['latin'],
    weight: ['400'],
});

export const metadata = {
    title: 'Ezra Nacianceno',
    description:
        'Ezra Nacianceno is a skilled front-end developer specializing in Next.js and Tailwind CSS, with three years of experience. Explore his portfolio, projects, and professional credentials.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${lexend.variable} ${oswald.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
