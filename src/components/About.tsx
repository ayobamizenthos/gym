import { Dumbbell, Users, Target, Trophy, Zap, Heart } from "lucide-react";
import aboutImage from "@/assets/about-gym.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const features = [
    { icon: Dumbbell, title: "World-Class Equipment", description: "Premium machines" },
    { icon: Users, title: "Elite Coaching", description: "Certified masters" },
    { icon: Target, title: "Precision Programs", description: "Results-driven" },
    { icon: Trophy, title: "Proven Excellence", description: "500+ transformations" },
    { icon: Zap, title: "Electric Atmosphere", description: "Pure energy" },
    { icon: Heart, title: "Unbreakable Community", description: "Family of champions" }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-40 relative overflow-hidden" id="about">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Side - Premium Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <motion.div style={{ y: imageY }}>
                <img 
                  src={aboutImage} 
                  alt="6:45 Fitness World-Class Training Facility" 
                  className="w-full h-[350px] md:h-[550px] lg:h-[650px] object-cover scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
            </div>
            
            {/* Premium Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 glass-card rounded-2xl p-5 md:p-8 shadow-xl border border-primary/20"
            >
              <div className="text-5xl md:text-6xl font-display text-gradient-gold mb-2">5+</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">Years of Excellence</div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="hidden md:block absolute -top-6 -left-6 w-28 h-28 border-l-2 border-t-2 border-primary/40 rounded-tl-3xl"></div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-28 h-28 border-r-2 border-b-2 border-accent/40 rounded-br-3xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Our Legacy</span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mt-4 mb-6">
              WHERE <span className="text-gradient-gold">CHAMPIONS</span> ARE FORGED
            </h2>
            
            <div className="section-divider mb-8 !mx-0"></div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              At 6:45 Fitness, transformation is not a goal - it's a guarantee. Nestled in the heart of Alakuko, Lagos, we've built more than a gym. We've created a sanctuary where ambition meets action, where excuses die, and where champions are born.
            </p>
            
            <p className="hidden md:block text-lg text-muted-foreground leading-relaxed mb-12">
              Our world-class facility combines elite equipment with master-level coaching to deliver results that speak louder than promises. This is where your transformation story begins.
            </p>

            {/* Features Grid - Premium Mobile Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Premium Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 md:mt-40 text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gradient-gold leading-tight">
            "THE BODY ACHIEVES WHAT THE MIND BELIEVES"
          </blockquote>
          <cite className="block mt-4 md:mt-6 text-sm md:text-base text-muted-foreground font-medium tracking-widest">
            - THE 6:45 PHILOSOPHY
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
