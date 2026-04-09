'use client'

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogList from "@/components/blogs-pages/BlogList";
export default function BlogPage() {

    return (
        <div className="bg-white">
            <div className="bg-black rounded-[0_0_32px_32px] w-full h-full py-15 bg-center">
                <Header />
            </div>
            <div className="">
                <BlogList />
            </div>

            <Footer />
        </div>
    );
}
