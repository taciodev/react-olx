import './styled';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to='/'>Volte para a HOME</Link>
    </div>
  );
}

export default NotFound;
