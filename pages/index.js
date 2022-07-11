import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() { 
  return (
    <div className={styles.container}>
     
  

      

      <footer className={styles.footer}>
          Made by <span className={styles.ellie}> Elliot & Ellie </span> 
      </footer>
    </div>
  )
}
