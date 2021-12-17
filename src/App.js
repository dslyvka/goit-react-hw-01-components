// import React from "react";
import { Fragment } from 'react/cjs/react.production.min';

import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';

import Statistics from './Components/Statistics/Statistics';
import data from './Components/Statistics/data.json';

import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';

import Transactions from './Components/Transactions/Transactions';
import transactions from './Components/Transactions/transactions.json';

function App() {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friendList={friends} />
      <Transactions transactions={transactions} />
    </Fragment>
  );
}

export default App;
