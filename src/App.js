// import React from "react";
import { Fragment } from 'react/cjs/react.production.min';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import Transactions from './components/Transactions/Transactions';
import transactions from './components/Transactions/transactions.json';

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
