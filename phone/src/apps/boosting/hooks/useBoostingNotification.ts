import {useApp} from '@os/apps/hooks/useApps';
import {useNotifications} from '@os/notifications/hooks/useNotifications';

const NOTIFICATION_ID = 'messages:broadcast';

export const useBoostingNotification = () => {
	const {addNotificationAlert} = useNotifications();
	const {icon, notificationIcon} = useApp('BOOSTING');

	const setNotificationHandler = (data) => {
		const id = `${NOTIFICATION_ID}:${data.boostNotify}`;

		const notification = {
			app: 'BOOSTING',
			id,
			sound: true,
			title: data.title,
			content: data.message,
			icon,
			notificationIcon,
		};

		addNotificationAlert(notification);
	};

	return {setNotificationHandler};
	// useNuiEvent(BOOSTING_APP, BoostingEvents.SEND_NOTIFICATION, setNotificationHandler);
};
