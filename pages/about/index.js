import React from 'react';
import styles from '../../styles/Home.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';

const About = () => {
  
  return (
    <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.description}>This is the TodoList app v1.0.0. It is part of a React crash course.</p>
      </main>
      <Footer />
    </motion.div>
  );
}

export default About;