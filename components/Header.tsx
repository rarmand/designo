import Link from "next/link";

export default function Header() {
    const locationsLink = 'Locations';
    const contactLink = 'Contact';
    const aboutLink = 'Our company';
    const homeLink = 'Home';

    return (
        <div>
            <nav className='container relative flex flex-wrap items-center justify-between mx-auto'>
                <Link href='/' className='font-bold text-3xl'>
                    {homeLink}
                </Link>

                <div className='space-x-4 text-xl'>
                    <Link href='/about'>{aboutLink}</Link>
                    <Link href='/locations'>{locationsLink}</Link>
                    <Link href='/contact'>{contactLink}</Link>
                </div>
            </nav>
        </div>
    );
}