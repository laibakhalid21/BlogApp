"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://blog-app-8qjp.vercel.app/api/posts?username=${session?.user?.name}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          setErr(true);
          throw new Error("Failed to fetch data");
        }

        const posts = await res.json();
        setData(posts);
      } catch (error) {
        console.error(error);
        setErr(true);
      } finally {
        setLoading(false);
      }

      console.log(session.user.name)
    };

    getData();
  }, [status, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session?.user?.name,
        }),
      });
      e.target.reset();
      // re-fetch after creating post
      const res = await fetch(`/api/posts?username=${session?.user?.name}`);
      const posts = await res.json();
      setData(posts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, { method: "DELETE" });
      setData((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (status === "loading" || loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (err) return <p className="text-center text-red-500">Error loading data</p>;

  if (status === "authenticated") {
    return (
      <div className="flex flex-col lg:flex-row gap-10 p-10">
        <div className="flex-1">
          {data.length === 0 && <p className=" text-center">No posts found.</p>}
          {data?.map((post) => (
            <div
              key={post._id}
              className="flex items-center justify-between border-b border-gray-700 py-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-20">
                  <Image
                    src={post.image || "/placeholder.png"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h2 className=" font-semibold">{post.title}</h2>
              </div>
              <button
                onClick={() => handleDelete(post._id)}
                className="text-red-400 hover:text-red-600 transition-colors font-bold"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-4 border-green-700 flex-1 gap-4  p-6 rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-bold text-emerald-400 mb-2">
            Add New Post
          </h1>
          <input
            type="text"
            placeholder="Title"
            className="p-3 bg-transparent border border-gray-600 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="p-3 bg-transparent border border-gray-600 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-3 bg-transparent border border-gray-600 rounded-md "
          />
          <textarea
          type="description"
            placeholder="Content"
            rows="6"
            className="p-3 bg-transparent border border-gray-600 rounded-md "
            required
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-md transition"
          >
            Publish
          </button>
        </form>
      </div>
    );
  }

  return null;
};

export default Dashboard;
