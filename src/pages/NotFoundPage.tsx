import { useNavigate } from 'react-router-dom';
import { usePageNotFound } from '../hooks/usePageNotFound';

function NotFoundPage() {
  usePageNotFound();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black text-slate-200 select-none">404</p>
        <h1 className="text-2xl font-bold text-slate-800 mt-2">
          Página no encontrada
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          La URL que ingresaste no existe o fue movida.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-5 py-2.5 bg-brand-800 hover:bg-brand-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Volver al dashboard
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;