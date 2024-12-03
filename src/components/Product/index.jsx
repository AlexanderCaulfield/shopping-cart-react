import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import formatPrice from "../../utils/priceFormatter";
import "./style.scss";

const Product = ({product, deleteProduct, increaseProductCount, decreaseProductCount, changeValue}) => {
    const {id, img, title, priceTotal, count} = product;

    return (
        <section className="product">
            <div className="product__img">
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count
                    id={id}
                    count={count}
                    increaseProductCount={increaseProductCount}
                    decreaseProductCount={decreaseProductCount}
                    changeValue={changeValue}
                />
            </div>
            <div className="product__price">
                {formatPrice(priceTotal)} руб.
            </div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={deleteProduct} id={id}/>
            </div>
        </section>
    );
}
 
export default Product;