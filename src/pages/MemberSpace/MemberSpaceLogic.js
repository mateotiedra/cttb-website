import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import AppConfig from '../../config/AppConfig';
import AxiosHelper from '../../helpers/AxiosHelper';

const MemberSpaceLogic = () => {
  let navigate = useNavigate();
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios);

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      hasFetchedData.current = true;
      axios
        .get(API_ORIGIN + '/auth/u', {
          headers: {
            'x-access-token': localStorage.getItem('accessToken'),
          },
        })
        .then(() => {
          setPageStatus('active');
        })
        .catch((err) => {
          if (getStatusCode(err) === 401) {
            localStorage.removeItem('accessToken');
            navigate('/membre/connexion', { replace: true });
          }
        });
    }
  }, []);

  return { pageStatus };
};

export default MemberSpaceLogic;
