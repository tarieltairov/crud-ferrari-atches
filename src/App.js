import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from "./components/AddProduct/AddProduct";
import ProductsList from "./components/ProductsList/ProductsList";
import EditModal from "./components/EditModal/EditModal";

function App() {

  //  в этом state мы храним все наши продукты
  const [products, setProducts] = useState([])
  let [modal, setModal] = useState(false)

  const[productToEdit, setProductToEdit]=useState(null)

  function getProductToEdit(item){
    setModal(true)
    setProductToEdit(item)
  }

  function updateProduct() {
    console.log('updated!')
    let arr = products.map((item) => {
      if(item.id !== productToEdit.id) {
        return item;
      }else {
        return productToEdit;
      }
    });
    setProducts(arr)
    setModal(false)
  }
  // эта функция для добавления продуктаб т.к. стейт мы не можем менять напрямую мы снчала копируем все старые значения и добавляем в конец новый продукт 
  // в конце мы перезапизали стейт 
  function addProduct(product){
      setProducts([...products, product])
      
  }

  // функция для удаления, после того как удалили продукт, измененный массив кладем вместо старого
function deleteProduct(id){
  let filteredProducts = products.filter((item)=>item.id !== id)
  setProducts(filteredProducts)
}

  return (
    <div>
      <AddProduct addProduct={addProduct}/>
      <ProductsList products={products} deleteProduct={deleteProduct}
      getProductToEdit={getProductToEdit}
      />

      {productToEdit? ( modal ? (<EditModal setModal={setModal} productToEdit={productToEdit} setProductToEdit={setProductToEdit} updateProduct={updateProduct}/>):(null)
      ):(null)
      }

      
    </div>
  );
}

export default App;
