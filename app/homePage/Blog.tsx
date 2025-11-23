import BlogCard from "@/components/ui/BlogCard";
import { blogSecItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";

export const Blog = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <div>
                    <p className="subtitle">Resources</p>
                    <h2 className="title">
                        Articles, Tips & Insights on Dental Care
                    </h2>
                </div>

                {/* Wrapper */}
                <div
                    className={cn(
                        "grid mt-11 gap-4",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3 lg:mt-16"
                    )}
                >
                    {blogSecItems.map((item) => (
                        <BlogCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
