import React from 'react'
import style from '../style/index.module.css';
import data from '../proyects.json'

export default function Proyectos() {
  
let i=0

return (

  <div id={style.flex}>
    {data.map(e=>
    {
      return(
      <div key={i++}>
        <div className="card" id={style.carta}>
          <img className="card-img-top"  src={e.imagen} alt="Card image cap" />
           <div className="card-body">
            <h5 className="card-title">{e.nombre}</h5>
            <p className="card-text">{e.descripcion}</p>
            <a href={e.link} target='_blank' className="btn btn-success">Ir al Proyecto</a>
          </div> 
        </div>
      </div>
      )})}
  </div>
  )
}

