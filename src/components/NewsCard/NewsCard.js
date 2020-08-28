import React from "react";
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import "./NewsCard.css";

const NewsCard = (props)=>{
    return(
       <Card >
           <CardActionArea href={props.article.url} target="_blank">
               <CardMedia className="media" image={props.article.urlToImage || 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg'}/>
               <div className="details">
                   <Typography variant="body2" color="textSecondary" component="h2">{(new Date(props.article.publishedAt)).toDateString()}</Typography>
                   <Typography variant="body2" color="textSecondary" component="h2">{props.article.source.name}</Typography>
               </div>
               <Typography className="title" gutterBottom variant="h5">{props.article.title}</Typography>
               <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">{props.article.description}</Typography>
               </CardContent>
           </CardActionArea>
           <CardActions className="cardActions">
               <Button size="small" color="primary">Learn More</Button>
               <Typography variant="h5" color="textSecondary">{props.i + 1}</Typography>
           </CardActions>
       </Card>
    )
}

export default NewsCard;