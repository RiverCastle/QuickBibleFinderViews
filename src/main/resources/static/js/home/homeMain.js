const oldTestamentsButtonsContainer = document.getElementById('old-testament');
const newTestamentsButtonsContainer = document.getElementById('new-testament');

const chapterButtonsContainer = document.getElementById('chapter-buttons');
const verseButtonsContainer = document.getElementById('verse-buttons');
const urlElement = document.getElementById('url');

var bibleBook;
var korTitle;
var engAbbr = '';
var selectedChapter = 0;
var selectedVerse = 0;
var maxChapter;
var maxVerse;

// 성경 버튼 생성
for (const book in oldTestaments) {
    const button = document.createElement('button');

    bibleBook = oldTestaments[book];
    button.innerText = book;

    button.addEventListener('click', () => {
        korTitle = book;
        engAbbr = oldTestaments[book].abbreviation;
        updateUrl();
        maxChapter = oldTestaments[book].chapters;
        generateChapterButtons(maxChapter);
    });
    oldTestamentsButtonsContainer.appendChild(button);
}

for (const book in newTestaments) {
    const button = document.createElement('button');

    bibleBook = newTestaments[book];
    button.innerText = book;

    button.addEventListener('click', () => {
        korTitle = book;
        engAbbr = newTestaments[book].abbreviation;
        updateUrl();
        maxChapter = newTestaments[book].chapters;
        generateChapterButtons(maxChapter);
    });
    newTestamentsButtonsContainer.appendChild(button);
}
// A 페이지
const goButton = document.getElementById('go-button');
goButton.addEventListener('click', fetchAndOpenData);