"use client";
import { blogData } from "@/app/(root)/(website)/data/blogdata";
import BlogHeader from "@/components/blogs-pages/BlogHeader";
import BlogImage from "@/components/blogs-pages/BlogImage";
import BlogSection from "@/components/blogs-pages/BlogSection";
import RelatedCard from "@/components/blogs-pages/RelatedCard";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function BlogDetails() {
  const data = blogData;

  return (
    <div className=" bg-white">
      <div className="bg-black rounded-[0_0_32px_32px] w-full h-full py-15 bg-center">
        <Header />
      </div>
      <div className="max-w-5xl bg-white mx-auto px-4 py-10">
        <BlogHeader
          date={data.date}
          readTime={data.readTime}
          title={data.title}
        />

        {/* Image */}

        <BlogImage src={data.image} />

        {/* Intro */}

        <p className="text-black mb-6">{data.intro}</p>

        {/* Sections */}

        {data.sections.map((section, index) => (
          <BlogSection key={index} {...section} />
        ))}

        {/* Conclusion */}

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-indigo-500 mb-2">
            Conclusion
          </h2>

          <p className="text-black font-normal">
            Implementing these digital marketing strategies can help your business thrive in a competitive online environment. By focusing on creating valuable content, optimizing for search engines, engaging on social media, leveraging email marketing, running targeted ads, partnering with influencers, and incorporating video, you can build a comprehensive and effective digital marketing plan. Stay agile, monitor your results, and continuously refine your approach to achieve sustained success.
          </p>
        </div>

        {/* Related Blogs */}

        <div className="mt-12">
          <div className="border-b border-gray-300 mb-6">
            <h3 className="relative inline-block text-3xl font-bold font-gilroy-bold text-[#5545FF] pb-2">
              Related Blogs
              {/* This span creates the thick purple underline */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5545FF] rounded-t-md"></span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.related.map((item, i) => (
              <RelatedCard key={i} {...item} />
            ))}
          </div>
        
        </div>
      </div>
      <Footer/>
    </div>
  );
}
