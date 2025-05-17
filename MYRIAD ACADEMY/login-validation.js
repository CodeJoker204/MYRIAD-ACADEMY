// Generic validation functions
const showError = (element, message) => {
  const errorElement = document.getElementById(`${element.id}-error`);
  errorElement.textContent = message;
  errorElement.style.visibility = 'visible';
  element.classList.add('error');
};

const clearError = (element) => {
  const errorElement = document.getElementById(`${element.id}-error`);
  errorElement.textContent = '';
  errorElement.style.visibility = 'hidden';
  element.classList.remove('error');
};

// Admin validation
const validateAdminLogin = () => {
  const form = document.getElementById('adminLoginForm');
  const adminId = document.getElementById('admin-email');
  const password = document.getElementById('admin-password');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Admin ID validation
      if (!adminId.value.match(/[A-Za-z0-9]{6,}/)) {
          showError(adminId, 'Admin ID must be at least 6 alphanumeric characters');
          isValid = false;
      }

      // Password validation
      if (password.value.length < 8) {
          showError(password, 'Password must be at least 8 characters');
          isValid = false;
      }

      if (isValid) {
          // Submit form (replace with actual submission)
          console.log('Admin login submitted');
          form.reset();
          // window.location.href = '/admin-dashboard.html';
      }
  });

  // Real-time validation
  adminId.addEventListener('input', () => {
      if (adminId.validity.valid) {
          clearError(adminId);
      }
  });

  password.addEventListener('input', () => {
      if (password.validity.valid) {
          clearError(password);
      }
  });
};

// Teacher validation
const validateTeacherLogin = () => {
  const form = document.getElementById('teacherLoginForm');
  const staffId = document.getElementById('teacher-email');
  const password = document.getElementById('teacher-password');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!staffId.value.match(/STAFF-\d{4}/)) {
          showError(staffId, 'Format: STAFF-1234');
          isValid = false;
      }

      if (password.value.length < 8) {
          showError(password, 'Password must be at least 8 characters');
          isValid = false;
      }

      if (isValid) {
          console.log('Teacher login submitted');
          // form.submit();
      }
  });

  staffId.addEventListener('input', () => {
      if (staffId.validity.valid) {
          clearError(staffId);
      }
  });
};

// Student validation
const validateStudentLogin = () => {
  const form = document.getElementById('studentLoginForm');
  const studentId = document.getElementById('student-id');
  const password = document.getElementById('student-password');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!studentId.value.match(/STU-\d{4}-\d{2}/)) {
          showError(studentId, 'Format: STU-2023-05');
          isValid = false;
      }

      if (password.value.length < 6) {
          showError(password, 'Password must be at least 6 characters');
          isValid = false;
      }

      if (isValid) {
          console.log('Student login submitted');
          // form.submit();
      }
  });

  studentId.addEventListener('input', () => {
      if (studentId.validity.valid) {
          clearError(studentId);
      }
  });
};

// Initialize validation based on current page
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('adminLoginForm')) {
      validateAdminLogin();
  } else if (document.getElementById('teacherLoginForm')) {
      validateTeacherLogin();
  } else if (document.getElementById('studentLoginForm')) {
      validateStudentLogin();
  }
});
function Student(){
    location="student-dashboard.html"
}
function Teacher(){
location="teacher-dashboard.html"
}
