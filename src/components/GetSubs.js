import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
        //const baseURL = "https://server-5tk0.onrender.com/record"
        const baseURL = "http://localhost:5050/record"
        let newRecords = {}
        var records = {};


 
 export default async function GetSubs(){
        
        // When a post request is sent to the create url, we'll add a new record to the database.

    
          await fetch(baseURL + `/subscribers`, {
            method: "GET"
          }).then((response) => response.json())
          .then((subscriber) => {
            console.log("Successful request made")
            records = subscriber
            console.log(records)
        

          });
}
