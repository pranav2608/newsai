import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCards.css";
const infoCards = [
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];
  
const NewsCards = (props) => {
  console.log(props.articles);
  if(props.articles.length===0){
      return(
        <Grow in>
        <Grid className="container" container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} className="infoCard">
                    <div className="card" style={{backgroundColor: infoCard.color}}>
                        <Typography variant="h5">{infoCard.title}</Typography>
                        {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                        <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                    </div>
                </Grid>
            ))}
        </Grid>
      </Grow>
      )
  };

  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {props.articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
               <NewsCard article={article} i={i}/>
          </Grid>    
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
