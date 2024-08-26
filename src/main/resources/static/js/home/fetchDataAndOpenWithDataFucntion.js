async function fetchAndOpenData() {
  try {
    const response = await fetch(urlElement.innerText);
    const data = await response.json();
    openNewWindow(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}