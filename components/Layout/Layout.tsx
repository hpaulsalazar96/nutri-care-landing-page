import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = { children: React.ReactNode };

export const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}