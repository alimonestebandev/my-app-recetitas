function ItemPreview({
  createdAt = "undefined",
  author = "null",
  title = "undefined",
  description = "undefined",
  urlImg = "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-dinner-icon.png",
}) {
  return (
    <button title="ver más" className="item-preview">
      <div>
        <img className="image-preview" src={urlImg} alt="" />
      </div>
      <div className="data">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
      <div className="data-time">
        <p>Creado por: {author || "undefined"} |</p>
        <p>Fecha: {createdAt}</p>
      </div>
    </button>
  );
}

export default ItemPreview;
