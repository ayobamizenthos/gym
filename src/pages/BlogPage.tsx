import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorFollower from "@/components/CursorFollower";
import PageTransition from "@/components/PageTransition";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Training Errors That Destroy Your Progress",
      category: "Training Mastery",
      author: "Coach Owolabi",
      date: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
      excerpt: "Small form breakdowns compound into major setbacks. Identify and eliminate these silent gains killers before they sabotage your transformation.",
      content: "Form is everything in fitness. Small mistakes in your workout technique can lead to plateaus, injuries, and wasted effort. Here are the top 5 mistakes we see at 6:45 Fitness and how to fix them..."
    },
    {
      id: 2,
      title: "The 6:45 Protocol: Why Early Risers Win",
      category: "Peak Performance",
      author: "Coach David",
      date: "Jan 10, 2025",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
      excerpt: "Champions are forged in the hours when others sleep. Discover the neurological advantage of pre-dawn training and how it rewires your brain for success.",
      content: "The alarm goes off at 6:00 AM. Most people hit snooze. But at 6:45 Fitness, we're already warming up. This daily act of discipline creates a ripple effect..."
    },
    {
      id: 3,
      title: "Discipline Over Motivation: The Champion's Code",
      category: "Mental Fortitude",
      author: "Coach Owolabi",
      date: "Jan 5, 2025",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
      excerpt: "Motivation abandons you. Discipline never does. Master the mental framework that separates those who wish from those who achieve.",
      content: "Motivation is a feeling - it's temporary, unpredictable, and unreliable. Discipline, on the other hand, is a skill you can build. Here's how we teach our members to stay consistent..."
    },
    {
      id: 4,
      title: "Recovery Science: The Hidden Growth Phase",
      category: "Performance Science",
      author: "Coach David",
      date: "Dec 28, 2024",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop",
      excerpt: "Your muscles don't grow in the gym - they grow while you recover. Understand the science of strategic rest that accelerates transformation.",
      content: "Many gym-goers think more training equals more results. But muscle growth doesn't happen in the gym - it happens during recovery. Here's what science says..."
    },
    {
      id: 5,
      title: "Fuel for Champions: Nutrition Decoded",
      category: "Elite Nutrition",
      author: "Coach Owolabi",
      date: "Dec 20, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
      excerpt: "High-performance bodies demand high-performance fuel. Strategic nutrition protocols for the driven professional who refuses to compromise.",
      content: "You're crushing your workouts at 6:45 AM, but your diet is holding you back. The good news? Eating healthy doesn't have to be complicated or time-consuming..."
    },
    {
      id: 6,
      title: "From Zero to Hero: The Beginner's Blueprint",
      category: "Foundation Building",
      author: "Coach David",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop",
      excerpt: "Every legend started somewhere. Your complete roadmap from first step to unstoppable momentum. No experience required, only commitment.",
      content: "Walking into a gym for the first time can feel intimidating. But at 6:45 Fitness, every champion started as a beginner. Here's your roadmap..."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <CursorFollower />
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Knowledge Is Power</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-display mb-4 md:mb-6">
                THE 6:45 <span className="text-gradient-gold">JOURNAL</span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-gold" />
                <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Expert strategies on training, nutrition, and the mindset that builds champions. No fluff. Only results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-6 md:gap-8"
            >
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative glass-card rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 h-full hover-lift">
                    {/* Image */}
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-bold bg-primary text-primary-foreground backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-8 -mt-12 md:-mt-16 relative">
                      <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                          <span>{post.author}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <MagneticButton
                        className="inline-flex items-center gap-2 text-primary font-bold group/btn text-sm md:text-base"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </MagneticButton>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
};

export default BlogPage;
