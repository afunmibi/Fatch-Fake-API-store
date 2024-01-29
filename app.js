fetch("https://fakestoreapi.com/products")
.then((res)=>{
    // console.log(res)
    if(!res.ok){
        console.log('json not fetched');
    }else{
    return res.json();
    }
})
.then((data)=>{
    // console.log(data);
    let data1 = " "; 
    data.map(value=>{
        data1 += `<div class="card">
        <h2 class="id">${value.id}</h2>
        <h2 class="title">${value.title}</h2>
        <img
          src="${value.image}"
          alt="img" class="image"
        />
        <h3 class="Category">${value.category}</h3>
        <p class="description">${value.description}</p>
        <h3 class="price">${value.price}</h3>
        <h3><svg
        xmlns="http://www.w3.org/2000/svg" class='cart'
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path
          d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
        />
      </svg>
      </h3>
      </div>`
    })
    document.querySelector('.cards').innerHTML= data1;
}).catch (error =>{
console.log(error)
});