import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Membership from "@/components/Membership";
import Classes from "@/components/Classes";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Store from "@/components/Store";
import Blog from "@/components/Blog";
import Tools from "@/components/Tools";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import CursorFollower from "@/components/CursorFollower";
import FreeTrialModal from "@/components/FreeTrialModal";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const images = [
      "/src/assets/hero-gym.jpg",
      "/src/assets/about-gym.jpg"
    ];
    
    Promise.all(
      images.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  }, []);

  // Show free trial modal after 5 seconds
  useEffect(() => {
    if (!isLoading) {
      const hasSeenModal = sessionStorage.getItem('seenTrialModal');
      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setShowTrialModal(true);
          sessionStorage.setItem('seenTrialModal', 'true');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <CursorFollower />
      
      <FreeTrialModal 
        isOpen={showTrialModal} 
        onClose={() => setShowTrialModal(false)} 
      />

      <PageTransition>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative"
        >
          {/* Global Background Effects */}
          <motion.div
            style={{ y: backgroundY }}
            className="fixed inset-0 -z-10 pointer-events-none"
          >
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px]" />
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-gold-light to-primary origin-left z-50"
          />

          <Navigation />
          <Hero />
          <About />
          <Membership />
          <Classes />
          <Transformations onShowTrialModal={() => setShowTrialModal(true)} />
          <Testimonials />
          <Store />
          <Blog />
          <Tools />
          <Newsletter />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </motion.main>
      </PageTransition>
    </>
  );
};

export default Index;
