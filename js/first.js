const itemLi = document.querySelectorAll(".item")

console.log(`Number of categories: ${itemLi.length}`)

const detailOfCat =  itemLi.forEach((categories) => { 
    console.log(`Category: ${categories.firstElementChild.textContent} `)
    console.log((`Elemement: ${categories.querySelectorAll("li").length}`))
    
})




