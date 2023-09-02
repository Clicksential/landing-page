// First Page
document.getElementById('syncButton').addEventListener('click', function () {
    const shopeeUsername = document.getElementById('shopeeUsername').value;
    // You can perform any necessary actions here, like validating the username or initiating the sync.
    // Then, redirect to the second page (products.html).
    window.location.href = 'products.html';
});

// Second Page
const productList = document.getElementById('productList');
const selectedList = document.getElementById('selectedList');

// Generate some sample product names and stock amounts
const products = [
    { name: 'Product 1', stock: 10 },
    { name: 'Product 2', stock: 15 },
    { name: 'Product 3', stock: 8 },
    // Add more products here
];

// Function to create a product item
function createProductItem(product) {
    const item = document.createElement('div');
    item.classList.add('flex', 'items-center', 'justify-between', 'border-b', 'py-2');

    const productName = document.createElement('span');
    productName.textContent = `${product.name} (Stock: ${product.stock})`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('ml-2');
    checkbox.addEventListener('change', function () {
        handleCheckboxChange(product, checkbox.checked);
    });

    item.appendChild(productName);
    item.appendChild(checkbox);
    return item;
}

// Function to handle checkbox changes
function handleCheckboxChange(product, isChecked) {
    const selectedItems = selectedList.querySelectorAll('li');
    if (isChecked && selectedItems.length < 5) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} (Stock: ${product.stock})`;
        selectedList.appendChild(listItem);
    } else {
        // Uncheck the checkbox if the user exceeds the limit
        product.checkbox.checked = false;
    }
}

// Populate the product list
products.forEach((product) => {
    const productItem = createProductItem(product);
    productList.appendChild(productItem);
    product.checkbox = productItem.querySelector('input[type="checkbox"]');
});
