import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// import OrderModal from '../../components/OrderModal';
import Pagination from '../../components/Pagination';
import { Modal } from 'bootstrap';

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('create');
  const [tempOrder, setTempOrder] = useState({});

  const orderModal = useRef(null);
  //   const deleteModal = useRef(null);
  useEffect(() => {
    // orderModal.current = new Modal('#orderModal', {
    //   backdrop: 'static',
    // });
    getOrders();
  }, []);
  const openOrderModal = (type, item) => {
    setType(type);
    setTempOrder(item);
    orderModal.current.show();
  };
  const closeModal = () => {
    orderModal.current.hide();
  };
  //   const openDeleteModal = (coupon) => {
  //     setTempOrder(coupon);
  //     deleteModal.current.show();
  //   };
  //   const closeDeleteModal = () => {
  //     deleteModal.current.hide();

  const getOrders = async (page = 1) => {
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/orders?page=${page}`
    );
    console.log(res);
    setOrders(res.data.orders);
    setPagination(res.data.pagination);
  };
  return (
    <div className='p-3'>
      {/* <CouponModal
        closeModal={closeModal}
        getCoupons={getCoupons}
        tempCoupon={tempCoupon}
        type={type}
      />
      <DeleteModal
        close={closeDeleteModal}
        text={tempCoupon.title}
        handleDelete={deleteCoupon}
        id={tempCoupon.id}
      /> */}
      <h3>訂單列表</h3>
      <hr />
      <div className='text-end'>
        {/* <button
          type='button'
          className='btn btn-primary btn-sm'
          onClick={() => {
            openOrderModal('create', {});
          }}
        >
          建立新商品
        </button> */}
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>訂單 id</th>
            <th scope='col'>購買用戶</th>
            <th scope='col'>訂單金額</th>
            <th scope='col'>付款狀態</th>
            <th scope='col'>付款日期</th>
            <th scope='col'>留言訊息</th>
            <th scope='col'>編輯</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((coupon) => {
            return (
              <tr key={coupon.id}>
                <td>{coupon.title}</td>
                <td>{coupon.percent}</td>
                <td>{new Date(coupon.due_date).toDateString()}</td>
                <td>{coupon.code}</td>
                <td>{coupon.is_enable ? '啟用' : '未啟用'}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm'
                    onClick={() => {
                      openOrderModal('edit', coupon);
                    }}
                  >
                    編輯
                  </button>
                  {/* <button
                    type='button'
                    className='btn btn-outline-danger btn-sm ms-2'
                    onClick={() => {
                      openDeleteModal(coupon);
                    }}
                  >
                    刪除
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination pagination={pagination} changePage={getOrders} />
    </div>
  );
}

export default AdminOrders;
