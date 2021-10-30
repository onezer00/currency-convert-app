import React from 'react';
import styles from '../../styles/Home.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                    voluptatum!
                </p>
            </main>
            <Footer />
        </motion.div>
    );
}

export default Contact;
