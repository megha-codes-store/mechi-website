// Mobile menu toggle
document.querySelectorAll('.mobile-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var open = btn.closest('.site-header').classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Craft videos: play silently only while on screen; respect reduced-motion settings
(function () {
  var videos = document.querySelectorAll('.craft-video');
  if (!videos.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videos.forEach(function (v) { v.controls = true; });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { var p = e.target.play(); if (p) p.catch(function () {}); }
      else e.target.pause();
    });
  }, { threshold: 0.4 });
  videos.forEach(function (v) { io.observe(v); });
})();
