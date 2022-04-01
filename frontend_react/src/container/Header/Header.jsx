import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {

    const constraintsRef = useRef(null);


    return (
        <div className="app__header">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
                ref={constraintsRef}

            >
                <div className="app__header-badge">
                    <div className="badge-cmp">
                        <p>Ciao! Sono <span>Federico</span></p>
                    </div>

                    <motion.div
                        className="tag-cmp"
                        transition={{ duration: 1 }}
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        drag
                        dragConstraints={constraintsRef}
                    >
                        <p className="p-text">Junior Full Stack Developer</p>
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