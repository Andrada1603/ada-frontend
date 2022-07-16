import { checkAuth, withAuth } from '../../auth';
import { MenuPlayer, MenuButton, Tooltip } from '../../components';
import { Profile } from '../../components/Players';

const Page = () => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <MenuPlayer />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Profil jucător</h3>
            <Tooltip placement="bottom">
              Consultați toate informațiile cu privire la acest jucător
            </Tooltip>
          </div>
          <MenuButton />
        </div>
        <div>
          <Profile />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
