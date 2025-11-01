import { Activity, useState } from 'react';
import CoinTable from '../coins/coinTable';
import { Button } from './button';
import SearchPairs from '../dex/searchPairs';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('coins');

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center">
        <div className="border rounded-lg p-1 max-w-[600px] w-full flex items-center justify-center gap-2">
          <Button
            id="coins"
            variant="tab"
            onClick={() => setActiveTab('coins')}
            data-state={activeTab === 'coins' ? 'active' : 'inactive'}
          >
            Coins
          </Button>
          <Button
            id="dex"
            variant="tab"
            onClick={() => setActiveTab('dex')}
            data-state={activeTab === 'dex' ? 'active' : 'inactive'}
          >
            Pairs
          </Button>
        </div>
      </div>
      <Activity mode={activeTab === 'dex' ? 'visible' : 'hidden'}>
        <SearchPairs />
      </Activity>
      <Activity mode={activeTab === 'coins' ? 'visible' : 'hidden'}>
        <CoinTable />
      </Activity>
    </div>
  );
}

export default TabComponent;
