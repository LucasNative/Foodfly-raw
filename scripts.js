const  modalOverlay  = document.querySelector('.modal-overlay')
const card = document.querySelectorAll('.receita')

for (let receita of card){
    receita.addEventListener("click",function(){
        modalOverlay.classList.add("active")
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})