// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

    // Custom easing
    CustomEase.create("customEaseOut", "0.25, 0.1, 0.25, 1.0");
    CustomEase.create("customEaseIn", "0.42, 0.0, 1.0, 1.0");

    // Loader animation
    const loader = document.getElementById("loader");
    const loaderBar = document.querySelector(".loader-bar");
    const loaderCounter = document.querySelector(".loader-counter");
    const loaderCircleFill = document.querySelector(".loader-circle-fill");

    let progress = 0;
    const loaderInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;

        const percentage = Math.floor(progress);
        loaderBar.style.width = `${percentage}%`;
        loaderCounter.textContent = `${percentage}%`;
        loaderCircleFill.style.clipPath = `polygon(0% 0%, ${percentage}% 0%, ${percentage}% 100%, 0% 100%)`;

        if (percentage === 100) {
            clearInterval(loaderInterval);
            setTimeout(() => {
                gsap.to(loader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "customEaseOut",
                    onComplete: () => {
                        loader.style.display = "none";
                        startAnimations();
                    },
                });
            }, 500);
        }
    }, 100);

    // Custom cursor
    const cursor = document.getElementById("cursor");
    const cursorDot = document.getElementById("cursor-dot");
    const cursorText = document.getElementById("cursor-text");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.to(cursorDot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
        });
    });

    // Cursor effects for different elements
    const cursorElements = document.querySelectorAll("[data-cursor]");

    cursorElements.forEach((el) => {
        const cursorType = el.getAttribute("data-cursor");

        el.addEventListener("mouseenter", () => {
            switch (cursorType) {
                case "link":
                    cursor.style.width = "5rem";
                    cursor.style.height = "5rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "rgba(212, 177, 106, 0.1)";
                    cursorText.textContent = "Click";
                    cursorText.style.opacity = "1";
                    break;
                case "button":
                    cursor.style.width = "6rem";
                    cursor.style.height = "6rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "rgba(212, 177, 106, 0.1)";
                    cursorText.textContent = "Click";
                    cursorText.style.opacity = "1";
                    break;
                case "project":
                    cursor.style.width = "8rem";
                    cursor.style.height = "8rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "rgba(212, 177, 106, 0.05)";
                    cursorText.textContent = "View";
                    cursorText.style.opacity = "1";
                    break;
                case "menu":
                    cursor.style.width = "4rem";
                    cursor.style.height = "4rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "rgba(212, 177, 106, 0.1)";
                    break;
                case "social":
                    cursor.style.width = "4rem";
                    cursor.style.height = "4rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "rgba(212, 177, 106, 0.1)";
                    break;
                case "logo":
                    cursor.style.width = "4rem";
                    cursor.style.height = "4rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "rgba(212, 177, 106, 0.1)";
                    break;
                default:
                    cursor.style.width = "3rem";
                    cursor.style.height = "3rem";
                    cursor.style.borderColor = "var(--color-accent-primary)";
                    cursor.style.backgroundColor = "transparent";
                    cursorText.style.opacity = "0";
            }
        });

        el.addEventListener("mouseleave", () => {
            cursor.style.width = "3rem";
            cursor.style.height = "3rem";
            cursor.style.borderColor = "var(--color-accent-primary)";
            cursor.style.backgroundColor = "transparent";
            cursorText.style.opacity = "0";
        });
    });

    // Navigation toggle
    const navToggle = document.getElementById("nav-toggle");
    const navOverlay = document.getElementById("nav-overlay");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navOverlay.classList.toggle("active");
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            // Animate nav links
            gsap.to(navLinks, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "customEaseOut",
            });
        } else {
            // Reset nav links
            gsap.to(navLinks, {
                opacity: 0,
                y: 100,
                duration: 0.3,
                ease: "customEaseIn",
            });
        }
    });

    // Close navigation when clicking a link
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("active");
            navOverlay.classList.remove("active");
            navMenu.classList.remove("active");

            // Smooth scroll to section
            const target = link.getAttribute("href");
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80,
                },
                ease: "customEaseOut",
            });
        });
    });

    // Header scroll effect
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Start animations function
    function startAnimations() {
        // Hero section animations
        const heroElements = [".hero-subtitle", ".hero-title", ".hero-description", ".hero-cta", ".scroll-indicator"];

        gsap.set(heroElements, { opacity: 0, y: 20 });

        gsap.to(heroElements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "customEaseOut",
        });

        // Split text animation for hero title
        const heroTitle = new SplitType(".hero-title", { types: "chars" });

        gsap.from(heroTitle.chars, {
            opacity: 0,
            y: 20,
            rotationX: -90,
            stagger: 0.02,
            duration: 0.8,
            ease: "customEaseOut",
            delay: 0.4,
        });

        // Section animations
        gsap.utils.toArray(".section").forEach((section) => {
            const title = section.querySelector(".section-title");
            const content = section.querySelectorAll(
                ".about-text p, .about-image, .featured-project, .work-card, .contact-title, .contact-subtitle, .contact-text, .contact-button"
            );

            if (title) {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: "customEaseOut",
                });
            }

            if (content.length) {
                gsap.from(content, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "customEaseOut",
                });
            }
        });

        // Initialize Three.js background
        initThreeJsBackground();
    }

    // Three.js background
    function initThreeJsBackground() {
        const canvas = document.getElementById("hero-canvas");

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        camera.position.z = 30;

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;

        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        const colorPalette = [
            new THREE.Color(0xd4b16a), // Gold
            new THREE.Color(0xc29c5b), // Darker gold
            new THREE.Color(0xe0c48c), // Light gold
            new THREE.Color(0xf0f0f0), // White
        ];

        for (let i = 0; i < particlesCount; i++) {
            // Position
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

            // Color
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        // Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
        });

        // Points
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Create floating lines
        const linesGeometry = new THREE.BufferGeometry();
        const linesCount = 100;
        const linesPositions = new Float32Array(linesCount * 6); // 2 points per line, 3 values per point

        for (let i = 0; i < linesCount; i++) {
            const x1 = (Math.random() - 0.5) * 100;
            const y1 = (Math.random() - 0.5) * 100;
            const z1 = (Math.random() - 0.5) * 100;

            const x2 = x1 + (Math.random() - 0.5) * 10;
            const y2 = y1 + (Math.random() - 0.5) * 10;
            const z2 = z1 + (Math.random() - 0.5) * 10;

            // First point
            linesPositions[i * 6] = x1;
            linesPositions[i * 6 + 1] = y1;
            linesPositions[i * 6 + 2] = z1;

            // Second point
            linesPositions[i * 6 + 3] = x2;
            linesPositions[i * 6 + 4] = y2;
            linesPositions[i * 6 + 5] = z2;
        }

        linesGeometry.setAttribute("position", new THREE.BufferAttribute(linesPositions, 3));

        const linesMaterial = new THREE.LineBasicMaterial({
            color: 0xd4b16a,
            transparent: true,
            opacity: 0.2,
        });

        const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
        scene.add(lines);

        // Mouse movement effect
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener("mousemove", (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Animation loop
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            // Rotate particles
            particles.rotation.x = elapsedTime * 0.05;
            particles.rotation.y = elapsedTime * 0.03;

            // Mouse movement effect
            particles.rotation.x += (mouseY * 0.1 - particles.rotation.x) * 0.05;
            particles.rotation.y += (mouseX * 0.1 - particles.rotation.y) * 0.05;

            lines.rotation.x = elapsedTime * 0.03;
            lines.rotation.y = elapsedTime * 0.02;

            lines.rotation.x += (mouseY * 0.05 - lines.rotation.x) * 0.03;
            lines.rotation.y += (mouseX * 0.05 - lines.rotation.y) * 0.03;

            // Render
            renderer.render(scene, camera);

            // Call animate again on the next frame
            requestAnimationFrame(animate);
        }

        animate();

        // Handle window resize
        window.addEventListener("resize", () => {
            // Update camera
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    }
});
