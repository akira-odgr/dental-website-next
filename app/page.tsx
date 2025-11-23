import Cta from "@/components/ui/Cta";
import About from "./homePage/About";
import Hero from "./homePage/Hero";
import Services from "./homePage/Services";
import Testimonials from "./homePage/Testimonials";
import Blog from "./homePage/Blog";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Cta />
            <Blog />
        </>
    );
}
