let slider = document.getElementById('slider');
let nextBtn = document.getElementById('nextbtn');
let prevBtn = document.getElementById('prevbtn');
let num = 0;

slider.style.width = '450px';
slider.style.height = '200px';

let ImageArr = ['https://soliloquywp.com/wp-content/uploads/2019/04/nb_sss_8.jpg','https://soliloquywp.com/wp-content/uploads/2019/04/nb_sss_4.jpg','https://soliloquywp.com/wp-content/uploads/2019/04/stunning-spring-sliders.jpg'];
let imageslength = ImageArr.length;



//Action Buttons
function next(){
    num ++;
    if (num >= imageslength){
        num = 0
    }
    slider.src = ImageArr[num]
}

function prev(){
    num--;
    if(num < 0){
        num = imageslength - 1;
    }
    slider.src = ImageArr[num];
}