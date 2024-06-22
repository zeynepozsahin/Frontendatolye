// If-else yapısı ve matematiksel işlem
let a = 10;
let b = 20;
let resultElement = document.getElementById('result');

if (a < b) {
    let toplam = a + b;
    resultElement.textContent = `${a} + ${b} = ${toplam}`;
} else {
    let fark = a - b;
    resultElement.textContent = `${a} - ${b} = ${fark}`;
}

// For döngüsü ile 1'den 10'a kadar rakamları yazdırma
let loopResultElement = document.getElementById('loopResult');
let numbers = '';

for (let i = 1; i <= 10; i++) {
    numbers += `${i} `;
}

loopResultElement.textContent = numbers;
