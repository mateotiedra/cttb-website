import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const NewsLogic = () => {
  const { pageStatus, setPageStatus, useLoadPage, params, axios, API_ORIGIN } =
    PageLogicHelper();

  const [userData, setUserData] = useState();
  const [newsData, setNewsData] = useState();

  useLoadPage(
    () => {
      axios
        .get(API_ORIGIN + '/news/', { params: { id: params.id } })
        .then(({ data }) => {
          setNewsData(data);
          setPageStatus('active');
        })
        .catch((err) => {});
    },
    { setUserData: setUserData }
  );

  return {
    pageStatus,
    mod: userData && ['admin', 'mod'].includes(userData.role),
    newsData,
  };
};

export default NewsLogic;
