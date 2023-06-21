import React from 'react'

const RestaurantCard = ({ listaDeRestaurantes }) => {
  return (
    <div key={listaDeRestaurantes.id}>
      <figure>
        <img src={listaDeRestaurantes.imagen} alt={listaDeRestaurantes.nombre} />
      </figure>
      <div>
         <h3>{listaDeRestaurantes.nombre}</h3>
      </div>
    </div>
  )
}

export default RestaurantCard
