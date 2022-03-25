import cls from './Image.module.css'

interface Image {
  text: string;
  samllSizeImg: string;
  fullSizeImg: string;
  photoClickHandler: (url: string) => void;
}

export const Image = ({text, samllSizeImg, fullSizeImg, photoClickHandler}: Image) => {

  return (
    <div className={cls.card}>
      <img onClick={() => photoClickHandler(fullSizeImg)} src={samllSizeImg} alt='img'/>
      <p>{text}</p>
    </div>
  )
}
