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
/*
const lessonDocContainer = document.getElementsByClassName('div-block-10')[0]
var lessonDocs = []
const lessonDoc = document.getElementsByClassName('lesson-doc')[0]
const uploadImg = document.getElementsByClassName('upload-img')[0]
const fileGet = document.getElementsByClassName('file')[0]

lessonDocContainer.addEventListener('click', function() {
    lessonDoc.focus()
})

uploadImg.addEventListener('change', () => {
    let img = fileGet.files
    let images = []

    for (let i = 0; i < img.length; i++) {
        images.push(img[i])
    }

    insertImages(images)
})

lessonDoc.addEventListener('drop', (e) => {
    e.preventDefault()

    let img = e.dataTransfer.files
    let images = []

    for (let i = 0; i < img.length; i++) {
        images.push(img[i])
    }
})

const content = document.getElementsByClassName('content')[0]
var imageLayers = []

function insertImages(images) {
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement('img')
        img.setAttribute('src', URL.createObjectURL(images[i]))

        let imgDiv = document.createElement('div')
        imgDiv.setAttribute('class', 'image-layer')

        imageLayers.push(imgDiv)
        content.appendChild(imgDiv)
        imgDiv.appendChild(img)
    }
}

// Change system
*/

const content = document.getElementsByClassName('content')[0]
var layers = []

function newTextArea() {
    let area = document.createElement('textarea')
    area.setAttribute('class', 'lesson-doc')

    area.addEventListener('click', () => {
        area.focus()
    })

    area.addEventListener('change', () => {
        area.style.height = 'auto'
    })

    layers.push(area)
    content.appendChild(area)
}

newTextArea()

function newImage(image) {
    //try {
        const lastLayer = layers[layers.length - 1]
        
        if (lastLayer.className == 'lesson-doc') {
            if (lastLayer.value == "") {
                layers.splice(layers.length - 1, 1)
                //content.removeChild([...content.children][layers.length - 1])
                content.lastElementChild.remove()
            }
        }
    //} catch {

    //}

    ///

    let imgContainer = document.createElement('div')
    imgContainer.setAttribute('class', 'image-layer')

    let imageHold = document.createElement('img')
    imageHold.setAttribute('src', URL.createObjectURL(image))

    imgContainer.appendChild(imageHold)

    layers.push(imgContainer)
    content.appendChild(imgContainer)

    newTextArea()
    layers[layers.length - 1].focus()
}

const uploadImg = document.getElementsByClassName('upload-img')[0]
const fileGet = document.getElementsByClassName('file')[0]

uploadImg.addEventListener('change', () => {
    let images = fileGet.files

    for (let i = 0; i < images.length; i++) {
        newImage(images[i])
    }
})