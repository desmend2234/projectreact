import axios from 'axios';
import { useEffect, useState } from 'react';

function CouponModal({ closeCouponModal, getCoupons, tempCoupon, type }) {
  const [date, setDate] = useState(new Date());
  const [tempData, setTempdata] = useState({
    title: '',
    is_enabled: 1,
    percent: 80,
    due_date: 1555459200,
    code: 'testCode',
  });
  //打開Modal的初始值
  useEffect(() => {
    if (type === 'create') {
      setTempdata({
        title: '',
        is_enabled: 1,
        percent: 80,
        due_date: 1555459200,
        code: 'testCode',
      });
      setDate(new Date());
    } else if (type === 'edit') {
      setTempdata(tempCoupon);
      setDate(new Date(tempCoupon.due_date));
    }
  }, [type, tempCoupon]);

  //將欄位值寫入
  const handleChange = (e) => {
    const { name, value } = e.target;
    //判斷name中欄位有無'price'及'origin_price'
    if (['percent'].includes(name)) {
      //將'price', 'origin_price'轉型成數字
      setTempdata({ ...tempData, [name]: Number(value) });
    } else if (name === 'is_enabled') {
      //將'is_enabled'從布林值轉型成數字
      setTempdata({ ...tempData, [name]: +e.target.checked });
    } else {
      //若 tempData 有相同的屬性，[name]: value 這段設定就會將原本 tempData 內的屬性覆蓋
      setTempdata({ ...tempData, [name]: value });
    }
  };

  const submit = async () => {
    try {
      let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon`;
      let method = 'post';
      if (type === 'edit') {
        api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
        method = 'put';
      }
      const res = await axios[method](
        api,
        //原本API資料是用{data:XXX}來儲存
        { data: { ...tempData, due_date: date.getTime() } }
      );
      closeCouponModal();
      getCoupons();
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <div
      className='modal fade'
      id='couponModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              {type === 'create' ? '建立新優惠券' : `編輯 ${tempCoupon.title}`}
            </h1>
            <button
              type='button'
              className='btn-close'
              aria-label='Close'
              onClick={closeCouponModal}
            />
          </div>
          <div className='modal-body'>
            <div className='mb-2'>
              <label className='w-100' htmlFor='title'>
                標題
                <input
                  type='text'
                  id='title'
                  placeholder='請輸入標題'
                  name='title'
                  className='form-control mt-1'
                  value={tempData.title}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-2'>
                <label className='w-100' htmlFor='percent'>
                  折扣（%）
                  <input
                    type='text'
                    name='percent'
                    id='percent'
                    placeholder='請輸入折扣（%）'
                    className='form-control mt-1'
                    value={tempData.percent}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className='col-md-6 mb-2'>
                <label className='w-100' htmlFor='due_date'>
                  到期日
                  <input
                    type='date'
                    id='due_date'
                    name='due_date'
                    placeholder='請輸入到期日'
                    className='form-control mt-1'
                    value={`${date.getFullYear().toString()}-${(
                      date.getMonth() + 1
                    )
                      .toString()
                      .padStart(2, 0)}-${date
                      .getDate()
                      .toString()
                      .padStart(2, 0)}`}
                    onChange={(e) => {
                      setDate(new Date(e.target.value));
                    }}
                  />
                </label>
              </div>
              <div className='col-md-6 mb-2'>
                <label className='w-100' htmlFor='code'>
                  優惠碼
                  <input
                    type='text'
                    id='code'
                    name='code'
                    placeholder='請輸入優惠碼'
                    className='form-control mt-1'
                    value={tempData.code}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <label className='form-check-label' htmlFor='is_enabled'>
              <input
                className='form-check-input me-2'
                type='checkbox'
                id='is_enabled'
                name='is_enabled'
                checked={!!tempData.is_enabled}
                onChange={handleChange}
              />
              是否啟用
            </label>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={closeCouponModal}
            >
              關閉
            </button>
            <button type='button' className='btn btn-primary' onClick={submit}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CouponModal;
