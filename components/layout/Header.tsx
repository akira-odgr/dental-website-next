"use client";

import { navItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full py-4 border-y border-primary-100 z-40 bg-white",
                "lg:py-0"
            )}
        >
            <div
                className={cn(
                    "container",
                    "flex items-center justify-between mx-auto"
                )}
            >
                {/* Logo */}
                <Link href={"/"}>
                    <Image
                        src={"/images/logo.png"}
                        alt="logo image"
                        width={167}
                        height={43}
                    />
                </Link>

                {/* Mobile Menu */}
                <nav
                    className={cn(
                        "absolute top-full left-0 bg-white/60 w-full backdrop-blur-2xl flex items-center justify-center border-y border-gray-200 -z-30 -translate-y-[170%] transition-transform",
                        "lg:hidden",
                        isOpen && "translate-y-0"
                    )}
                >
                    <ul className="py-6 text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "uppercase p-1.5 inline-block font-medium transition-colors",
                                        "hover:text-primary-600",
                                        pathname === item.href &&
                                            "text-primary-600"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Menu */}
                <nav className={cn("hidden", "lg:block")}>
                    <ul className={cn("flex items-center gap-12")}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "font-semibold border-b-[3px] border-white block py-4 transition-colors",
                                        "hover:border-primary-600 hover:text-primary-600",
                                        pathname === item.href &&
                                            "text-primary-600 border-primary-600"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Menu Btn */}
                <button
                    className={cn(
                        "border border-gray-300 size-11 flex items-center justify-center rounded-lg transition-colors",
                        "lg:hidden",
                        "hover:bg-gray-100",
                        "focus:bg-gray-100"
                    )}
                    onClick={handleClick}
                >
                    {isOpen ? <RiCloseLine /> : <RiMenuLine />}
                </button>
            </div>
        </header>
    );
};

export default Header;
