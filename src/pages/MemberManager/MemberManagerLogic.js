import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const MemberManagerLogic = () => {
  const { API_ORIGIN, axios, pageStatus, setPageStatus, useLoadPage } =
    PageLogicHelper();

  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState();

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
    { allowedRoles: ['mod', 'admin'], setUserData: setUserData }
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
      .then(({ data: newUser }) => {
        for (let index = 0; index < userList.length; index++) {
          const user = userList[index];
          if (user.email === newUser.email) {
            let newUserList = userList;
            newUserList[index].role = newUser.role;
            setUserList([...newUserList]);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    pageStatus,
    userList,
    onChangeRole,
    allowedToChangeRole: userData && userData.role === 'admin',
  };
};

export default MemberManagerLogic;
