import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialModal = ({ isOpen, onClose }: FreeTrialModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Your Free Trial Awaits",
      description: "Our team will contact you within 24 hours to schedule your session.",
    });
    
    setEmail("");
    setName("");
    setIsSubmitting(false);
    onClose();
  };

  const benefits = [
    "Full gym access for 3 days",
    "Personal assessment session",
    "Custom workout plan",
    "Nutrition consultation"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-[101] flex items-center justify-center"
          >
            <div className="relative w-full max-h-[90vh] overflow-y-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-gold-light to-primary rounded-3xl blur-lg opacity-50 animate-pulse" />
              
              {/* Card */}
              <div className="relative glass-card rounded-3xl border border-primary/30 overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-br from-primary/20 via-card to-accent/10 p-8 pb-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <Zap className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-display mb-2">
                    UNLOCK YOUR <span className="text-gradient-gold">FREE TRIAL</span>
                  </h2>
                  
                  <p className="text-muted-foreground">
                    Experience premium fitness. No commitment required.
                  </p>
                </div>

                {/* Content */}
                <div className="p-8 pt-6">
                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-14 px-5 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-base"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-14 px-5 bg-muted/30 border-border/50 focus:border-primary rounded-xl text-base"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-bold bg-gradient-to-r from-primary to-gold-dark hover:from-primary/90 hover:to-gold-dark/90 rounded-xl shadow-lg group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Processing...
                        </span>
                      ) : (
                        <>
                          CLAIM YOUR FREE TRIAL
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By signing up, you agree to receive fitness tips and offers. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FreeTrialModal;
