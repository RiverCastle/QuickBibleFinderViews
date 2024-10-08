function bibleButtonGenerate(bibleBooks, ButtonsContainer) {
    ButtonsContainer.innerHTML = '';

    for (const book in bibleBooks) {
        const button = document.createElement('button');
        button.innerText = book;

        button.addEventListener('click', () => {
            bibleBook = bibleBooks[book];
            korTitle = book;
            engAbbr = bibleBooks[book].abbreviation;

            url = BACKEND_BASE_URL;
            updateUrl();
            maxChapter = bibleBooks[book].chapters;
            generateChapterButtons(maxChapter);

            // auto scroll
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth' // 부드러운 스크롤 효과
            });
        });
        ButtonsContainer.appendChild(button);
    }
}