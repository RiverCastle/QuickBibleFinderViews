const bibleButtonsContainer = document.getElementById('bible-buttons');
const chapterButtonsContainer = document.getElementById('chapter-buttons');
const verseButtonsContainer = document.getElementById('verse-buttons');
const urlElement = document.getElementById('url');

let selectedObject;
let selectedBook = '';
let selectedChapter = 0;
let selectedVerse = 0;
var maxChapter;
var maxVerse;

// 성경 버튼 생성
for (const book in bibleBooks) {
    const button = document.createElement('button');
    button.innerText = book;
    button.addEventListener('click', () => {
        selectedObject = book;
        selectedBook = bibleBooks[book].abbreviation;
        updateUrl();
        maxChapter = bibleBooks[book].chapters;
        generateChapterButtons(maxChapter);
    });
    bibleButtonsContainer.appendChild(button);
}
// A 페이지
const goButton = document.getElementById('go-button');
goButton.addEventListener('click', fetchAndOpenData);