# desktop_notify

Util for sending desktop notifications over dbus. Supports replace_id, hints and actions(mainloop required).
Requires [dbus-python](https://pypi.org/project/dbus-python/).

## Package usage

### Basic notify:
```
notify = desktop_notify.Notify('summary', 'body')
notify.show()
```

### Usage with server:
```
server = desktop_notify.Server('app_name')
notify = server.Notify('summary')
notify.show()
```
### Configure notify.
You can setnotify options by default property setter `notify.body = 'body'` or using fluent setters:
```
notify.set_id(0)\
	.set_icon('icon')\
	.set_timeout(10000) # ms
```

### Extra options

#### Hints

For workings with hints use this methods:

```
notify.set_hint(key, value)
notify.get_hint(key)
notify.del_hint(key)
```

#### Actions

**For using actions and event you need to specify notify server mainloop.**

You can add or delete action:

```
notify.add_action(desktop_notify.Action('label', callback))
notify.del_action(desktop_notify.Action('label', callback))
```

Also supported `on_close` event:

```
notify.set_on_close(callback)
```

### Mainloop

`dbus-python` supports `glib` and `qt` mainloops.

```
server = desktop_notify.Server('app_name')\
	.init_mainloop_glib()\
	.init_mainloop_qt()\
	.set_mainloop(my_mainloop)
```

## Console usage

```
usage: desktop-notify [--help] [--icon ICON] [--id REPLACE_ID] [--timeout TIMEOUT]
               [--hints key:value [key:value ...]]
               Summary [Body]

Send desktop notification. Returns created notification's id.

positional arguments:
  Summary               The summary text briefly describing the notification.
  Body                  The optional detailed body text. Can be empty.

optional arguments:
  --help                show this help message and exit
  --icon ICON, -i ICON  The optional program icon of the calling application.
                        Should be either a file path or a name in a
                        freedesktop.org-compliant icon theme.
  --id REPLACE_ID       An optional ID of an existing notification that this
                        notification is intended to replace.
  --timeout TIMEOUT, -t TIMEOUT
                        The timeout time in milliseconds since the display of
                        the notification at which the notification should
                        automatically close.
  --hints key:value [key:value ...], -h key:value [key:value ...]
                        use "--" to separate hints list from positional args
```

