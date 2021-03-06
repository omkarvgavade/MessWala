import React from 'react';
import styles from './LandingPage.module.css';
import { RiUserShared2Fill } from 'react-icons/ri';
import { DiYeoman } from 'react-icons/di';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: -300, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const LandingPage = () => {
    const [city, setCity] = useState('');
    console.log(city);

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <img src="logo2.jpg" alt="" width="120px" height="120px" />
                <br />
                <br />
                <h1>Hungry?</h1>
                <p style={{ color: '#f5569b' }}>
                    Order food from favorite mess near you.
                </p>
                <br />
                <input
                    className={styles.searchBar}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your delivery location"
                />
                <button>
                    <NavLink
                        to={`/messes?q=${city}`}
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        {' '}
                        FIND FOOD
                    </NavLink>
                </button>
                {/* <p style={{ fontSize: 19, marginTop: 20 }}>
                    POPULAR CITIES IN INDIA
                </p> */}
                <br />
                <br />
                <br />
                <motion.div
                    className={styles.icons}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={item}
                        style={{ backgroundColor: '#f5569b' }}
                    >
                        <NavLink to="/messes">
                            <RiUserShared2Fill className={styles.hover} />
                        </NavLink>
                        <br />
                        <br />
                        <br />
                        <p>USER</p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        style={{ backgroundColor: '#f5569b' }}
                    >
                        <NavLink to="/admin">
                            <DiYeoman className={styles.hover} />
                        </NavLink>
                        <br />
                        <br />
                        <br />
                        <p>MessWaala</p>
                    </motion.div>
                </motion.div>
            </div>
            <div className={styles.right}>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
                    alt=""
                    height="100%"
                />
            </div>
        </div>
    );
};

export default LandingPage;
