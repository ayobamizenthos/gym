import transformationImage from "@/assets/transformation.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

interface TransformationsProps {
  onShowTrialModal: () => void;
}
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Transformations = ({ onShowTrialModal }: TransformationsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const stories = [
    { 
      name: "Chioma O.", 
      result: "Lost 25kg in 6 months", 
      quote: "6:45 didn't just change my body. It rewired my entire approach to life. The discipline I built here extends to everything I do." 
    },
    { 
      name: "Tunde A.", 
      result: "Gained 15kg lean muscle", 
      quote: "From skinny to strong. From doubt to certainty. The coaches here don't just train you - they transform you." 
    },
    { 
      name: "Funmi S.", 
      result: "Completed first 10K race", 
      quote: "I couldn't run 500 meters when I started. Now I'm a marathon runner. This gym builds champions." 
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-40 relative overflow-hidden" id="transformations">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Proof</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            REAL <span className="text-gradient-gold">RESULTS</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Words are cheap. Results speak. Here's what transformation looks like.
          </p>
        </motion.div>

        {/* Transformation Image with Parallax */}
        <motion.div 
          style={{ y: imageY }}
          className="max-w-6xl mx-auto mb-12 md:mb-20 rounded-3xl overflow-hidden relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative rounded-3xl overflow-hidden border border-border/50">
            <img 
              src={transformationImage} 
              alt="6:45 Fitness Transformation Results" 
              className="w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-20">
          {stories.map((story, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.15, duration: 0.6 }} 
              className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-10 hover-lift border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="text-primary text-5xl md:text-6xl font-display mb-3">"</div>
              <p className="text-foreground/80 mb-6 italic text-sm md:text-base leading-relaxed">{story.quote}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-bold text-base md:text-lg">{story.name}</p>
                <p className="text-primary font-bold text-sm">{story.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagneticButton
            onClick={onShowTrialModal}
            className="bg-gradient-to-r from-primary to-gold-dark text-primary-foreground font-bold rounded-full px-10 md:px-14 py-5 md:py-7 hover-glow-gold inline-flex items-center gap-3 text-base md:text-lg btn-premium"
          >
            WRITE YOUR SUCCESS STORY
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;
