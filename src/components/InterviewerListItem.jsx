import React from "react";
import "components/scss/InterviewerListItem.scss"
import classnames from "classnames";


export default function InterviewerListItem(props) {
  const listItemClass = classnames ("interviewers__item", "interviewers__item-image", {
    "interviewers__item--selected": props.selected,
    "interviewers__item--selected-image": props.selected,
  });

  return(
    <li onClick={props.setInterviewer} selected={props.selected} className={listItemClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>

  );
}

