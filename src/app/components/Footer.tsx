import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center space-x-2 mb-4">
                <a href="#" className="flex items-center gap-2 font-semibold text-[var(--dark)]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white text-xl font-bold shadow-[0_4px_10px_rgba(94,96,206,0.3)]">
                    TH
                  </div>
                  <span className="text-lg transition-[var(--transition)] text-white">Tomal Hossain</span>
                </a>
              </a>
              <p className="text-gray-200 dark:text-gray-400 text-sm tracking-wider">
                Creating digital experiences that inspire and elevate brands to new heights.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200 dark:text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-200  text-medium list-disc tracking-wider ml-5">
                <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                <li><a href="#about" className="hover:text-blue-500">About</a></li>
                <li><Link href="#skills" className="hover:text-blue-500">Skills</Link></li>
                <li><a href="#education" className="hover:text-blue-500">Education</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200 dark:text-white">Services</h3>
              <ul className="space-y-2 text-gray-200  text-medium list-disc tracking-wider ml-5">
                <li><a href="#" className="hover:text-blue-500">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-500">Responsive Design</a></li>
                <li><a href="#" className="hover:text-blue-500">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-blue-500">Branding</a></li>
                <li><a href="#" className="hover:text-blue-500">SEO Optimization</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200 dark:text-white">Stay Updated</h3>
              <p className="text-gray-200 dark:text-gray-400 text-sm mb-4 tracking-wider">Subscribe to my newsletter for the latest articles, projects, and updates.</p>
              <form className="flex items-center border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-2 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <FaArrowCircleRight className="w-5 h-5" />
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">© 2025 Tomal Hossain. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="https://github.com/Mudassar52" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mudassar-latif-95b02033b" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/share/1AgG3mUUfV/" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/@AITricksPro" className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Background Shapes (Placeholder) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </footer>

  );
}

export default Footer;
