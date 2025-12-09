import { Instagram, ArrowUpRight } from "lucide-react";
import coachOwolabi from "@/assets/coach-owolabi.jpg";
import coachDavid from "@/assets/coach-david.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const Trainers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const cardY1 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const trainers = [
    { 
      name: "Coach Owolabi", 
      specialty: "Strength & Transformation", 
      bio: "8+ years forging champions. Master of progressive overload and mental fortitude. Your body will change. Your limits will shatter.", 
      image: coachOwolabi,
      transform: cardY1,
      stats: { clients: "200+", experience: "8 Years" }
    },
    { 
      name: "Coach David", 
      specialty: "HIIT & Athletic Performance", 
      bio: "Elite conditioning specialist. Former athlete. Expert in explosive power and cardiovascular excellence. Prepare to be pushed beyond.", 
      image: coachDavid,
      transform: cardY2,
      stats: { clients: "150+", experience: "6 Years" }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-40 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background" id="trainers">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Elite Team</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            YOUR <span className="text-gradient-gold">COACHES</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified masters who have dedicated their lives to transforming others.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index} 
              style={{ y: trainer.transform }}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.2, duration: 0.8 }} 
              className="group relative overflow-hidden rounded-3xl hover-lift"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-3xl overflow-hidden border border-border/50 group-hover:border-primary/50 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  {/* Stats Row */}
                  <div className="flex gap-6 mb-4">
                    <div>
                      <div className="text-2xl md:text-3xl font-display text-primary">{trainer.stats.clients}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-display text-primary">{trainer.stats.experience}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Experience</div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display mb-2">{trainer.name}</h3>
                  <p className="text-primary font-bold text-sm md:text-base mb-3">{trainer.specialty}</p>
                  <p className="text-foreground/70 mb-6 text-sm md:text-base leading-relaxed">{trainer.bio}</p>
                  
                  <MagneticButton 
                    onClick={() => window.open("https://www.instagram.com/6.45hotelandsuites/", "_blank")}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group/btn"
                  >
                    <Instagram className="w-5 h-5" /> 
                    Follow on Instagram
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
