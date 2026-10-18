import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact the Elite Vault Concierge" },
      {
        name: "description",
        content:
          `Reach the Elite Vault concierge on WhatsApp at ${WHATSAPP_DISPLAY} for availability, pricing and delivery of luxury watches and sneakers.`,
      },
      { property: "og:title", content: "Contact | Elite Vault" },
      {
        property: "og:description",
        content: "Personal concierge for every order — WhatsApp only, no checkout.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("Luxury Watches");
  const [message, setMessage] = useState("");

  const href = whatsappLink(
    `Hello Elite Vault,\n\nName: ${name || "—"}\nInterested in: ${interest}\n\n${
      message || "I'd like to know more about your collection."
    }`,
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <header className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-luxe text-gold">Concierge</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Speak to the vault</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Every Elite Vault order is handled one-to-one. Send us a note and we'll continue
          the conversation on WhatsApp — no carts, no payment gateways.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <form
          className="glass animate-rise space-y-5 rounded-2xl p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(href, "_blank", "noopener");
          }}
        >
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Your name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mr Ghani"
              className="w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Interested in
            </span>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring"
            >
              <option>Luxury Watches</option>
              <option>Footwear / Sneakers</option>
              <option>Both collections</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Message
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Tell us the reference or silhouette you're after."
              className="w-full resize-none rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-xs uppercase tracking-[0.2em] text-whatsapp-foreground transition-transform duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </button>
        </form>

        <aside
          className="glass animate-rise space-y-6 rounded-2xl p-6 md:p-8"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                WhatsApp
              </p>
              <a
                href={whatsappLink("Hello Elite Vault!")}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-foreground transition-colors hover:text-gold"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Hours
              </p>
              <p className="text-sm">Mon – Sun · 10:00 – 22:00 IST</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Viewings
              </p>
              <p className="text-sm">By appointment only, across India.</p>
            </div>
          </div>

          <div className="gold-rule" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Elite Vault is a catalog experience. There is no online checkout or payment
            gateway — pricing, authenticity and delivery are confirmed personally.
          </p>
        </aside>
      </div>
    </div>
  );
}
