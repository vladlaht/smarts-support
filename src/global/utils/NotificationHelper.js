export function showFlipNotification(message,type="info",element=".page-content-wrapper", position="top-right") {
    window.$(element).pgNotification({
        style: 'flip',
        message: message,
        position: position,
        timeout: 4000,
        type: type
    }).show();
}