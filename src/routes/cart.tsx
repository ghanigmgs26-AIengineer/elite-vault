import { createFileRoute } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const {
    cart,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="mb-8 font-display text-4xl text-gold">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="glass rounded-xl p-8">
          <p className="text-muted-foreground">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="glass flex items-center gap-4 rounded-xl p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {item.brand} {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {formatINR(item.price)}
                  </p>

                  {item.size && (
                    <p className="text-sm text-muted-foreground">
                      Size: {item.size}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="rounded border px-3 py-1"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="rounded border px-3 py-1"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded border border-red-500 px-3 py-1 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 glass rounded-xl p-6 space-y-4">
  <h2 className="text-2xl font-semibold">
    Total: {formatINR(totalPrice)}
  </h2>

  <a
    href={`https://wa.me/916366121895?text=${encodeURIComponent(
      `Hello Elite Vault,

I would like to order:

${cart
  .map(
    (item) =>
      `• ${item.brand} ${item.name}
Quantity: ${item.quantity}
Size: ${item.size || "N/A"}
Price: ${formatINR(item.price)}`
  )
  .join("\n\n")}

Total: ${formatINR(totalPrice)}`
    )}`}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white"
  >
    Order Entire Cart on WhatsApp
  </a>
</div>
        </>
      )}
    </section>
  );
}