import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const ADMIN_PASSWORD =
  import.meta.env.VITE_ADMIN_PASSWORD;
  
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  async function loadProducts() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    setProducts(data || []);
  }

  async function deleteProduct(id: number) {
    const ok = confirm("Delete this product?");

    if (!ok) return;

    await supabase
      .from("products")
      .delete()
      .eq("id", id);

    loadProducts();
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function addProduct() {
    let imageUrl = image;

    if (file) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, file);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      imageUrl = supabase.storage
        .from("products")
        .getPublicUrl(fileName)
        .data.publicUrl;
    }

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          brand,
          category,
          price: Number(price),
          image: imageUrl,
          description,
          sizes: "Default",
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product Added");

    setName("");
    setBrand("");
    setCategory("");
    setPrice("");
    setImage("");
    setDescription("");
    setFile(null);

    loadProducts();
  }

  if (!authorized) {
    return (
      <div className="mx-auto max-w-md px-5 py-20">
        <h1 className="mb-6 text-3xl font-bold">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded border p-3"
        />

        <button
          onClick={() => {
            if (password === ADMIN_PASSWORD) {
              setAuthorized(true);
            } else {
              alert("Wrong Password");
            }
          }}
          className="rounded bg-black px-6 py-3 text-white"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Admin Panel
      </h1>

      <div className="space-y-4">
        <input
          className="w-full rounded border p-3"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Category (watches or footwear)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full rounded border p-3"
        />

        <textarea
          className="w-full rounded border p-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addProduct}
          className="rounded bg-black px-6 py-3 text-white"
        >
          Add Product
        </button>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">
          Products
        </h2>

        {products.map((p) => (
          <div
            key={p.id}
            className="mb-3 flex items-center justify-between rounded border p-3"
          >
            <div>
              <div className="font-semibold">
                {p.name}
              </div>

              <div className="text-sm text-gray-500">
                {p.brand}
              </div>
            </div>

            <button
              onClick={() => deleteProduct(p.id)}
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}