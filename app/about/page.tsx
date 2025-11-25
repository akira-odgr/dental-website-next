import { teamCardItems, valuesItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiInstagramLine, RiYoutubeFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

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

            {/* Our values */}
            <section className="section">
                <div className="container">
                    {/* Title */}
                    <div className="text-center max-w-xl mx-auto">
                        <p className="subtitle">Values</p>
                        <h2 className="title">
                            The Core Principles That Drive Everything We Do
                        </h2>
                    </div>

                    {/* Wrapper */}
                    <div className={cn("mt-16 grid gap-5", "sm:grid-cols-2")}>
                        {valuesItems.map((item) => (
                            <div
                                key={item.id}
                                className="border border-primary-200 p-6 rounded-lg flex items-start gap-3.5 bg-white"
                            >
                                {/* Icon */}
                                <span className="shrink-0 size-12 bg-primary-100 flex items-center justify-center rounded-md text-primary-700">
                                    <item.icon />
                                </span>

                                {/* content */}
                                <div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Btn */}
                    <Link
                        href={"/service"}
                        className={cn(
                            "secondary-btn block mt-10 max-w-max mx-auto",
                            "lg:mt-28"
                        )}
                    >
                        BROWSE SERVICES
                    </Link>
                </div>
            </section>

            {/* Our Team */}
            <section className="section">
                <div className="container">
                    {/* Title`` */}
                    <div className="max-w-xl text-center mx-auto">
                        <p className="subtitle">Our Team</p>
                        <h2 className="title">
                            Skilled Dentists Committed to Your Oral Health
                        </h2>
                    </div>

                    {/* wrapper */}
                    <div
                        className={cn(
                            "mt-11 grid gap-8",
                            "sm:grid-cols-2",
                            "lg:grid-cols-4"
                        )}
                    >
                        {teamCardItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-lg overflow-hidden shadow-lg"
                            >
                                {/* Image */}
                                <div className="bg-primary-100">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={260}
                                        height={244}
                                        className="mx-auto"
                                    />
                                </div>

                                {/* content */}
                                <div className="p-5 text-center space-y-1">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p>{item.text}</p>
                                    <div className="flex items-center justify-center gap-2.5">
                                        <a
                                            href="#"
                                            className={cn(
                                                "size-9 bg-primary-500 text-white flex items-center justify-center rounded-full transition-colors",
                                                "hover:bg-primary-700",
                                                "focus:bg-primary-700"
                                            )}
                                        >
                                            <RiInstagramLine />
                                        </a>
                                        <a
                                            href="#"
                                            className={cn(
                                                "size-9 bg-primary-500 text-white flex items-center justify-center rounded-full transition-colors",
                                                "hover:bg-primary-700",
                                                "focus:bg-primary-700"
                                            )}
                                        >
                                            <RiYoutubeFill />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
