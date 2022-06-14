
const queryForm = document.querySelector('.queryForm')
queryForm.noValidate = true;

const topHeight = document.querySelector('.formTopPara').clientHeight
const odinContainer = document.querySelector('.odinContainer')

const leftContainerWidth = document.querySelector('.leftContainer').clientWidth



odinContainer.style.top = (`${topHeight-odinContainer.clientHeight-4}px`)
odinContainer.style.width = (`${leftContainerWidth}px`)

let flexOdin = () => {
    let flexHeight = document.querySelector('.formTopPara')
    
    odinContainer.style.top = (`${flexHeight.clientHeight-odinContainer.clientHeight}px`)
    let flexWidth = document.querySelector('.leftContainer')
    odinContainer.style.width = (`${flexWidth.clientWidth}px`)
    
}

let validateForm = (event) => {
    const form = event.target
    const pw = document.querySelector('#userPw')
    const pwCheck = document.querySelector('#confirmPw')
    if (form.checkValidity() && pw.value === pwCheck.value) {
        console.log('validated')
        form.submit()
    } else {
        event.preventDefault()
        console.log(form.elements)
        Array.from(form.elements).forEach(element => {
            console.log('elements:', element.id)
            if (element.checkValidity()) {
                element.parentElement.classList.remove('invalid')
                if (element.id === 'userPw') {
                    console.log('user pw selected')
                    if (element.value != pwCheck.value) {
                        element.parentElement.classList.add('invalid')
                        const pwP = document.querySelector('#passwordError')
                        pwP.textContent = '^Passwords do not match'
                    }
                }
            } else {
                element.parentElement.classList.add('invalid')
            }
    })
}
}


queryForm.addEventListener('submit', validateForm)
window.addEventListener('resize', flexOdin)