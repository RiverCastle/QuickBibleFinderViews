// 이전 구절, 다음 구절 버튼
const leftArrowButton = document.querySelector('.left-arrow');
const rightArrowButton = document.querySelector('.right-arrow');

leftArrowButton.addEventListener('click', () => {
    // Update the verse display with the previous verse
    const currentVerse = parseInt(verse);
    if (currentVerse > 1) {
        verse = verse - 1;
        updateVerseDisplay(`${engAbbr}/${chapter}:${verse}`);
    }
});

rightArrowButton.addEventListener('click', () => {
    // Update the verse display with the next verse
    const currentVerse = parseInt(verse);
    if (currentVerse < maxVerse) {
        verse = verse + 1;
        updateVerseDisplay(`${engAbbr}/${chapter}:${verse}`);
    }
});