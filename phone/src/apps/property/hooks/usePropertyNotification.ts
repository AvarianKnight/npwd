import { useNotifications } from '@os/notifications/hooks/useNotifications';
import { useApp } from '../../../os/apps/hooks/useApps';

const NOTIFICATION_ID = 'messages:broadcast';

export const usePropertyNotification = () => {
  const { addNotificationAlert } = useNotifications();
  const { icon, notificationIcon } = useApp('PROPERTY');

  const setNotification = ({ title, propertyNotify, message }) => {
    const id = `${NOTIFICATION_ID}:${propertyNotify}`;

    const notification = {
      app: 'PROPERTY',
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
