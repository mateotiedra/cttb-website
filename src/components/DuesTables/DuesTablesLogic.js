const DuesTablesLogic = (props) => {
  const duesTablesObj = [
    {
      title: 'Non licenciés',
      description: "Accès aux entrainements selon son groupe durant l'année.",
      options: [{ name: 'Membre actif', price: 200 }],
    },
    {
      title: 'Licenciés',
      description:
        'Accès aux entrainements + aux compétitions officielles en Suisse.',
      options: [{ name: 'Compétiteur', price: 200 }],
    },
  ];
  return { duesTablesObj };
};

export default DuesTablesLogic;
