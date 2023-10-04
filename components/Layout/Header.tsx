'use client'

import { Link as LinkScroll } from 'react-scroll'
import Image from 'next/image';
import logoNC from '@/public/assets/Logo.svg'
import { useEffect, useState } from "react"
import { MenuDropdown } from "../misc/MenuDropdown";
import { ModalCalendly } from "../modals/ModalCalendly";
import { InformationCircleIcon, SwatchIcon, UserGroupIcon, CurrencyDollarIcon, BookmarkIcon } from "@heroicons/react/20/solid";

export const Header = () => {

    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
            if (window.scrollY < 20) {
                setActiveLink(null)
            }
        });
    }, []);

    return (
        <>
            <header className={"fixed top-0 w-full  z-30 bg-white-500 transition-all" + (scrollActive ? " shadow-md pt-0" : " pt-2")}>
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                    <div className="col-start-1 col-end-2 flex items-center">
                        <Image
                            priority
                            src={logoNC}
                            alt="Nutri Care Logo"
                            className="h-12 w-auto"
                        />
                    </div>
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-nutricare-200  items-center">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("about");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "about"
                                    ? " text-nutricare-100 animation-active "
                                    : " text-nutricare-200 hover:text-nutricare-100 a")
                            }
                        >
                            Acerca de
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="feature"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("feature");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "feature"
                                    ? " text-nutricare-100 animation-active "
                                    : " text-nutricare-200 hover:text-nutricare-100 ")
                            }
                        >
                            Servicios
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimonial"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("testimonial");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "testimonial"
                                    ? " text-nutricare-100 animation-active "
                                    : " text-nutricare-200 hover:text-nutricare-100 ")
                            }
                        >
                            Testimonios
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="pricing"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("pricing");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "pricing"
                                    ? " text-nutricare-100 animation-active "
                                    : " text-nutricare-200 hover:text-nutricare-100 ")
                            }
                        >
                            Precios
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="book"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("book");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "book"
                                    ? " text-nutricare-100 animation-active "
                                    : " text-nutricare-200 hover:text-nutricare-100 ")
                            }
                        >
                            Agendar
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink(null);
                            }}
                        >
                        </LinkScroll>
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        {/*<Link href="/">
                            Sign In<ButtonOutline addClass="flex justify-center items-center rounded-2xl ml-2">Apps</ButtonOutline>
                        </Link>*/}

                        <MenuDropdown></MenuDropdown>
                        <ModalCalendly addClass="w-12 h-10 flex justify-center items-center rounded-l-full rounded-r-full ml-2">Agendar</ModalCalendly>


                    </div>
                </nav>
            </header>

            {/* Mobile Navigation */}
            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
                <div className="bg-white-500 sm:px-3">
                    <ul className="flex w-full justify-between items-center text-nutricare-200">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("about");
                            }}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLink === "about"
                                    ? "  border-nutricare-100 text-nutricare-200"
                                    : " border-transparent")
                            }
                        >
                            <InformationCircleIcon
                                className={"h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" +
                                    (activeLink === "about"
                                        ? " fill-nutricare-100"
                                        : " fill-nutricare-200")
                                } />
                            Acerca
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="feature"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("feature");
                            }}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLink === "feature"
                                    ? "  border-nutricare-100 text-nutricare-200"
                                    : " border-transparent ")
                            }
                        >
                            <SwatchIcon
                                className={"h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" +
                                    (activeLink === "feature"
                                        ? " fill-nutricare-100"
                                        : " fill-nutricare-200")
                                } />
                            Servicios
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimonial"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("testimonial");
                            }}
                            className={
                                "mx-1 sm:mx-2 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLink === "testimonial"
                                    ? "  border-nutricare-100 text-nutricare-200"
                                    : " border-transparent ")
                            }
                        >
                            <UserGroupIcon
                                className={"h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" +
                                    (activeLink === "testimonial"
                                        ? " fill-nutricare-100"
                                        : " fill-nutricare-200")
                                } />
                            Testimonios
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="pricing"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("pricing");
                            }}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLink === "pricing"
                                    ? "  border-nutricare-100 text-nutricare-200"
                                    : " border-transparent ")
                            }
                        >
                            <CurrencyDollarIcon
                                className={"h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" +
                                    (activeLink === "pricing"
                                        ? " fill-nutricare-100"
                                        : " fill-nutricare-200")
                                } />
                            Precios
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="book"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink("book");
                            }}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLink === "book"
                                    ? "  border-nutricare-100 text-nutricare-200"
                                    : " border-transparent ")
                            }
                        >
                            <BookmarkIcon
                                className={"h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100 transition ease-in-out delay-25" +
                                    (activeLink === "book"
                                        ? " fill-nutricare-100"
                                        : " fill-nutricare-200")
                                } />
                            Cita
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => {
                                setActiveLink(null);
                            }}
                        >
                        </LinkScroll>
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    )
}