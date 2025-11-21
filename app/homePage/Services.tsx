import ServicesCard from "@/components/ui/ServicesCard";
import { servicesSecItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Link from "next/link";

export const Services = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <div className="flex gap-6 flex-wrap items-center justify-between">
                    <div>
                        <p className="subtitle">Services</p>
                        <h2 className="title max-w-md">
                            Advanced Dental Care for Healthier Smiles
                        </h2>
                    </div>
                    <Link href={"/services"} className="primary-btn uppercase">
                        View all
                    </Link>
                </div>

                {/* Wrapper */}
                <div
                    className={cn(
                        "grid gap-6 mt-14",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3"
                    )}
                >
                    {servicesSecItems.map((item) => (
                        <ServicesCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
