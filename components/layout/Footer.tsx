import { footerListItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import {
    RiFacebookFill,
    RiInstagramLine,
    RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="pt-16 pb-7 bg-primary-100/30 mt-26">
            <div className={cn("container", "divide-y divide-gray-300")}>
                {/* Footer top */}
                <div
                    className={cn(
                        "grid gap-12 pb-16",
                        "sm:gird-cols-2",
                        "lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr] lg:pb-20"
                    )}
                >
                    {/* NewsLetter */}
                    <div>
                        <p className="card-title">
                            Subscribe to Our Newsletter
                        </p>
                        <p className="pt-3 mb-8">
                            Lorem ipsum dolor sit amet consectetur. Eget ligula
                            pharetra vulputate ac dictumst. Lacus vitae diam.
                        </p>

                        <div
                            className={cn(
                                "grid gap-2",
                                "lg:grid-cols-[1fr_0.7fr]"
                            )}
                        >
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="bg-primary-100 h-full p-4 rounded-md"
                            />
                            <button className="primary-btn">subscribe</button>
                        </div>
                    </div>

                    {/* Footer list */}
                    {footerListItems.map((item) => (
                        <div key={item.id}>
                            <p className="text-lg font-semibold mb-1">
                                {item.title}
                            </p>
                            <ul className="space-y-1.5">
                                {item.list.map((label, index) => (
                                    <li key={index}>
                                        <Link
                                            href="#"
                                            className={cn("hover:underline")}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Footer bottom */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
                    <div className="flex items-center gap-5">
                        <div>
                            <Image
                                src={"/images/logo.png"}
                                alt="footer logo"
                                width={167}
                                height={43}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href="#"
                                className="hover:text-primary-600 transition-colors"
                            >
                                <RiFacebookFill />
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary-600 transition-colors"
                            >
                                <RiInstagramLine />
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary-600 transition-colors"
                            >
                                <RiTwitterXLine />
                            </a>
                        </div>
                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} Dentora.All rights
                        Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
