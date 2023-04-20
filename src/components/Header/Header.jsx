import React from 'react'
import { useSongContext } from '@/context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong
  return (
    <>
      {song.title
        ? <div>
          Now playing... {song.title} - {song.artist}
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>
        : <h2>Selecciona una canción</h2>}
    </>
  )
}

export default Header
