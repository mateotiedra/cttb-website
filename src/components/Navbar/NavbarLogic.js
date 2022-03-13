import { useState } from 'react';

const NavbarLogic = (props) => {
  const navLinksObj = [
    { text: 'Horaires', to: '/#horaires' },
    { text: 'Stages', to: '/stages' },
    { text: 'Adhésion', to: '/adhesion' },
    //{ text: 'Tournoi', to: '/tournoi' },
    { text: 'Contact', to: '/#contact' },
  ];
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpened(open);
  };

  return { navLinksObj, drawerOpened, toggleDrawer };
};

export default NavbarLogic;
