let element = document.createElement("button");
document.querySelector('body').appendChild(element);
element = document.querySelector('button')
element.style.width = "96px";
element.style.height = "48px";
element.innerHTML = 0;
element.id = 'btn';
element.style.fontSize = '24px';
element.addEventListener('click', () => {
    let  a = parseInt(element.innerHTML);
    a++;
    element.innerHTML = a;
})