"use client";

import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative pt-32">
            <div
                className={cn(
                    "container",
                    "grid gap-16 space-y-10",
                    "sm:space-y-0",
                    "lg:grid-cols-2 lg:items-end"
                )}
            >
                {/* Content */}
                <div
                    className={cn(
                        "max-w-xl my-auto pb-10",
                        "md:max-w-2xl",
                        "lg:max-w-none"
                    )}
                >
                    <p className="subtitle">Smile with Confidence</p>
                    <h1
                        className={cn(
                            "text-4xl font-bold",
                            "md:text-5xl",
                            "lg:text-[54px]"
                        )}
                    >
                        HELPING YOU BRING BACK YOUR{" "}
                        <span className="text-primary-600">HAPPY SMILE</span>
                    </h1>
                    <p className="py-[14px_32px]">
                        Lorem ipsum dolor sit amet consectetur. Consequat
                        pharetra ultrices scelerisque arcu lorem augue. Lacus
                        justo euismod justo amet dictum vel sapien est.
                        Imperdiet tempor.
                    </p>

                    {/* Wrapper */}
                    <div className={cn("flex flex-col gap-4", "md:flex-row")}>
                        <Link href={"/about"} className="primary-btn">
                            LEARN MORE
                        </Link>
                        <Link href={"/services"} className="secondary-btn">
                            BROWSE SERVICES
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className={cn("relative max-w-max", "lg:mx-0 lg:ml-auto")}>
                    <Image
                        src={"/images/hero-img.png"}
                        alt="hero image"
                        width={727}
                        height={787}
                        className="relative z-20"
                    />
                    <Image
                        src={"/images/hero-card.png"}
                        alt="hero card"
                        width={229}
                        height={109}
                        className="absolute top-11 left-5 z-10 ring ring-primary-200 rounded-lg"
                    />
                </div>
            </div>

            {/* Bg clr */}
            <div
                className={cn(
                    "bg-primary-100 absolute bottom-0 right-0 w-3/4 h-5/12 rounded-tl-xl -z-10",
                    "sm:h-1/2",
                    "lg:w-1/2 lg:h-full lg:rounded-tl-none"
                )}
            />

            {/* Shape */}
            <Image
                src={"/images/shape-1.svg"}
                alt="shape"
                width={200}
                height={200}
                className="absolute top-28 -left-8 -z-10"
            />
        </section>
    );
};

export default Hero;
