
import Button from '../Button';
import './styles.css'

export default function SearchBox() {
  
    return (
      <>
      <div className='box-custom'>
        <h2>Encontre um perfil Github</h2>
        <input type="text" placeholder='Usuário Github' />
        <Button></Button>
      </div>
      </>
  );
}
