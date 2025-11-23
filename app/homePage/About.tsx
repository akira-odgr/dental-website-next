import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
    return (
        <section className="py-20 bg-primary-100/25 mt-20 relative">
            <div
                className={cn(
                    "container",
                    "grid gap-14",
                    "lg:grid-cols-2 lg:items-center"
                )}
            >
                {/* content */}
                <div className={cn("space-y-1.5", "lg:order-1")}>
                    <p className="subtitle">About Us</p>
                    <h2 className="title">
                        Serving Our Community with 15 Years of Experience
                    </h2>
                    <p className="mt-4 mb-8">
                        Lorem ipsum dolor sit amet consectetur. Amet platea
                        egestas aliquam habitant. Hac urna a rhoncus venenatis
                        arcu. Felis elit posuere ornare massa pellentesque quam
                        porta. Amet dolor nisi vehicula consectetur sed aliquet
                        ut faucibus gravida. Ultricies a sem magna feugiat nisl
                        mi a.
                    </p>

                    <div className="flex items-center mb-10 gap-6">
                        <span className="rounded-full overflow-hidden ring ring-primary-500 aspect-square">
                            <Image
                                src={"/images/about-sm-img.png"}
                                alt="sm image"
                                width={80}
                                height={80}
                            />
                        </span>
                        <div className="space-y-0.5">
                            <h2 className="card-title">Dr. Smith Moore</h2>
                            <p>Dentist at global Dentistry</p>
                        </div>
                    </div>

                    <Link href={"/about"} className="primary-btn uppercase">
                        LEARN MORE
                    </Link>
                </div>
                {/* Image */}
                <div className="max-w-max mx-auto">
                    <Image
                        src={"/images/about-section-img.png"}
                        alt="about section image"
                        width={512}
                        height={557}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
