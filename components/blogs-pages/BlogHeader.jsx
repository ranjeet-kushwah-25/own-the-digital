// components/blog/BlogHeader.jsx
export default function BlogHeader({ date, readTime, title }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-[#000000] mb-2">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-balgin font-normal text-indigo-500">
        {title}
      </h1>
    </div>
  );
}