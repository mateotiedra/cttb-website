//import React from "react";

const NavbarLogic = (props) => {
  const navLinksObj = [
    { text: 'Horaires', to: '/horaires' },
    { text: 'Stages', to: '/stages' },
    { text: 'Adhésion', to: '/adhesion' },
    { text: 'Tournoi', to: '/tournoi' },
    { text: 'Contact', to: '/contact' },
  ];
  return { navLinksObj };
};

export default NavbarLogic;
