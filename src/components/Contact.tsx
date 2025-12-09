import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Youtube, Facebook, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2348035009283?text=Hello%206:45%20Fitness%20-%20I'm%20ready%20to%20start%20my%20transformation", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "55 Gbeleyi Avenue, Alakuko, Lagos",
      gradient: "from-primary to-gold-dark"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 803 500 9283",
      gradient: "from-gold-dark to-accent"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Mon-Sat: 5:30 AM - 9:00 PM",
      gradient: "from-accent to-primary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@645fitness.com",
      gradient: "from-primary to-accent"
    }
  ];

  const socials = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/6.45hotelandsuites/" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@645hotelsuites2" }
  ];

  return (
    <section className="py-20 md:py-40 relative overflow-hidden" id="contact">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Connect</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mt-4 mb-6">
            FIND <span className="text-gradient-gold">US</span>
          </h2>
          
          <div className="section-divider mb-6"></div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your transformation is one visit away. We're ready when you are.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative h-[350px] md:h-[550px] rounded-3xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1!2d3.25!3d6.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzcnMTIuMCJOIDPCsDE1JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="6:45 Fitness Location"
                className="grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 md:space-y-6"
          >
            {/* Info Cards */}
            <div className="grid gap-4 md:gap-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="glass-card rounded-2xl p-5 md:p-7 border border-border/50 hover:border-primary/50 transition-all duration-500 flex items-center gap-5 hover-lift">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground mb-1">{item.title}</p>
                        <p className="font-bold text-sm md:text-base">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MagneticButton
                onClick={handleWhatsApp}
                className="w-full py-6 md:py-7 text-base md:text-lg font-bold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-2xl shadow-lg text-white group btn-premium"
              >
                <MessageCircle className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                Message Us on WhatsApp
                <ArrowUpRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4 md:pt-6"
            >
              <p className="text-sm text-muted-foreground text-center mb-5">Follow us on social media</p>
              <div className="flex justify-center gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <MagneticButton
                      key={index}
                      onClick={() => window.open(social.href, "_blank")}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl glass-card border border-border/50 hover:border-primary/50 flex items-center justify-center group transition-all duration-300 hover:bg-primary/10"
                    >
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </MagneticButton>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
