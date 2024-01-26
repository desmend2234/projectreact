import { useContext, useReducer } from 'react';
import {
  MessageContext,
  messageReducer,
  initState,
} from '../store/messageStore';
function Message() {
  const [message, dispatch] = useContext(MessageContext);
  return (
    <>
      <button
        onClick={(e) => {
          dispatch({ type: 'POST_MESSAGE' });
          setTimeout(() => {
            dispatch({ type: 'CLEAR_MESSAGE' });
          }, 3000);
        }}
      >
        按我
      </button>
      {message.title && (
        <div
          className='toast-container position-fixed'
          style={{ top: '64px', right: '15px' }}
        >
          <div
            className='toast show'
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
            data-delay='3000'
          >
            <div className={`toast-header text-white bg-${message.type}`}>
              <strong className='me-auto'>{message.title}</strong>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='toast'
                aria-label='Close'
              />
            </div>
            <div className='toast-body'>{message.text}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
