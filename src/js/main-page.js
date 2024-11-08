//TODO: thanh điều hướng ở trang chủ
//*khai báo các đối tượng elements
const pageControlsBtn = document.querySelector('button.page-controls');
const controlsMenu = document.querySelector('ul.menu-list');
pageControlsBtn.addEventListener('click', function() {
    controlsMenu.classList.toggle('d-none')
})
console.log(controlsMenu);

document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn form reload trang
  
    // Lấy các giá trị từ form
    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;
    const source = document.querySelector('input[name="source"]:checked').value;
  
    // Ẩn form và hiện lời cảm ơn
    document.getElementById("surveyForm").classList.add("hidden");
    document.getElementById("thankYouMessage").classList.remove("hidden");
  
    console.log("Submitted Data:", { name, feedback, source });
  });
  

  // Dữ liệu sản phẩm Món Ăn
const productsFood = [
    { id: 1, name: 'Bánh canh cua', votes: 0 },
    { id: 2, name: 'Bánh xèo', votes: 0 },
    { id: 3, name: 'Phở', votes: 0 },
    { id: 4, name: 'Cơm tấm', votes: 0 },
    { id: 5, name: 'Bánh ướt', votes: 0 },
    { id: 6, name: 'Mì cay', votes: 0 },
];

// Dữ liệu sản phẩm Thức Uống
const productsDrink = [
    { id: 1, name: 'Trà sữa', votes: 0 },
    { id: 2, name: 'Cà phê', votes: 0 },
    { id: 3, name: 'Nước mía', votes: 0 },
];

// Hàm sắp xếp và hiển thị sản phẩm
function displayProducts() {
    const foodList = document.getElementById('product-list-food');
    const drinkList = document.getElementById('product-list-drink');
    const foodSelector = document.getElementById('product-selector-food');
    const drinkSelector = document.getElementById('product-selector-drink');

    // Sắp xếp lại danh sách sản phẩm theo số phiếu (từ cao đến thấp)
    productsFood.sort((a, b) => b.votes - a.votes);
    productsDrink.sort((a, b) => b.votes - a.votes);

    // Xóa nội dung cũ
    foodList.innerHTML = '';
    drinkList.innerHTML = '';
    foodSelector.innerHTML = '<option value="">Chọn món ăn</option>';
    drinkSelector.innerHTML = '<option value="">Chọn thức uống</option>';

    // Hiển thị sản phẩm món ăn
    productsFood.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.votes} phiếu`;
        foodList.appendChild(li);

        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        foodSelector.appendChild(option);
    });

    // Hiển thị sản phẩm thức uống
    productsDrink.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.votes} phiếu`;
        drinkList.appendChild(li);

        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        drinkSelector.appendChild(option);
    });
}

// Xử lý sự kiện bỏ phiếu cho món ăn
document.getElementById('vote-button-food').addEventListener('click', function() {
    const selectedFoodId = parseInt(document.getElementById('product-selector-food').value);
    if (selectedFoodId) {
        const product = productsFood.find(p => p.id === selectedFoodId);
        product.votes++; // Thêm phiếu cho món ăn
        displayProducts(); // Cập nhật lại danh sách
    } else {
        alert('Vui lòng chọn món ăn để bỏ phiếu!');
    }
});

// Xử lý sự kiện bỏ phiếu cho thức uống
document.getElementById('vote-button-drink').addEventListener('click', function() {
    const selectedDrinkId = parseInt(document.getElementById('product-selector-drink').value);
    if (selectedDrinkId) {
        const product = productsDrink.find(p => p.id === selectedDrinkId);
        product.votes++; // Thêm phiếu cho thức uống
        displayProducts(); // Cập nhật lại danh sách
    } else {
        alert('Vui lòng chọn thức uống để bỏ phiếu!');
    }
});

// Khởi tạo trang ban đầu
displayProducts();

