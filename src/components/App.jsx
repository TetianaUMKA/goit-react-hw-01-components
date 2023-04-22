import { Profile } from './Profile';
import user from '../user.json';

import { Statistics } from './Statistics';
import data from '../data.json';

import { FriendList } from './FriendList';
import friends from '../friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from '../transactions';


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} /> 
    </>
  );
};
