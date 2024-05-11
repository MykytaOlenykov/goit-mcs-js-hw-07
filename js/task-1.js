const categoriesListRef = document.querySelector("ul#categories");

const categoriesItemsRef = categoriesListRef?.children ?? [];

console.log(`Number of categories: ${categoriesItemsRef.length}`);

for (const itemRef of categoriesItemsRef) {
  const categoryTitle = itemRef.querySelector("h2")?.textContent;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemRef.querySelector("ul")?.children.length}`);
}
