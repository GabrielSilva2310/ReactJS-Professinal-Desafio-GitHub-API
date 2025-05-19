

import './styles.css'

import { ProfileDTO } from '../../models/profile';


type Props = {

  profile : ProfileDTO;
}

export default function SearchCard({profile}:Props) {


  
  
    return (
      <>
      <div className='box-container mt-54'>
        <div className='boxresult-custom'>
            <div>
                <img src={profile.avatar_url} alt="img" />
            </div>
            <div className='information-cards-container'>
                <h2>Informações</h2>
                <div className='information-cards'>
                   <h3>Perfil: <a href="">{profile.url}</a> </h3> 
                </div>
                <div className='information-cards'>
                   <h3>Seguidores: </h3>
                   <h4> {profile.followers}</h4>
                </div>
                <div className='information-cards'>
                   <h3>Localidade:</h3> 
                   <h4> {profile.location}</h4>
                </div>
                <div className='information-cards'>
                   <h3>Nome:</h3>
                   <h4> {profile.name}</h4> 
                </div>
            </div>
        </div>
      </div>
      </>
  );
}
