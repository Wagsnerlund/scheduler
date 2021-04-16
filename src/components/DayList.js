import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  if (props.days && props.days.length > 0) {
    return props.days.map(day => {
      return (
        <ul>
          <DayListItem
            id={day.id}
            name={day.name}
            spots={day.spots}
            selected={day.name === props.day}
            setDay={props.setDay}
          />
        </ul>
      )
    })
  }
  return null;
}