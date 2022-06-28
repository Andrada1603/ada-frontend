import { Link } from '../components';
import { LoginForm } from '../components/Forms';

const IndexPage = () => (
  <main className="cover2 min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <h2 className="font-bold text-2xl mb-4">Autentificare</h2>
      <LoginForm />
      <div className="mt-2">
        <Link href="/forgot">
          <a className="text-gray-600">Ai uitat parola?</a>
        </Link>
            <a className="text-gray-600">Termeni și condiții</a>
      </div>
      <div className="mt-2">
        <Link href="/signup">
          <a className="text-gray-600">
            Nu ești membru încă? <span className="text-purple-800 font-bold">Crează un cont</span>
          </a>
        </Link>
      </div>
      <div className="mt-2">
        <a className="text-gray-600">Termeni și condiții</a>
      </div>
    </div>
  </main>
);

export default IndexPage;
