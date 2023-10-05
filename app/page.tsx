import { Booking } from "@/components/Book"
import { Feature } from "@/components/Feature"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout/Layout"
import { Pricing } from "@/components/Pricing"
import { SeoHead } from "@/components/SeoHead"
import { Testimonial } from "@/components/Testimonial"

const Home = () => {
    const date = new Date("2023-10-05");
    return (
        <>
            <SeoHead title='Nutri Care - Nutricionista en linea' date={date}/>
            <Layout addClass="bg-gradient-to-b from-white-300 to-white-500">
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