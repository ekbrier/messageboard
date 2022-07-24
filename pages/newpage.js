import Head from 'next/head'
import styles from '../styles/newpage.module.css'
import { useState, useEffect } from 'react';
import Card from '../components/Card.js';


export default function NewPage() {
  const [Messages, setMessages] = useState([]);
  const [Title, setMyTitle] = useState("Welcome to the United States!");

  async function getdata() {
    const response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/messages")
    const data = await response.json()
    const example_response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/example")
    const example_data = await example_response.json()

    setMessages(data.data)
    setMyTitle(example_data.data.attributes.title)

  }

  useEffect(function () {
    getdata()

  }, []);
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        {Title}
      </h1>

      <span className={styles.container}>

        {Messages.map((card) => <Card message={card.attributes.body} username={card.attributes.username}></Card>
        )}
      </span>
    </main>

  )
}