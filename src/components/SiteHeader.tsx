import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/context/CartContext";

const nav = [
  { to: "/", label: "Home" },
  { to: "/watches", label: "Luxury Watches" },
  { to: "/footwear", label: "Footwear" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 glass border-x-0 border-t-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Elite Vault logo"
            width={40}
            height={40}
            className="h-9 w-9"
          />

          <span className="font-display text-xl tracking-[0.2em] text-gold-gradient uppercase">
            Elite Vault
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-xs uppercase tracking-luxe text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/cart"
            className="flex items-center gap-2 text-xs uppercase tracking-luxe text-muted-foreground hover:text-gold"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart ({cartCount})
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-gold md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="animate-rise border-t border-border px-5 pb-5 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            Cart ({cartCount})
          </Link>
        </nav>
      )}
    </header>
  );
}