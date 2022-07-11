import Head from 'next/head'
import styles from '../styles/newpage.module.css'
import { useState, useEffect } from 'react';


export default function NewPage() {
    const [Title, setMyTitle] = useState("Welcome to the United States!");
    const [body, setMyBody] = useState("Loading");
    
    async function getdata() {
        const response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/example")
        const data = await response.json()

        setMyTitle(data.data.attributes.title)
        setMyBody(data.data.attributes.body)
    }

    useEffect(function(){
       getdata()

    }, []);
    return (
    <main>

          <h1 className={styles.title}>
            {Title}
          </h1>

          <p className={styles.paragraph}>{body}</p>

          


    </main>

)}