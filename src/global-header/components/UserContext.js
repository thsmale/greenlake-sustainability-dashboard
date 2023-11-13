import React from 'react';

export const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export const defaultUser = {
  firstName: 'Saint',
  lastName: 'Jude',
  email: 'saint.jude@mail.com',
  image: '//ww2.freelogovectors.net/wp-content/uploads/2023/04/st-jude-childrens-research-hospital_logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1',
};
