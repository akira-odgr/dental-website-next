import { cn } from "@/libs/utils/cn";
import { blogCardProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCard = ({ img, title, text, date }: blogCardProps) => {
    return (
        <div className="border border-primary-200 rounded-lg overflow-hidden">
            {/* Image */}
            <div>
                <Image
                    src={img}
                    alt={title}
                    width={389}
                    height={217}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
                <h3 className="card-title">{title}</h3>
                <p className="mb-4">{text}</p>
                <div>
                    <p>{date}</p>
                    <Link
                        href={"/blog"}
                        className={cn(
                            "text-primary-500 transition-colors font-medium",
                            "hover:text-primary-600"
                        )}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
