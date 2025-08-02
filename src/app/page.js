import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-md flex justify-between items-center px-6 py-3 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // <-- Place logo in public folder
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          {/* <span className="ml-3 text-xl font-semibold text-gray-800">MyApp</span> */}
        </div>

        {/* Hamburger Icon (SVG, no library needed) */}
        <button className="p-2 rounded-md hover:bg-white/40 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Page Content */}
      <div className="pt-20 text-center text-3xl text-gray-900">hello</div>
    </div>
  );
}
