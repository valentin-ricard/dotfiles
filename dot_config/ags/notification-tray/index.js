import {
    NotificationList, DNDSwitch, ClearButton, PopupList,
} from './widgets.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import { execAsync, timeout } from 'resource:///com/github/Aylur/ags/utils.js';

const Header = () => Widget.Box({
    className: 'header',
    children: [
        Widget.Label('Do Not Disturb'),
        DNDSwitch(),
        Widget.Box({ hexpand: true }),
        ClearButton(),
    ],
});

export const NotificationCenter = () => Widget.Window({
    
    name: 'notification-center',
    anchor: ['right', 'top', 'bottom'],
    popup: true,
    focusable: true,
    child: Widget.Box({
        children: [
            Widget.EventBox({
                hexpand: true,
                connections: [['button-press-event', () =>
                    App.closeWindow('notification-center')]]
            }),
            Widget.Box({
                vertical: true,
                children: [
                    Header(),
                    NotificationList(),
                ],
            }),
        ],
    }),
});

export const NotificationsPopupWindow = () => Widget.Window({
    name: 'popup-window',
    anchor: ['top'],
    child: PopupList(),
});

