const btn=document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    // console.log(e)
    let x=e.clientX;
    let y=e.clientY;
    console.log(x, y);
    let xInside=e.target.offsetLeft;
    let yInside=e.target.offsetTop;
    console.log(xInside, yInside);

    /*circle span ı ve circle class ı ekleme yapıyoruz. */
    const circle=document.createElement("span");
    circle.classList.add("circle");
    circle.style.top= (y-yInside)+"px";
    circle.style.left= (x-xInside)+"px";

    console.log(circle.style.top, circle.style.left)

    btn.appendChild(circle);
    setTimeout(() => {
        circle.remove()
    }, 500);
})