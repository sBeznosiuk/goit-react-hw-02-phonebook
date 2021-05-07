import React from 'react';
import Profile from './Components/profile/Profile';
import user from './Components/profile/social-profile/user.json';
import statisticalData from './Components/statistics/statistics/statistical-data.json';
import Statistics from './Components/statistics/Statistics';
import friends from './Components/friendList/friend-list/friends.json';
import FriendList from './Components/friendList/FriendList';
import transactions from './Components/transactionHistory/transaction-history/transactions.json';
import TransactionHistory from './Components/transactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
