'use client'

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ButtonPrimary } from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import { getScrollAnimation } from "./utils/getScrollAnimation";
import { ScrollAnimationWrapper } from "./misc/ScrollAnimationWrapper";
import { UserGroupIcon, VideoCameraIcon, GlobeAmericasIcon, LanguageIcon, UsersIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { DetailIcon } from "./misc/DetailIcon";

export const Hero = ({ }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
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
        <div
            className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto mb-10"
            id="about"
        >
            {!smallScreen ? <div className="pt-16"/> :<div className="pt-10"/>}
            <ScrollAnimationWrapper>
                <motion.div
                    className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 "
                    variants={scrollAnimation}>
                    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                            {
                                !smallScreen
                                    ?
                                    (<h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-nutricare-200 leading-normal">
                                        Tu camino hacia una vida más saludable comienza con <strong>Nutri Care</strong>.
                                    </h1>)
                                    :
                                    (<h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-nutricare-200 leading-normal">
                                        Tu camino hacia una vida más saludable comienza con <br /><strong>Nutri Care</strong>.
                                    </h1>)
                            }
                        <p className="text-nutricare-200 mt-4 mb-6">
                            Accede a una primera cita para evaluar de tus necesidades nutricionales.
                        </p>
                        <ButtonPrimary>Agendar Ahora</ButtonPrimary>
                    </div>
                    <div className="flex w-full">
                        <motion.div className="w-full" variants={scrollAnimation}>
                            {
                                !smallScreen
                                    ?
                                    (<Image
                                        src="/assets/hero.png"
                                        alt="Nutri Care Hero"
                                        quality={100}
                                        width={612}
                                        height={383}
                                        layout="responsive"
                                        className="rounded-lg"
                                    />)
                                    :
                                    (<Image
                                        src="/assets/hero_min.png"
                                        alt="Nutri Care Hero"
                                        quality={100}
                                        width={612}
                                        height={383}
                                        layout="responsive"
                                        className="rounded-lg"
                                    />)
                            }

                        </motion.div>
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
            <div className="relative w-full flex mt-10">
                <ScrollAnimationWrapper
                    className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    <DetailIcon index={1} name="Usuarios" description="200+" Icon={UserGroupIcon} />
                    <DetailIcon index={2} name="Online" description="Citas" Icon={VideoCameraIcon} />
                    <DetailIcon index={4} name="Español" description="100%" Icon={LanguageIcon} />
                    <DetailIcon index={3} name="Paises" description="10+" Icon={GlobeAmericasIcon} />
                    <DetailIcon index={5} name="Contigo" description="24/7" Icon={UsersIcon} />
                    <DetailIcon index={6} name="NutriCare" description="App" Icon={DevicePhoneMobileIcon} />
                </ScrollAnimationWrapper>
                <div
                    className="absolute bg-nutricare-200 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </div>
        </div>
    )
}