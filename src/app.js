const ratingComponent = document.querySelector('.rating');
const thankyouComponent = document.querySelector('.thankyou');


const submitBtn = document.getElementById('submitBtn');

const rateAgainBtn = document.querySelector('#rateAgainBtn');

const ratingSel = document.getElementById('rating-sel');

const ratingBtns = document.querySelectorAll('.btn-rating');

let ratingValue = 0;

submitBtn.addEventListener("click", () => {

    if(ratingValue === 0) 
    {
        alert('Please select a rating before Submitting!');
    }
    else{
    thankyouComponent.classList.remove("hidden");
    ratingComponent.classList.add("hidden");
    ratingSel.textContent = ratingValue;
    }
})


rateAgainBtn.addEventListener("click", () => {
    thankyouComponent.classList.add("hidden");
    ratingComponent.classList.remove("hidden");
    ratingValue = 0;
})


ratingBtns.forEach((rateBtn) => {
    rateBtn.addEventListener("click", () => {
        ratingValue = rateBtn.textContent;
    })
})