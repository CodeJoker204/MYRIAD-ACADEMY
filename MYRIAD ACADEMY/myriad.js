document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  
  mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.querySelector('i').classList.toggle('fa-bars');
      this.querySelector('i').classList.toggle('fa-times');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
          if (mainNav.classList.contains('active')) {
              mainNav.classList.remove('active');
              mobileMenuBtn.querySelector('i').classList.remove('fa-times');
              mobileMenuBtn.querySelector('i').classList.add('fa-bars');
          }
      });
  });
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTop.classList.add('visible');
      } else {
          backToTop.classList.remove('visible');
      }
  });
  
  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  
  // Stats Counter Animation
  const statsSection = document.querySelector('.stats');
  const studentsCount = document.getElementById('studentsCount');
  const coursesCount = document.getElementById('coursesCount');
  const teachersCount = document.getElementById('teachersCount');
  const yearsCount = document.getElementById('yearsCount');
  
  let statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCount(studentsCount, 0, 280, 280);
              animateCount(coursesCount, 0, 16, 15);
              animateCount(teachersCount, 0, 15, 25);
              animateCount(yearsCount, 0, 4, 3);
              statsObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsSection);
  
  function animateCount(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          element.textContent = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }
  
  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;
  
  function showSlide(index) {
      testimonialSlides.forEach(slide => slide.classList.remove('active'));
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      
      testimonialSlides[index].classList.add('active');
      testimonialDots[index].classList.add('active');
      currentSlide = index;
  }
  
  testimonialDots.forEach(dot => {
      dot.addEventListener('click', function() {
          const slideIndex = parseInt(this.getAttribute('data-slide'));
          showSlide(slideIndex);
      });
  });
  // Mobile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.querySelector('.login-toggle');
    
    if (window.innerWidth <= 768) {
        loginToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.classList.toggle('active');
            
            // Rotate chevron icon
            const icon = this.querySelector('i');
            icon.style.transform = dropdown.classList.contains('active') 
                ? 'rotate(180deg)' 
                : 'rotate(0)';
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                const icon = dropdown.querySelector('i');
                if (icon) icon.style.transform = 'rotate(0)';
            });
        }
    });
});
  
  // Auto-rotate testimonials
  setInterval(() => {
      let nextSlide = (currentSlide + 1) % testimonialSlides.length;
      showSlide(nextSlide);
  }, 5000);
  
  // Form Submissions with Validation
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
      }
      
      // In a real app, you would send this data to a server
      console.log('Contact form submitted:', { name, email, subject, message });
      
      // Show success message
      alert(`Thank you, ${name}! Your message about "${subject}" has been received. We'll respond to you at ${email} within 2 business days.`);
      
      // Reset form
      contactForm.reset();
  });
  
  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input').value;
      
      if (!email) {
          alert('Please enter your email address');
          return;
      }
      
      // In a real app, you would send this to your newsletter service
      console.log('Newsletter subscription:', email);
      
      // Show success message
      alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
      
      // Reset form
      this.reset();
  });
  
  // Intersection Observer for Animations
  const animateElements = document.querySelectorAll('.animate, .delay-1, .delay-2, .delay-3');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease';
      observer.observe(element);
  });
  
  // Preload images for better performance
  const imagesToPreload = [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ];
  
  imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
  });
});