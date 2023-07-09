const body = document.querySelector('body');
const sliderInput = document.querySelector('#slider-input');
const allBoxes = document.querySelectorAll('.box');
const allPills = document.querySelectorAll('.pill');
const allHiddenPills = document.querySelectorAll('.hidden-pill');
const allArrow = document.querySelectorAll('.arrow');
const expandPill = document.querySelector('#expand');
const xLetterPath = document.querySelector('#x-letter');
const xLetterSVG = document.querySelector('#x-letter-svg');
const xBox = document.querySelector('.x-box');
const soicalFan = document.querySelector('.social-fan');
const reversePill = document.querySelector('#reverse');
const boxContainer = document.querySelector('.box-container');
const iconPath = document.querySelector('#icon');
const iconRotating = document.querySelector('.rotating-icon');
const hiddenBox = document.querySelector('.hidden-box');
const textBox = document.querySelector('.hidden-box .text-box');

let paletteIndex = 0
const xLetterIndex = 11
const socialFanIndex = 1
const rotateIndex = 3

//Start State
//change the color of the elements
xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill
//give the element of allpill a color 
allPills.forEach((pill,i) => 
pill.style.backgroundColor = colorPalettes[paletteIndex][i].fill )

//add color to the social
allHiddenPills.forEach(hiddenPill => 
    hiddenPill.style.backgroundColor = colorPalettes[paletteIndex][socialFanIndex].fill)


const expand = () => {
    //this function is for expanding the page open and close
    if(hiddenBox.clientWidth !==0){
        //here when it is close will add the class hidden
        textBox.classList.add('hidden')
        setTimeout(() => hiddenBox.style.width = '0',200)
        
    }else{
        hiddenBox.style.width = '1700px'
        //to remove the class of hidden to display the text
        setTimeout(() => textBox.classList.remove('hidden'),500)
    }
    
}
expandPill.addEventListener('click',expand)

const reverse = () => {
    if (boxContainer.style.flexWrap  === 'wrap') {
        boxContainer.style.flexWrap = 'wrap-reverse'
    }else{
        boxContainer.style.flexWrap = 'wrap'
    }
}


reversePill.addEventListener('click',reverse)


const addTheme = (
    bodyBackgroundColor, 
    strokWidth , 
    svgFill , 
    opacity ,
    lineColor , 
    borderRadius,
    boxBackgroundColor,
    pillBackgroundColor ) =>{
        body.style.backgroundColor = bodyBackgroundColor;
        xLetterPath.style.strokWidth = strokWidth ;
        xLetterPath.style.stroke = lineColor || colorPalettes[paletteIndex][xLetterIndex].altStroke;
        xLetterSVG.style.fill = svgFill || colorPalettes[paletteIndex][xLetterIndex].fill;
        xLetterPath.style.opacity = opacity;
        xBox.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][xLetterIndex].fill;
        iconPath.style.stroke = lineColor || colorPalettes[paletteIndex][rotateIndex].altStroke;
        iconPath.style.strokWidth = strokWidth;

        allBoxes.forEach((box,i) => 
        box.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][i].fill
        )

        allPills.forEach((pill,i)  => {
            pill.style.opacity = opacity
            pill.style.backgroundColor = pillBackgroundColor || colorPalettes[paletteIndex][i].fill
            pill.style.borderWidth = strokWidth
            pill.style.borderColor = lineColor || colorPalettes[paletteIndex][i].altStroke
            pill.style.borderBlockStyle = 'solid'
            pill.style.borderRadius = borderRadius
        })

        allHiddenPills.forEach(hiddenPill => {
            hiddenPill.style.opacity = opacity
            hiddenPill.style.borderWidth = strokWidth
            hiddenPill.style.backgroundColor = pillBackgroundColor || colorPalettes[paletteIndex][socialFanIndex].fill
            hiddenPill.style.borderColor = lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke
            hiddenPill.style.borderRadius = borderRadius
        })

        allArrow.forEach(arrow => {
            arrow.style.borderBlockStyle = 'solid'
            arrow.style.borderColor = lineColor
            arrow.style.borderWidth = '0 ' + strokWidth + ' ' + strokWidth + ' 0'
            arrow.style.opacity = opacity
        })
    }






const moveSlider = () => {
  const sliderInput = document.querySelector('#slider-input')
  const sliderValue = sliderInput.value

  //when sliderValue is 0 add theme
  if (sliderValue == 0) {
    // bodyBackgroundColor, 
    //     strokWidth , 
    //     svgFill , 
    //     opacity ,
    //     lineColor , 
    //     borderRadius,
    //     boxBackgroundColor,
    //     pillBackgroundColor
    addTheme('white','12px',null,1,'rgb(38,38,38)','100px','white',null)
  }

  if (sliderValue > 1 && sliderValue <= 3) {
    addTheme('white','2px','white',0.5,null,'75px',null,'white')
    
  }

  if (sliderValue >= 4 && sliderValue <=6) {
    addTheme('white','2px','white',0.5,null,'90px',null,'white')
  }

  if (sliderValue >= 7 && sliderValue <=9) {
    addTheme('white','2px','white',0.5,'rgb(38,38,38)','50px',null,'white')
  }
  if (sliderValue == 10) {
    addTheme('rgb(38,38,38)','12px','white',1,'black','0px','transparent','white')
  }
}

sliderInput.addEventListener('input',moveSlider)

const changePalette = () => {
    xLetterPath.classList.add('pulse')
    //to change paletteColor
    if(paletteIndex >= 2){
        paletteIndex = 0
    } else{
        paletteIndex++
    }

    moveSlider()
    setTimeout(() => xLetterPath.classList.remove('pulse'))
}

xBox.addEventListener('click',changePalette)