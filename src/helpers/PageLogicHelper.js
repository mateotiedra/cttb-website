import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import AppConfig from '../config/AppConfig';
import AxiosHelper from './AxiosHelper';

const PageLogic = () => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios);
  let navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  const useLoadPage = (actionIn, options) => {
    const { actionOut, allowedRoles, setUserData } = options || {};
    useEffect(() => {
      if (!hasFetchedData.current) {
        hasFetchedData.current = true;
        if (allowedRoles) checkUserRole(allowedRoles, setUserData);
        actionIn && actionIn();
      }

      if (actionOut) return actionOut;
    }, [actionIn, checkUserRole]);
  };

  const checkUserRole = (allowedRoles, setUserData) => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/membre/connexion', { replace: true });
      return;
    }

    axios
      .get(API_ORIGIN + '/user/u', {
        headers: {
          'x-access-token': localStorage.getItem('accessToken'),
        },
      })
      .then(({ data }) => {
        const user = data;
        if (allowedRoles.includes(user.role) && user.status === 'active') {
          setUserData && setUserData(user);
        } else {
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        if (getStatusCode(err) === 401) {
          localStorage.removeItem('accessToken');
          navigate('/membre/connexion', { replace: true });
        }
      });
  };

  return {
    API_ORIGIN,
    getStatusCode,
    pageStatus,
    setPageStatus,
    axios,
    navigate,
    useLoadPage,
  };
};

export default PageLogic;
