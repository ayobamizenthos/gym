import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import trainingTee from "@/assets/products/training-tee.jpg";
import hoodie from "@/assets/products/hoodie.jpg";
import shorts from "@/assets/products/shorts.jpg";
import gloves from "@/assets/products/gloves.jpg";
import belt from "@/assets/products/belt.jpg";
import shaker from "@/assets/products/shaker.jpg";
import protein from "@/assets/products/protein.jpg";
import preworkout from "@/assets/products/preworkout.jpg";
import MagneticButton from "./MagneticButton";

const Store = () => {
  const products = [
    {
      id: 1,
      name: "6:45 Performance Tee",
      category: "Apparel",
      price: "8,500",
      image: trainingTee,
      description: "Engineered for peak performance. Breathable. Unstoppable."
    },
    {
      id: 2,
      name: "6:45 Elite Hoodie",
      category: "Apparel",
      price: "18,000",
      image: hoodie,
      description: "Premium warmth meets championship aesthetics."
    },
    {
      id: 3,
      name: "6:45 Training Shorts",
      category: "Apparel",
      price: "12,000",
      image: shorts,
      description: "Maximum mobility. Zero restrictions."
    },
    {
      id: 4,
      name: "6:45 Lifting Gloves",
      category: "Gear",
      price: "7,500",
      image: gloves,
      description: "Superior grip. Superior results."
    },
    {
      id: 5,
      name: "6:45 Power Belt",
      category: "Gear",
      price: "15,000",
      image: belt,
      description: "Professional-grade core support."
    },
    {
      id: 6,
      name: "6:45 Pro Shaker",
      category: "Gear",
      price: "4,500",
      image: shaker,
      description: "Leak-proof. Built for champions."
    },
    {
      id: 7,
      name: "6:45 Mass Protein",
      category: "Nutrition",
      price: "22,000",
      image: protein,
      description: "Rapid absorption. Maximum gains."
    },
    {
      id: 8,
      name: "6:45 Pre-Workout",
      category: "Nutrition",
      price: "18,500",
      image: preworkout,
      description: "Explosive energy. Razor focus."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleBuy = (productName: string) => {
    window.open(`https://wa.me/2348035009283?text=I%20want%20to%20purchase%20${encodeURIComponent(productName)}%20from%206:45%20Fitness`, "_blank");
  };

  return (
    <section className="py-20 md:py-40 relative overflow-hidden" id="shop">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Premium Collection</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            THE 6:45 <span className="text-gradient-gold">SHOP</span>
          </h2>
          
          <div className="section-divider mb-6"></div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Gear designed for those who demand excellence. Wear your commitment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative glass-card rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift">
                {/* Image Container */}
                <div className="relative h-48 md:h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <span className="px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold bg-primary text-primary-foreground">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Quick Buy - Hover */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <MagneticButton
                      onClick={() => handleBuy(product.name)}
                      className="w-full py-3 md:py-4 bg-primary text-primary-foreground font-bold rounded-xl text-sm btn-premium"
                    >
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Add to Cart
                    </MagneticButton>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-1 md:line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-2xl font-display text-primary">
                      NGN {product.price}
                    </span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 md:mt-20"
        >
          <MagneticButton
            onClick={() => window.open("https://wa.me/2348035009283?text=I%20want%20to%20see%20the%20full%20collection%20at%206:45%20Fitness", "_blank")}
            className="px-10 md:px-14 py-5 md:py-7 text-base md:text-lg font-bold bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-full shadow-lg hover-glow-gold group btn-premium"
          >
            Explore Full Collection
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Store;
