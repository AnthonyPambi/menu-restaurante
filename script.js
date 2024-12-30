const menuData = {
    Starter: [
        { name: "BONELESS WINGS", price: "$10" },
        { name: "MOZZARELLA MOON", price: "$6" },
        { name: "SEARED STEAK", price: "$8" },
        { name: "CHICKEN DIP", price: "$8" },
        { name: "NACHOS", price: "$9" }
    ],
    Seafood: [
        { name: "FRESH SALMON", price: "$6" },
        { name: "FISH & CHIPS", price: "$8" },
        { name: "BAKED SCHROD", price: "$5" }
    ],
    Steaks: [
        { name: "ROYAL SIRLON", price: "$16" },
        { name: "SLICED SIRLON", price: "$12" },
        { name: "PRIME RIB", price: "$10" },
        { name: "MUSHROOM SIRLON", price: "$8" },
        { name: "SMOTHERED TIPS", price: "$15" }
    ],
    Drinks: [
        { name: "JUICE", price: "$2" },
        { name: "COCA-COLA", price: "$3" },
        { name: "VERY BERRY", price: "$2" },
        { name: "IMMUNISER", price: "$4" },
        { name: "PEPSI", price: "$4" }
    ],
    Salads: [
        { name: "HOUSE SALAD", price: "$6" },
        { name: "CAESAR SALAD", price: "$8" },
        { name: "CHICKEN SALAD", price: "$5" },
        { name: "RED SALAD", price: "$4" },
        { name: "TUNA SALAD", price: "$7" }
    ],
    Desserts: [
        { name: "FUDGE CAKE", price: "$5" },
        { name: "STREUSEL PIE", price: "$4" },
        { name: "FUDGE SUNDAY", price: "$5" },
        { name: "TRUFFLE PIE", price: "$4" },
        { name: "PETITE TREAT", price: "$4" }
    ]
};

const menuContainer = document.getElementById('menu-container');

function displayMenu(category) {
    menuContainer.innerHTML = ''; // Limpia el contenedor

    const section = document.createElement('section');
    section.className = 'menu-section';

    const h3 = document.createElement('h3');
    h3.textContent = category;
    section.appendChild(h3);

    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
        section.appendChild(menuItem);
    });

    menuContainer.appendChild(section);
}

// Mostrar el primer menú por defecto (Starter)
displayMenu("Starter");

// Crear botones de filtro dinámicamente
const filtersDiv = document.createElement('div');
filtersDiv.id = 'filters';
for (const category in menuData) {
    const button = document.createElement('button');
    button.textContent = category;
    button.addEventListener('click', () => {
        displayMenu(category);
        // Resaltar el botón activo (opcional)
        document.querySelectorAll('#filters button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
    filtersDiv.appendChild(button);
}

document.querySelector('main').insertBefore(filtersDiv, menuContainer);

//Darle la clase active al boton starter al cargar la pagina
document.querySelector('#filters button').classList.add('active');