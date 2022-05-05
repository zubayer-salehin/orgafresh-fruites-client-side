import React from 'react';
import { Container } from 'react-bootstrap';
import style from "./Product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldVirus, faTruck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {

    const navigate = useNavigate();

    return (
        <Container>
            <section className={style.product}>
                <div className={style.product__photo}>
                    <div className={style.photo_container}>
                        <div className={style.photo_main}>
                            <img src={product.image} alt="green apple slice" />
                        </div>
                    </div>
                </div>
                <div className={style.product__info}>
                    <div className={style.title}>
                        <h1>{product.name}</h1>
                    </div>
                    <div className={style.price}>
                        R$ <span>{product.price}</span>
                    </div>
                    <div className={style.description}>
                        <h3 className={style.title_style}>SUPPLIER AND QUANTITY</h3>
                    </div>
                    <div className={style.quantity_supplier}>
                        <div className={style.supplier}>
                            <h6>{product.supplierName}</h6>
                            <h5><FontAwesomeIcon className={style.truck} icon={faTruck} />Supplier</h5>
                        </div>
                        <div className={style.quantity}>
                            <h6>{product.quantity}</h6>
                            <h5><FontAwesomeIcon className={style.virus} icon={faShieldVirus} />Quantity</h5>
                        </div>
                    </div>
                    <div className={style.description}>
                        <h3 className={style.title_style}>BENEFITS</h3>
                        <p className='pe-2'>{product.description}</p>
                    </div>
                    <button onClick={() => navigate(`/inventory/${product._id}`)} className={style.buy__btn}>MANAGE TO STOCK</button>
                </div>
            </section>
        </Container>
    );
};

export default Product;