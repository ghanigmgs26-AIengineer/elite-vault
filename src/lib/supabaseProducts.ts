import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((p) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    price: Number(p.price),
    description: p.description,
    image: p.image,
    sizes: p.sizes
      ? p.sizes.split(",").map((s: string) => s.trim())
      : ["Default"],
  }));
}