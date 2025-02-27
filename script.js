const colorToggle = document.getElementById('colorToggle');
const moonIcon = document.getElementById('moonIcon')
colorToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
moonIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const textSize = document.getElementById('textSize');
const resizableText = document.getElementById('resizableText');
textSize.addEventListener('input', () => {
resizableText.style.fontSize = `${textSize.value}px`;
});

    
const openModal = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
modal.style.display = 'block';
modalOverlay.style.display = 'block';
});

closeModal.addEventListener('click', () => {
modal.style.display = 'none';
modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
modal.style.display = 'none';
modalOverlay.style.display = 'none';
});


const validationForm = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

 validationForm.addEventListener('submit', (e) => {
    let isValid = true;

    
if (nameInput.value.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters.';
    isValid = false;
} else {
    nameError.textContent = '';
}


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(emailInput.value)) {
emailError.textContent = 'Please enter a valid email address.';
   isValid = false;
} else {
     emailError.textContent = '';
      }

const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
if (!passwordPattern.test(passwordInput.value)) {
 passwordError.textContent = 'Password must be at least 8 characters with one uppercase letter and one number.';
isValid = false;
 } else {
     passwordError.textContent = '';
}

if (!isValid) {
   e.preventDefault();
}
});
