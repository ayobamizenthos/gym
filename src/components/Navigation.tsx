import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Membership", href: "#membership" },
    { name: "Trainers", href: "#trainers" },
    { name: "Classes", href: "#classes" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  const handleJoinNow = () => {
    window.open("https://wa.me/2348000000000?text=I%20want%20to%20join%206%3A45%20Fitness", "_blank");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "glass border-b border-white/5 shadow-2xl" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 md:h-24">
            {/* Logo */}
            <a href="#" className="relative group z-50">
              <span className="text-2xl md:text-3xl lg:text-4xl font-display tracking-wider">
                6:45 <span className="text-gradient-gold">FITNESS</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors link-underline uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <MagneticButton
                onClick={handleJoinNow}
                className="bg-gradient-to-r from-primary to-gold-dark text-primary-foreground font-bold rounded-full px-8 py-4 hover-glow-gold btn-premium"
              >
                JOIN NOW
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-12 h-12 flex items-center justify-center text-foreground z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-8">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-display text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12"
              >
                <MagneticButton
                  onClick={() => {
                    handleJoinNow();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-primary to-gold-dark text-primary-foreground font-bold rounded-full px-12 py-6 text-xl hover-glow-gold btn-premium"
                >
                  JOIN NOW
                </MagneticButton>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-0 right-0 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  55 Gbeleyi Avenue, Alakuko, Lagos
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Mon-Sat: 5:30 AM - 9:00 PM
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
