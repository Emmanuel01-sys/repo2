let imageIndex = 0;
const images = document.getElementsByClassName("image");
document.querySelector(".image-number").innerText = `1/${images.length}`;
images[imageIndex].style.display = 'block';

document.querySelector(".prev").addEventListener("click",()=>{
    if(imageIndex == 0) imageIndex = images.length-1;
    else imageIndex--;
    for(let x of images) x.style.display = "none";
    images[imageIndex].style.display = 'block';

    document.querySelector(".image-number").innerText = `${imageIndex+1}/${images.length}`;
});
document.querySelector(".next").addEventListener("click",()=>{
    if(imageIndex == images.length-1) imageIndex = 0;
    else imageIndex++;
    for(let x of images) x.style.display = "none";
    images[imageIndex].style.display = 'block';

    document.querySelector(".image-number").innerText = `${imageIndex+1}/${images.length}`;
});