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

let button = document.querySelector('#button');
button.addEventListener('click', () => {
    alert(`Your Message has been sent`);
    
});


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



