import React from "react";
import Link from "next/link";
import Image from "next/image";

// export const revalidate = 60;


async function getData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/posts`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("API Error:", errorData);
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("getData error:", error);
    return []; // Return empty array instead of throwing
  }
}

export default async function Blog() {
  const data = await getData();
  
  console.log("Blog page - data received:", data);
  console.log("Blog page - data length:", data.length);

  return (
    <div className="flex flex-col max-w-[1400px] px-6 md:px-12 py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      
      {data.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No posts found</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Check your database connection or create some posts in the dashboard.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {data.map((item) => (
            <div key={item._id} className="border border-gray-300 rounded-lg p-6">
              <Link
                href={`/blog/${item._id}`}
                className="flex flex-col md:flex-row items-center gap-12 hover:opacity-90 transition"
              >
                <div className="w-full md:w-[400px] h-[250px] relative flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.title || "Blog post image"}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-3xl font-semibold mb-3">{item.title}</h1>
                  <p className="text-lg mb-4">{item.description}</p>
                  <p className="text-sm mb-4">{item.content}</p>
                  <p className="font-bold italic pt-4">{item.username}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
