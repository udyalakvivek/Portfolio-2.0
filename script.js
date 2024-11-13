function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'block'
}
function hideslidebar() {
    console.log("hello")
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}



function emptyMsg(event) {
    // event.preventDefault()
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.getElementById('input3').value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return false;
    }
    else {

        alert(`Your Message has been sent`);
        // document.querySelector('.form').reset();
        setTimeout(() => {
            document.querySelector('.form').reset();
            console.log("Form is reset ")
        }, 1000);
    }

}






