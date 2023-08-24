// Your JavaScript code here
const checkbox = document.getElementById('aceitar-termos');
const button = document.getElementById('continuarButton');

checkbox.addEventListener('change', function() {
    button.disabled = !checkbox.checked;
});

button.addEventListener('click', function() {
    alert('Você aceitou os termos de uso e pode continuar.');
    // Redirect to a new page after accepting terms
    window.location.href = 'newpage.html';
});
