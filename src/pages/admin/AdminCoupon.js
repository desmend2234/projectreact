import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import CouponModal from '../../components/CoupontModal';
import { Modal } from 'bootstrap';
import DeleteModal from '../../components/DeleteModal';
import Pagination from '../../components/Pagination';
function AdminCoupons() {
  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({});
  const couponModal = useRef(null);
  const deleteModal = useRef(null);
  const [type, setType] = useState('create');
  const [tempCoupon, setTempCoupon] = useState({});

  useEffect(() => {
    //建立Modal新實體
    couponModal.current = new Modal('#couponModal', { backdrop: 'static' });
    deleteModal.current = new Modal('#deleteModal', { backdrop: 'static' });

    getCoupons();
  }, []);

  const getCoupons = async (page = 1) => {
    const couponRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupons?page=${page}`
    );
    console.log(couponRes);
    setCoupons(couponRes.data.coupons);
    setPagination(couponRes.data.pagination);
  };
  //建立Modal開關函式
  const openCouponModal = (type, coupon) => {
    setType(type);
    setTempCoupon(coupon);
    couponModal.current.show();
  };
  const closeCouponModal = () => {
    couponModal.current.hide();
  };
  const openDeleteModal = (coupon) => {
    setTempCoupon(coupon);
    deleteModal.current.show();
  };
  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };
  const deleteFunction = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`
      );
      if (res.data.success) {
        getCoupons();
        closeDeleteModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='p-3'>
      {/* 透過props傳遞元件 */}
      <CouponModal
        closeCouponModal={closeCouponModal}
        getCoupons={getCoupons}
        type={type}
        tempCoupon={tempCoupon}
      />
      <DeleteModal
        closeDeleteModal={closeDeleteModal}
        text={tempCoupon.title}
        id={tempCoupon.id}
        handleDelete={deleteFunction}
      />
      <h3>優惠券列表</h3>
      <hr />
      <div className='text-end'>
        <button
          type='button'
          className='btn btn-primary btn-sm'
          onClick={() => {
            openCouponModal('create', {});
          }}
        >
          建立新優惠券
        </button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>標題</th>
            <th scope='col'>折扣</th>
            <th scope='col'>到期日</th>
            <th scope='col'>啟用狀態</th>
            <th scope='col'>編輯</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => {
            return (
              <tr key={coupon.id}>
                <td>{coupon.title}</td>
                <td>{coupon.percent}</td>
                <td>{new Date(coupon.due_date).toDateString()}</td>
                <td>{coupon.code}</td>
                <td>{coupon.is_enabled ? '啟用' : '未啟用'}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm'
                    onClick={() => {
                      openCouponModal('edit', coupon);
                    }}
                  >
                    編輯
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-danger btn-sm ms-2'
                    onClick={() => {
                      openDeleteModal(coupon);
                    }}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination changePage={getCoupons} pagination={pagination} />
    </div>
  );
}
export default AdminCoupons;
