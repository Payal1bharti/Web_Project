import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'

import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../context/FeedbackContext'

function FeebackList() {
    const {feedback} = useContext(FeedbackContext)
    
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>

    }
    // with animation code below when item is deleting:

    return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            <Feedbackitem 
            key={item.id} 
            item={item} 
           
            />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
    )

    // without animation code below when item is deleting:

    // return (
    // <div className='feedback-list'>
    //     {feedback.map((item) => (
    //         <Feedbackitem 
    //         key={item.id} 
    //         item={item} 
           
    //         />
    //     ))}
    // </div>
    // )
}


export default FeebackList
