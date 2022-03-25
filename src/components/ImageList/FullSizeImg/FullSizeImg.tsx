import cls from './FullSizeImg.module.css'

interface IProps {
  bigImg: string;
  closeBigPhoto: () => void;
}

export const FullSizeImg = ({bigImg, closeBigPhoto}: IProps) => {
  return (
    <div className={cls.bigImgBlock} onClick={closeBigPhoto}>
      <img alt='img' src={bigImg} />
    </div>
  )
}
