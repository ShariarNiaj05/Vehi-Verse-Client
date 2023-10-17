
const Footer = () => {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-3 text-center md:justify-between">
  <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
    © 2023 VehiVerse
  </p>
  <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
    <li>
      <a
        href="#"
        className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-sky-500 focus:text-sky-500"
      >
        About Us
      </a>
    </li>
   
    <li>
      <a
        href="#"
        className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-sky-500 focus:text-sky-500"
      >
        Contact Us
      </a>
    </li>
  </ul>
</footer>
    );
};

export default Footer;