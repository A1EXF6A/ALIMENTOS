document.addEventListener('DOMContentLoaded', () => {

    // ==== Element Selection ====
    const loginPage = document.getElementById('loginPage');
    const dashboardPage = document.getElementById('dashboardPage');
    const loginForm = document.getElementById('loginForm');
    const surplusForm = document.getElementById('surplusForm');
    const emailInput = document.getElementById('email');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');
    const dropZone = document.getElementById('dropZone');
    const productImage = document.getElementById('productImage');
    const toastContainer = document.getElementById('toastContainer');
    const navbar = document.querySelector('.navbar');

    // ==== Auth Logic (Mock) ====
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate an API call
        const btn = loginForm.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="ph ph-spinner ph-spin"></i><span>Ingresando...</span>`;
        btn.style.opacity = '0.8';
        btn.disabled = true;

        setTimeout(() => {
            // Get email name part to use as mock business name
            const email = emailInput.value;
            const businessName = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
            
            // Switch views
            loginPage.classList.remove('active-view');
            setTimeout(() => {
                loginPage.classList.add('hidden');
                
                userNameDisplay.textContent = businessName;
                dashboardPage.classList.remove('hidden');
                // Force flow to restart for animation
                void dashboardPage.offsetWidth; 
                dashboardPage.classList.add('active-view');
            }, 500); // Wait for fade out

            // Reset button
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
            btn.disabled = false;

            // Show the navbar after login
            navbar.classList.remove('hidden');
        }, 1200);
    });

    logoutBtn.addEventListener('click', () => {
        dashboardPage.classList.remove('active-view');
        
        setTimeout(() => {
            dashboardPage.classList.add('hidden');
            loginForm.reset();
            
            loginPage.classList.remove('hidden');
            void loginPage.offsetWidth;
            loginPage.classList.add('active-view');

            // Hide the navbar on logout
            navbar.classList.add('hidden');
        }, 500);
    });

    // ==== Form Logic ====
    
    // Drag and Drop for Image
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
        dropZone.classList.add('dragover');
    }

    function unhighlight(e) {
        dropZone.classList.remove('dragover');
    }

    dropZone.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        handleFiles(files);
    }

    productImage.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            const fileName = files[0].name;
            dropZone.querySelector('span').innerHTML = `Archivo seleccionado: <strong>${fileName}</strong>`;
            dropZone.querySelector('i').classList.replace('ph-image', 'ph-check-circle');
            dropZone.querySelector('i').style.color = 'var(--clr-primary)';
        }
    }

    // Surplus Form Submission
    surplusForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const productName = document.getElementById('productName').value;
        const btn = surplusForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = `<i class="ph ph-spinner ph-spin"></i><span>Publicando...</span>`;
        btn.disabled = true;

        setTimeout(() => {
            showToast(`¡Excelente! "${productName}" ha sido publicado.`);
            
            // Reset form
            surplusForm.reset();
            dropZone.querySelector('span').innerHTML = `Arrastra una imagen o <strong>haz clic para buscar</strong>`;
            dropZone.querySelector('i').classList.replace('ph-check-circle', 'ph-image');
            dropZone.querySelector('i').style.color = '';
            
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1000);
    });

    // Toast Notification System
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="ph ph-check-circle text-3xl" style="color: var(--clr-primary)"></i>
            <div>
                <strong style="display:block; margin-bottom:0.2rem;">Operación Exitosa</strong>
                <span style="opacity: 0.9; font-size: 0.9rem;">${message}</span>
            </div>
        `;
        
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 4000);
    }

    // Navbar Navigation
    const navLinks = {
        navRegistrar: document.getElementById('navRegistrar'),
        navHistorial: document.getElementById('navHistorial'),
        navEstadisticas: document.getElementById('navEstadisticas')
    };

    const views = {
        loginPage: document.getElementById('loginPage'),
        historialPage: document.getElementById('historialPage'),
        estadisticasPage: document.getElementById('estadisticasPage')
    };

    Object.keys(navLinks).forEach((key) => {
        navLinks[key].addEventListener('click', () => {
            // Remove active class from all links
            Object.values(navLinks).forEach(link => link.classList.remove('active'));
            navLinks[key].classList.add('active');

            // Hide all views
            Object.values(views).forEach(view => view.classList.add('hidden'));

            // Show the selected view
            const viewId = key.replace('nav', '').toLowerCase() + 'Page';
            views[viewId].classList.remove('hidden');
        });
    });
});
