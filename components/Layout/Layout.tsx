import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = { 
    children: React.ReactNode,
    addClass: string
};

export const Layout: React.FC<Props> = ({ children, addClass }) => {

    return (
        <>
            <Header />
            <div className={addClass}>
                {children}
            </div>
            <Footer />
        </>
    )
}