import { motion } from "framer-motion";
import { Clock, Dumbbell, Flame, Heart, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Classes = () => {
  const schedule = [
    { 
      time: "6:00 AM", 
      name: "HIIT Inferno", 
      trainer: "Coach Owolabi",
      icon: Flame,
      color: "from-orange-500 to-red-600",
      duration: "45 min",
      description: "Maximum calorie burn. Zero excuses."
    },
    { 
      time: "10:00 AM", 
      name: "Strength Mastery", 
      trainer: "Coach Owolabi",
      icon: Dumbbell,
      color: "from-primary to-gold-dark",
      duration: "60 min",
      description: "Build power. Build presence."
    },
    { 
      time: "5:00 PM", 
      name: "Combat Conditioning", 
      trainer: "Coach David",
      icon: Zap,
      color: "from-amber-500 to-orange-600",
      duration: "50 min",
      description: "Strike hard. Move fast."
    },
    { 
      time: "7:00 PM", 
      name: "Core Domination", 
      trainer: "Coach David",
      icon: Heart,
      color: "from-rose-500 to-primary",
      duration: "45 min",
      description: "Forge an unbreakable center."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleBookClass = (className: string) => {
    window.open(`https://wa.me/2348000000000?text=I%20want%20to%20book%20${encodeURIComponent(className)}%20class%20at%206:45%20Fitness`, "_blank");
  };

  return (
    <section className="py-20 md:py-40 relative overflow-hidden" id="classes">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Daily Schedule</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            CLASS <span className="text-gradient-gold">SCHEDULE</span>
          </h2>
          
          <div className="section-divider mb-6"></div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every session designed to push limits. Every class led by masters.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6"
          >
            {schedule.map((classItem, index) => {
              const Icon = classItem.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative glass-card rounded-2xl p-5 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden hover-lift">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${classItem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      {/* Icon */}
                      <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${classItem.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                      </div>
                      
                      {/* Class Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-2xl md:text-3xl font-display text-primary">{classItem.time}</span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary">
                            {classItem.duration}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{classItem.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{classItem.trainer}</p>
                        <p className="text-sm text-foreground/60 hidden md:block">{classItem.description}</p>
                      </div>
                      
                      {/* Action */}
                      <MagneticButton 
                        onClick={() => handleBookClass(classItem.name)}
                        className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-muted/50 border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        Book Now
                      </MagneticButton>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 glass-card rounded-2xl px-6 md:px-10 py-5 md:py-6 border border-border/50">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground text-sm md:text-base">
                <span className="font-bold text-foreground">Monday - Saturday:</span> 5:30 AM - 9:00 PM
              </span>
              <span className="hidden sm:block w-px h-5 bg-border" />
              <span className="text-muted-foreground text-sm md:text-base">
                <span className="font-bold text-foreground">Sunday:</span> Closed
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
