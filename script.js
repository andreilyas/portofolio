const themeToggle = document.querySelector("#theme-toggle");
const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#main-navigation");
const navigationLinks = document.querySelectorAll(".nav-link");
const starfieldCanvas = document.querySelector("#starfield-canvas");
const showcaseTabs = document.querySelectorAll(".showcase-tab");
const showcaseFilterLinks = document.querySelectorAll("[data-showcase-filter]");
const showcaseItems = document.querySelectorAll(".showcase-item");
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
const guestbookForm = document.querySelector("#guestbook-form");
const guestbookStatus = document.querySelector("#guestbook-status");
const guestbookAvatarInput = document.querySelector("#guestbook-avatar");
const guestbookAvatarPreview = document.querySelector("#guestbook-avatar-preview");
const guestbookAvatarPlaceholder = document.querySelector("#guestbook-avatar-placeholder");
const guestbookComments = document.querySelector("#guestbook-comments");
const experienceCards = document.querySelectorAll(".experience-card");
const lightbox = document.querySelector("#experience-lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const spotifyEmbed = document.querySelector(".spotify-embed");

const guestbookStorageKey = "andre-ilyas-guestbook";
const defaultGuestbookComments = [
    {
        name: "Andre",
        message: "Selamat datang di ruang kecil ini. Tinggalkan pesan dan mari saling terhubung.",
        avatar: "",
        createdAt: "2026-10-20T00:00:00.000Z"
    },
];

if (spotifyEmbed instanceof HTMLIFrameElement) {
    const spotifySource = spotifyEmbed.dataset.spotifySrc;

    if (spotifySource) {
        const embedUrl = new URL(spotifySource);
        embedUrl.searchParams.set("refresh", Date.now().toString());
        spotifyEmbed.src = embedUrl.toString();
    }
}

if (starfieldCanvas instanceof HTMLCanvasElement) {
    const context = starfieldCanvas.getContext("2d");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrameId;
    let particles = [];
    let viewportWidth = 0;
    let viewportHeight = 0;

    if (!context) {
        console.warn("Starfield canvas context tidak tersedia.");
    } else {
    const getParticleCount = () => Math.min(110, Math.max(35, Math.floor(viewportWidth / 12)));

    const createParticle = () => ({
        x: Math.random() * viewportWidth,
        y: Math.random() * viewportHeight,
        radius: Math.random() * 1.4 + 0.35,
        alpha: Math.random() * 0.55 + 0.2,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12
    });

    const resizeStarfield = () => {
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
        starfieldCanvas.width = viewportWidth * pixelRatio;
        starfieldCanvas.height = viewportHeight * pixelRatio;
        starfieldCanvas.style.width = `${viewportWidth}px`;
        starfieldCanvas.style.height = `${viewportHeight}px`;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        particles = Array.from({ length: getParticleCount() }, createParticle);
    };

    const drawStarfield = () => {
        context.clearRect(0, 0, viewportWidth, viewportHeight);

        particles.forEach((particle) => {
            if (!reducedMotionQuery.matches) {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < -2) particle.x = viewportWidth + 2;
                if (particle.x > viewportWidth + 2) particle.x = -2;
                if (particle.y < -2) particle.y = viewportHeight + 2;
                if (particle.y > viewportHeight + 2) particle.y = -2;
            }

            context.beginPath();
            context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            context.fillStyle = `rgba(196, 181, 253, ${particle.alpha})`;
            context.fill();
        });

        if (!reducedMotionQuery.matches) {
            animationFrameId = window.requestAnimationFrame(drawStarfield);
        }
    };

    const restartStarfield = () => {
        if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
        }

        resizeStarfield();
        drawStarfield();
    };

    window.addEventListener("resize", resizeStarfield, { passive: true });
    reducedMotionQuery.addEventListener("change", restartStarfield);
    restartStarfield();
    }
}

themeToggle.addEventListener("click", () => {
    const isLightMode = document.documentElement.classList.toggle("light-mode");
    const themeIcon = themeToggle.querySelector(".theme-icon");

    themeIcon.textContent = isLightMode ? "☾" : "☼";
    themeToggle.setAttribute(
        "aria-label",
        isLightMode ? "Aktifkan tema gelap" : "Aktifkan tema terang"
    );
});

const closeNavigation = () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
};

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") !== "true";

    navigation.classList.toggle("open", isExpanded);
    menuToggle.setAttribute("aria-expanded", String(isExpanded));
    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Tutup navigasi" : "Buka navigasi"
    );
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavigation();
    }
});

const closeLightbox = () => {
    if (!(lightbox instanceof HTMLElement) || lightbox.hidden) {
        return;
    }

    lightbox.hidden = true;
    document.body.style.overflow = "";
};

const openLightbox = (image) => {
    if (
        !(lightbox instanceof HTMLElement) ||
        !(lightboxImage instanceof HTMLImageElement)
    ) {
        return;
    }

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose?.focus();
};

experienceCards.forEach((card) => {
    const image = card.querySelector(".experience-image-wrap img");

    if (!(image instanceof HTMLImageElement)) {
        return;
    }

    card.addEventListener("click", () => openLightbox(image));
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(image);
        }
    });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxContent) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

const sections = document.querySelectorAll("[data-nav-section]");
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navigationLinks.forEach((link) => {
                const isCurrent = link.hash === `#${entry.target.id}`;

                link.classList.toggle("active", isCurrent);
                if (isCurrent) {
                    link.setAttribute("aria-current", "location");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        });
    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => sectionObserver.observe(section));

showcaseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const selectedFilter = tab.dataset.filter;

        showcaseTabs.forEach((item) => {
            const isSelected = item === tab;

            item.classList.toggle("active", isSelected);
            item.setAttribute("aria-selected", String(isSelected));
        });

        showcaseItems.forEach((item) => {
            const matchesFilter =
                selectedFilter === "all" || item.dataset.showcaseCategory === selectedFilter;

            item.classList.toggle("is-hidden", !matchesFilter);
        });

        document.querySelector(".showcase-grid").classList.toggle(
            "experience-active",
            selectedFilter === "experience"
        );
    });
});

showcaseFilterLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const targetTab = document.querySelector(
            `.showcase-tab[data-filter="${link.dataset.showcaseFilter}"]`
        );

        targetTab?.click();
    });
});

document.querySelector('.showcase-tab[data-filter="projects"]')?.click();

const setFormStatus = (element, message, type = "") => {
    element.textContent = message;
    element.classList.toggle("is-success", type === "success");
    element.classList.toggle("is-error", type === "error");
};

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setFormStatus(
        contactStatus,
        "Pesan siap dikirim. Hubungkan form ini ke layanan email atau backend untuk menerima pesan secara nyata.",
        "success"
    );
    contactForm.reset();
});

const getGuestbookComments = () => {
    const storedComments = window.localStorage.getItem(guestbookStorageKey);

    if (!storedComments) {
        return defaultGuestbookComments;
    }

    try {
        const parsedComments = JSON.parse(storedComments);
        if (!Array.isArray(parsedComments)) {
            return defaultGuestbookComments;
        }

        const comments = parsedComments.filter(
            (comment) => String(comment?.name || "").trim().toLowerCase() !== "you"
        );

        if (comments.length !== parsedComments.length) {
            saveGuestbookComments(comments);
        }

        return comments;
    } catch (error) {
        console.warn("Data guestbook tidak dapat dibaca:", error);
        return defaultGuestbookComments;
    }
};

const saveGuestbookComments = (comments) => {
    try {
        window.localStorage.setItem(guestbookStorageKey, JSON.stringify(comments));
    } catch (error) {
        console.warn("Data guestbook tidak dapat disimpan:", error);
    }
};

const createCommentElement = ({ name, message, avatar, createdAt }) => {
    const article = document.createElement("article");
    article.className = "guestbook-comment";

        const avatarElement = document.createElement("span");
        avatarElement.className = "comment-avatar";

        if (avatar) {
            const image = document.createElement("img");
            image.src = avatar;
            image.alt = `Avatar ${name}`;
            avatarElement.append(image);
        } else {
            avatarElement.textContent = name.slice(0, 1).toUpperCase();
        }

        const content = document.createElement("div");
        const meta = document.createElement("div");
        meta.className = "comment-meta";

        const author = document.createElement("strong");
        author.textContent = name;

        const date = document.createElement("time");
        date.dateTime = createdAt;
        date.textContent = new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "short"
        }).format(new Date(createdAt));

        const body = document.createElement("p");
        body.className = "comment-body";
        body.textContent = message;

        meta.append(author, date);
        content.append(meta, body);
        article.append(avatarElement, content);

    return article;
};

const renderGuestbookComments = () => {
    const comments = getGuestbookComments();
    guestbookComments.replaceChildren();

    if (comments.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "guestbook-empty";
        emptyState.textContent = "Belum ada pesan. Jadilah yang pertama meninggalkan catatan.";
        guestbookComments.append(emptyState);
        return;
    }

    comments.forEach((comment) => {
        guestbookComments.append(createCommentElement(comment));
    });
};

guestbookAvatarInput.addEventListener("change", () => {
    const [file] = guestbookAvatarInput.files;

    if (!file) {
        return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 2 * 1024 * 1024) {
        setFormStatus(guestbookStatus, "Gunakan JPG, PNG, atau WebP dengan ukuran maksimal 2 MB.", "error");
        guestbookAvatarInput.value = "";
        return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        guestbookAvatarPreview.src = reader.result;
        guestbookAvatarPreview.hidden = false;
        guestbookAvatarPlaceholder.hidden = true;
        setFormStatus(guestbookStatus, "");
    });
    reader.addEventListener("error", () => {
        setFormStatus(guestbookStatus, "Foto profil tidak dapat dibaca.", "error");
    });
    reader.readAsDataURL(file);
});

guestbookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(guestbookForm);
    const name = String(formData.get("name")).trim();
    const message = String(formData.get("message")).trim();

    if (!name || !message) {
        setFormStatus(guestbookStatus, "Nama dan pesan wajib diisi.", "error");
        return;
    }

    const comments = getGuestbookComments();
    comments.unshift({
        name,
        message,
        avatar: guestbookAvatarPreview.hidden ? "" : guestbookAvatarPreview.src,
        createdAt: new Date().toISOString()
    });

    saveGuestbookComments(comments.slice(0, 20));
    renderGuestbookComments();
    guestbookForm.reset();
    guestbookAvatarPreview.hidden = true;
    guestbookAvatarPreview.removeAttribute("src");
    guestbookAvatarPlaceholder.hidden = false;
    setFormStatus(guestbookStatus, "Pesan berhasil ditambahkan ke guestbook.", "success");
});

renderGuestbookComments();
