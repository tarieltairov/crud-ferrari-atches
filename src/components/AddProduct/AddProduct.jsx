import React, { useState } from "react";

const AddProduct = ({addProduct}) => {
// приняли функцию addProduct из пропсов, мы сразу сделали деструктуризацию

  //   1 способ для сбора данных из инпутов
  // создали states для хранения данных

  //   const [model, setModel] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [image, setImage] = useState("");

  //  собрали все данные из states в один объект
  //   function handleValues() {
  //     let newProduct = {
  //       model,
  //       price,
  //       image,
  //     };
  //     console.log(newProduct);
  //   }
  //   1 способ заканчивается

// 2 способ
// создали один state  и задали ему начальное значение в виде объекта у которого ключи с пустыми занчениями
  const [newProduct, setNewProduct] = useState({
      model: "",
      price: "",
      image: ""
  })

  function handleValues (e){
    // перезаписываеим state(добавляем новые значения из инпутов)
    // функция прняла event, а внутр event хранится значение из атрибута name  и достаем значение которое ввел пользователь т.е. value (внутри target)
    let product = {
        ...newProduct,
        [e.target.name]: e.target.value
    }
    // перезаписываем state чтобы инпуты были контролируемыми
    setNewProduct(product)
  }

  
  // проверка на заполненность полей
  function chekValues(){
    if(!newProduct.model || !newProduct.price || !newProduct.image){
      alert('enter data')
      return
    }
    setNewProduct({
      model: "",
      price: "",
      image: ""
    })
    //добавляем уникальную id
    addProduct({...newProduct, id: Date.now()})
  }
  return (
    <div className="d-flex flex-column align-items-center mt-3 mb-3">
      {/* 1 способ */}
      {/* <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        type="text"
        placeholder="Model"
        name="model"
        className="col-3 mb-1"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Price"
        name="price"
        className="col-3 mb-1"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image"
        name="image"
        className="col-3 mb-1"
      />
      <button onClick={() => handleValues()} className="btn btn-success col-3">
        Add product
      </button> */}
      {/* тут 1 способ заканчивается */}

      {/* 2 способ */}
      <input
        value={newProduct.model}
        onChange={handleValues}
        type="text"
        placeholder="Model"
        name="model"
        className="col-3 mb-1"
      />
      <input
        value={newProduct.price}
        onChange={handleValues}
        type="text"
        placeholder="Price"
        name="price"
        className="col-3 mb-1"
      />
      <input
        value={newProduct.image}
        onChange={handleValues}
        type="text"
        placeholder="Image"
        name="image"
        className="col-3 mb-1"
      />
      <button onClick={() => chekValues()} className="btn btn-success col-3">
        Add product
      </button>

    </div>
  );
};

export default AddProduct;