const DuesTablesLogic = (props) => {
  const duesTablesObj = [
    {
      title: 'Non licenciés',
      description: "Accès aux entrainements selon son groupe durant l'année.",
      options: [
        { name: 'Membre actif', price: 160 },
        { name: 'AVS-AI-Chômeur (sur demande)', price: 110 },
      ],
    },
    {
      title: 'Licenciés',
      description:
        'Accès aux entrainements + aux compétitions officielles en Suisse.',
      options: [
        { name: 'Compétiteur', price: 360 },
        { name: 'AVS-AI-Chômeur (sur demande)', price: 280 },
      ],
    },
  ];
  return { duesTablesObj };
};

export default DuesTablesLogic;
