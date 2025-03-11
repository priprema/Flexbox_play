function getEasterDate(year) {
    const f = Math.floor,
        // Golden Number - 1
        G = year % 19,
        C = f(year / 100),
        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
        I = H - f(H / 28) * (1 - f(H / 28) * f(29 / (H + 1)) * f((21 - G) / 11)),
        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
        L = I - J,
        month = 3 + f((L + 40) / 44),
        day = L + 28 - 31 * f(month / 4);
    return new Date(year, month - 1, day);
}

function updateEasterCounter() {
    const today = new Date();
    const year = today.getFullYear();
    const easterDate = getEasterDate(year);
    const timeDiff = easterDate - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const counterElement = document.getElementById('easter-counter');
    if (daysRemaining >= 0) {
        counterElement.textContent = `${daysRemaining} days remaining until Easter`;
    } else {
        counterElement.textContent = `Easter has passed this year`;
    }
}

document.addEventListener('DOMContentLoaded', updateEasterCounter);