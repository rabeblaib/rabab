function showPage(pageId) {
    const pages = document.querySelectorAll('fieldset.page');
    pages.forEach(page => {
        page.style.display = 'none'; // Masquer toutes les pages
    });
    document.getElementById(pageId).style.display = 'block'; // Afficher la page demandée
}

function handlePaymentFormSubmit() {
    const form = document.getElementById('payment-form');
    if (form.checkValidity()) {
        showPage('page4'); // Redirige vers la page 4
        return false; // Empêche la soumission du formulaire
    } else {
        form.reportValidity(); // Affiche les messages de validation
        return false; // Empêche la soumission du formulaire
    }
}

function togglePaymentFields() {
    const paymentType = document.getElementById('payment-type').value;
    document.getElementById('cheque-fields').style.display = paymentType === 'cheque' ? 'block' : 'none';
    document.getElementById('option4-fields').style.display = paymentType === 'option4' ? 'block' : 'none';
}

function toggleMahramInfo() {
    const mahramCheckbox = document.getElementById('mahram-checkbox');
    document.getElementById('mahram-info').style.display = mahramCheckbox.checked ? 'block' : 'none';
}

function updatePersonFields() {
    const selection = document.getElementById('traveling-selection').value;
    const container = document.getElementById('person-info-container');
    container.innerHTML = ''; // Clear previous fields

    for (let i = 1; i <= selection; i++) {
        container.innerHTML += `
            <h3>Informations pour la Personne ${i}</h3>
            <label for="person${i}-name">Nom :</label>
            <input type="text" id="person${i}-name" name="person${i}-name" required>

            <label for="person${i}-passport-no">Numéro de passeport :</label>
            <input type="text" id="person${i}-passport-no" name="person${i}-passport-no" required>
        `;
    }
}
