/* ================= FOOD DATA ================= */

const foods = [

    {
        id: 1,
        name: "Classic Margherita",
        category: "pizza",
        mood: "happy",
        price: 12.99,
        calories: 620,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        description: "Fresh tomato sauce, mozzarella cheese and basil."
    },

    {
        id: 2,
        name: "Double Cheese Burger",
        category: "burger",
        mood: "happy",
        price: 14.99,
        calories: 750,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        description: "Juicy beef burger with double cheese and fresh vegetables."
    },

    {
        id: 3,
        name: "Creamy Pasta",
        category: "pasta",
        mood: "tired",
        price: 13.50,
        calories: 680,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
        description: "Creamy pasta with parmesan, herbs and a delicious sauce."
    },

    {
        id: 4,
        name: "Chocolate Pancakes",
        category: "dessert",
        mood: "sad",
        price: 9.99,
        calories: 520,
        rating: 4.9,
        image: "https://richanddelish.com/wp-content/uploads/2022/05/chocolate-pancakes.jpg",
        description: "Soft pancakes topped with chocolate and fresh berries."
    },

    {
        id: 5,
        name: "Healthy Chicken Bowl",
        category: "healthy",
        mood: "energetic",
        price: 15.99,
        calories: 450,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        description: "Grilled chicken, avocado, vegetables and healthy grains."
    },

    {
        id: 6,
        name: "Fresh Avocado Salad",
        category: "healthy",
        mood: "relaxed",
        price: 11.99,
        calories: 320,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        description: "Fresh greens, avocado, tomatoes and a light dressing."
    },

    {
        id: 7,
        name: "Pepperoni Pizza",
        category: "pizza",
        mood: "special",
        price: 16.99,
        calories: 810,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        description: "Crispy pizza loaded with pepperoni and melted cheese."
    },

    {
        id: 8,
        name: "Berry Cheesecake",
        category: "dessert",
        mood: "special",
        price: 10.99,
        calories: 480,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
        description: "Creamy cheesecake topped with fresh berries."
    },

    {
        id: 9,
        name: "Grilled Chicken Burger",
        category: "burger",
        mood: "energetic",
        price: 13.99,
        calories: 490,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
        description: "Grilled chicken, lettuce, tomato and special sauce."
    },

    {
        id: 10,
        name: "Truffle Pasta",
        category: "pasta",
        mood: "special",
        price: 18.99,
        calories: 720,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
        description: "Premium creamy pasta with parmesan and truffle."
    },

    {
        id: 11,
        name: "Fruit Smoothie",
        category: "healthy",
        mood: "happy",
        price: 7.99,
        calories: 210,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=80",
        description: "Fresh mixed fruits blended into a refreshing smoothie."
    },

    {
        id: 12,
        name: "Chocolate Lava Cake",
        category: "dessert",
        mood: "tired",
        price: 8.99,
        calories: 590,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        description: "Warm chocolate cake with a rich melted center."
    }

];


/* ================= VARIABLES ================= */

let cart = [];

let selectedCategory = "all";

let currentModalFood = null;


/* ================= ELEMENTS ================= */

const foodGrid = document.getElementById("foodGrid");

const searchInput = document.getElementById("searchInput");

const cartBtn = document.getElementById("cartBtn");

const cartSidebar = document.getElementById("cartSidebar");

const closeCart = document.getElementById("closeCart");

const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");

const themeBtn = document.getElementById("themeBtn");

const menuBtn = document.getElementById("menuBtn");

const navbar = document.querySelector(".navbar");

const foodModal = document.getElementById("foodModal");

const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");

const modalName = document.getElementById("modalName");

const modalCategory = document.getElementById("modalCategory");

const modalDescription = document.getElementById("modalDescription");

const modalCalories = document.getElementById("modalCalories");

const modalRating = document.getElementById("modalRating");

const modalPrice = document.getElementById("modalPrice");

const modalAddBtn = document.getElementById("modalAddBtn");

const recommendationTitle =
    document.getElementById("recommendationTitle");

const recommendationText =
    document.getElementById("recommendationText");

const recommendationIcon =
    document.getElementById("recommendationIcon");


/* ================= DISPLAY FOOD ================= */

