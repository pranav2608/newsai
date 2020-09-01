import React, { useEffect, useState } from 'react';

import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css';

const alanKey = "###/stage";


function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command,articles})=>{
        if(command==='newHeadLines'){
          setNewsArticles(articles);
          console.log(articles);
        }
      }
    })
  },[])

  return (
    <div>
      <div>
        <img src="https://image.flaticon.com/icons/png/512/21/21601.png" alt="logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
