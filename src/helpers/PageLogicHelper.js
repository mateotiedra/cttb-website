import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import AppConfig from '../config/AppConfig';
import AxiosHelper from './AxiosHelper';

const PageLogic = () => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios);
  let navigate = useNavigate();
  let params = useParams();

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  const useLoadPage = (actionIn, options) => {
    useEffect(() => {
      const { actionOut, allowedRoles, setUserData } = options || {};
      if (!hasFetchedData.current) {
        hasFetchedData.current = true;
        if (allowedRoles || setUserData)
          fetchUserData(allowedRoles, setUserData).then(() => {
            actionIn && actionIn();
          });
        else actionIn && actionIn();
      }

      if (actionOut) return actionOut;
    }, [actionIn, options]);
  };

  const fetchUserData = (allowedRoles, setUserData) =>
    new Promise((resolve, reject) => {
      if (allowedRoles && !localStorage.getItem('accessToken')) {
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
          if (allowedRoles) {
            if (allowedRoles.includes(user.role) && user.status === 'active') {
              console.log('fetch user');
              setUserData && setUserData(user);
            } else {
              navigate('/', { replace: true });
              reject();
            }
          } else {
            setUserData && setUserData(user);
          }
          resolve();
        })
        .catch((err) => {
          if (
            allowedRoles &&
            (getStatusCode(err) === 401 || getStatusCode(err) === 403)
          ) {
            localStorage.removeItem('accessToken');
            navigate('/membre/connexion', { replace: true });
            reject();
          }
        });
    });

  return {
    API_ORIGIN,
    getStatusCode,
    pageStatus,
    setPageStatus,
    axios,
    navigate,
    useLoadPage,
    params,
  };
};

export default PageLogic;
