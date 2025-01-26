import { motion } from "framer-motion";

type Props = {
    title: string
}
const Button = ({ title }: Props) => {
  return (
    <motion.button whileHover={{ scale: 1.056 }} className='h-fit w-fit px-4 py-2 rounded-4xl ring-1 ring-white cursor-pointer' >
      {title}
    </motion.button>
  )
}

export default Button
