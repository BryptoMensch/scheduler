import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
	const dayListClass = classNames("day-list__item", {
		"day-list__item--selected": props.selected,
		"day-list__item--full": props.full,
	});
	return (
		<div>
			<li onClick={() => props.setDay(props.name)}>
				<h2 className={dayListClass}>{props.name}</h2>
				<h3 className={dayListClass}>
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
