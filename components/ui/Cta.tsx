import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import React from "react";

export const Cta = () => {
    return (
        <section className="section">
            <div className={cn("flex flex-col", "sm:flex-row sm:gap-4")}>
                {/* Image */}
                <div>
                    <Image
                        src={"/images/cta-img.png"}
                        alt="cta image"
                        width={409}
                        height={400}
                        className="size-full object-caver"
                    />
                </div>
                {/* Content */}
                <div className="bg-primary-600 text-white p-16 w-full">
                    <h2 className="title">
                        Get Started Today Virtual or In Person Appointments
                        Available
                    </h2>
                    <button
                        className={cn(
                            "secondary-btn",
                            "bg-white text-black/80 font-semibold mt-11 rounded-2xl transition-colors",
                            "lg:mt-14",
                            "hover:bg-white/90"
                        )}
                    >
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
