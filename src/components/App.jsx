import { Profile } from './Profile';
import user from '../user.json';

import { Statistics } from './Statistics';
import data from '../data.json';

import { FriendList } from './FriendList';
import friends from '../friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from '../transactions';

import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
