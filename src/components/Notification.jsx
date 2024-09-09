import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderColor: notification?.status ? 'green' : 'red',
  }

  if (!notification?.message) return null;

  return (
    <div style={style}>
      <p>{notification.message}</p>
    </div>
  )
}

export default Notification
