import { cn } from "@/libs/utils/cn";
import { inputProps } from "@/types/types";
import React from "react";

export const InputField = ({ label, placeholder, type }: inputProps) => {
    return (
        <div className="grid gap-2">
            <label className="font-semibold text-lg">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className={cn(
                    "px-5 py-3 border outline-none border-primary-400 rounded-lg bg-primary-100/20 placeholder-gray-600",
                    "hover:bg-primary-100/35"
                )}
            />
        </div>
    );
};

export default InputField;
