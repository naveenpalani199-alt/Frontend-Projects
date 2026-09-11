
    const products = []; // Array to store product objects
    const addBtn = document.getElementById('addBtn');
    const productContainer = document.getElementById('productContainer');

    addBtn.addEventListener('click', () => {
      // Get input values
      const pname = document.getElementById('pname').value;
      const price = document.getElementById('price').value;
      const category = document.getElementById('category').value;

      // Create product object
      const product = { pname, price, category };

      // Store in array
      products.push(product);

      // Clear container before redisplaying
      productContainer.innerHTML = '';

      // Use forEach to display products
      products.forEach(prod => {
        const card = document.createElement('div');
        card.style.border = "1px solid black"; // just to separate visually
        card.style.margin = "10px";
        card.style.padding = "10px";

        card.innerHTML = `
          <p><strong>Product Name:</strong> ${prod.pname}</p>
          <p><strong>Price:</strong> ${prod.price}</p>
          <p><strong>Category:</strong> ${prod.category}</p>
        `;
        productContainer.appendChild(card);
      });

      // Reset form
      document.getElementById('productForm').reset();
    });