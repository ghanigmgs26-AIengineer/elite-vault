import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/test")({
  component: TestPage,
});

function TestPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      console.log(data);
      console.log(error);

      if (data) setProducts(data);
    }

    load();
  }, []);

  return (
    <div className="p-10">
      <h1>Supabase Test</h1>

      {products.map((p) => (
        <div key={p.id}>
          {p.name}
        </div>
      ))}
    </div>
  );
}