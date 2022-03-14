import React, { useState } from 'react';

const WeekPresenceLogic = ({ onChange }) => {
  const [weekPresenceValues, setWeekPresenceValues] = useState([
    { title: 'Lundi', presence: [false, false] },
    { title: 'Mardi', presence: [false, false] },
    { title: 'Mercredi', presence: [false, false] },
    { title: 'Jeudi', presence: [false, false] },
    { title: 'Vendredi', presence: [false, false] },
  ]);

  const [accordionOpened, setAccordionOpened] = useState(false);

  const handleChange = (dayIndex, demiDay) => (event) => {
    let newWeekPresenceValues = weekPresenceValues;
    let newDayValues = newWeekPresenceValues[dayIndex].presence;
    newDayValues[demiDay] = event.target.checked;
    newWeekPresenceValues[dayIndex].presence = newDayValues;
    setWeekPresenceValues([...newWeekPresenceValues]);
    onChange([...newWeekPresenceValues]);
  };

  const toggleAccordion = () => {
    setAccordionOpened(!accordionOpened);
  };

  return { weekPresenceValues, handleChange, accordionOpened, toggleAccordion };
};

export default WeekPresenceLogic;
