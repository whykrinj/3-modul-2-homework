let cards = document.querySelector("#cards");
let searchInput = document.querySelector("#searchInput")

function switchToLight() {
    document.body.classList.remove("bg-black", "text-white");
    document.body.classList.add("bg-white", "text-black");

    document.getElementById("light-btn").classList.add("hidden");
    document.getElementById("dark-btn").classList.remove("hidden");
}

function switchToDark() {
    document.body.classList.remove("bg-white", "text-black");
    document.body.classList.add("bg-black", "text-white");

    document.getElementById("dark-btn").classList.add("hidden");
    document.getElementById("light-btn").classList.remove("hidden");
}

const requestData = async () => {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await request.json();
        console.log(data);
        data.forEach(user => {
            let card = document.createElement('div');
            card.className = 'min-w-[45%] flex flex-col gap-2 items-center border border-cyan-400 shadow-lg shadow-cyan-400 rounded-xl p-7'
            card.innerHTML = `
                <p class="">${user.name}</p>
                <img class="max-w-20" src="images/pngtree-avatar-icon-abstract-user-login-icon-png-image_3917181-removebg-preview.png" alt="">
                <p class="flex items-center gap-1"><span><img class="max-w-10" src="./images/email.png" alt=""></span>${user.email}</p>
                <p class="flex items-center gap-1"><span><img class="max-w-10" src="./images/phone.png" alt=""></span>${user.phone}</p>
                <p class="flex items-center gap-1"><span><img class="max-w-8" src="./images/house.png" alt=""></span>${user.address.city}, ${user.address.street}</p>
            `

            cards.appendChild(card);
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {

    }
}



searchInput.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    const cardsArray = Array.from(cards.children);

    cardsArray.forEach(card => {
        const nameText = card.querySelector('p:first-child').textContent.toLowerCase(); // Извлекаем текст имени из первой строки

        if (nameText.includes(searchText)) {
            card.style.display = 'flex'; // Показываем карточку
        } else {
            card.style.display = 'none'; // Скрываем карточку
        }
    });

    console.log(`Поиск: ${searchText}`);
});




requestData();