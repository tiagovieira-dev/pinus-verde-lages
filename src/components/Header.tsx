import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-display font-bold text-lg ${scrolled ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground/20 backdrop-blur text-primary-foreground'}`}>
            SP
          </div>
          <div>
            <span className={`font-display font-bold text-lg leading-tight block ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Serra do Pinus
            </span>
            <span className={`text-xs tracking-widest uppercase ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
              Madeireira
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
