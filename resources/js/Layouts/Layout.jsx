import { Head } from '@inertiajs/react';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';

export const Layout = (props) => {
  useEffect(() => {
    if (props.notification) {
      notifications.show({
        withBorder: true,
        message: props.notification.message,
        color: props.notification.status === 'success' ? 'green' : 'red',
      });
    }

    notifications.cleanQueue();
  }, [props.notification]);

  return (
    <>
      <Head title={props.title} />

      {props.children}
    </>
  );
};
