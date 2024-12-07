
// Abrir o modal ao clicar na imagem
const mainImage = document.querySelector(".product-gallery img");
const modal = document.getElementById("zoom-modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close-btn");

mainImage.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = mainImage.src;
});

// Fechar o modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Alterar a imagem principal ao clicar nas miniaturas
const thumbnails = document.querySelectorAll(".gallery-thumbnails img");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.src;
    });
});

// Validação do formulário
const form = document.getElementById("product-form");
const quantityInput = document.getElementById("quantity");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const quantity = quantityInput.value;

    if (quantity <= 0) {
        alert("Por favor, insira uma quantidade válida.");
    } else {
        alert("Produto adicionado ao carrinho!");
    }
});

quantityInput.addEventListener("input", () => {
    const value = parseInt(quantityInput.value, 10);

    if (value <= 0 || isNaN(value)) {
        quantityInput.style.borderColor = "red";
        quantityInput.setCustomValidity("Por favor, insira um número válido maior que 0.");
    } else {
        quantityInput.style.borderColor = "green";
        quantityInput.setCustomValidity("");
    }
});

// Notificação ao adicionar ao carrinho
const addToCartBtn = document.querySelector(".add-to-cart");
const cartNotification = document.getElementById("cart-notification");

addToCartBtn.addEventListener("click", () => {
    cartNotification.textContent = "Produto adicionado ao carrinho!";
    cartNotification.classList.add("show");

    setTimeout(() => {
        cartNotification.classList.remove("show");
    }, 3000);
});

// Adicionar à lista de desejos com persistência
const addToWishlistBtn = document.querySelector(".add-to-wishlist");

addToWishlistBtn.addEventListener("click", () => {
    const product = {
        name: "Fone de Ouvido Bluetooth - Preto",
        price: "R$ 350,00",
        image: mainImage.src,
    };

  // Recuperar a lista de desejos existente
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Verificar se o produto já está na lista
    if (!wishlist.some((item) => item.name === product.name)) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Produto adicionado à lista de desejos!");
    } else {
        alert("Este produto já está na sua lista de desejos.");
    }
});
