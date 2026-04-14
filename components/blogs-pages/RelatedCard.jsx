// components/blog/RelatedCard.jsx
import Image from "next/image";

export default function RelatedCard({ image, title }) {
  return (
    <div className="rounded-xl overflow-hidden border hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-[180px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-normal font-balgin text-indigo-600">{title}</h3>
      </div>
    </div>
  );
}