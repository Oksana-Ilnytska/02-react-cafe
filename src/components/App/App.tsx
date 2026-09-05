
import { voteState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';

import VoteOptions from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';
import type { VoteType, Votes } from '../types/votes';

import css from './App.module.css';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes(newVotes => ({
      ...newVotes,
      [type]: newVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

    return (
      <div className={css.app}>
        <CafeInfo />
  
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />

{totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}


/*<div className={css.app}></div>;




interface CounterVotes {
  good: number;
  neutral: number;
  bad: number;
}

function App() {
  const [votes, setVotes] = useStats<CounterVotes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  const handleClick = (key: keyof CounterVotes) => {
    setVotes = votes  + 1 };

    //setVotes = { ...votes, [key]: votes[key] + 1 };
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
