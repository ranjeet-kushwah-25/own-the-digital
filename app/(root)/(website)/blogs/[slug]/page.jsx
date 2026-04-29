"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBlogById } from "@/services/blog.service";
import BlogHeader from "@/components/blogs-pages/BlogHeader";
import BlogImage from "@/components/blogs-pages/BlogImage";
import BlogSection from "@/components/blogs-pages/BlogSection";
import RelatedCard from "@/components/blogs-pages/RelatedCard";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function BlogDetails() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Extract blog ID from slug - you might need to adjust this based on your API
        const response = await getBlogById(params.slug);
        if (response.success) {
          setBlog(response.data.blog);
        } else {
          setError(response.message || "Failed to load blog");
        }
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="bg-white">
        <div className="bg-black rounded-[0_0_32px_32px] w-full h-full py-15 bg-center">
          <Header />
        </div>
        <div className="max-w-5xl bg-white mx-auto px-4 py-10">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-white">
        <div className="bg-black rounded-[0_0_32px_32px] w-full h-full py-15 bg-center">
          <Header />
        </div>
        <div className="max-w-5xl bg-white mx-auto px-4 py-10">
          <div className="text-center text-red-500">{error || "Blog not found"}</div>
        </div>
        <Footer />
      </div>
    );
  }

  const data = blog;

  return (
    <div className=" bg-white">
      <div className="bg-black rounded-[0_0_32px_32px] w-full h-full py-15 bg-center">
        <Header />
      </div>
      <div className="max-w-5xl bg-white mx-auto px-4 py-10">
        <BlogHeader
          date={data.formattedDate}
          readTime={data.readTimeText}
          title={data.title}
        />

        {/* Image */}

        <BlogImage src={"/images/digital-marketing.png"} />
        {/* <BlogImage src={data.heroImage || "/images/digital-marketing.png"} /> */}

        {/* Author and Meta Info */}

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <span>By {data.author?.name || 'Unknown Author'}</span>
          <span>•</span>
          <span>{data.views} views</span>
          <span>•</span>
          <span>{data.likes?.length || 0} likes</span>
        </div>

        {/* Tags */}

        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Intro */}

        <p className="text-black mb-2">{data.introduction}</p>

        {/* Summary */}

        {data.summary && (
          <div className="rounded-lg">

            <p className="text-black text-[16px]">{data.summary}</p>
          </div>
        )}

        {/* Sections */}

        {data.sections && data.sections.map((section, index) => (
          <BlogSection
            key={section._id || index}
            title={section.section_title}
            why={section.section_content?.why_it_works || ''}
            description=""
            implement={section.section_content?.how_to_implement ?
              section.section_content.how_to_implement.join('\n') : ''}
            points={section.section_content?.how_to_implement || []}
          />
        ))}

        {/* Conclusion */}

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-indigo-500 mb-2">
            Conclusion
          </h2>

          <p className="text-black font-normal">
            {data.conclusion}
          </p>
        </div>

        {/* Related Blogs */}

        {data.relatedBlogs && data.relatedBlogs.length > 0 && (
          <div className="mt-12">
            <div className="border-b border-gray-300 mb-6">
              <h3 className="relative inline-block text-3xl font-bold font-gilroy-bold text-[#5545FF] pb-2">
                Related Blogs
                {/* This span creates the thick purple underline */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5545FF] rounded-t-md"></span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedBlogs.map((item, i) => (
                <RelatedCard key={item._id || i} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
