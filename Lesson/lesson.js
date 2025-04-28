const logoutNav = document.getElementsByClassName('logout')[0]
const mainNav = document.getElementsByClassName('main')[0]
const signUpNav = document.getElementsByClassName('signup')[0]
const loginNav = document.getElementsByClassName('login')[0]
const userNav = document.getElementsByClassName('userName')[0]
const learnNav = document.getElementsByClassName('learn')[0]
const shareNav = document.getElementsByClassName('share')[0]
const stuffNav = document.getElementsByClassName('mystuff')[0]
const accountNav = document.getElementsByClassName('myaccount')[0]

mainNav.addEventListener('click', function() {
    window.location.href = '../Home/home.html'
})

learnNav.addEventListener('click', function() {
    window.location.href = '../Learn/learn.html'
})

shareNav.addEventListener('click', function() {
    if (userName == null) {
        window.location.href = '../Login/login.html'
    }
})

stuffNav.addEventListener('click', function() {
    window.location.href = '../Mystuff/mystuff.html'
})

accountNav.addEventListener('click', function() {
    window.location.href = '../Account/account.html'
})

logoutNav.addEventListener('click', function() {
    localStorage.removeItem('Username')
    localStorage.removeItem('UserId')
    localStorage.removeItem('email')

    window.location.href = "../Lesson/lesson.html"
})

var userName = localStorage.getItem('Username')
    
if (userName != null) {
    loginNav.style.display = "none"
    signUpNav.style.display = "none"
    userNav.innerHTML = userName

    document.getElementsByClassName('div-block-3')[0].style.display = "none"
} else {
    userNav.style.display = "none"
    document.getElementsByClassName('user')[0].style.display = "none"
}

const lessonTitle = document.getElementsByClassName('text-block-14')[0]
lessonTitle.innerHTML = localStorage.getItem('title')

// Document Editor
// Change system

const content = document.getElementsByClassName('content')[0]
content.addEventListener('click', () => {
    layers[layers.length - 1].focus()
})

var layers = new Map()
var currentI = -1

function newTextArea() {
    let area = document.createElement('p')
    area.contentEditable = true
    area.setAttribute('class', 'lesson-doc')

    area.focus()

    layers.set(area, currentI + 1)
    currentI += 1

    if (currentI == layers.size - 1) {
        content.appendChild(area)
    } else {
        content.insertBefore(area, [...content.children][currentI + 1])
    }

    for (let i = 0; i < layers.size; i++) {
        let childs = [...content.children]
        if (layers[childs[i]] >= currentI) {
            if (childs[i] == area) {
                layers[childs[i]] += 1
            }
        }
    }
}

newTextArea()

function newImage(image) {
    //removeBlank()

    let imgContainer = document.createElement('div')
    imgContainer.setAttribute('class', 'image-layer')

    let imageHold = document.createElement('img')
    imageHold.setAttribute('src', URL.createObjectURL(image))

    imgContainer.appendChild(imageHold)

    layers.set(imgContainer, currentI + 1)
    currentI += 1

    if (currentI == layers.size - 1) {
        content.appendChild(area)
    } else {
        content.insertBefore(area, [...content.children][currentI + 1])
    }

    for (let i = 0; i < layers.size; i++) {
        let childs = [...content.children]
        if (layers[childs[i]] >= currentI) {
            if (childs[i] == area) {
                layers[childs[i]] += 1
            }
        }
    }

    newTextArea()
}

const uploadImg = document.getElementsByClassName('upload-img')[0]
const fileGet = document.getElementsByClassName('file')[0]

uploadImg.addEventListener('change', () => {
    let images = fileGet.files

    for (let i = 0; i < images.length; i++) {
        newImage(images[i])
    }
})

function removeBlank() {
    const currentText = layers[layers.length - 1]
    
    if (currentText.className == 'lesson-doc') {
        if (currentText.textContent == "") {
            layers.splice(layers.length, 1)
            content.removeChild(currentText)
        }
    }
}