import Meta from 'gi://Meta';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class MaximizedByDefaultExtension extends Extension {
    enable() {
        this._windowCreatedId = global.display.connect('window-created', (d, win) => {
            if (win.get_window_type() === Meta.WindowType.NORMAL && win.can_maximize()) {
                win.maximize(Meta.MaximizeFlags.HORIZONTAL | Meta.MaximizeFlags.VERTICAL)
            }
        });
    }

    disable() {
        global.display.disconnect(this._windowCreatedId);
    }
}
