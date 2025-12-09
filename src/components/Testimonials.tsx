import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      quote: "6:45 Fitness didn't just transform my body - it transformed my business. The discipline I learned here changed everything. My productivity doubled. My confidence tripled. Best investment I ever made."
    },
    {
      name: "Chioma Okafor",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      quote: "I've tried every gym in Lagos. 6:45 is different. The trainers push you to limits you didn't know existed. The community celebrates every win. Lost 15kg in 4 months and gained a family."
    },
    {
      name: "Emeka Williams",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      quote: "The 6:45 AM sessions rewired my brain. I'm more focused, more energized, more present. My code is cleaner. My deadlines are always met. This gym is a performance multiplier."
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-40 relative overflow-hidden" id="testimonials">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={testimonialBg}
          alt="6:45 Fitness Gym"
          className="w-full h-[130%] object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </motion.div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Voices</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            WHAT <span className="text-gradient-gold">CHAMPIONS</span> SAY
          </h2>
          
          <div className="section-divider mb-6"></div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it. Hear from those who've lived the transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative glass-card rounded-3xl p-6 md:p-10 border border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col hover-lift">
                  {/* Quote Icon */}
                  <div className="absolute -top-5 -right-3 md:-top-6 md:-right-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-base md:text-lg text-foreground/80 italic leading-relaxed mb-8 flex-1">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 blur-sm" />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-background"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "500+", label: "Champions Made" },
                { value: "98%", label: "Success Rate" },
                { value: "50+", label: "Weekly Classes" },
                { value: "200+", label: "Transformations" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-6xl font-display text-gradient-gold mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
