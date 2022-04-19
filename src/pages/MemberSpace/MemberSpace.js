import React from 'react';
import Loading from '../Loading/Loading';

import MemberSpaceLogic from './MemberSpaceLogic';

function MemberSpace(props) {
  const { pageStatus } = MemberSpaceLogic();

  if (pageStatus === 'loading') return <Loading />;
  return <></>;
}

export default MemberSpace;
