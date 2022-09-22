import React, {useState} from 'react'
import './App.css'
import Table from 'react-bootstrap/Table';
import Images from './assets/img/image';

const Phones = () => {
    const PhoneData = [
        { id: 1, Name: 'iPhone 10', Price:'100000' ,Quantity: '5', DiscountedPrice: '90000' },
        { id: 2, Name: 'iPhone 11', Price:'200000' ,Quantity: '2', DiscountedPrice: '180000' },
        { id: 3, Name: 'iPhone 12', Price:'300000' ,Quantity: '10', DiscountedPrice: '270000' },
        { id: 4, Name: 'iPhone 13', Price:'400000' ,Quantity: '12', DiscountedPrice: '360000' },
        { id: 5, Name: 'iPhone 14', Price:'500000' ,Quantity: '15', DiscountedPrice: '450000' },
      ]

      const [phone, setPhone] = useState(PhoneData)
      
  return (
    <Table className='Table-container' striped bordered hover>
      <thead>
        <tr className='main-row'>
          <th className='main-row-names'>Image</th>
          <th className='main-row-names'>Name</th>
          <th className='main-row-names'>Price</th>
          <th className='main-row-names'>Quantity</th>
          <th className='main-row-names'>Discounted Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='product p-img'><img src={Images.Phone1} alt="" className='img-1'/> </td>
          <td className='product'>iPhone 10</td>
          <td className='product'>100,000</td>
          <td className='product'>5</td>
          <td className='product'>90,000</td>
          <td>
          <div className='product-btns'>
          {/* <button onClick={(e) => setPhone(e.target.value)}> */}
            <button>
            <i className="fa-solid fa-circle-minus product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-pen product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-trash product-btn"></i>
            </button>
          </div>
          </td>
        </tr>
        <tr>
          <td><img src={Images.Phone1} alt="" className='img-1'/></td>
          <td>iPhone 11</td>
          <td>200,000</td>
          <td>2</td>
          <td>180000</td>
          <td>
          <div className='product-btns'>
          <button>
            <i className="fa-solid fa-circle-minus product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-pen product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-trash product-btn"></i>
            </button>
          </div>
          </td>
        </tr>
        <tr>
          <td><img src={Images.Phone1} alt="" className='img-1'/></td>
          <td>iPhone 12</td>
          <td>300,000</td>
          <td>10</td>
          <td>270000</td>
          <td>
          <div className='product-btns'>
          <button>
            <i className="fa-solid fa-circle-minus product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-pen product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-trash product-btn"></i>
            </button>
          </div>
          </td>
        </tr>
        <tr>
          <td><img src={Images.Phone1} alt="" className='img-1'/></td>
          <td>iPhone 13</td>
          <td>400,000</td>
          <td>12</td>
          <td>360000</td>
          <td>
          <div className='product-btns'>
          <button>
            <i className="fa-solid fa-circle-minus product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-pen product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-trash product-btn"></i>
            </button>
          </div>
          </td>
        </tr>        
        <tr>
          <td><img src={Images.Phone1} alt="" className='img-1'/></td>
          <td>iPhone 14</td>
          <td>500,000</td>
          <td>15</td>
          <td>450000</td>
          <td>
          <div className='product-btns'>
          <button>
            <i className="fa-solid fa-circle-minus product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-pen product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-trash product-btn"></i>
            </button>
          </div>
          </td>
        </tr>
        <div className='icons'>
            <button>
             <i className="fa-solid fa-circle-plus product-btn"></i>
            </button>
             <button>
            <i className="fa-solid fa-circle-minus product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-pen product-btn"></i>
            </button>
            <button>
            <i className="fa-solid fa-trash product-btn"></i>
            </button>
        </div>
      </tbody>
    </Table>
  );
}

export default Phones