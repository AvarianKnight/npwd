import { useNotifications } from '@os/notifications/hooks/useNotifications';
import { useApp } from '../../../os/apps/hooks/useApps';

const NOTIFICATION_ID = 'messages:broadcast';

export const useDarkMarketNotification = () => {
  const { addNotificationAlert } = useNotifications();
  const { icon, notificationIcon } = useApp('DARKMARKET');

  // return useRecoilValue<Transfer | null>(bankState.notification);

  const setNotification = ({ title, alertId, message }) => {
    const id = `${NOTIFICATION_ID}:${alertId}`;

    const notification = {
      app: 'DARKMARKET',
      id,
      sound: true,
      title: title,
      content: message,
      icon,
      notificationIcon,
    };

    addNotificationAlert(notification);
  };

  return { setNotification };
};
