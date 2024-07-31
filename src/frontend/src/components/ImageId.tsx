import './imageId.css'

interface ImageProps {
    text:string, 
    size: string,
    fontSize: string
}

const ImageId = (props:ImageProps) => {
  const image = props.text.toUpperCase().substring(0,2)

  return (
    <p id="user-image" style={{width: props.size, height: props.size, fontSize: props.fontSize}}>{image}</p>
  )
}

export default ImageId