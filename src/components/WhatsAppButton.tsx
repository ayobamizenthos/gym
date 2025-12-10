import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/2348035009283?text=Hi%2C%20I%20want%20to%20join%206%3A45%20Fitness", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover-glow hover-scale transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-foreground" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-card rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-border">
        Chat with us!
      </span>
    </button>
  );
};

export default WhatsAppButton;
