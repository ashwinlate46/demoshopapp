import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {

    function saveProduct(product){
        console.log("I am inside in the New Product");
        console.log(product);
        
        //Calling Parent Function
        props.ashwin(product);
        
    }
    return (<div className='new-product'>
        <ProductForm  onSaveProduct={saveProduct}/>
    </div>)
}

export default NewProduct;