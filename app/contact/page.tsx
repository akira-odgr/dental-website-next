import FaqCard from "@/components/ui/FaqCard";
import InputField from "@/components/ui/InputField";
import { contactListItems, faqItems, formDromdownItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";

export const ContactPage = () => {
    return (
        <>
            <section className="section">
                <div
                    className={cn(
                        "container",
                        "grid gap-14 items-start",
                        "lg:grid-cols-[0.7fr_1fr]"
                    )}
                >
                    {/* content */}
                    <div>
                        {/* Title */}
                        <div>
                            <h2 className="title">Book an Appointment</h2>
                            <p className="max-w-lg">
                                Lorem ipsum dolor sit amet consectetur. Eget
                                ligula pharetra vulputate ac dictumst. Lacus
                                vitae diam.
                            </p>
                        </div>
                        {/* List */}
                        <div className="mt-8">
                            <h3 className={cn("card-title", "mb-5")}>
                                More information
                            </h3>
                            <ul className="space-y-5">
                                {contactListItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex items-start gap-2.5"
                                    >
                                        {/* Icon */}
                                        <span className="shrink-0 size-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg">
                                            <item.icon size={30} />
                                        </span>
                                        {/* content */}
                                        <div>
                                            <h3 className="card-title">
                                                {item.title}
                                            </h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        action=""
                        className="border border-primary-200 px-6 py-9 rounded-lg space-y-7"
                    >
                        {/* Wrapper */}
                        <div className={cn("grid gap-5", "md:grid-cols-2")}>
                            <InputField
                                label="Name"
                                placeholder="Full Name"
                                type="text"
                            />
                            <InputField
                                label="Email"
                                placeholder="email@example.com"
                                type="email"
                            />
                        </div>

                        {/* Wrapper */}
                        <div className={cn("grid gap-5", "md:grid-cols-2")}>
                            <InputField
                                label="Phone Number"
                                placeholder="(123)-456-8900"
                                type="text"
                            />
                            {/* Dropdown items */}
                            <div className="grid gap-2">
                                <label className="text-lg font-semibold">
                                    Services
                                </label>
                                <div
                                    className={cn(
                                        "px-5 py-3 border border-primary-400 rounded-lg bg-primary-100/20 placeholder-gray-600",
                                        "hover:bg-primary-100/35"
                                    )}
                                >
                                    <select className="w-full outline-none h-full">
                                        {formDromdownItems.map(
                                            (item, index) => (
                                                <option key={index}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* textarea */}
                        <div>
                            <label className="text-lg font-semibold">
                                Message
                            </label>
                            <textarea
                                placeholder="please describe what service you are in."
                                className={cn(
                                    "px-5 py-3 border border-primary-400 rounded-lg placeholder-gray-600 resize-none bg-primary-100/20 w-full h-[158px]",
                                    "hover:bg-primary-100/35"
                                )}
                            />
                        </div>
                        <button
                            className={cn(
                                "primary-btn",
                                "uppercase tracking-wider"
                            )}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Faq */}
            <section className="section">
                <div className="container">
                    {/* Title */}
                    <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
                        <p className="subtitle">FAQS</p>
                        <h3 className="title">Frequently Asked Questions</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio quidem quasi asperiores eveniet
                            accusantium.
                        </p>
                    </div>

                    {/* Wrapper */}
                    <div className="border border-primary-200 max-w-3xl mx-auto p-9 divide-y divide-primary-200 bg-white rounded-lg">
                        {faqItems.map((item) => (
                            <FaqCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
