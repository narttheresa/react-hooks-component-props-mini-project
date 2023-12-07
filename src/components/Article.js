import React from "react";


function Article({minutes, title, date ="January 1, 1970", preview}) {
    let emojis =""
    if (minutes <30) {
        for (let i=0; i < minutes; i+=5) {
            emojis += "☕️"  
        }
    } else {
        for (let i=0; i < minutes; i+=10) {
            emojis += "🍱"  
        } 
    }
   
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>

    )
}


export default Article;