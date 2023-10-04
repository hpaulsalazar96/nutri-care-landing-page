import { Link as LinkScroll } from 'react-scroll'

type Props = {
    children?: React.ReactNode,
    name: string,
    setActive?: any,
    active?: string | null,
    Icon?: any

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

export const ScrollToLinkMobile: React.FC<Props> = ({ children, name, setActive, active, Icon }) => {
    return (
        <>
            <LinkScroll
                activeClass="active"
                to={name}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => {
                    setActive(name);
                }}
                className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (active === name
                        ? "  border-nutricare-100 text-nutricare-200"
                        : " border-transparent")
                }
            >
                <Icon
                    className={"h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" +
                        (active === name
                            ? " fill-nutricare-100"
                            : " fill-nutricare-200")
                    } />
                {children}
            </LinkScroll>
        </>
    )
}

export const ScrollToUnselect: React.FC<Props> = ({ name, setActive }) => {
    return (
        <>
            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                <LinkScroll
                    to={name}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                        setActive(null);
                    }}
                >
                </LinkScroll>
            </li>
        </>
    )
}