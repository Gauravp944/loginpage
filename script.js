function Slide(){
    let image = document.getElementById("slide-box");
    setInterval(function(){
        if(image.classList.contains("first-slide")){
            image.setAttribute('class', 'second-slide');
        }else{
            image.setAttribute('class', 'first-slide');
        }
    }, 2000);
    console.log(image)
}
Slide();
