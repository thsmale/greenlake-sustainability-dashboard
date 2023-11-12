// Greeting.js
import React, { useContext } from 'react';
import { PageHeader } from 'grommet';
import { UserContext } from './global-header';

const Greeting = () => {
  const { user } = useContext(UserContext);
  return (
    <PageHeader
      title={`Welcome`}
      subtitle="This is our demo of Emerald Vue a dashboard"
    />
  );
};

export default Greeting