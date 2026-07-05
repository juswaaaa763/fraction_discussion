(function () {
  let scrollObserver = null;

  function initScrollReveal() {
    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    const items = document.querySelectorAll(".reveal");
    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    items.forEach((item, index) => {
      // Create a staggered effect based on the element's position
      let delay = (index % 4) * 80;
      item.style.transitionDelay = `${delay}ms`;
      scrollObserver.observe(item);
    });
  }

  function setupRipple() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest(".ripple, .btn, .choice-btn");
      if (!target) {
        return;
      }
      const circle = document.createElement("span");
      circle.className = "ripple-span";
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${event.clientX - rect.left - size / 2}px`;
      circle.style.top = `${event.clientY - rect.top - size / 2}px`;
      target.appendChild(circle);
      setTimeout(() => circle.remove(), 620);
    });
  }

  function setupLoader() {
    const loader = document.getElementById("page-loader");
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("hidden"), 520);
    });
  }

  function sectionTransition(action) {
    const shell = document.getElementById("section-transition");
    if (!shell) {
      return;
    }
    if (action === "show") {
      shell.classList.add("show");
      return;
    }
    shell.classList.remove("show");
  }

  function confettiBurst() {
    const canvas = document.getElementById("confetti-canvas");
    const context = canvas.getContext("2d");
    const count = 130;
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        r: 4 + Math.random() * 5,
        vx: -2 + Math.random() * 4,
        vy: 2 + Math.random() * 3,
        c: ["#2f6bff", "#7547ff", "#0ea05d", "#ff9d2e"][Math.floor(Math.random() * 4)],
      });
    }

    let frame = 0;
    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.035;
        context.fillStyle = p.c;
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
      });
      frame += 1;
      if (frame < 160) {
        requestAnimationFrame(draw);
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    draw();
  }

  window.AnimationService = {
    initScrollReveal,
    setupRipple,
    setupLoader,
    sectionTransition,
    confettiBurst,
  };
})();
