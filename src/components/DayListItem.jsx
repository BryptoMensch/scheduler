import React from "react";
import "components/scss/DayListItem.scss";
import classnames from "classnames";

export default function DayListItem(props) {
	const dayListClass = classnames("day-list__item", {
		"day-list__item--selected": props.selected,
		"day-list__item--full": !props.spots,
	});

	
	return (
		<div>
			<li 
			className={dayListClass} 
			selected={props.selected} 
			onClick={() => props.setDay(props.name)}data-testid="day">

				<h2 className="text--regular">{props.name}</h2>
				<h3 className="text--light">
					{props.spots === 0
						? "no spots remaining"
						: props.spots === 1
						? "1 spot remaining"
						: props.spots === 2
						? "2 spots remaining"
						: props.spots === 3
						? "3 spots remaining"
						: props.spots === 4
						? "4 spots remaining"
						: "5 spots remaining"}
				</h3>
			</li>
			{props.children}
		</div>
	);
}
