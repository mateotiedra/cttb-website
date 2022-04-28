import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const MemberManagerLogic = () => {
  const {
    API_ORIGIN,
    axios,
    pageStatus,
    setPageStatus,
    getStatusCode,
    navigate,
    useLoadPage,
  } = PageLogicHelper();

  const [userList, setUserList] = useState([]);

  useLoadPage(
    () => {
      axios
        .get(API_ORIGIN + '/user/all', {
          headers: {
            'x-access-token': localStorage.getItem('accessToken'),
          },
        })
        .then(({ data }) => {
          setUserList(data);
          setPageStatus('active');
        })
        .catch((err) => {});
    },
    { allowedRoles: ['mod', 'admin'] }
  );

  const onChangeRole = (userEmail) => (event) => {
    axios
      .put(
        API_ORIGIN + '/user/update/role',
        { newRole: event.target.value, userEmail: userEmail },
        {
          headers: {
            'x-access-token': localStorage.getItem('accessToken'),
          },
        }
      )
      .then(({ data }) => {
        for (let index = 0; index < userList.length; index++) {
          const user = userList[index];
          console.log(data);
          if (user.email === data.email) {
            let newUserList = userList;
            newUserList[index].role = data.role;
            setUserList([...newUserList]);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { pageStatus, userList, onChangeRole };
};

export default MemberManagerLogic;
