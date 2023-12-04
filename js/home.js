// const mouseCont = document.querySelector(".mouse__container");
// const mouse = document.querySelector(".mouse");
// const container = document.querySelector("body");

const scrollHandler = (event) => {
    console.log(event);
};

var love = "Hairtai juu";
console.log(love);

function toggleFilterOptions(filterId) {
    const filterOptions = document.getElementById(filterId);
    filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('category-header').addEventListener('click', function() {
    toggleFilterOptions('category-filter');
});

document.getElementById('price-header').addEventListener('click', function() {
    toggleFilterOptions('price-filter');
});

// Get all filter checkboxes and content items
const checkboxes = document.querySelectorAll('.filter-checkbox');
const products = document.querySelectorAll('.items');
const searchInput = document.getElementById('search');

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateFilter);
});

searchInput.addEventListener('input', updateFilter);

function updateFilter() {
    // Get the selected categories, prices, and search keywords
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && checkbox.getAttribute('data-category'))
        .map(checkbox => checkbox.getAttribute('data-category'));

    const selectedPrices = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && checkbox.getAttribute('data-price'))
        .map(checkbox => checkbox.getAttribute('data-price'));

    const searchKeywords = searchInput.value.toLowerCase();

    // Show/hide products based on selected categories, prices, and search keywords
    products.forEach(items => {
        const productCategories = items.getAttribute('data-category').split(' ');
        const productPrice = items.getAttribute('data-price');
        const productName = items.textContent.toLowerCase();

        const categoryMatch = selectedCategories.every(category => productCategories.includes(category));
        const priceMatch = !selectedPrices.length || selectedPrices.includes(productPrice);
        const searchMatch = productName.includes(searchKeywords);

        if (categoryMatch && priceMatch && searchMatch) {
            items.style.display = 'block';
        } else {
            items.style.display = 'none';
        }
    });
}