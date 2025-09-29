// import Link from 'next/link';
// 'use client';

import Image from 'next/image';

export default function Header() {
  const locationsLink = 'Locations';
  const contactLink = 'Contact';
  const aboutLink = 'Our company';
  const homeLink = 'Home';

  // TODO: rózne logo w zalezności od view mode
  // TODO: jak ustawić ze hamburger pojawia się tylko gdy jest mobile
  return (
    <header>
      <Image src='/logo-dark.png' alt='designo logo' width={200} height={27} />
      <Image
        src='/mobile/icon-hamburger.svg'
        alt='menu'
        width={20}
        height={20}
      />
    </header>
    // <div>
    //   <nav className='container relative flex flex-wrap items-center justify-between mx-auto'>
    //     <Link href='/' className='font-bold text-3xl'>
    //       {homeLink}
    //     </Link>

    //     <div className='space-x-4 text-xl'>
    //       <Link href='/about'>{aboutLink}</Link>
    //       <Link href='/locations'>{locationsLink}</Link>
    //       <Link href='/contact'>{contactLink}</Link>
    //     </div>
    //   </nav>
    // </div>
  );
}
