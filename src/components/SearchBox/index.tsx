
import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.css'

export default function SearchBox() {
  
    return (
      <>
      <div className='box-custom mt-54'>
        <h2>Encontre um perfil Github</h2>
        <input type="text" placeholder='Usuário Github' />
        <Link to='/search/result'><Button text='Encontrar'></Button></Link>
      </div>
      </>
  );
}
