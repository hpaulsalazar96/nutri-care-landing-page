import { Layout } from "@/components/Layout/Layout"
import { Pricing } from "@/components/Pricing"
import { SeoHead } from "@/components/SeoHead"
import { Testimonial } from "@/components/Testimonial"
import { ModalButton } from "@/components/misc/ModalButton"

const Home = () => {
    return(
        <>
            <SeoHead title='Nutri Care Nutritional Landing Page'/>
            <Layout>
                <h1>Componentes</h1>
                <h1>Componentes</h1>
                <Testimonial/>
                <Pricing/>
            </Layout>
        </>
    )
}

export default Home