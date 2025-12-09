import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Training Errors That Destroy Your Progress",
      category: "Training Mastery",
      author: "Coach Owolabi",
      date: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      excerpt: "Small form breakdowns compound into major setbacks. Identify and eliminate these silent gains killers before they sabotage your transformation."
    },
    {
      id: 2,
      title: "The 6:45 Protocol: Why Early Risers Win",
      category: "Peak Performance",
      author: "Coach David",
      date: "Jan 10, 2025",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      excerpt: "Champions are forged in the hours when others sleep. Discover the neurological advantage of pre-dawn training."
    },
  ];

  return (
    <section className="py-20 md:py-40 relative overflow-hidden" id="blog">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Knowledge</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            THE <span className="text-gradient-gold">JOURNAL</span>
          </h2>
          
          <div className="section-divider mb-6"></div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights on training, nutrition, and the mindset that builds champions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-20">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative glass-card rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift">
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
                    <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-10 -mt-12 md:-mt-16 relative">
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
                  
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link to="/blog">
                    <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all duration-300 text-sm md:text-base">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link to="/blog">
            <MagneticButton
              className="px-10 md:px-14 py-5 md:py-7 text-base md:text-lg font-bold bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-full shadow-lg hover-glow-gold group btn-premium"
            >
              Explore All Articles
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
