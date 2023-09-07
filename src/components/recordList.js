import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from '../mystyle.module.css'; 
import SubscriberList from './SubsList'

//const baseURL = "https://server-5tk0.onrender.com";
const baseURL = "http://localhost:5050";
 



 
export default function RecordList() {
  const [message, setMessage] = useState('jacob.perry@drip.com');

  const [updated, setUpdated] = useState(message);
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("this is message " +message)
  };

  async function submitRequest() {
    let subscriber = await SubscriberList(message)
    if(subscriber == undefined){
      console.log("Loading")
      setResponse("Loading")
    }
    setResponse(JSON.stringify(subscriber), null, 4)
    console.log(subscriber)
  }

  const [response, setResponse] = useState('No request made')
 
 

 
 // This following section will display the table with the records of individuals.
 return (
   <div className={styles.actions}>     
          <input placeholder={message} value={message} onChange={handleChange}></input>
          <div className={styles.textInput}>
          <select className={styles.dropDown} name="language" id="language">
            <option value="subscriber">Subscriber</option>
            <option value="workflow">Workflows</option>
            <option value="emails">Emails</option>
          </select>
          <button onClick={submitRequest}>Submit Request</button>
          </div>
          <div className={styles.response}><p>{response}</p></div>
   </div>
 );
}