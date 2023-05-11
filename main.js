const button = document.querySelector("#submit-btn")
const ratings = document.querySelectorAll(".rating")
const selected = document.querySelector('#selected');
const thankYouCard = document.querySelector('.thank-you')
const ratingCard = document.querySelector('.main')


button.addEventListener('click', () => {
    thankYouCard.classList.remove("hidden")
    ratingCard.style.display = 'none'
})


ratings.forEach(rating => {
    rating.addEventListener('click', () => selected.innerHTML = rating.innerHTML)
})
