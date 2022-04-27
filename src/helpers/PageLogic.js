import { useEffect, useRef, useState } from 'react';

import axios from 'axios';

import AppConfig from '../config/AppConfig';
import AxiosHelper from '../helpers/AxiosHelper';

const PageLogic = (fetchData) => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios);

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      hasFetchedData.current = true;
      fetchData && fetchData();
    }

    return () => {};
  }, [fetchData]);

  return {
    API_ORIGIN,
    getStatusCode,
    pageStatus,
    setPageStatus,
    axios,
  };
};

export default PageLogic;
