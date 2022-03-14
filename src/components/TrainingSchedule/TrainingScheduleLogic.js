const TrainingScheduleLogic = (props) => {
  const trainingsScheduleObj = [
    {
      title: 'École de tennis de table',
      description: 'Moins de 13 ans',
      trainings: [
        { day: 'Lundi', hour: '16h45-18h15' },
        { day: 'Mardi', hour: '16h45-18h15' },
        { day: 'Vendredi ', hour: '16h45-18h15' },
      ],
    },
    {
      title: 'Mixte',
      description: 'Jeunes dès 13 ans, adultes, loisirs et licenciés',
      trainings: [
        { day: 'Mardi', hour: '18h15-19h45' },
        { day: 'Jeudi', hour: '16h45-18h15' },
        { day: 'Vendredi ', hour: '18h15-19h45' },
      ],
    },
    {
      title: 'Cours perfectionnement',
      description: 'Sur sélection',
      trainings: [
        { day: 'Lundi', hour: '18h15-19h45' },
        { day: 'Mercredi', hour: '18h15-19h45' },
        { day: 'Jeudi', hour: '18h15-19h45' },
        { day: 'Vendredi', hour: '18h15-19h45' },
      ],
    },
  ];
  return { trainingsScheduleObj };
};

export default TrainingScheduleLogic;
