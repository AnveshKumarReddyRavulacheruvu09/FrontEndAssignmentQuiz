const divs = document.querySelectorAll('.container>div')
const inputs = document.querySelectorAll('input')
let userscore = 0;
const nextBtn = document.querySelector('#next')
const result = document.querySelector('.result')
let i =0;
divs.forEach(div=>{
    div.setAttribute('style','display:none')
})

function displayquestion(i){
    result.textContent = ''
    nextBtn.setAttribute('style','display:none')
    const div = divs[i]
    divs[i].setAttribute('style','display:block')
    let id = `id${i}`
    div.setAttribute('id',id);
    result.setAttribute('style','display:none')
}
function hidequestion(i,correct){
    const div = divs[i]
    divs[i].setAttribute('style','display:none')
    result.setAttribute('style','display:block')
    if(i<4){
        if(correct){
            result.textContent ='correct answer. Click on next'
            result.setAttribute('style','color:#4BB543')
        }
        else{
            result.textContent = 'wrong answer.click on next'
            result.setAttribute('style','color:#DC3545')
        }
        nextBtn.setAttribute('style','display:block')
    }
    else{
        result.textContent = `Your Score is ${userscore}`
        const restart = document.querySelector('#restart')
        restart.setAttribute('style','display:block')
        result.setAttribute('style','color:#191970')
        restart.addEventListener('click',()=>{
            window.location.reload()
        })
    }
    // divs[i].setAttribute('style','display:none')
}
function getuserInput(i){
    const inputs = document.querySelectorAll(`#id${i}>div>label>input`)
    let userchoice = ''
    inputs.forEach(input=>{
        if(input.checked){
            userchoice = input
        }
    })
    return userchoice
}
function play(i){
    if(i<5){
        displayquestion(i)
        let submit = document.querySelector(`#id${i}>#submit`)
        submit.addEventListener('click',()=>{
            let userchoice = getuserInput(i)
            if(userchoice==''){
                alert('select a option')
            }
            else{
                if(userchoice.dataset.ans=='true'){
                    userscore+=1;
                    hidequestion(i,true)
                }
                else{
                    hidequestion(i,false)
                }
            }
        })
    }
}
play(i)

nextBtn.addEventListener('click',()=>{
    i+=1
    play(i)  
})

// page loads -> question and answers are visible -> options are available to select -> wait for submit buttono to hit
// ->when clicked hide present question and, show result and next btn -> when nxtbtn is clicked 