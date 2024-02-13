function calculateAreaOfrectangle() {
    const height = getValueById('Rectangle-height');
    const weidth = getValueById('Rectangle-weidth');

    const area = height * weidth;

    setAreaInsideSpan(document.getElementById('Rectangle-area-container'), area);
}