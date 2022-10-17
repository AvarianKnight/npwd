import {useNotifications} from '@os/notifications/hooks/useNotifications';
import {useApp} from '@os/apps/hooks/useApps';

const NOTIFICATION_ID = 'messages:broadcast';

export const useBoostingNotification = () => {
	const {addNotificationAlert} = useNotifications();
	const {icon, notificationIcon} = useApp('BOOSTING');

	const setNotification = ({title, boostNotifyId, message}) => {
		const id = `${NOTIFICATION_ID}:${boostNotifyId}`;

		const notification = {
			app: 'BOOSTING',
			id,
			sound: true,
			title: title,
			content: message,
			icon,
			notificationIcon,
		};

		addNotificationAlert(notification);
	};

	return {setNotification};
};
