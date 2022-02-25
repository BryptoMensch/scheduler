import React from "react";
import "components/scss/InterviewerListItem.scss"
import classNames from "classnames";


export default function InterviewerListItem(props) {
const listItemClass = classNames ("interviewers__item", "interviewers__item-image", {
  "interviewers__item--selected": props.selected,
  "interviewers__item--selected-image": props.selected,
  
});

  return(
    <li onClick={props.setInterviewer} className={listItemClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>

  );
}

// return (
//   <li className={interviewerClass} onClick={props.setInterviewer}>
//     <img
//       className="interviewers__item-image"
//       src={props.avatar}
//       alt={props.name}
//     />
//     {props.selected && props.name}
//   </li>
// );
