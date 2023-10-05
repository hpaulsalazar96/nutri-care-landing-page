import { Link as LinkScroll } from 'react-scroll'

type Props = {
    addClass?: string,
    children?: React.ReactNode,
}

const onHandleClick = ({ target }: { target: any }) => {

}

export const ButtonScroll: React.FC<Props> = ({ children, addClass }) => {
    return (

        <LinkScroll
            activeClass="active"
            to={'book'}
            spy={true}
            smooth={true}
            duration={500}
        >
            <button
                className={
                    "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-nutricare-100 hover:shadow-nutricare-md hover:bg-nutricare-200 hover:text-white-500 transition ease-in-out duration-300 outline-none " +
                    addClass
                }
                onClick={onHandleClick}
            >
                {children}
            </button>
        </LinkScroll>
    )
}