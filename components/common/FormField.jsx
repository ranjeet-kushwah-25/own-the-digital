'use client'

export default function FormField({
  index,
  label,
  placeholder,
  type = "text",
  options = [],
}) {
  return (
    <div className="mb-8">
      
      {/* Label Row */}
      <div className="flex items-end justify-start gap-4 mb-2">
        <span className="text-[120px] font-black leading-none mb-1"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px #bbb",
          }}>{index}
        </span>

        <p className="text-md font-medium font-gilroy-black text-[#FFFFFF]">{label}</p>
      </div>

      {/* Input Types */}
      {type === "select" ? (
        <select className="w-full bg-transparent border-b border-indigo-500/40 font-gilroy-black text-md py-2 outline-none text-[#FFFFFF]">
          <option value="">Choose your service</option>
          {options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-indigo-500/40 text-sm py-2 outline-none text-[#FFFFFF]"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-indigo-500/40 text-sm py-2 outline-none text-[#FFFFFF]"
        />
      )}
    </div>
  );
}