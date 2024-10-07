const categories = document.querySelector("#categories");
const items = [...categories.children];

console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
});

