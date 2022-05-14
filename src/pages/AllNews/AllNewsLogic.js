import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const AllNewsLogic = () => {
  const { pageStatus, setPageStatus, useLoadPage, axios, API_ORIGIN } =
    PageLogicHelper();

  const [userData, setUserData] = useState();
  const [newsList, setNewsList] = useState();

  useLoadPage(
    () => {
      axios
        .get(API_ORIGIN + '/news/all')
        .then(({ data }) => {
          setNewsList(data);
          setPageStatus('active');
        })
        .catch((err) => {});
    },
    { setUserData: setUserData }
  );

  return {
    pageStatus,
    mod: userData && ['admin', 'mod'].includes(userData.role),
    newsList,
  };
};

export default AllNewsLogic;
