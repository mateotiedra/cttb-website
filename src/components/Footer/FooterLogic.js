import PageLogicHelper from '../../helpers/PageLogicHelper';

import { useState } from 'react';

const FooterLogic = (props) => {
  const { pageStatus, setPageStatus, useLoadPage, axios, API_ORIGIN } =
    PageLogicHelper();

  const [sponsors, setSponsors] = useState([]);

  useLoadPage(async () => {
    fetch('sponsors/index.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(async (res) => {
      setSponsors(await res.json());
    });
  });
  return { sponsors };
};

export default FooterLogic;
