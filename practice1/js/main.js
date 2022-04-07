// JavaScript Document

//practice 1
function test() {
    alert("JavaScript Document")
    console.log('Practice 1 console log');
}

//practice 2
function floor(diameter) {
    let radius = diameter / 2
    let floorArea = Math.PI * (radius * radius)
    return floorArea
}


function walls(diameter, height) {
    let radius = diameter / 2
    let circumference = 2 * Math.PI * radius
    let wallArea = circumference * height
    return wallArea
}

function materialNeeded(){
    let d = document.getElementById('across').value
    let h = document.getElementById('height').value

    let carpetNeeded = Math.ceil(floor(d))
    let paintNeeded = Math.ceil(walls(d,h))
    console.log('carpet needed is '+carpetNeeded+' sqft')
    console.log('paint needed is '+paintNeeded+' sqft')
}
// materialNeeded()
// floor(8)
// walls(8, 10)

// practice 3 loops

//while loops
// let i = 1
// while(i<=100) {
//     i=i+2
//     console.log(i)
//     i=i-1
//     console.log(i)
// }

//for loops

// for(let i = 100; i >= 1; i=i-5) {
//     console.log(i)
// }

//Practice 4
//Using loops to access information 

// let elementId = document.getElementById('state')


// console.log(elementId) //returns the entire dropdown list
// console.log(elementId.length) //length of the dropdown list
// console.log(elementId[1].text) //this returns the actual text
// console.log(elementId[1].value) //this returns the value insede option


// for(let i=0; i < elementId.length;i++) {
//     console.log(elementId[i].text)
//     console.log(elementId[i].value)
// }

function showStuff(element) {
    let elementId = document.getElementById(element)
        for(let i=0; i < elementId.length; i++) {
         
            // console.log(elementId[i].text)
            // console.log(elementId[i].value)
            // console.log(elementId[i].selected)//this returns the selected items from the dropdown
            
                if(elementId[i].selected === true) {
                    let choice = elementId[i].text
                    
                    return choice
                }
        }
}

// showStuff('state')
// showStuff('home')


// Practice 5 using checkbox list

function lighting(element) {
    let checkedId = document.getElementsByName(element)
    console.log(checkedId.length)

    let myCheck = ''
        for(let i=0; i < checkedId.length; i++) {
            if(checkedId[i] === true) {
                myCheck = myCheck + checkedId[i].value + '<br>'
                    
            }return myCheck
        }
}//this function doesnt work completely, sample used var



//evaluate button for multiple practice tests

function evaluatePage() {
    let feedbackState = showStuff('state')
    let feedbackHome = showStuff('home')
    let feedbackLight = lighting('bulb')
    document.getElementById('output').innerHTML = feedbackState +'<br>'+ feedbackHome + feedbackLight
}