'use client'

import { Link as LinkScroll } from 'react-scroll'
import Image from 'next/image';
import logoNC from '@/public/assets/Logo.svg'
import { useEffect, useState } from "react"
import { MenuDropdown } from "../misc/MenuDropdown";
import { ModalCalendly } from "../modals/ModalCalendly";
import { InformationCircleIcon, SwatchIcon, UserGroupIcon, CurrencyDollarIcon, BookmarkIcon } from "@heroicons/react/20/solid";
import { ScrollToLink, ScrollToLinkMobile, ScrollToUnselect } from './../scrollers/ScrollToLink'

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
                        <ScrollToLink name='about' setActive={setActiveLink} active={activeLink}>
                            Acerca de
                        </ScrollToLink>
                        <ScrollToLink name='feature' setActive={setActiveLink} active={activeLink}>
                            Servicios
                        </ScrollToLink>
                        <ScrollToLink name='testimonial' setActive={setActiveLink} active={activeLink}>
                            Testimonios
                        </ScrollToLink>
                        <ScrollToLink name='pricing' setActive={setActiveLink} active={activeLink}>
                            Precios
                        </ScrollToLink>
                        <ScrollToLink name='book' setActive={setActiveLink} active={activeLink}>
                            Agendar
                        </ScrollToLink>
                        <ScrollToUnselect name='footer' setActive={setActiveLink}/>
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        <MenuDropdown></MenuDropdown>
                        <ModalCalendly addClass="w-12 h-10 flex justify-center items-center rounded-l-full rounded-r-full ml-2">Agendar</ModalCalendly>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation */}
            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
                <div className="bg-white-500 sm:px-3">
                    <ul className="flex w-full justify-between items-center text-nutricare-200">
                        <ScrollToLinkMobile name='about' setActive={setActiveLink} active={activeLink} Icon={InformationCircleIcon}>
                        Acerca
                        </ScrollToLinkMobile>
                        <ScrollToLinkMobile name='feature' setActive={setActiveLink} active={activeLink} Icon={SwatchIcon}>
                        Servicios
                        </ScrollToLinkMobile>
                        <ScrollToLinkMobile name='testimonial' setActive={setActiveLink} active={activeLink} Icon={UserGroupIcon}>
                        Testimonios
                        </ScrollToLinkMobile>
                        <ScrollToLinkMobile name='pricing' setActive={setActiveLink} active={activeLink} Icon={UserGroupIcon}>
                        Precios
                        </ScrollToLinkMobile>
                        <ScrollToLinkMobile name='book' setActive={setActiveLink} active={activeLink} Icon={UserGroupIcon}>
                        Cita
                        </ScrollToLinkMobile>
                        <ScrollToUnselect name='footer' setActive={setActiveLink}/>
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    )
}