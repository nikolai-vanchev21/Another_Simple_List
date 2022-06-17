import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}/>
      <Card className={styles.modal}>
        <header>
          <h2 className={styles.header}>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm} type="">Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
