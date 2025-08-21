import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu

  return (
    <>
      <nav
        className="shadow-md fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: '#ffce08ff', color: 'black' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo with image */}
          <div className="flex items-center cursor-pointer space-x-3">
            <img src="/images/aferalogo.png" alt="Redclub Logo" className="h-28 w-28 " />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 uppercase font-bold text-sm">
            <a href="/" className="hover:text-yellow-300 transition duration-300">Home</a>
            <a href="/about" className="hover:text-yellow-300 transition duration-300">About Us</a>
            <a href="/whyafera" className="hover:text-yellow-300 transition duration-300">WhyAfera</a>
            <a href="/brands" className="hover:text-yellow-300 transition duration-300">Brands</a>
       
            <a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none relative w-6 h-6"
              aria-label="Toggle menu"
            >
              {/* Close (X) icon */}
              <svg
                className={`absolute top-0 left-0 w-6 h-6 transition-all duration-500 ease-in-out
                  ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-90'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>

              {/* Hamburger icon */}
              <svg
                className={`absolute top-0 left-0 w-6 h-6 transition-all duration-500 ease-in-out
                  ${isOpen ? 'opacity-0 scale-75 -rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu with smooth animation */}
        <div
          className={`md:hidden px-4 overflow-hidden transition-all duration-500 ease-in-out`}
          style={{
            backgroundColor: '#ffffffff',
            maxHeight: isOpen ? '500px' : '0px',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="pt-2 pb-4 space-y-2">
            <a href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300 transition duration-300">Home</a>
            <a href="/about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300 transition duration-300">About Us</a>
            <a href="/whyafera" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300 transition duration-300">WhyAfera</a>
            <a href="/brands" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300 transition duration-300">Brands</a>
            {/* <a href="/why-afera" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300 transition duration-300">Why Afera</a> */}
            <a href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
