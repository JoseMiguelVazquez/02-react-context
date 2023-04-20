import React from 'react'
import './songlist.css'

const SongList = () => {
  return (
    <section>
      {loading
        ? <h2>Cargando...</h2>
        : list.map((song) => (
          <div className='row-song' key={song.id}>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}

export default SongList
