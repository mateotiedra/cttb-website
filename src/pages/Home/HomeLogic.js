import { useState } from 'react';

import PageLogicHelper from '../../helpers/PageLogicHelper';

const HomeLogic = () => {
  const [linksDialogOpen, setLinksDialogOpen] = useState(false);

  const handleCloseLinksDialog = () => setLinksDialogOpen(false);

  const handleOpenLinksDialog = () => setLinksDialogOpen(true);

  return { linksDialogOpen, handleCloseLinksDialog, handleOpenLinksDialog };
};

export default HomeLogic;
