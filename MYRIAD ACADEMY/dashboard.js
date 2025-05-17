// Toggle sidebar on mobile
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('sidebar-active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('.sidebar') && !e.target.closest('.sidebar-toggle')) {
        sidebar.classList.remove('active');
        mainContent.classList.remove('sidebar-active');
    }
});

// Simulate loading data
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current page in sidebar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
    
    // Sample data for charts (would be replaced with real data)
    if (document.querySelector('.grade-chart')) {
        renderGradeChart();
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Sample chart function
function renderGradeChart() {
    const ctx = document.getElementById('gradeChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mathematics', 'English', 'Science', 'History', 'Arts'],
            datasets: [{
                label: 'Term Grades',
                data: [85, 78, 92, 88, 95],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(230, 126, 34, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(230, 126, 34, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Handle logout
const logoutButtons = document.querySelectorAll('.btn-logout');
logoutButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add logout logic here
        window.location.href = 'login.html';
    });
});