import React, {useEffect, useState} from 'react'
import {Button, Card, Typography} from '@mui/material'
import logo from './logo.svg';
import './App.css';

function App() {
  const [ randomNumber, setRandomNumber ] = useState(0);
  const [ quotes, setQuotes ] = useState([{ text: "Hath ubho rakhi bus ma beso!", author: "Gujarat ST" }]);
  useEffect(() => {
    console.log("Kevu chale la?");
    fetchQuotes();
  }, [])

  useEffect(() => {
    console.log(randomNumber)
  }, [randomNumber])
  

  const fetchQuotes = async () =>{

    await fetch("https://type.fit/api/quotes", {
        method: "GET" // default, so we can ignore
    }).then(resp => {
      return resp.json()
      // console.log(resp.json())
    }).then(resp2 => {
      console.log(resp2)
      setQuotes(resp2)
    })
  
  }

  const randomQuoteGenerator = () => {
    console.log("Chale ke?")
    console.log(quotes.length);
    setRandomNumber(Math.floor(Math.random() * quotes.length));
  }
  return (
    <div style={{ margin: "16px" }}>
        <Card style={{ padding: "16px", marginBottom:"16px", borderRadius:"25px"}}>
          <Typography variant='h6'style={{ fontFamily: "'Varela Round', sans-serif" }}>{quotes[randomNumber].text}</Typography>
          <div style={{ display:"flex", justifyContent:"flex-end", paddingTop:"24px", fontFamily:"'proxima-soft', sans-serif" }}>-{quotes[randomNumber].author}</div>
        </Card>
        <div style={{display: "flex", justifyContent:"left"}}>
          <Button variant='contained' style={{ backgroundColor: '#4a2bb5', borderRadius:"25px" }} 
            onClick={randomQuoteGenerator}>Click to see the magic ✨</Button>
        </div>
    </div>
  );
}

export default App;