function displayFoods(list) {

    foodGrid.innerHTML = "";

    if (list.length === 0) {

        foodGrid.innerHTML = `
            <div style="
                grid-column: 1/-1;
                text-align:center;
                padding:60px;
                color:#999;
            ">
                <div style="font-size:50px;">🍽️</div>
                <h3>No food found</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    list.forEach(food => {

        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `

            <div class="food-image">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                >

                <button
                    class="favorite"
                    data-id="${food.id}"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>

            <div class="food-info">

                <span class="food-category">
                    ${food.category}
                </span>

                <h3>
                    ${food.name}
                </h3>

                <p class="food-description">
                    ${food.description}
                </p>

                <div class="food-bottom">

                    <span class="food-price">
                        $${food.price.toFixed(2)}
                    </span>

                    <button
                        class="add-btn"
                        data-id="${food.id}"
                        title="Add to cart"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>

            </div>
        `;


        /* Open Modal */

        card.querySelector(".food-image img")
            .addEventListener("click", () => {

                openFoodModal(food);

            });


        /* Add To Cart */

        card.querySelector(".add-btn")
            .addEventListener("click", () => {

                addToCart(food.id);

            });


        /* Favorite */

        card.querySelector(".favorite")
            .addEventListener("click", function () {

                this.classList.toggle("active");

                const icon = this.querySelector("i");

                icon.classList.toggle("fa-regular");

                icon.classList.toggle("fa-solid");

            });


        foodGrid.appendChild(card);

    });

}


/* ================= CATEGORY FILTER ================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        filterFoods();

    });

});


/* ================= SEARCH ================= */

searchInput.addEventListener("input", () => {

    filterFoods();

});


function filterFoods() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    let filteredFoods = foods.filter(food => {

        const matchesCategory =
            selectedCategory === "all" ||
            food.category === selectedCategory;


        const matchesSearch =
            food.name.toLowerCase().includes(searchValue) ||
            food.category.toLowerCase().includes(searchValue);


        return matchesCategory && matchesSearch;

    });


    displayFoods(filteredFoods);

}


/* ================= MOOD ================= */

const moodCards =
    document.querySelectorAll(".mood-card");


moodCards.forEach(card => {

    card.addEventListener("click", () => {

        moodCards.forEach(item => {

            item.classList.remove("selected");

        });

        card.classList.add("selected");


        const mood =
            card.dataset.mood;


        const moodFoods =
            foods.filter(food => food.mood === mood);


        if (moodFoods.length > 0) {

            const randomFood =
                moodFoods[
                    Math.floor(
                        Math.random() *
                        moodFoods.length
                    )
                ];


            recommendationTitle.textContent =
                randomFood.name;


            recommendationText.textContent =
                `Perfect for your ${mood} mood! Try our ${randomFood.name} for $${randomFood.price.toFixed(2)}.`;


            recommendationIcon.textContent =
                getMoodEmoji(mood);


            document
                .getElementById("recommendation")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});


function getMoodEmoji(mood) {

    const emojis = {

        happy: "😊",

        tired: "😴",

        sad: "🥺",

        energetic: "🔥",

        relaxed: "😌",

        special: "😍"

    };

    return emojis[mood] || "🍽️";

}


/* ================= SURPRISE ME ================= */

document
    .getElementById("surpriseBtn")
    .addEventListener("click", () => {

        const randomFood =
            foods[
                Math.floor(
                    Math.random() *
                    foods.length
                )
            ];


        openFoodModal(randomFood);

    });


/* ================= CART ================= */

function addToCart(id) {

    const food =
        foods.find(item => item.id === id);


    if (!food) return;


    const existingItem =
        cart.find(item => item.id === id);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...food,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div></div>

                <h3>Your cart is empty</h3>

                <p>Add something delicious!</p>

            </div>

        `;

    }


    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>
                    $${item.price.toFixed(2)}
                </p>

                <div class="quantity">

                    <button
                        class="decrease"
                        data-id="${item.id}"
                    >
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="increase"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                    <button
                        class="remove-item"
                        data-id="${item.id}"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent = count;

    cartTotal.textContent =
        `$${total.toFixed(2)}`;


    addCartEvents();

}


/* ================= CART EVENTS ================= */

function addCartEvents() {

    document
        .querySelectorAll(".increase")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const item =
                    cart.find(item => item.id === id);

                if (item) {

                    item.quantity++;

                    updateCart();

                }

            });

        });


    document
        .querySelectorAll(".decrease")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const item =
                    cart.find(item => item.id === id);

                if (!item) return;


                if (item.quantity > 1) {

                    item.quantity--;

                } else {

                    cart =
                        cart.filter(
                            item => item.id !== id
                        );

                }


                updateCart();

            });

        });


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);


                cart =
                    cart.filter(
                        item => item.id !== id
                    );


                updateCart();

            });

        });

}


/* ================= OPEN CART ================= */

function openCart() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ================= CLOSE CART ================= */

function closeCartSidebar() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow = "";

}


cartBtn.addEventListener("click", openCart);

closeCart.addEventListener(
    "click",
    closeCartSidebar
);

overlay.addEventListener(
    "click",
    closeCartSidebar
);


/* ================= FOOD MODAL ================= */

function openFoodModal(food) {

    currentModalFood = food;


    modalImage.src = food.image;

    modalName.textContent = food.name;

    modalCategory.textContent =
        food.category;

    modalDescription.textContent =
        food.description;

    modalCalories.textContent =
        food.calories;

    modalRating.textContent =
        food.rating;

    modalPrice.textContent =
        `$${food.price.toFixed(2)}`;


    foodModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeFoodModal() {

    foodModal.classList.remove("active");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeFoodModal
);


foodModal.addEventListener(
    "click",
    event => {

        if (event.target === foodModal) {

            closeFoodModal();

        }

    }
);


/* ================= MODAL ADD ================= */

modalAddBtn.addEventListener(
    "click",
    () => {

        if (currentModalFood) {

            addToCart(currentModalFood.id);

            closeFoodModal();

        }

    }
);


/* ================= DARK MODE ================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");


        const icon =
            themeBtn.querySelector("i");


        if (
            document.body.classList.contains("dark")
        ) {

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

        } else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );

        }

    }
);


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener(
    "click",
    () => {

        navbar.classList.toggle("active");

    }
);


/* Close mobile menu after clicking */

document
    .querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navbar.classList.remove(
                    "active"
                );

            }
        );

    });


/* ================= CHECKOUT ================= */

document
    .getElementById("checkoutBtn")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert(
                "Your cart is empty! Add some delicious food first "
            );

            return;

        }


        alert(
            "Thank you for your order!\n\nYour order has been placed successfully."
        );


        cart = [];

        updateCart();

        closeCartSidebar();

    });


/* ================= INITIAL LOAD ================= */

displayFoods(foods);

updateCart();