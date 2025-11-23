"use client";

import { testimonialsItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonials = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <div className="max-w-2xl space-y-2">
                    <p className="subtitle">Testimonials</p>
                    <h2 className="title">
                        Hear from Our 1,000+ Happy Patients
                    </h2>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur. Amet platea
                        egestas aliquam habitant. Hac
                    </p>
                </div>
                {/* Wrapper */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    loop
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={20}
                    className="mt-11"
                >
                    {testimonialsItems.map((item) => (
                        // Card
                        <SwiperSlide
                            key={item.id}
                            className={cn(
                                "border border-primary-200 p-5 rounded-md overflow-hidden flex flex-col items-start",
                                "sm:flex-row"
                            )}
                        >
                            {/* image */}
                            <div className="max-w-max shrink-0">
                                <Image
                                    src={item.img}
                                    alt={item.author}
                                    width={95}
                                    height={95}
                                    className="rounded-full ring-4 ring-primary-600 size-16"
                                />
                            </div>
                            {/* content */}
                            <div className="space-y-4">
                                <p>{item.text}</p>
                                <p className="card-title">{item.author}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation */}
                <div
                    className={cn(
                        "flex items-center justify-center mt-11 gap-2.5",
                        "lg:mt-16"
                    )}
                >
                    <button
                        className={cn(
                            "prev-btn",
                            "size-10 bg-primary-600 rounded-full text-white flex items-center justify-center transition-colors",
                            "hover:bg-primary-700"
                        )}
                    >
                        <RiArrowLeftLine />
                    </button>
                    <button
                        className={cn(
                            "next-btn",
                            "size-10 bg-primary-600 rounded-full text-white flex items-center justify-center transition-colors",
                            "hover:bg-primary-700"
                        )}
                    >
                        <RiArrowRightLine />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
