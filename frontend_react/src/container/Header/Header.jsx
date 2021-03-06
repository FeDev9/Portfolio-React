import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';


import Typewriter from 'typewriter-effect';

import './Header.scss';

// const scaleVariants = {
//     whileInView: {
//         scale: [0, 1],
//         opacity: [0, 1],
//         transition: {
//             duration: 1,
//             ease: 'easeInOut',
//         },
//     },
// };

const Header = () => {



    return (
        <div className="app__header">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"

            >
                <div className="app__header-badge">
                    <div className="badge-cmp">
                        <p>Hi! 👋</p>
                    </div>



                    <motion.div
                        className="tag-cmp"
                        transition={{ duration: 1 }}
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    >
                        <span className='i_am'>I am </span>

                        <span> <Typewriter
                            className='typing'
                            options={{
                                strings: ["Federico!", "Junior Full Stack Developer.", "iOS Developer Student."],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>

                    </motion.div>

                </div>
            </motion.div>

            {/* <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
            {[images.sass, images.node, images.react].map((circle, index) => (
                <div className="circle-cmp app__flex" key={`circle-${index}`}>
                    <img src={circle} alt="profile_bg" />
                </div>
            ))}
        </motion.div>

        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
        >
             <img src={images.profile} alt="profile_bg" /> 
             <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
            /> 


        </motion.div> */}


        </div>
    );
}

export default AppWrap(Header, 'home');