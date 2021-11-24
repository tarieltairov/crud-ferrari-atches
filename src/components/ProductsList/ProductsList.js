

import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = ({ products, deleteProduct, getProductToEdit }) => {
    // приняли пропсы 
return (
    // перебираем массив для отображения и передаем в пропсы каждый item, также функцию deleteProducts передаем для каждой карточки
<div className="d-flex flex-wrap justify-content-center">
    {products.map((item) => (
    <ProductCard key={item.id} item={item}  deleteProduct={deleteProduct} getProductToEdit={getProductToEdit}/>
    ))}
</div>
);
};

export default ProductsList;