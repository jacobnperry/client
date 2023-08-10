import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



 
 export default function GetSubs(){
        const baseURL = "https://server-5tk0.onrender.com/record"
        let newRecords = {}
        const records = {};
 
        // When a post request is sent to the create url, we'll add a new record to the database.

        async function fetchSubs() {
          await fetch(baseURL + `/subscribers`, {
            method: "GET"
          });
        
          newRecords = records;
        }

        

        console.log(newRecords)

        fetchSubs()
        
      
}
