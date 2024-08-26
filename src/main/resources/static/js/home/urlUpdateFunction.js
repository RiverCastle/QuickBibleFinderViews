// URL 업데이트
function updateUrl() {
    let url = 'http://localhost:8080/';
    if (engAbbr) url += engAbbr;
    if (selectedChapter) url += `/${selectedChapter}`;
    if (selectedVerse) url += `:${selectedVerse}`;
    urlElement.innerText = url;
}