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
          className="relative mx-auto w-[320px] h-[280px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[310px] lg:w-[590px] lg:h-[323px] text-white shadow-lg rounded-[20px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimnaol_rightUpCard.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
          <div className="p-4 sm:p-6 flex flex-col h-full">
              {/* Quote Icon */}
              <span className="absolute top-4 right-4 text-[#5545FF] text-9xl  font-bold">
                  “
              </span>

              {/* Content Container */}
              <div className="flex-1 flex flex-col justify-center mt-6 sm:mt-8 md:mt-10">
                  {/* Header */}
                  <div className="flex absolute top-3 sm:top-5 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-2 sm:mb-3">
                      <img
                          src={image}
                          alt={name}
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                          <h4 className="text-xs sm:text-sm md:text-base font-semibold text-white">{name}</h4>
                          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">{role}</p>
                      </div>
                  </div>

                  {/* Date */}
                  <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-400 mb-2 sm:mb-3">{date}</p>

                  {/* Review */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                      {review}
                  </p>
              </div>
          </div>
    </div>
  );
}