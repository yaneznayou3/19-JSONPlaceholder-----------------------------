// https://jsonplaceholder.typicode.com/

// пример запроса с лимитом https://jsonplaceholder.typicode.com/posts?_start=0&_limit=50

window.onload = async () => {
    let btnPost = document.querySelector("#btnPost")
    let btnComments = document.querySelector("#btnComments")
    let btnTodos = document.querySelector("#btnTodos")
    let textRequest = document.querySelector("#textRequest")
    let mainContainer = document.querySelector("#mainContainer")

    const getData = async (link) => {
        let formatJson = null

        await fetch(link)
            .then((response)) => response.json()
            .then((res) => (formatJson = res))
            .catch((error) => console.log("Непредыиденная ошибка- ", error))
        return formatJson
    };

    const clearMainContainer = () => {
        mainContainer.innerHTML = "";
    };

    const createPost = (id, title, body) => {

    };

    const createComments = (id, name, email, body) => {

    };

    const createTodos = (id, title) => {

    };

    btnPost.addEventListener('click', async () =>{
        clearMainContainer();
        textRequest.innerText = "Post Response"
        mainContainer.style.gridTemplateColumns = "550px 550px";

        const getData = await getData(
            "https://jsonplaceholder.typicode.com/posts"
        )

        data.map((post) => {
            createPost(post.id, post.title, post.body)
        })
    })

    btnComments.addEventListener('click', async ()=>{
        
    })
    btnTodos.addEventListener('click', async ()=>{
        
    })
}