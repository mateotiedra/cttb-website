import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import AppConfig from '../config/AppConfig';
import AxiosHelper from '../helpers/AxiosHelper';

const PageLogic = () => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios);
  let navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  /* useEffect(() => {
    if (!hasFetchedData.current) {
      hasFetchedData.current = true;
      loadPage && loadPage();
    }

    return () => {};
  }, [loadPage]);*/

  const useLoadPage = (actionIn, actionOut) => {
    useEffect(() => {
      if (!hasFetchedData.current) {
        hasFetchedData.current = true;
        actionIn && actionIn();
      }

      if (actionOut) return actionOut;
    }, [actionIn, actionOut]);
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
