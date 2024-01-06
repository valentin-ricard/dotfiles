LOCK_TIME=180
SUSPEND_TIME=300

swayidle -w timeout $LOCK_TIME 'swaylock -f' \
            timeout $SUSPEND_TIME 'systemctl suspend' \
            before-sleep 'swaylock -f' &
