import { Layout } from "@/components/Layout/Layout"
import { SeoHead } from "@/components/SeoHead"
import { Testimonial } from "@/components/Testimonial"

const Home = () => {
    return(
        <>
            <SeoHead title='Nutri Care Nutritional Landing Page'/>
            <Layout>
                <h1>Componentes</h1>
                <h1>Componentes</h1>
                <Testimonial/>
            </Layout>
        </>
    )
}

export default Home