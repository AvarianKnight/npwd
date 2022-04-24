import { useRecoilValue } from 'recoil';
import { Transfer } from '@typings/bank';

import { useNotifications } from '@os/notifications/hooks/useNotifications';
import { bankState } from './state';
import { useHistory } from 'react-router-dom';
import { useApp } from '../../../os/apps/hooks/useApps';

const NOTIFICATION_ID = 'messages:broadcast';

export const useBankNotification = () => {
  const history = useHistory();
  const { removeId, addNotification, addNotificationAlert } = useNotifications();
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

// import { useTranslation } from 'react-i18next';
// import { matchPath, useHistory } from 'react-router-dom';
// import { useApp } from '@os/apps/hooks/useApps';
// import { useNotifications } from '@os/notifications/hooks/useNotifications';
// import useMessages from './useMessages';
// import { useRecoilValue } from 'recoil';
// import { messageState } from './state';
// import { MessageConversation } from '@typings/messages';

// const NOTIFICATION_ID = 'messages:broadcast';

// export const useMessageNotifications = () => {
//   const [t] = useTranslation();
//   const history = useHistory();
//   const { removeId, addNotification, addNotificationAlert } = useNotifications();
//   const { icon, notificationIcon } = useApp('MESSAGES');
//   const { getMessageConversationById, goToConversation } = useMessages();
//   const activeMessageConversation = useRecoilValue(messageState.activeMessageConversation);

//   // Remove notifications from groups when opening them
//   history.listen((location) => {
//     if (
//       activeMessageConversation?.id &&
//       matchPath(location.pathname, {
//         path: `/messages/conversations/${activeMessageConversation.id}`,
//         exact: true,
//       })
//     ) {
//       removeId(`${NOTIFICATION_ID}:${activeMessageConversation.id}`);
//     }
//   });

//   const setNotification = ({ conversationName, conversationId, message }) => {
//     let group = getMessageConversationById(conversationId) as MessageConversation;

//     if (!group) return;

//     const id = `${NOTIFICATION_ID}:${conversationId}`;

//     const notification = {
//       app: 'MESSAGES',
//       id,
//       sound: true,
//       title: conversationName,
//       onClick: () => goToConversation(group),
//       content: message,
//       icon,
//       notificationIcon,
//     };

//     addNotificationAlert(notification, (n) => {
//       removeId(id);
//       if (group.unread && group.unread > 1) {
//         addNotification({
//           ...n,
//           title: group.participant || "",
//           content: t('MESSAGES.MESSAGES.UNREAD_MESSAGES', {
//             count: group.unread,
//           }),
//         });
//         return;
//       }
//       addNotification(n);
//     });
//   };

//   return { setNotification };
// };
