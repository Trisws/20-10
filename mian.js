let cart = [];
let products = [
    { id: 1, name: "Điện thoại 1", price: 10000000 },
    { id: 2, name: "Điện thoại 2", price: 15000000 }
];

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
    }
}

function updateCartUI() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let totalPrice = 0;
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} VND`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById("total-price").textContent = `Tổng tiền: ${totalPrice} VND`;
}

function checkout() {
    if (cart.length > 0) {
        alert("Đặt hàng thành công!");
        cart = [];
        updateCartUI();
    } else {
        alert("Giỏ hàng trống!");
    }
}
