import { Link } from "@tanstack/react-router";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-display text-2xl uppercase tracking-[0.2em] text-gold-gradient">
            Elite Vault
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A curated vault of horological icons and rare footwear. Every order is handled
            personally over WhatsApp — no carts, no queues.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-gold">Collections</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/watches" className="transition-colors hover:text-gold">
                Luxury Watches
              </Link>
            </li>
            <li>
              <Link to="/footwear" className="transition-colors hover:text-gold">
                Footwear
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-luxe text-gold">Concierge</p>
          <a
            href={whatsappLink("Hello Elite Vault, I have a question about your collection.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Mon – Sun · 10:00 – 22:00 IST</p>
        </div>
      </div>

      <div className="gold-rule" />
      <p className="py-6 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Elite Vault — Catalog only. No online checkout.
      </p>
    </footer>
  );
}
