'use client'

import facebookIcon from "../../public/assets/Icon/facebook.svg";
import whatsappIcon from "../../public/assets/Icon/whatsapp.svg";
import instagramIcon from "../../public/assets/Icon/instagram.svg";
import logoNC from "../../public/assets/Logo.svg";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';
import Link from "next/link";
import { socialLinks } from '../utils/socialLinks'
import { useEffect, useState } from "react";
import { SocialLink } from "../misc/SocialLink";
import { Link as LinkScroll } from 'react-scroll'

export const Footer = () => {

    const [screenSize, setscreenSize] = useState('');
    const [smallScreen, setSmallScreen] = useState(false);
    const { instagramLink, facebookLink, whatsappLink } = socialLinks

    useEffect(() => {
        const updateScreenSize = () => {
            if (window.innerWidth >= 640) {
                setscreenSize('max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4')
            } else {
                setscreenSize('max-w-screen-xl w-full mx-auto sm:px-8 lg:px-16 grid')
            }

            if (window.innerWidth >= 720) {
                setSmallScreen(false)
            } else {
                setSmallScreen(true)
            }
        }
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    return (
        <>
            <div className="bg-white-300 pt-44 pb-36" id="footer">
                <div className={screenSize}>
                    <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col mx-2">
                        <div className="">
                            <Image
                                priority
                                src={logoNC}
                                alt="Nutri Care Logo"
                                className="mx-auto"
                            />
                        </div>

                        <p className="mb-4 mt-4 text-nutricare-200">
                            <strong>Nutricare</strong> es una agencia de consultoría nutricional que brinda un seguimiento nutricional integral  a sus pacientes, de manera <strong>presencial</strong> y <strong>virtual</strong>.
                        </p>
                        {smallScreen ?
                            (<div className="flex w-full mt-6 mb-8 flex items-center ml-2">
                                <p className="text-nutricare-200 text-sm">Siguenos:</p>
                                <div className="flex w-full">
                                    <SocialLink url={whatsappLink} path={whatsappIcon} description="Siguenos en Whatsapp" />
                                    <SocialLink url={instagramLink} path={instagramIcon} description="Siguenos en Instagram" />
                                    <SocialLink url={facebookLink} path={facebookIcon} description="Siguenos en Facebook" />
                                </div>
                            </div>
                            )
                            :
                            ("")
                        }
                    </div>

                    <div className="row-span-3 sm:col-span-3 sm:col-start-9 sm:col-end-12 flex flex-col px-4 ">
                        <p className="text-nutricare-200 mb-2 font-medium text-base">
                            <strong>
                                Contactos
                            </strong>
                        </p>
                        <ul className="text-nutricare-200 space-y-4">
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <div className="flex">
                                    <MapPinIcon className="h-6 w-6 mr-2" />
                                    Quito, Ecuador{" "}
                                </div>
                            </li>
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <div className="flex">
                                    <PhoneIcon className="h-6 w-6 mr-2" />
                                    +593 99 567 5641{" "}
                                </div>
                            </li>
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <div className="flex">
                                    <EnvelopeIcon className="h-6 w-6 mr-2" />
                                    nutricareweb@gmail.com{" "}
                                </div>
                            </li>
                        </ul>
                        {
                            !smallScreen ?
                                (
                                    <div className="flex w-full mt-6 mb-8 flex items-center">
                                        <p className="text-nutricare-200 text-sm">Siguenos:</p>
                                        <div className="flex w-full">
                                            <SocialLink url={whatsappLink} path={whatsappIcon} description="Siguenos en Whatsapp" />
                                            <SocialLink url={instagramLink} path={instagramIcon} description="Siguenos en Instagram" />
                                            <SocialLink url={facebookLink} path={facebookIcon} description="Siguenos en Facebook" />
                                        </div>
                                    </div>
                                )
                                :
                                ('')
                        }
                    </div>
                    <div className=" row-span-3 sm:col-span-3 sm:col-start-6 sm:col-end-9 flex flex-col mx-3">
                        <p className="text-nutricare-200 mb-2 font-medium text-base ">
                            <strong>
                                Ver:
                            </strong>
                        </p>
                        <ul className="text-nutricare-200 ">
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <LinkScroll
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Acerca de
                                </LinkScroll>
                            </li>
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <LinkScroll
                                    to="feature"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Servicios
                                </LinkScroll>
                            </li>
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <LinkScroll
                                    to="testimonial"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Testimonios
                                </LinkScroll>
                            </li>
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <LinkScroll
                                    to="pricing"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Precios
                                </LinkScroll>
                            </li>
                            <li className="my-2 hover:text-nutricare-100 cursor-pointer transition-all">
                                <LinkScroll
                                    to="book"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Agendar
                                </LinkScroll>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-12 mx-auto pt-1">
                    <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
                        <p className="text-nutricare-300">©{new Date().getFullYear()} - Nutri.Care </p>
                        <p className="text-nutricare-300">Desarrollado por <strong className="transition ease-in-out delay-50 hover:text-nutricare-200 "><Link href="https://github.com/hpaulsalazar96/" target="_blank">@hpaulsalazar96</Link></strong> </p>
                    </div>
                </div>
            </div>
        </>
    )
}