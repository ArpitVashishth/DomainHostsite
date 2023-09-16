let title = document.querySelector('.tt-h2');
let name = "Welcome! You come at a right path"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;
    // index++;

    setTimeout(() => typeWriter(), 100)
}

typeWriter();