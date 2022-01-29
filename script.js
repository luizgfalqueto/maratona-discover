const Modal = {
    open(){
        //Open modal
        //Add class active to modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        //Close modal
        //Remove class active from modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

document.querySelector('.new').addEventListener('click', Modal.open)
document.querySelector('.cancel').addEventListener('click', Modal.close)