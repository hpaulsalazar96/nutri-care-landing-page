'use client'

import Image from "next/legacy/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { getScrollAnimation } from "./utils/getScrollAnimation";
import { ScrollAnimationWrapper } from "./misc/ScrollAnimationWrapper";
import { FireIcon } from "@heroicons/react/20/solid";

const features = [
    "Asesoramiento Personalizado",
    "Evaluaciones Regulares",
    "Seguimiento Virtual",
    "Acceso a la App de Nutri Care",
    "Acceso a Especialistas (Pediatria y Jeriatrico)",
    "Plan de Alimentacion Diario",
    "Recompensas por Cumplimiento de Metas",
]

export const Feature = () => {
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
            className="bg-gradient-to-b from-white-300 to-white-500 max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto mb-12"
            id="feature"
        >
            {!smallScreen ? <div className="pt-28" /> : <div className="pt-4" />}
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full mt-8" variants={scrollAnimation}>
                        <Image
                            src="/assets/portrait.png"
                            alt="portrait"
                            layout="responsive"
                            quality={100}
                            width={612}
                            height={383}
                            className="rounded-lg"
                            blurDataURL={'/Logo.svg'}    
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>

                    <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-nutricare-200">
                            Contamos con Servicios Especializados
                        </h3>
                        <p className="my-2 text-nutricare-200">
                            Con el fin de brindar a nuestros clientes el mejor servicio te ofrecemos<br />
                        </p>
                        <ul className="text-nutricare-200 self-start list-inside ml-8 py-2">
                            {features.map((feature, index) => (
                                <motion.li
                                    className="relative circle-check custom-list py-2 hover:text-nutricare-100"
                                    custom={{ duration: 2 + index }}
                                    variants={scrollAnimation}
                                    key={feature}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: .2
                                        }
                                    }}>
                                    <div className="flex hover:fill-nutricare-100">
                                        <FireIcon className="h-6 w-6 fill-nutricare-200 hover:fill-nutricare-100  transition ease-in-out delay-25 mr-2" />
                                        {feature}
                                    </div>
                                </motion.li>
                            )
                            )}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    )
}
