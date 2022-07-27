import Head from 'next/head'
import styles from '../styles/newpage.module.css'
import { useState, useEffect } from 'react';
import Card from '../components/Card.js';


export default function NewPage() {
  const [Messages, setMessages] = useState([]);


  async function getdata() {
    const response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/messages")
    const data = await response.json()
    const example_response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/example")
    const example_data = await example_response.json()

    setMessages(data.data)

  }

  useEffect(function () {
    getdata()

  }, []);
  return (
    <main className={styles.page}>
      <span className={styles.container}>
        <div className={styles.input_box}>
          <form>
            <textarea className={styles.input_message} placeholder={"Type your message..."} id="text" maxLength="280"></textarea>
            <div>
              <button className={styles.send_button}>Send</button>
            </div>
          </form>
        </div>

        {Messages.map((card, index) => <Card message={card.attributes.body} username={card.attributes.username} key={index}></Card>
        )}
      </span>
    </main>

  )
}