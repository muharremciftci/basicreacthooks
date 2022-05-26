import React,{useState,useEffect} from 'react';


import "./App.css";
// import Not from '../src/Not'

function App(){

  const [bardakSayisi,bardakSayisidegistir] = useState(0)
  const [metin,setMetin]=useState({text:'İçtiğim Su Bardak Adeti'})
  const [bardakStyle,setBardakStyle] = useState(0)

  const Suictim=()=>{
   bardakSayisidegistir(bardakSayisi+1)
   setMetin({text:'içtiğim su bardak adet'})
  }

  useEffect(()=>{
    setBardakStyle("bardak"+bardakSayisi)
  },[bardakSayisi])

  return(
    <div className="app">
        
       <h3 className={bardakStyle} >{bardakSayisi}</h3>
       
       <p>{metin.text}</p>
       <button onClick={Suictim}>Su içtim</button>
        {/* <Not ad="Muharrem" aciklama="adam" tarih="26 Mayıs"/>
        <Not ad="Çiftçi" aciklama="adamın soyadı" tarih="26 Mayıs"/> */}
   
    </div>

  );
}

export default App;