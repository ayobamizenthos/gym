import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const handleJoinNow = () => {
    window.open("https://wa.me/2348035009283?text=I%20want%20to%20join%206:45%20Fitness", "_blank");
  };

  const handleFreeTrial = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: backgroundY, scale }}
        className="absolute inset-0"
      >
        <img 
          src={heroImage} 
          alt="6:45 Fitness Premium Training Facility" 
          className="w-full h-full object-cover"
        />
        {/* Premium multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background"></div>
      </motion.div>

      {/* Animated Premium Shapes */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-accent/10 blur-[100px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold"></span>
            <span className="text-xs md:text-sm font-medium text-foreground/90">Lagos' Most Elite Fitness Destination</span>
          </motion.div>

          {/* Main Headline - God-level Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] mb-4 md:mb-6"
          >
            <span className="block text-foreground text-shadow-hero">DISCIPLINE</span>
            <span className="block text-foreground text-shadow-hero">STARTS AT</span>
            <span className="block text-gradient-gold text-shadow-glow">6:45</span>
          </motion.h1>
          
          {/* Compelling Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl lg:text-2xl text-foreground/70 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed"
          >
            Where ordinary ends and extraordinary begins. Transform your body, forge your mindset, join a community that refuses to settle.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-20"
          >
            <MagneticButton 
              onClick={handleJoinNow}
              className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-5 md:py-7 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full inline-flex items-center justify-center gap-3 group btn-premium hover-glow-gold"
            >
              BEGIN YOUR TRANSFORMATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </MagneticButton>
            
            <MagneticButton 
              onClick={handleFreeTrial}
              className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-5 md:py-7 border border-foreground/20 text-foreground hover:bg-foreground/5 font-medium backdrop-blur-sm rounded-full inline-flex items-center justify-center gap-3 group glass-effect"
            >
              <Play className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              EXPLORE THE FACILITY
            </MagneticButton>
          </motion.div>

          {/* Stats - Premium Display */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 md:flex md:gap-16"
          >
            {[
              { value: "500+", label: "Champions Made" },
              { value: "15+", label: "Elite Classes" },
              { value: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="group cursor-default text-center md:text-left"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-1 group-hover:text-gradient-gold transition-all">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Discover More</span>
          <div className="w-7 h-12 rounded-full border-2 border-primary/40 flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
