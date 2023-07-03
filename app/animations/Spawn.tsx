
import { motion, AnimatePresence } from "framer-motion"

export default function Spawn({children, isVisible}: {children: React.ReactNode, isVisible: boolean}){
	return (<>
	<AnimatePresence>
			{ isVisible && (<motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
					exit={{ opacity: 0}}
          transition={{duration: 0.2}}
      >{children}
			</motion.div>)}
	</AnimatePresence>
	</>)
}