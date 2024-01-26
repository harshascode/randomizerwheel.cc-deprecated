"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return isMounted ? (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-10 max-md:flex-col">
      <p>Copyright © 2024 Randomizer Wheel</p>
      <div className="flex gap-x-9">
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact-us">Contact</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </div>
    </footer>
  ) : null;
};

export default Footer;




// const Footer = () => {
//   return (
//     <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-10 max-md:flex-col">
//       <p>Copyright © 2024 Randomizer Wheel</p>
//       <div className="flex gap-x-9">
//         <Link href="/terms">Terms & Conditions</Link>
//         <Link href="/privacy-policy">Privacy Policy</Link>
//         <Link href="/contact-us">Contact</Link>
//         <Link href="/disclaimer">Disclaimer</Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;