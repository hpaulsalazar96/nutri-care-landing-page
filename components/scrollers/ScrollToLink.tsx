import { Link as LinkScroll } from 'react-scroll'

type Props = {
    children: React.ReactNode,
    name: string
};

export const ScrollToLink = () => {

}

export const ScrollToLinkSimple: React.FC<Props> = ({ children, name }) => {
    return (
        <>
            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                <LinkScroll
                    to={name}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    {children}
                </LinkScroll>
            </li>
        </>
    )
}

export const ScrollToLinkMobile = () => {

}