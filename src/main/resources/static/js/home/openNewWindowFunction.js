// Go버튼 눌렀을 때 새 창으로 message page로 이동
function openNewWindow(data) {
  const newWindow = window.open('http://localhost:8081/message', 'Data Window', 'fullscreen=yes');
  if (newWindow) {
    newWindow.onload = function() {
      console.log(data);
      newWindow.postMessage(data, '*');
    };
  }
}