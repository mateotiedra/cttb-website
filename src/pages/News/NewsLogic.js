import { useState } from 'react';
import { useForm } from 'react-hook-form';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const NewsLogic = ({ editMode }) => {
  const {
    pageStatus,
    setPageStatus,
    useLoadPage,
    params,
    axios,
    API_ORIGIN,
    navigate,
  } = PageLogicHelper();

  const [userData, setUserData] = useState();
  const [newsData, setNewsData] = useState();

  useLoadPage(
    (fetchedUserData) => {
      if (editMode) {
        if (fetchedUserData && ['admin', 'mod'].includes(fetchedUserData.role))
          setPageStatus('edit');
        else navigate('/actualite', { replace: true });
      } else
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

  const handleEdit = () => {
    setPageStatus('edit');
  };

  return {
    setPageStatus,
    pageStatus,
    mod: userData && ['admin', 'mod'].includes(userData.role),
    newsData,
    handleEdit,
  };
};

export default NewsLogic;
