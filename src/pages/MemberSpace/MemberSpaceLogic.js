import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const MemberSpaceLogic = () => {
  const {
    API_ORIGIN,
    axios,
    pageStatus,
    setPageStatus,
    getStatusCode,
    navigate,
    useLoadPage,
  } = PageLogicHelper();

  const [userData, setUserData] = useState();

  useLoadPage(
    () => {
      setPageStatus('active');
    },
    { allowedRoles: ['user', 'mod', 'admin'], setUserData: setUserData }
  );

  return {
    pageStatus,
    admin: userData && ['admin', 'mod'].includes(userData.role),
    userName: userData && userData.email.split('@')[0],
  };
};

export default MemberSpaceLogic;
