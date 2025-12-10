"use client";

import { cn } from "@/libs/utils/cn";
import { faqCardProps } from "@/types/types";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import React, { useState } from "react";

export const FaqCard = ({ title, text }: faqCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);
    return (
        <div className="py-5">
            {/* Trigger */}
            <div className="flex items-start gap-2">
                <button
                    onClick={handleClick}
                    className={cn(
                        "size-8 flex items-center justify-center bg-primary-200 rounded-lg text-primary-800 shrink-0 transition-colors",
                        "hover:bg-primary-300"
                    )}
                >
                    {isOpen ? <RiSubtractLine /> : <RiAddLine />}
                </button>
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>

            {/* Text */}
            <div
                className={cn(
                    "max-h-0 overflow-y-hidden transition-[max-height]",
                    isOpen && "max-h-60 overflow-y-auto"
                )}
            >
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FaqCard;
