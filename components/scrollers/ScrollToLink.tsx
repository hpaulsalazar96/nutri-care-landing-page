import { Link as LinkScroll } from 'react-scroll'

type Props = {
    children: React.ReactNode,
    name: string,
    setActive?: any,
    active?: string | null

};

export const ScrollToLink: React.FC<Props> = ({ children, name, setActive, active }) => {
    return (
        <>
            <LinkScroll
                activeClass="active"
                to={name}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => {
                    setActive(name)
                }}
                className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (active === name
                        ? " text-nutricare-100 animation-active "
                        : " text-nutricare-200 hover:text-nutricare-100 a")
                }
            >
                {children}
            </LinkScroll>
        </>
    )

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