"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import { getBlogs } from "@/services/blog.service";

const categories = ["All", "Digital Marketing", "SEO", "Social Media Marketing", "Email Marketing"];

const ITEMS_PER_PAGE = 3;

// Function to generate URL-friendly slugs
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing hyphens
};

export default function BlogList() {
  const { user } = useAuthStore();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is admin (you can adjust this logic based on your user role structure)
  const isAdmin = user && (user.role === 'admin' || user.email === 'admin@example.com');

  // Temporarily show button for testing (remove this line in production)
  const showButtonForTesting = true; // Change to false to require admin login

  // Fetch blogs from API with pagination
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getBlogs({ page: currentPage });
        console.log("BLogsss>>>", result)
        if (result.success && result.data?.blogs) {
          setBlogs(result.data.blogs);
          setPagination(result.data.pagination);
        } else {
          setError('Failed to load blogs');
        }
      } catch (err) {
        setError('An error occurred while loading blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  // Extract unique categories from blogs
  const availableCategories = ["All", ...new Set(blogs.map(blog => blog.category))];

  // Filter blogs by category
  const filtered = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category.toLowerCase() === activeCategory.toLowerCase());

  // Client-side pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 font-sans">
      {/* Title */}
      <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Blogs
      </h1>

      {/* Category Tabs and Create Button */}
      <div className="flex justify-between items-center border-b border-gray-200 mb-8">
        <div className="flex gap-6">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`pb-2 text-sm font-semibold transition-colors whitespace-nowrap ${activeCategory === cat
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500 hover:text-gray-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Create Blog Button - Admin Only or Testing */}
        {(isAdmin || showButtonForTesting) && (
          <Link href="/blogs/create">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Create Blog

            </button>
          </Link>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No blogs found.</p>
        </div>
      )}

      {/* Blog Cards */}
      {!loading && !error && blogs.length > 0 && (
        <div className="space-y-0 divide-y divide-gray-200">
          {paginated.map((blog) => (
            <article key={blog._id} className="py-6 flex gap-5 items-start">
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
                    {blog.readTimeText || `${blog.readTime} min read`}
                  </span>
                  <span className="text-xs border border-indigo-400 text-indigo-600 rounded-full px-3 py-0.5 font-medium capitalize">
                    {blog.category}
                  </span>
                </div>

                {/* Date */}
                <p className="text-xs text-gray-400 mb-1">{blog.formattedDate}</p>

                {/* Title */}
                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="text-lg font-bold text-indigo-600 leading-snug mb-2 hover:underline cursor-pointer">
                    {blog.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-sm text-gray-600 text-wrap leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0 w-36 h-24 sm:w-44 sm:h-28 rounded-xl overflow-hidden">
                <img
                  src={blog.thumbnailImage || blog.heroImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop';
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {Math.ceil(blogs.length / ITEMS_PER_PAGE) > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || !pagination.hasPrev}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-800 disabled:opacity-40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: Math.ceil(blogs.length / ITEMS_PER_PAGE) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(blogs.length / ITEMS_PER_PAGE) || !pagination.hasNext}
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