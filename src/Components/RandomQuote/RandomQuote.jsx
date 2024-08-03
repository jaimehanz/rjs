import React, { useState } from 'react'
import './RandomQuote.css'
import logo_icon from '../Assets/icon.png'
import reload_icon from '../Assets/reload.png'

export const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }

    const yt = ()=>{
        window.open('https://www.youtube.com/watch?v=j5a0jTc9S10&list=PL3KnTfyhrIlcudeMemKd6rZFGDWyK23vx&index=10');
    }

    const [quote, setQuote] = useState({
        text: "Insert something nice here",
        author: "Jaime Hanz Sibucao",
    });

    loadQuotes();

  return ( 
    <div className='container'>
        <div className="quote">{quote.text}</div> 
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {quote.author.split(',')[0]}</div>
                <div className="icons">
                    <img src={reload_icon} onClick={()=>{random()}} alt="" />
                    <img src={logo_icon} onClick={()=>{yt()}} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
