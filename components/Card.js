import styles from './../styles/components/card.module.css'

const Card = (props) => {
return (
     <div className={styles.card}>
    <span className={styles.postedBy}>
      POSTED BY  
      <span className={styles.username}>
        {props.username}
      </span>
    </span>
    <span className={styles.timestamp}> 
    </span>

    <p className={styles.message}>
      {props.message}
    </p>

    </div>

)
}
export default Card;