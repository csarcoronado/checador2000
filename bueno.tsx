import './rspnsv.css'
import Red2000 from './Red2000.jpeg'
import { FaBarcode } from "react-icons/fa";
interface ProductProps {
    name: string;
    code: string;
    price?: number;
    discount?: number;
    imageSrc: string;
  }
export const VirtualKeyboard = ({ name, code, price, discount}: ProductProps) => {
    const calculateDiscountedPrice = () => {
        if (price && discount) {
          const discountedPrice = price - price * (discount / 100);
          return discountedPrice.toFixed(2);
        }
        return 'No disponible';
      };
    return (
    <div>

      <div className='containerr p-2 shadow-lg rounded-md p-6 border border-dark-gray-200 space-y-6'>
        <div>
          <form className="formum">
            <div className='buttonXepChem'>Nombre de la empresa</div>
              <img  className='buttonXepChm' src={Red2000} style={{width: '55px', height:'55px' }}/>
                </form>
                  <h1 className='h1responsive'>Pase el código por el escaner por favor, gracias</h1>
                  <h1 className='h1responsive'><FaBarcode/></h1>                                            
                  <div className='h1responsive'><input type="submit" className='inputCh' value=''/></div>
             </div>

  </div> 
        <div className='containerr p-2 shadow-lg rounded-md p-6 border border-dark-gray-200 space-y-6'>
              <div>
              <form className="formum">
                      <div className='buttonXepChem'>Red 2000 Diseño y Hospedaje Web</div>
                      <img  className='buttonXepChm' src={Red2000} style={{width: '55px', height:'55px'}}/>
              </form>
              <div>
                <h3 className='h1responsive'>Producto:{name} Factura</h3>
                <h3 className='h1responsive'>Codigo de barra ó folio: P2AC2{code}</h3>
                {price ? (
                  <p>
                    Precio: ${price.toFixed(2)} (Descuento: {discount}%)
                  </p>
                ) : (
                  <h3 className='h1responsive'>
                    Precio con descuento: ${calculateDiscountedPrice()} (sin descuento
                    disponible)
                  </h3>
                )}
              </div>
              <div className="h1responsive">
                <img  src={Red2000}/>
              </div>
            </div> 
          </div>  
      
     
        </div>

      
  ) 
} 
export default VirtualKeyboard