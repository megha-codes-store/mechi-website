// Mobile menu toggle
document.querySelectorAll('.mobile-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var open = btn.closest('.site-header').classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
});
