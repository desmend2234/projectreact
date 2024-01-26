import axios from 'axios';
import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Checkout from './CheckOut';

function Cart() {
  const { cartData, getCart } = useOutletContext();
  const [isLoadingItem, setIsLoadingItem] = useState([]);

  //   console.log(cartData.carts);
  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };
  const updateCartItem = async (item, quantity) => {
    const data = {
      data: {
        product_id: item.product_id,
        qty: quantity,
      },
    };
    //包含當前ID的item，disabled就變成true
    setIsLoadingItem([...isLoadingItem, item.id]);
    try {
      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`,
        data
      );
      //讀取完後把包含當前ID的item過濾掉，disabled就變成false
      setIsLoadingItem(
        isLoadingItem.filter((loadingItem) => loadingItem.id !== item.id)
      );

      getCart();
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div
          className='col-md-6 bg-white py-5'
          style={{ minHeight: 'calc(100vh - 56px - 76px)' }}
        >
          <div className='d-flex justify-content-between'>
            <h2 className='mt-2'>購物車內容</h2>
          </div>
          {cartData?.carts?.map((item) => {
            return (
              <div className='d-flex mt-4 bg-light' key={item.product.id}>
                <img
                  className='object-cover'
                  src={item.product.imageUrl}
                  alt=''
                  style={{
                    width: '120px',
                  }}
                />
                <div className='w-100 p-3 position-relative'>
                  <button
                    type='button'
                    className='position-absolute btn'
                    style={{ top: '8px', right: '16px' }}
                    onClick={() => {
                      removeCartItem(item.id);
                    }}
                  >
                    <i className='bi bi-x-lg'></i>
                  </button>
                  <p className='mb-0 fw-bold'>{item.product.title}</p>
                  <p className='mb-1 text-muted' style={{ fontSize: '14px' }}>
                    {item.product.content}
                  </p>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='input-group w-50 align-items-center'>
                      <select
                        name=''
                        id=''
                        className='form-select'
                        value={item.qty}
                        onChange={(e) => updateCartItem(item, +e.target.value)}
                        disabled={isLoadingItem.includes(item.id)}
                      >
                        {[...new Array(20)].map((i, num) => {
                          return <option key={num}>{num + 1}</option>;
                        })}
                      </select>
                    </div>

                    <p className='mb-0 ms-auto'>NT${item.final_total}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <table className='table mt-4 text-muted'></table>
          <div className='d-flex justify-content-between mt-4'>
            <p className='mb-0 h4 fw-bold'>合計</p>
            <p className='mb-0 h4 fw-bold'>NT${cartData.final_total}</p>
          </div>
          <Link
            to='/checkout'
            className='btn btn-dark btn-block mt-4 rounded-0 py-3 w-100'
          >
            確認餐點
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
