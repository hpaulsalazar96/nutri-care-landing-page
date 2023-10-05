import { motion } from "framer-motion"
import { ScrollAnimationWrapper } from "./misc/ScrollAnimationWrapper"
import { getScrollAnimation } from "./utils/getScrollAnimation";
import { useMemo } from "react";

export const ModalButton = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <>
            <div className="pt-48 mb-12" id="book">
                <ScrollAnimationWrapper className="relative w-full mt-2 mb-8">
                    <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                        <div className="absolute rounded-xl sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 border-2 border-nutricare-100">
                            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0 mt-2">
                                <h5 className="text-nutricare-200 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                    Agenda una cita con <br /> nuestros especialistas!
                                </h5>
                                <p className="nutricare-200">Para evaluar tus necesidades nutricionales específicas.</p>
                            </div>
                            {/**<ModalCalendly addClass="">Agendar Ahora</ModalCalendly> */}
                        </div>
                        <div
                            className="absolute bg-nutricare-200 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0 "
                            style={{ filter: "blur(114px)" }}
                        ></div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>

        </>
    )
}