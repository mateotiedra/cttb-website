import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const MemberManagerLogic = () => {
  const {
    API_ORIGIN,
    axios,
    pageStatus,
    setPageStatus,
    getStatusCode,
    navigate,
    useLoadPage,
  } = PageLogicHelper();

  useLoadPage(
    () => {
      setPageStatus('active');
    },
    { allowedRoles: ['mod', 'admin'] }
  );
  return {};
};

export default MemberManagerLogic;
