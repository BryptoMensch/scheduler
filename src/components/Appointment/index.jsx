import React from "react";
import "components/Appointment/styles.scss"
import Show from "./Show";
import Header from "./Header";
import Empty from "./Empty";


export default function Appointment (props) {
  console.log(props)
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time}/>
      <Show interview={props.interview === 0 ? props.interview : props.interview} 
 />
    </article>
  )
}