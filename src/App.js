import {sculptureList} from './data';
import './bootstrap.css';
import {useState} from "react";
import {HiArrowRightCircle,HiArrowLeftCircle,HiArrowRight,HiArrowLeft} from "react-icons/hi2";


function App() {
  const [index,setIndex]=useState(0);
  const [showmore,setShowmore]=useState(false);
  const taille=sculptureList.length;
  function handleNextClick()
  {
    if(index + 1===sculptureList.length)
    {
      setIndex(0);
    }else {
      setIndex(index + 1);
    }

  }
  function handlePrevClick()
  {
     if(index + 1 === 1)
     {
       setIndex(sculptureList.length-1);
     }else
     {
       setIndex(index - 1);
     }
  }
  function handleMoreClick()
  {
    setShowmore(!showmore);
  }
  let sculpture=sculptureList[index];
  return (
    <div className="container mt-5 col-md-5">
      <button className="btn btn-outline-primary btn-sm m-1" onClick={handlePrevClick}>
        <HiArrowLeftCircle style={{height:'30px'}}></HiArrowLeftCircle> Précedent
      </button>
      <button className="btn btn-outline-primary btn-sm" onClick={handleNextClick}>
        Suivant <HiArrowRightCircle style={{height:'30px'}}></HiArrowRightCircle>
      </button>
      <div className="mt-3 border p-2 bg-dark mb-5 rounded">
        <div className="bg-success p-3 text-white">
          <h2>
            <i>{sculpture.name}</i> par {sculpture.artist}
          </h2>
          <small>
            ({index + 1} sur {sculptureList.length})
          </small>
          <br/>
          <button className="btn btn-primary btn-sm mt-2" onClick={handleMoreClick}>
            {showmore ? 'Masquer' : 'Afficher'} les détails
          </button>
        </div>
        <div className="mt-3 text-white">
          <p style={{fontWeight:'bold'}}>{showmore && sculpture.description}</p>
        </div>
        <br/>
        <div className="mb-3">
          <img
              src={sculpture.url}
              alt={sculpture.alt}
              style={{width:'100%',height:'300px'}}
              className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
