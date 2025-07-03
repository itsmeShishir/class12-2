import React, { useState, useEffect } from "react";

function ApiFetch(url) {
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(false);
    useEffect(() => {
          const FetchApiData = async() =>{
              try{
               const res = await fetch(url)
               const data = await res.json()
               SetLoading(false)
               SetData(data)
              }catch(e){
               console.log(e.message);
               SetError(true)
              }
          }
          FetchApiData()
       })
    return [data, loading, error];
}

export default ApiFetch;
