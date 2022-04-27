import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Loading from '../Loading/Loading';

import MemberSpaceLogic from './MemberSpaceLogic';

function MemberSpace(props) {
  const { pageStatus, admin } = MemberSpaceLogic();

  if (pageStatus === 'loading') return <Loading />;
  return (
    <>
      <Navbar admin={admin} />
      <Footer />
    </>
  );
}

export default MemberSpace;
