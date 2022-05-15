import { useState } from 'react';

const NavbarLogic = (admin) => {
  const navLinksObj = admin
    ? [
        { text: 'Espace membre', to: '/membre' },
        { text: 'Membres', to: '/admin/membres' },
        { text: 'Actualité', to: '/actualite' },
      ]
    : [
        { text: 'Horaires', to: '/#horaires' },
        { text: 'Stages', to: '/stages' },
        { text: 'Adhésion', to: '/adhesion' },
        //{ text: 'Tournoi', to: '/tournoi' },
        { text: 'Contact', to: '/#contact' },
        { text: 'Espace membre', to: '/membre' },
      ];
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpened(open);
  };

  return { navLinksObj, drawerOpened, toggleDrawer };
};

export default NavbarLogic;
