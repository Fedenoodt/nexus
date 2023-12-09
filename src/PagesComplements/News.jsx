import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "../Services/Firebase";
import { getting } from '../Services/FireServices';

function FireNews() {
  const [News, setNews] = useState([]);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getting('News')
        setNews(response.docs)
      }
      catch (e) {
        console.error('Error del request.')
        console.log(e)
      }
    };
    request();
  }, []);

  return (
    <div>
      
      <ul>
         {News.map((New) => (
        <div key={New.id}>
          <li className="listaHorizontal"><div><a className={New.data().good} href={New.data().link}>{New.data().name}</a></div></li>
        </div>
    ))}
    </ul>
    <br />
    <a href="https://console.firebase.google.com/project/bhsiai/firestore/data/~2FNews?hl=es" target="_blank">Editar</a>
    </div>);
}

export default FireNews