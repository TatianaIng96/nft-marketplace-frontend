const Cover = ({ image }) => {
  return (
    <img
      alt="Slider BG"
      sizes="100vw"
      src={image}
      decoding="async"
      data-nimg="fill"
      className="cover"
    />
  );
};

export default Cover;
