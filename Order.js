let booklist =document.querySelector('.row')
let book=[{
    name:"Children",
    image:"/Book/Children0.jfif",
    price:"5"
},
{
    name:"Children",
    image:"/Book/Children1.jfif",
    price:"5"
},
{
    name:"Children",
    image:"/Book/Children2.jfif",
    price:"5"
}
]
book.forEach(element=>{
    let newelement = ``;
    newelement = `
                <div class="col-4 py-3 py-md-0">
                    <div class="card">
                        <div class="pic"><img class="card-img-top" src="${element.image}" alt=""></div>
                        <div class="box">
                            <h4 class="card-title">${element.name}</h4>
                            <div class="card-body">
                            <p class="card-text"><b>${element.price}</b></p>
                            <img src="/logo/cart1.png" width="20px" alt="">
                            </div>
                        </div>
                    </div>
                </div
    
    `
    booklist.innerHTML += newelement
})