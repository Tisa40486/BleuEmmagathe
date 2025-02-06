document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.querySelector('a[href^="mailto:"]').addEventListener('click', function(event) {
    event.preventDefault();
    const email = this.getAttribute('href').replace('mailto:', '');
    if (confirm(`Voulez-vous vraiment envoyer un email à ${email} ?`)) {
        window.location.href = this.getAttribute('href');
    }
});
document.querySelector('.facebook-logo').addEventListener('mouseover', function() {
    this.style.transform = 'rotate(10deg)';
    setTimeout(() => { this.style.transform = 'rotate(-10deg)'; }, 100);
    setTimeout(() => { this.style.transform = 'rotate(0)'; }, 200);
});
