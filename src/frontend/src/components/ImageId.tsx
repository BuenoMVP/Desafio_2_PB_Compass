import "./imageId.css";

interface ImageProps {
  text: string;
  size: string;
  fontSize: string;
  radius?: string;
  colorBackground?: string;
}

const ImageId: React.FC<ImageProps> = (props) => {
  const image =
    typeof props.text === "string"
      ? props.text.toUpperCase().substring(0, 2)
      : "";

  return (
    <p
      id="user-image"
      style={{
        width: props.size,
        height: props.size,
        fontSize: props.fontSize,
        borderRadius: props.radius,
        backgroundColor: props.colorBackground,
      }}
    >
      {image}
    </p>
  );
};

export default ImageId;
