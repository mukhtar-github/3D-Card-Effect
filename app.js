// Movement Animstion to happen
const card = document.querySelector('.card');
const container = document.querySelector('.containaer');

//Moving Animstion Event
container.addEventListener("mousemove", (e) => {
    console.log(e.pageX, e.pageY);
});