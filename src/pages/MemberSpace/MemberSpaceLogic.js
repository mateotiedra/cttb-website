import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppConfig from '../../config/AppConfig';
import AxiosHelper from '../../helpers/AxiosHelper';
import PageLogic from '../../helpers/PageLogic';

const MemberSpaceLogic = () => {
  const {
    API_ORIGIN,
    axios,
    pageStatus,
    setPageStatus,
    getStatusCode,
    navigate,
    useLoadPage,
  } = PageLogic();

  const [userData, setUserData] = useState();

  useLoadPage(() => {
    axios
      .get(API_ORIGIN + '/auth/u', {
        headers: {
          'x-access-token': localStorage.getItem('accessToken'),
        },
      })
      .then(({ data }) => {
        setUserData(data);
        setPageStatus('active');
      })
      .catch((err) => {
        if (getStatusCode(err) === 401) {
          localStorage.removeItem('accessToken');
          navigate('/membre/connexion', { replace: true });
        }
      });
  });

  return {
    pageStatus,
    admin: userData && ['admin', 'mod'].includes(userData.role),
    userName: userData && userData.email.split('@')[0],
  };
};

export default MemberSpaceLogic;
