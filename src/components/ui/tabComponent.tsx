import { Activity, useState } from 'react';
import CoinTable from '../coins/coinTable';
import { Button } from './button';
import SearchPairs from '../dex/searchPairs';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('coins');

  const isDexTab = activeTab === 'dex';

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center px-6">
        <div className="border rounded-lg p-1 max-w-[600px] w-full flex items-center justify-center gap-2">
          <Button
            id="coins"
            variant="tab"
            onClick={() => setActiveTab('coins')}
            data-state={activeTab === 'coins' ? 'active' : 'inactive'}
            className="cursor-pointer"
          >
            Coins
          </Button>
          <Button
            id="dex"
            variant="tab"
            onClick={() => setActiveTab('dex')}
            data-state={activeTab === 'dex' ? 'active' : 'inactive'}
            className="cursor-pointer"
          >
            Pairs
          </Button>
        </div>
      </div>
      <Activity mode={isDexTab ? 'visible' : 'hidden'}>
        <SearchPairs />
      </Activity>
      {!isDexTab && <CoinTable />}
    </div>
  );
}

export default TabComponent;
