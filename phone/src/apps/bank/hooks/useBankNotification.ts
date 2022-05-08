import { useNotifications } from '@os/notifications/hooks/useNotifications';
import { useApp } from '../../../os/apps/hooks/useApps';

const NOTIFICATION_ID = 'messages:broadcast';

export const useBankNotification = () => {
  const { addNotificationAlert } = useNotifications();
  const { icon, notificationIcon } = useApp('BANK');

  // return useRecoilValue<Transfer | null>(bankState.notification);

  const setNotification = ({ title, bankNotifyId, message }) => {
    const id = `${NOTIFICATION_ID}:${bankNotifyId}`;

    const notification = {
      app: 'BANK',
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
