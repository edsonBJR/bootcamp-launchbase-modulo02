// const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const contentId = card.getAttribute("id")
            // modalOverlay.classList.add('active')
        window.location.href = `/card?id=${contentId}`
            //  modalOverlay.querySelector("iframe").src = `partials/${contentId}.html`
    })
}

// document.querySelector(".close-modal").addEventListener("click", function() {
//     modalOverlay.classList.remove("active")
//     modalOverlay.querySelector("iframe").src = ""
// })