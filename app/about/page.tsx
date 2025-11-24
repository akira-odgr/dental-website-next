import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import React from "react";

export const AboutPage = () => {
    return (
        <>
            <section className="section">
                <div className={cn("container", "space-y-16", "lg:space-y-20")}>
                    {/* Title */}
                    <div className="flex flex-wrap gap-8 justify-between items-end">
                        <div className="max-w-2xl">
                            <h2 className="title">
                                Welcome to Dentora Your Trusted Partner in
                                Dental Care
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Eget
                                ligula pharetra vulputate ac dictumst. Lacus
                                vitae diam.
                            </p>
                        </div>

                        <div className="flex items-center justify-end gap-2.5">
                            <span
                                className={cn(
                                    "relative w-[31px] h-[48px] border border-primary-600 flex items-center justify-center rounded-4xl",
                                    "before:absolute before:top-2.5 before:left-1/2 before:bg-primary-600 before:w-[3px] before:h-2.5 before:-translate-x-1/2 before:animate-bounce"
                                )}
                            />
                            <p>Scroll down</p>
                        </div>
                    </div>

                    {/* Banner */}
                    <div>
                        <Image
                            src={"/images/about-page-banner.png"}
                            alt="about page banner"
                            width={1197}
                            height={553}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Our story */}
            <section className="section">
                <div className="container">
                    {/* Title */}
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="subtitle">Our Story</p>
                        <h2 className="title">
                            We Started with One Simple Goal: Making Our Patients
                            Smile
                        </h2>
                        <p className="mt-1">
                            Lorem ipsum dolor sit amet consectetur. Eget ligula
                            pharetra vulputate ac dictumst. Lacus vitae diam.
                        </p>
                    </div>
                    {/* images wrapper */}
                    <div
                        className={cn(
                            "mt-16 flex items-baseline -space-x-20",
                            "lg:mt-20"
                        )}
                    >
                        <div className="relative -z-10">
                            <Image
                                src={"/images/about-section-img-2.png"}
                                alt="about section image"
                                width={593}
                                height={518}
                                className="rounded-xl rotate-[8deg]"
                            />
                        </div>
                        <div className="bg-primary-600 rounded-xl overflow-hidden">
                            <Image
                                src={"/images/about-section-img-3.png"}
                                alt="about section image"
                                width={630}
                                height={564}
                                className="rounded-xl rotate-[9deg]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
