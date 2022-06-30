import dynamic from 'next/dynamic';
import { DashboardCard } from '.';
const LessonsAndMatchesChart = dynamic(() => import('./Charts/LessonsAndMatches'), { ssr: false });
const PlayersByCategoryChart = dynamic(() => import('./Charts/PlayersByCategory'), { ssr: false });
const SalesByAbonamentChart = dynamic(() => import('./Charts/SalesByAbonament'), { ssr: false });

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 my-6">
        <DashboardCard icon="fa fa-person-running" title="Jucători">
          45 jucători legitimați
        </DashboardCard>
        <DashboardCard icon="fa fa-person-chalkboard" title="Antrenori">
          14 antrenori disponibili
        </DashboardCard>
        <DashboardCard icon="fa fa-book" title="Lecții">
          37 lecții efectuate
        </DashboardCard>
        <DashboardCard icon="fa fa-handshake" title="Meciuri">
          145 meciuri organizate
        </DashboardCard>
        <DashboardCard icon="fa fa-ticket" title="Abonamente">
          31 abonamente vândute
        </DashboardCard>
        <DashboardCard icon="fa fa-money-bill-trend-up" title="Încasări">
          11,280 Lei încasați
        </DashboardCard>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white">
          <PlayersByCategoryChart />
        </div>
        <div className="p-4 bg-white">
          <LessonsAndMatchesChart />
        </div>
        <div className="p-4 bg-white">
          <SalesByAbonamentChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
