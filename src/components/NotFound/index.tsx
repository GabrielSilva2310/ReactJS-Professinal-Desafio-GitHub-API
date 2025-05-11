
import './styles.css'

type Props = {

    text : string;
}

export default function NotFound({text}: Props){

    return(
        <div className='text-notfound'>
              <h1> {text}</h1>
        </div>
    );




}