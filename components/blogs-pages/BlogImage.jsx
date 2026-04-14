import Image from "next/image";

export default function BlogImage({ src }) {
  return (
    <div className="rounded-xl overflow-hidden mb-6">
      <Image
        src={src}
        alt="blog"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}