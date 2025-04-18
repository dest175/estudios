import { useState } from 'react'
import './App.css'
import { CustomAvatar } from './components/CustomAvatar/CustomAvatar.jsx'
import Tumama from './assets/Tumama.png'
import { Custombutton } from './components/CustomAvatar/CustomButton.jsx'
import Ace from './assets/ace.webp'
import Toji from './assets/toji.jpg' 

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="app-container" >
      <CustomAvatar className="avatar-card" name="Tu Mama" description="mi nombre es Estefany Aguilar y no necesitas ser un ingeniero para no saber css sigan viendo " img={Tumama}  />
      <div className="buttons-container">
      <Custombutton id="botonXD" name="xD"/>
      <Custombutton id="botonxDnt" name="xD´nt"/>    
      </div>
    </div>
    <div className="app-container" >
      <CustomAvatar className="avatar-card" name="Ace" description="Soy Ace. Hijo de Roger, pero eso no es lo que importa. Soy capitán de los Piratas de Spade y ahora de la 2ª División de Barbablanca. ¡Mis nakama son mi familia! Y mi hermano Luffy, aunque sea un poco... bueno, lo quiero. Soy fuego, con la Mera Mera. ¡Y me gusta la libertad!" img={Ace}  />
      <div className="buttons-container">
      <Custombutton id="botonXD" name="si"/>
      <Custombutton id="botonxDnt" name="T.T"/>    
      </div>
    </div>
    <div className="app-container" >
      <CustomAvatar className="avatar-card" name="Toji" description="Soy Toji Zenin. ¿Qué quieres saber? No tengo maldición, solo un cuerpo que entrena duro. Los he vencido a todos, he acabado con quienes se interponían. Y sí, supongo que mi muerte fue necesaria para que los mocosos crecieran o lo que sea. Alguien tenía que ser el malo, ¿no?" img={Toji}  />
      <div className="buttons-container">
      <Custombutton id="botonXD" name="si"/>
      <Custombutton id="botonxDnt" name="siiiiiiii"/>    
      </div>
    </div>

  </>
  )
}

export default App
