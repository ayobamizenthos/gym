import { Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Membership", href: "#membership" },
    { name: "Classes", href: "#classes" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" }
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/2348000000000", label: "WhatsApp" }
  ];

  return (
    <footer className="py-16 md:py-24 border-t border-border/30 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display mb-4"
            >
              6:45 <span className="text-gradient-gold">FITNESS</span>
            </motion.h3>
            <p className="text-lg md:text-xl text-primary font-bold italic mb-4">"Discipline Starts at 6:45"</p>
            <p className="text-muted-foreground max-w-md">
              Lagos' most elite fitness destination. Where excuses die and champions rise. Your transformation begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <MagneticButton
                    key={i}
                    onClick={() => window.open(social.href, "_blank")}
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </MagneticButton>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              55 Gbeleyi Avenue, Alakuko, Lagos
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Mon-Sat: 5:30 AM - 9:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {new Date().getFullYear()} 6:45 Fitness. All rights reserved. Built for Champions.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Designed for excellence. Powered by discipline.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
