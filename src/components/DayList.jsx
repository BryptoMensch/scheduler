import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
	const { days, setDay } = props;	
	const parsedDays = props.days.map((day) => 
	<DayListItem 
		key={day.id} 
		setDay = {props.onChange} 
		selected={props.day === day.name} {...day}/>)
	
	return ( 

		<ul>
		{ parsedDays }
		</ul>
	);
}
