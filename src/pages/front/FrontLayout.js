import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
function FrontLayout() {
  const [cartData, setCartData] = useState({});

  const getCart = async () => {
    try {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart`
      );
      setCartData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Navbar cartData={cartData} />
      {/* 傳遞getCart函式給內層使用 */}
      <Outlet context={{ getCart, cartData }}></Outlet>
      <div className='bg-dark'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between text-white py-4'>
            <p className='mb-0'>© 2020 LOGO All Rights Reserved.</p>
            <ul className='d-flex list-unstyled mb-0 h4'>
              <li>
                <a href='#' className='text-white mx-3'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-white mx-3'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-white ms-3'>
                  <i className='fab fa-line'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <script
        src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js'
        integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p'
        crossOrigin='anonymous'
      ></script>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js'
        integrity='sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT'
        crossOrigin='anonymous'
      ></script>
    </>
  );
}
export default FrontLayout;
