const WeekScheduleLogic = (props) => {
  const ETT = 'École de tennis de table (moins de 13 ans)';
  const selection = 'Cours perfectionnement (sur sélection)';
  const mixtes = 'Mixte (jeunes dès 13 ans, adultes, loisirs et licenciés)';

  const WeekScheduleObj = [
    {
      day: 'Lundi',
      trainings: [
        { hour: '16h45-18h15', type: ETT },
        { hour: '18h15-19h45', type: selection },
      ],
    },
    {
      day: 'Mardi',
      trainings: [
        { hour: '16h45-18h15', type: ETT },
        { hour: '18h15-19h45', type: mixtes },
      ],
    },
    { day: 'Mercredi', trainings: [{ hour: '18h15-19h45', type: selection }] },
    {
      day: 'Jeudi',
      trainings: [
        { hour: '16h15-18h15', type: mixtes },
        { hour: '18h15-19h45', type: selection + ' + ' + mixtes },
      ],
    },
    {
      day: 'Vendredi',
      trainings: [
        { hour: '16h45-18h15', type: ETT },
        { hour: '18h15-19h45', type: selection },
      ],
    },
  ];
  return { WeekScheduleObj };
};

export default WeekScheduleLogic;
