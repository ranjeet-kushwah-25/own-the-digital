"use client";

import { useState } from "react";

const categories = ["All", "Digital Marketing", "SEO", "Social Media Marketing"];

const blogs = [
  {
    id: 1,
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "22th July, 2024",
    title: "Digital marketing Strategies That Work",
    description:
      "Discover effective digital marketing tactics to connect with your audience. From content planning to engagement techniques, learn how to enhance your brand's online presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop",
  },
  {
    id: 2,
    category: "SEO",
    readTime: "6 min read",
    date: "22th July, 2024",
    title: "On page SEO Essentials",
    description:
      "Explore the key elements of on-page SEO. Understand how to optimize titles, headings, and meta tags to ensure your content stands out in search results.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=220&fit=crop",
  },
  {
    id: 3,
    category: "Social Media Marketing",
    readTime: "3 min read",
    date: "22th July, 2024",
    title: "Creating a Consistent Social Media Brand",
    description:
      "Find out how to maintain a cohesive brand image across all social platforms. Explore strategies for consistent messaging, visuals, and tone to enhance brand recognition.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=220&fit=crop",
  },
  {
    id: 4,
    category: "Digital Marketing",
    readTime: "4 min read",
    date: "22th July, 2024",
    title: "Email Marketing That Converts",
    description:
      "Learn how to craft compelling email campaigns that drive opens, clicks, and conversions. Discover best practices for subject lines, segmentation, and automation.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=220&fit=crop",
  },
  {
    id: 5,
    category: "SEO",
    readTime: "7 min read",
    date: "22th July, 2024",
    title: "Link Building Strategies for 2024",
    description:
      "Understand the latest link building techniques to boost your domain authority. From guest posting to digital PR, learn what really moves the needle today.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=220&fit=crop",
  },
  {
    id: 6,
    category: "Social Media Marketing",
    readTime: "5 min read",
    date: "22th July, 2024",
    title: "Mastering Instagram Reels for Business",
    description:
      "Unlock the power of short-form video content on Instagram. Learn how to create engaging Reels that grow your audience and increase brand visibility.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=220&fit=crop",
  },
];

const ITEMS_PER_PAGE = 3;

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 font-sans">
      {/* Title */}
      <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Blogs
      </h1>

      {/* Category Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`pb-2 text-sm font-semibold transition-colors whitespace-nowrap ${
              activeCategory === cat
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="space-y-0 divide-y divide-gray-200">
        {paginated.map((blog) => (
          <article key={blog.id} className="py-6 flex gap-5 items-start">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              {/* Meta row */}
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  {/* Clock icon */}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" d="M12 7v5l3 3" />
                  </svg>
                  {blog.readTime}
                </span>
                <span className="text-xs border border-indigo-400 text-indigo-600 rounded-full px-3 py-0.5 font-medium">
                  {blog.category}
                </span>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 mb-1">{blog.date}</p>

              {/* Title */}
              <h2 className="text-lg font-bold text-indigo-600 leading-snug mb-2 hover:underline cursor-pointer">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {blog.description}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 w-36 h-24 sm:w-44 sm:h-28 rounded-xl overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-800 disabled:opacity-40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}