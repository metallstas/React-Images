import React, { ReactEventHandler, UIEvent, useEffect, useState } from 'react'
import { FullSizeImg } from './FullSizeImg/FullSizeImg'
import { Image } from './Image/Image'
import cls from './ImageList.module.css'

interface IImages {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const ImageList = () => {
  const [images, setImages] = useState<IImages[]>([])
  const [photoFullSize, setPhotoFullSize] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const photoClickHandler = (urlImg: string) => {
    setPhotoFullSize(urlImg)
  }

  const closeBigPhoto = () => {
    setPhotoFullSize('')
  }

  const getPhotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=50`
    const response = await fetch(url)
    const data = await response.json()
    setImages(data)
  }

  useEffect(() => {
    getPhotos()
  }, [currentPage])

  const prevPage = () => {
    window.scrollTo(0,0)

    if (currentPage - 1 === 0) {
      return
    }
    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    window.scrollTo(0,0)
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <div className={cls.imageWrap}>
        {images.map(
          (image: {
            id: number
            title: string
            thumbnailUrl: string
            url: string
          }) => (
            <Image
              key={image.id}
              text={image.title}
              samllSizeImg={image.thumbnailUrl}
              fullSizeImg={image.url}
              photoClickHandler={photoClickHandler}
            />
          )
        )}
      </div>
      <div className={cls.btnBlock}>
        <button onClick={prevPage}>
          Prev
        </button>
        <button onClick={nextPage}>
          Next
        </button>
      </div>
      {photoFullSize ? (
        <FullSizeImg bigImg={photoFullSize} closeBigPhoto={closeBigPhoto} />
      ) : null}
    </>
  )
}
