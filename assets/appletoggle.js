console.log("🍏");

let slider = document.querySelector('.custom-slider')
let badge = document.querySelector('.range-badge');
let sliderAttr = window.getComputedStyle(slider);
let badgeAttr = window.getComputedStyle(badge);
let label = document.querySelector('label')


let sliderWidth = sliderAttr.getPropertyValue("width")
slider.setAttribute('max', sliderWidth)

slider.addEventListener('input',update)

function update( e ){
  // console.log( e.target.value )
  let value = e.target.value;
  badge.style.left = value+'%'

  let decimal = value/100;
  let radius = transformRadius(value)
  badge.style.borderRadius = radius+'px 0px 0px '+ radius+'px' 

  badge.style.width = value +'%'
  let badgeSize = badge.getBoundingClientRect();
  let badgeW = badgeSize.width
  let shadow = transformShadow(value);
  badge.style.boxShadow  = '-2px -0.3px 3px rgba(0,0,0,'+shadow+'),1px 2px 3px rgba(0,0,0,0.1)';

  let badgeLeft = badgeAttr.getPropertyValue('left')
  // console.log( badgeLeft )
  badgeLeft=badgeLeft.replace("px", "")
  
  // let badgeH = transformHeight(value)
  // badge.style.height = badgeH+'%';
  // console.log( badgeH )
  if(badgeW <= 20){
    // badge.style.height = badgeH+'%';
    badge.style.borderRadius = radius+'px '+ '40px 40px '+ radius+'px' 
    badge.style.boxShadow  = '-2px -0.3px 3px rgba(0,0,0,'+shadow+'),1px 2px 3px rgba(0,0,0,0.1)';
  }else{
    // badge.style.height = '100%';
    badge.style.borderRadius = '0px 40px 40px 0px' 
    badge.style.boxShadow  = '-2px -0.3px 3px rgba(0,0,0,'+shadow+'),1px 2px 3px rgba(0,0,0,0.1)';
  }

  if(value >= 90){
    badge.style.left  = '180px';
    badge.style.width = '90%';
  }

  if(badgeLeft > 60 && badgeLeft > 0){
    label.style.opacity = '0'
  }else{
    label.style.opacity = '1'
  }
}

// Custom Thumb

function transformRadius(value){

  let radius = 0;
  let val1 = 20;
  let val2 = 80;
  let rad1 = value-10;
  let rad2 = (rad1*val2)/val1;
  if(rad2 <= 10 && rad2 >= 0){
    return rad2
  }else if(rad2 < 0){
    rad2=Math.abs(rad2)
    // console.log(rad2)
    return rad2
  }else{
    rad2=40
    return rad2
  }

}

function transformHeight(value){
  let val1 = 100;
  let val2 = 1000;
  let rad1 = value;
  let rad2 = (rad1*val2)/val1;
  // console.log(rad2)
  if(value <= 10 && rad2 >= 0){
    return rad2
  }else if(rad2 < 0){
    rad2=Math.abs(rad2)
    // console.log(rad2)
    return rad2
  }else{
    rad2=100
    return rad2
  }

}

function transformShadow(value){

  let radius = 0;
  let val1 = 30;
  let val2 = 0.2;
  let rad1 = value/2.5;
  let rad2 = (rad1*val2)/val1;
  // console.log(rad2)
  if(rad2 <= 0.2 && rad2 >= 0){
    return rad2
  }else if(rad2 < 0){
    rad2=Math.abs(rad2)
    
    return rad2
  }else{
    rad2=0.2
    return rad2
  }

}

let localMousePos = { x: undefined, y: undefined };
let globalMousePos = { x: undefined, y: undefined };

badge.addEventListener('mousedown', (e) => {
  var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top;  //y position within the element.
      console.log("Left? : " + x + " ; Top? : " + y + ".");

  // console.log(globalMousePos);
  // localMousePosText.textContent = `(${localMousePos.x}, ${localMousePos.y})`;
});
