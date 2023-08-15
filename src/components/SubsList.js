import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


        //const baseURL = "https://server-5tk0.onrender.com/record"
        const baseURL = "http://localhost:5050/record"
        var records = [];

        const Record = (props) => (
          <tr>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.email}</td>
            <td>
              <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
              <button className="btn btn-link"
                onClick={() => {
                  props.deleteRecord(props.record._id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
         );
 



export default function SubscriberList() {
  const [records, setRecords] = useState([]);
  console.log("Inside subscriberlist")
  useEffect(() => {
      async function getSubs() {
        const response = await fetch(baseURL + `/subscriber/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        setRecords(records);
        

      }
      getSubs();

    
  })
  // This method fetches the records from the database.


  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>table</tbody>
      </table>
    </div>
  )
  }
   async function OldGetSubs(){
        
        // When a post request is sent to the create url, we'll add a new record to the database.
          
    
          await fetch(baseURL + `/subscribers`, {
            method: "GET"
          }).then((response) => response.json())
          .then((subscriber) => {
            console.log("Successful request made")
            records = subscriber
            console.log(records.type)
            
        

          });
          const map1 = records.map((x) => x)
          return map1
}

    

