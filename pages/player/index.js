import { checkAuth, withAuth } from '../../auth';
import { LayoutPlayer } from '../../components';

const Page = () => {
  return (
    <LayoutPlayer>
      <div className="bg-white rounded border border-gray-300 p-4">
        <div className="prose max-w-full">
          <h2 className="font-semibold">Clubul Sportiv Universitar A.S.E. București</h2>
        </div>
      </div>
    </LayoutPlayer>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
