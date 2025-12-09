import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Discipline Community",
        description: "You're now part of an elite group. Check your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-40 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[200px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur opacity-20" />
            
            {/* Card */}
            <div className="relative glass-card rounded-[2.5rem] p-10 md:p-20 border border-primary/20 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-lg"
              >
                <Mail className="w-10 h-10 md:w-14 md:h-14 text-primary-foreground" />
              </motion.div>
              
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display mb-4 md:mb-6"
              >
                JOIN THE <span className="text-gradient-gold">DISCIPLINE</span> COMMUNITY
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-xl mx-auto"
              >
                Exclusive workout protocols, nutrition strategies, and mindset training delivered to your inbox weekly. No spam. Only value.
              </motion.p>
              
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 md:h-16 px-6 bg-muted/30 border-border/50 focus:border-primary rounded-xl md:rounded-2xl text-base md:text-lg"
                />
                <Button
                  type="submit"
                  className="h-14 md:h-16 px-8 md:px-12 bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg hover-glow-gold group btn-premium"
                >
                  SUBSCRIBE
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-xs md:text-sm text-muted-foreground mt-6"
              >
                Join 2,000+ champions. Unsubscribe anytime. Your data is protected.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
