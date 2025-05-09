

import './styles.css'

import nelioImg from '../../assets/image 1.png';

export default function SearchCard() {
  
    return (
      <>
      <div className='box-container mt-54'>
        <div className='boxresult-custom'>
            <div>
                <img src={nelioImg} alt="img" />
            </div>
            <div className='information-cards-container'>
                <h2>Informações</h2>
                <div className='information-cards'>
                   <h3>Perfil: <a href="">https://api.github.com/users/acenelio</a> </h3> 
                </div>
                <div className='information-cards'>
                   <h3>Seguidores: </h3>
                   <h4> 4379</h4>
                </div>
                <div className='information-cards'>
                   <h3>Localidade:</h3> 
                   <h4> Uberlândia</h4>
                </div>
                <div className='information-cards'>
                   <h3>Nome:</h3>
                   <h4> Nélio Alves</h4> 
                </div>
            </div>
        </div>
      </div>
      </>
  );
}
