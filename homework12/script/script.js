// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, 
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response => response.json())
.then(posts =>{

    for (const post of posts) {
        let post1 = document.createElement('div')
        let userId =document.createElement('div')
        let id =document.createElement('div')
        let title =document.createElement('div')
        let body =document.createElement('div') 

        title.innerText = `Title :${post.title}`
        userId.innerText = `userd id :${post.userId}`
        id.innerText = `Post id : ${post.id}`
        body.innerText = `Body of post : ${post.body}`

        let main = document.getElementById('main')

        main.style = `display:flex;flex-wrap:wrap;`
        post1.style = `background-color : #e33ddb;width:18%;heigth 12px;margin:5px`
        main.appendChild(post1)
        post1.appendChild(userId)
        post1.appendChild(id)
        post1.appendChild(title)
        post1.appendChild(body)
    }
})
