function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'block'
}
function hideslidebar() {
    console.log("hello")
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}
// send message 

// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
//     alert(`Your Message has been sent`);

// });


function emptyMsg(event) {
    event.preventDefault()
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.getElementById('input3').value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return false;
    }
    else {

        alert(`Your Message has been sent`);
        document.querySelector('.form').reset();
        // name.value=""
        // email.value=""
        // message.value=""
    }

}


// Dark mode 
// let modebtn = document.querySelector('#moonli')
// let home= document.querySelector('#home')

// let currentMode = "light"
// modebtn.addEventListener("click", () => {
//     console.log("btn is clicked");
//     console.log(currentMode);

//     if (currentMode == "dark") {
//         currentMode = "light"
//         document.querySelector('body').style.backgroundColor = "#fff"
//         document.querySelector('body').style.color = "#212121"
//         home.style.backgroundColor="#fff"
//         home.style.color="#212121"


//     } else {
//         currentMode = "dark"
//         document.querySelector('body').style.backgroundColor = "#212121"
//         document.querySelector('body').style.color = "#fff"
//     }
// }

// )



