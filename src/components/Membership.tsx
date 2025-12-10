import { Check, Crown, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Membership = () => {
  const plans = [
    {
      name: "Day Pass",
      price: "2,000",
      period: "per day",
      description: "Experience excellence",
      features: [
        "Complete gym access",
        "All premium equipment",
        "Locker facilities",
        "Shower access"
      ],
      popular: false,
      icon: Star
    },
    {
      name: "Monthly Elite",
      price: "15,000",
      period: "per month",
      description: "Most chosen by champions",
      features: [
        "Unlimited gym access",
        "All classes included",
        "2 personal training sessions",
        "Nutrition consultation",
        "Premium locker",
        "Priority class booking"
      ],
      popular: true,
      icon: Crown
    },
    {
      name: "Annual Champion",
      price: "150,000",
      period: "per year",
      description: "Maximum commitment, maximum results",
      features: [
        "Everything in Monthly Elite",
        "Save 30,000 annually",
        "4 PT sessions monthly",
        "Exclusive merchandise",
        "Unlimited guest passes",
        "Custom meal plans"
      ],
      popular: false,
      icon: Sparkles
    }
  ];

  const handleJoin = (planName: string) => {
    window.open(`https://wa.me/2348035009283?text=I%20want%20to%20join%20the%20${encodeURIComponent(planName)}%20plan%20at%206:45%20Fitness`, "_blank");
  };

  return (
    <section className="py-20 md:py-40 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background" id="membership">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-primary/10 blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Investment</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            INVEST IN <span className="text-gradient-gold">YOURSELF</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            The best investment you'll ever make. Choose your path to transformation.
          </p>
        </motion.div>

        {/* Pricing Cards - Mobile Horizontal Scroll */}
        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group flex-shrink-0 w-[300px] md:w-auto snap-center ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-gold-dark text-primary-foreground px-6 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`h-full rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 via-card to-card border-2 border-primary/50 hover-glow-gold' 
                  : 'glass-card border border-border/50 hover:border-primary/30'
              } hover-lift`}>
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular ? 'bg-gradient-to-br from-primary to-gold-dark' : 'bg-muted'
                }`}>
                  <plan.icon className={`w-7 h-7 md:w-8 md:h-8 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>

                {/* Plan Info */}
                <h3 className="text-2xl md:text-3xl font-display mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-sm text-muted-foreground">NGN</span>
                  <span className={`text-5xl md:text-6xl font-display ml-1 ${plan.popular ? 'text-gradient-gold' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2 text-sm">/{plan.period.split(' ')[1]}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-primary' : 'bg-primary/20'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <span className="text-foreground/80 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <MagneticButton 
                  onClick={() => handleJoin(plan.name)}
                  className={`w-full py-5 md:py-6 font-bold rounded-xl transition-all text-sm md:text-base ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-gold-dark text-primary-foreground hover-glow-gold btn-premium' 
                      : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                  }`}
                >
                  {plan.popular ? 'START YOUR JOURNEY' : 'GET STARTED'}
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-muted-foreground mt-10 md:mt-16 text-sm md:text-base px-4"
        >
          All memberships include a complimentary fitness assessment. Zero hidden fees. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default Membership;
