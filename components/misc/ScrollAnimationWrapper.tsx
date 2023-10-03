import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode
    className: string
};

export const ScrollAnimationWrapper: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}