import styles from '../styles/index.module.css'
import { useState, useEffect } from 'react';
import Card from '../components/Card.js';


export default function Index() {
  const [Messages, setMessages] = useState([]);
  const [Input, setInput] = useState("");
  

  async function changeHandler(event) {
    setInput(event.target.value)
  }

  async function senddata(event) {
    event.preventDefault()
    const username = prompt("Enter a username")
    if (username.length < 2){
      alert("Username too short")
      return
    }
    const response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/messages", {
      method: "POST", body: JSON.stringify({
        data: {
          body: Input,
          username
        }

      }), headers:{"content-type": "application/json"}
    })
    await response.json()
    getdata()
  }

  async function getdata() {
    const response = await fetch("https://dev.api.messageboard.aws.ellio.me/api/messages?sort[0]=id:desc", { method: "GET" })
    const data = await response.json()

    setMessages(data.data)

  }

  useEffect(function () {
    getdata()

  }, []);
  return (
    <main className={styles.page}>
      <span className={styles.container}>
        <div className={styles.input_box}>
          <form action={senddata}>
            <textarea onChange={changeHandler} className={styles.input_message} placeholder={"Type your message..."} id="text" maxLength="280"></textarea>
            <div>
              <button onClick={senddata} className={styles.send_button}>
                Send
              </button>
            </div>
          </form>
        </div>

        {Messages.map((card, index) => <Card message={card.attributes.body} username={card.attributes.username} key={index}></Card>
        )}
      </span>
    </main>

  )
}