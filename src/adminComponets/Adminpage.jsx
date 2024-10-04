import React, { useState } from 'react';

import UpdateLiveshow from './UpdateLiveshow';
import DeleteSong from './DeleteSong';
import Addplaylist from './Addplaylist';

const AdminPage = () => {

  return (
    <div className="p-6 bg-black">
      <Addplaylist/>
      <DeleteSong/>
      <UpdateLiveshow/>
    </div>
  );
};

export default AdminPage;
