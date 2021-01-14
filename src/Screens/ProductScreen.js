import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import '../index.css';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div className="detail">
        <div className="Back-to-Result">
            <Link to="/">Back to Results</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <h4>{product.name}</h4>
                    <li>
                        {product.rating} stars ({product.numreviews} reviews)
                    </li>
                    <li>
                        Price:<b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>Price : <b>${product.price}</b> </li>
                    <li>state: InStock</li>
                    <li>
                        qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button>Add to cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;