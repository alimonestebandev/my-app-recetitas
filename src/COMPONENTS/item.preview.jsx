function ItemPreview({
  title = "undefined",
  description = "undefined",
  urlImg = "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-dinner-icon.png",
}) {
  return (
    <button className="item-preview">
      <div>
        <img className="image-preview" src={urlImg} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
}

export default ItemPreview;
