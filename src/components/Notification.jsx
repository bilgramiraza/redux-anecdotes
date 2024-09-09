import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearNotify } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderColor: notification?.error ? 'red' : 'green',
  }

  useEffect(() => {
    if (notification?.message) {
      const timeoutId = setTimeout(() => dispatch(clearNotify()), notification.timer);

      return () => clearTimeout(timeoutId);
    }
  }, [notification?.message, notification?.timer, dispatch]);

  if (!notification?.message) return null;

  return (
    <div style={style}>
      <p>{notification.message}</p>
    </div>
  )
}

export default Notification
