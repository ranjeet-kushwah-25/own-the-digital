// components/blog/BlogSection.jsx
export default function BlogSection({ title, why, description, implement, points }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-2xl font-Gilroy-Black font-semibold text-indigo-500 mb-3">
        {title}
      </h2>

      <p className="text-black text-xl mb-3">{why}</p>
      <p className="text-black text-xl mb-3">{description}</p>

      <p className="text-black text-xl mb-3">{implement}</p>

      <ul className="list-disc pl-5 text-xl space-y-2 text-black">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}