import React from "react";

export const loading = () => {
    return (
        <div className="fixed top-0 bg-white z-50 h-screen w-full flex items-center justify-center">
            <div className="space-y-2">
                <div>
                    <div className="size-10 flex border-4 border-primary-400 items-center rounded-full border-t-primary-800 animate-spin mx-auto" />
                    <p className="text-4xl font-semibold">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default loading;
