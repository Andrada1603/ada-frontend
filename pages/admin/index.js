import { checkAuth, withAuth } from '../../auth';
import { Layout } from '../../components';
import Dashboard from '../../components/Dashboard';

const Page = () => {
  return (
    <Layout>
      <div className="bg-white rounded border border-gray-300 p-4">
        <div className="prose max-w-full">
          <h2 className="font-semibold">Clubul Sportiv Universitar A.S.E. București</h2>
          {/* <p>This is a secured admin page. Modify it as you wish.</p> */}
        </div>
      </div>
      <Dashboard />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
