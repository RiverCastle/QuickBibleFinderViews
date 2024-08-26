// 장 버튼 생성
function generateChapterButtons(maxChapters) {
    chapterButtonsContainer.innerHTML = '';
    verseButtonsContainer.innerHTML = '';
    selectedChapter = 0;
    selectedVerse = 0;
    for (let i = 1; i <= maxChapters; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            selectedChapter = i;
            updateUrl();
            generateVerseButtons(bibleBooks[selectedObject].verses[selectedChapter - 1]); // 인덱스 0으로 시작해서 -1
        });
        chapterButtonsContainer.appendChild(button);
    }
}