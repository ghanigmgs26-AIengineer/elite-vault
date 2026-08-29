import productsData from "@/data/products.json";

export type Category = "watches" | "footwear";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  sizes: string[];
};

export const WHATSAPP_NUMBER = "916366121895";
export const WHATSAPP_DISPLAY = "+91 63661 21895";

export const WATCH_SIZES = ["36mm", "40mm", "42mm", "44mm"];
export const SHOE_SIZES = ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"];

type RawProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number | string;
  description: string;
  image: string;
  sizes?: string[];
};

/** Every product comes from src/data/products.json — no page component edits needed. */
export const products: Product[] = (productsData as RawProduct[]).map((p) => {
  const category: Category = p.category === "footwear" ? "footwear" : "watches";
  return {
    id: p.id,
    name: p.name,
    brand: p.brand,
    category,
    price: Number(p.price),
    description: p.description,
    image: p.image,
    sizes: p.sizes ?? (category === "watches" ? WATCH_SIZES : SHOE_SIZES),
  };
});

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const getProduct = (id: string) =>
  products.find((p) => p.id.toLowerCase() === id.toLowerCase());

/** Direct wa.me link — no WhatsApp Business API, no keys. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const orderLink = (product: Product, size?: string) =>
  whatsappLink(
    `Hi, I am interested in ${product.name} priced at ₹${product.price}. Please share availability.` +
      (size ? `\nSize: ${size}` : ""),
  );
