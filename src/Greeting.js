// Greeting.js
import React, { useContext } from 'react';
import { PageHeader } from 'grommet';
import { UserContext } from './global-header';

const Greeting = () => {
  const { user } = useContext(UserContext);
  return (
    <PageHeader
      title={`Hello, ${user.firstName}!`}
      subtitle="Welcome to the HPE Common Cloud Console."
    />
  );
};

export default Greeting