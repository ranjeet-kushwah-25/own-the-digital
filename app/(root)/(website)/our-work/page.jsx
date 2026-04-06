import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";

export default function OurWork() {
    const logos = [
        "/images/maharastara_timepass.jpg",
        "/images/pantaloons.jpg",
        "/images/sectrio_logo.jpg",
        "/images/third-wave-coffee.png",
        "/images/IBM_Iogo.png",
        "/images/maharastara_timepass.jpg",
        "/images/pantaloons.jpg",
        "/images/sectrio_logo.jpg",
        "/images/third-wave-coffee.png",
        "/images/IBM_Iogo.png",
    ];

    return (
        <section className="py-20 bg-[#ffffff] text-center">
            {/* Heading Wrapper */}
            <div className="relative flex flex-col items-center justify-center">

                <SectionHeading
                    title="OUR WORK"
                    subtitle="who we work with"
                    align="center"
                />

            </div>

            {/* Logos */}
            <div className="mt-12 overflow-hidden">
                <marquee behavior="scroll" scrollamount="15" loop="infinite">
                    <div className="flex items-center gap-10">
                        {logos.map((logo, index) => (
                            <div key={index} className="w-[200px] h-full relative shrink-0">
                                <Image
                                    src={logo}
                                    alt="client logo"
                                    width={200}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>
        </section >
    );
}