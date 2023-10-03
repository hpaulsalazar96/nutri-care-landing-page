import { Feature } from "@/components/Feature"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout/Layout"
import { Pricing } from "@/components/Pricing"
import { SeoHead } from "@/components/SeoHead"
import { Testimonial } from "@/components/Testimonial"
import { ModalButton } from "@/components/misc/ModalButton"

const Home = () => {
    return (
        <>
            <SeoHead title='Nutri Care Nutritional Landing Page' />
            <Layout>
                <Hero/>
                <Feature />
                <Testimonial />
                <Pricing />
            </Layout>
        </>
    )
}

export default Home