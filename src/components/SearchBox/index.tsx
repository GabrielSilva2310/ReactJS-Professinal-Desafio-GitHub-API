
import {  useState } from 'react';

import './styles.css'
import Button from '../Button';
import axios from 'axios';
import { ProfileDTO } from '../../models/profile';
import SearchCard from '../SearchCard';
import NotFound from '../NotFound';

type FormData = {

  username : string;

}


export default function SearchBox() {

  const[formData, setFormData] = useState<FormData>({
    username : ''
  });

  const[profile, setProfile] = useState<ProfileDTO | null>(null);

  const[hasError, setHasError]  = useState(false);

  function  handleInputChange(event : any){

    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData,[name ] : value})

  }

  function  handleFormSubmit(event : any){
    event.preventDefault();
    const userName = formData.username;

    
    axios.get(`https://api.github.com/users/${userName}`)
    .then(response =>{
      setProfile(response.data);
      setHasError(false);
    })
    .catch(error => {
      setHasError(true);
      setProfile(null);
    } 
    )
  }



    return (
      <>
      <div className='box-custom mt-54'>
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleFormSubmit} > 
          <input type="text" 
          placeholder='Usuário Github'
          name='username'
          value={formData.username}
          onChange={handleInputChange} />
          <Button text ='Encontrar'/>
           </form>
      </div>
      <div>
         {profile && !hasError && <SearchCard profile={profile}/>}
         {hasError && !profile && <NotFound text='Usuário não encontrado!'/>}
      </div>
      </>
  );
}















/*
 const [profile, setProfile] = useState<ProfileDTO>();

 useEffect(()=> {
  axios.get("https://api.github.com/users/acenelio")
  .then(response => {
    console.log(response.data);
    setProfile(response.data)
  })
  }, [])
*/