import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/products";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Elite Vault, I'd like to know more about your collection.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground animate-glow transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
