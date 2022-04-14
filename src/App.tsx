import Entries from './components/Entries';
import { Entry, EntryTypes } from './components/Entries/Entries.types';
import Header from './components/Header';

const App = () => {

  const entries: Array<Entry> = [
    {
      id: 1,
      title: 'Conta de luz',
      type: EntryTypes.EXPENSE,
      amount: 10
    },
    {
      id: 2,
      title: 'Meu Salário',
      type: EntryTypes.REVENUE,
      amount: 1000,
    },
    {
      id: 3,
      title: 'Dividendos',
      type: EntryTypes.REVENUE,
      amount: 100
    }
  ]

  return (
    <div>
      <Header />
      <Entries title="lançamentos" entries={entries} />
    </div>
  );
}

export default App;
