// 한글 사전 순 인덱스로 정렬
document.getElementById('korean-sort').addEventListener('click', function() {
    // 구약 성경 버튼 생성 기본 인덱스
    bibleButtonGenerate(sortedOldTestaments, oldTestamentsButtonsContainer)
    // 신약 성경 버튼 생성 기본 인덱스
    bibleButtonGenerate(sortedNewTestaments, newTestamentsButtonsContainer)
});