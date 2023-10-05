import { Booking } from "@/components/Book"
import { Feature } from "@/components/Feature"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/layout/Layout"
import { Pricing } from "@/components/Pricing"
import { SeoHead } from "@/components/SeoHead"
import { Testimonial } from "@/components/Testimonial"

const Home = () => {
    return (
        <>
            <SeoHead title='Nutri Care Nutritional Landing Page' />
            <Layout>
                <Hero />
                <Feature />
                <Testimonial />
                <Pricing />
                <Booking />
            </Layout>
        </>
    )
}

export default Home