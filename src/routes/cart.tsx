import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="mb-8 font-display text-4xl text-gold">
        Shopping Cart
      </h1>

      <div className="glass rounded-xl p-8">
        <p className="text-muted-foreground">
          Your cart is empty.
        </p>
      </div>
    </section>
  );
}