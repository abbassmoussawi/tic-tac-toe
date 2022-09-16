let counter = 0
const item = document.querySelectorAll('.card')

item.forEach((card) => {
    card.addEventListener("click", (() => {
        if (count % 2 == 0) {
            card.classList.add("image-1")
            counter += 1
        } else {
            card.classList.add("image-1")
            counter += 1
        }
    }))

})