"use strict";


const categories = document.querySelectorAll(".item")

console.log(`Number of categories: ${categories.length}`)


categories.forEach(item => {
  const categoryName = item.querySelector('.category-header').textContent;
  const elementsCount = item.querySelectorAll('.list-item').length;
  
  console.log(`Category: ${categoryName}`)
  console.log(`Elements: ${elementsCount}`);
});



