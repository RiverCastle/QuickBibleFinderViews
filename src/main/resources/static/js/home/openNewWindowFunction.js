// Go버튼 눌렀을 때 새 창으로 message page로 이동
function openNewWindow(data) {
  const newWindow = window.open(`${FRONTEND_BASE_URL}/message`, "_blank", 'fullscreen=yes');
  if (newWindow) {
    newWindow.onload = function() {
      newWindow.postMessage(data, '*');
    };
  }
}