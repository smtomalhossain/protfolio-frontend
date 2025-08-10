const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[72px] max-sm:h-[60px] bg-background/70 backdrop-blur-sm shadow-sm py-2 transition-all duration-300">
      <div className="w-full px-5  h-full">
        <div className="relative z-[2] flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-semibold text-[var(--dark)]">
            <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white text-xl font-bold shadow-[0_4px_10px_rgba(94,96,206,0.3)]">
              TH
            </div>
            <span className="text-lg transition-[var(--transition)]">Tomal Hossain</span>
          </a>

          {/* Navigation */}
          <ul className="hidden lg:flex gap-8">
            {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((item) => {
              const sectionId = item.toLowerCase(); // e.g., "Skills" -> "skills"
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className="relative text-base font-medium text-[var(--dark)] py-1 transition-[var(--transition)] hover:text-blue-700"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>


          {/* Hire Me Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-2.5 text-white font-semibold rounded-[30px] bg-[#6c5ce7] shadow-[0_10px_20px_-5px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-[3px] hover:shadow-[0_15px_25px_-5px_rgba(99,102,241,0.5)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
