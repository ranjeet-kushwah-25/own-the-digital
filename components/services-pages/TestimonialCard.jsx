'use client'

export default function TestimonialCard({
  name,
  role,
  date,
  review,
  image,
}) {
  return (
      <div 
          className="relative mx-auto w-[590px] h-[323px] text-white shadow-lg rounded-[20px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimnaol_rightUpCard.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
          <div className="p-6 flex flex-col h-full">
              {/* Quote Icon */}
              <span className="absolute top-4 right-4 text-[#5545FF] text-9xl  font-bold">
                  “
              </span>

              {/* Content Container */}
              <div className="flex-1 flex flex-col  justify-center mt-10">
                  {/* Header */}
                  <div className="flex absolute top-5 items-center gap-10 mb-3">
                      <img
                          src={image}
                          alt={name}
                          className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                          <h4 className="text-sm font-semibold text-white">{name}</h4>
                          <p className="text-xs text-gray-300">{role}</p>
                      </div>
                  </div>

                  {/* Date */}
                  <p className="text-[16px] text-gray-400 mb-3">{date}</p>

                  {/* Review */}
                  <p className="text-lg text-gray-200 leading-relaxed">
                      {review}
                  </p>
              </div>
          </div>
    </div>
  );
}