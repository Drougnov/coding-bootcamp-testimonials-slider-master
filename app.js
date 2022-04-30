const prevBtn = document.querySelectorAll('.prev-btn');
const nextBtn = document.querySelectorAll('.next-btn');
const slides = document.querySelectorAll('.slide');

let currentItem = 0;

function display(currentItem){
    slides.forEach(function(slide){
        slide.style.display = 'none';
    })
    slides[currentItem].style.display = "flex";
}

display(currentItem);

prevBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        currentItem--;
        if(currentItem<0){
            currentItem = 1;
        }
        display(currentItem);
    })
})

nextBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        currentItem++;
        if(currentItem>1){
            currentItem = 0;
        }
        display(currentItem);
    })
})
