document.addEventListener('DOMContentLoaded', () => {
    // Fetch products from the API and populate the page
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const main = document.querySelector('main');
            products.forEach(product => {
                const card = createProductCard(product);
                main.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

function createProductCard(product) {
    // Create and style a product card using JavaScript
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.productName;

    const productName = document.createElement('h2');
    productName.textContent = product.productName;

    const oneLiner = document.createElement('p');
    oneLiner.textContent = product.oneLiner;

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;

    const quantity = document.createElement('p');
    quantity.textContent = `Quantity: ${product.quantity}`;

    card.appendChild(image);
    card.appendChild(productName);
    card.appendChild(oneLiner);
    card.appendChild(price);
    card.appendChild(quantity);
};
    return card;