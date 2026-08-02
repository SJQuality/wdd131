let reviewCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    reviewCount = getNumberOfReviews();
    reviewCount++;
    setNumberOfReviews();
});

function setNumberOfReviews() {
    localStorage.setItem('numberReviews', JSON.stringify(reviewCount));
};

function getNumberOfReviews() {
    return JSON.parse(localStorage.getItem('numberReviews'));
};