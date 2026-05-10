const songs = [
  {
    title: "Тепло в ладонях",
    description: "Нежная авторская композиция о семейной поддержке и близости.",
    category: "Авторские песни",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "С днем рождения, родная",
    description: "Персональная песня-поздравление с теплыми пожеланиями.",
    category: "День рождения",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Мамино сердце",
    description: "Трогательная песня благодарности маме за любовь и заботу.",
    category: "Для мамы",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    title: "Отец и дочь",
    description: "Музыкальная история о силе отцовской поддержки.",
    category: "Для папы",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    title: "Только о нас",
    description: "Лирическая композиция о чувствах и важных словах.",
    category: "Любовные песни",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    title: "Светлый праздник",
    description: "Яркая песня для семейного торжества и радостных встреч.",
    category: "Праздничные песни",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  }
];

const songCategories = [
  "Все",
  "Авторские песни",
  "День рождения",
  "Для мамы",
  "Для папы",
  "Любовные песни",
  "Праздничные песни"
];

const orderCategories = [
  "Именная песня",
  "Песня на день рождения",
  "Песня для мамы",
  "Песня для папы",
  "Песня для бабушки",
  "Песня для дедушки",
  "Песня для детей и внуков",
  "Песня для друзей",
  "Песня на свадьбу",
  "Песня к празднику",
  "Индивидуальная песня под вашу историю"
];

const benefits = [
  "Индивидуальный текст под вашу историю",
  "Песня по имени",
  "Для любого праздника и события",
  "Душевное исполнение",
  "Возможность сохранить песню как семейную память",
  "Быстрая связь через WhatsApp или Telegram"
];

const processSteps = [
  {
    title: "Заявка и знакомство",
    description: "Вы заполняете форму, а Наталья уточняет детали сюжета и пожелания."
  },
  {
    title: "Черновик идеи",
    description: "Подготавливается структура песни: настроение, акценты и общий стиль."
  },
  {
    title: "Создание песни",
    description: "Пишется текст и записывается демо-версия с учетом вашей истории."
  },
  {
    title: "Финальная версия",
    description: "Вы получаете готовую песню к важной дате в удобном формате."
  }
];

const reviews = [
  {
    text: "Наталья написала песню для мамы на юбилей. Это было очень трогательно, плакали всей семьей.",
    author: "Елена, Москва"
  },
  {
    text: "Заказывал песню для жены к годовщине. Получилось глубоко, красиво и очень лично.",
    author: "Александр, Казань"
  },
  {
    text: "Все пожелания учтены до мелочей. Подарок получился действительно незабываемый.",
    author: "Марина, Санкт-Петербург"
  }
];

const faqItems = [
  {
    q: "Сколько времени создается песня?",
    a: "Обычно от 3 до 10 дней, в зависимости от сложности задачи и срочности."
  },
  {
    q: "Можно ли заказать песню по имени?",
    a: "Да, именные песни — одно из самых популярных направлений."
  },
  {
    q: "Можно ли сделать песню для мамы или папы?",
    a: "Да, можно создать песню для любого близкого человека с учетом вашей истории."
  },
  {
    q: "Можно ли заказать песню к определенной дате?",
    a: "Да, укажите нужную дату в заявке, и сроки будут согласованы заранее."
  },
  {
    q: "Как передать детали истории?",
    a: "Через форму на сайте, а также в переписке в WhatsApp или Telegram."
  },
  {
    q: "Можно ли подключить оплату на сайте?",
    a: "Да, сайт подготовлен для подключения онлайн-оплаты на следующем этапе разработки."
  }
];

const contacts = [
  { label: "Телефон", value: "+7 (900) 000-00-00", href: "tel:+79000000000" },
  { label: "WhatsApp", value: "+7 (900) 000-00-00", href: "https://wa.me/79000000000" },
  { label: "Telegram", value: "@natalya_kamalova", href: "https://t.me/natalya_kamalova" },
  { label: "Email", value: "kamalova.music@mail.ru", href: "mailto:kamalova.music@mail.ru" },
  { label: "Социальные сети", value: "VK / Instagram / YouTube", href: "#" }
];

const songsGrid = document.querySelector("#songs-grid");
const songSearchInput = document.querySelector("#song-search");
const filtersWrap = document.querySelector("#song-filters");
const categoriesGrid = document.querySelector("#categories-grid");
const processGrid = document.querySelector("#process-grid");
const benefitsList = document.querySelector("#benefits-list");
const reviewsGrid = document.querySelector("#reviews-grid");
const faqList = document.querySelector("#faq-list");
const contactsGrid = document.querySelector("#contacts-grid");
const orderForm = document.querySelector("#order-form");
const formMessage = document.querySelector("#form-message");
const header = document.querySelector("#header");
const menuBtn = document.querySelector("#mobile-menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const scrollTopBtn = document.querySelector("#scroll-top-btn");
const currentYear = document.querySelector("#current-year");

let currentCategory = "Все";
let currentSearch = "";
const ORDER_DRAFT_KEY = "natalya-kamalova-order-draft";

function renderSongFilters() {
  filtersWrap.innerHTML = songCategories
    .map(
      (category) => `
        <button class="filter-btn ${category === currentCategory ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");

  filtersWrap.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category;
      renderSongFilters();
      renderSongs();
    });
  });
}

function renderSongs() {
  const filteredSongs =
    currentCategory === "Все"
      ? songs
      : songs.filter((song) => song.category === currentCategory);

  const searchNormalized = currentSearch.trim().toLowerCase();
  const visibleSongs = filteredSongs.filter((song) => {
    if (!searchNormalized) return true;
    const content = `${song.title} ${song.description} ${song.category}`.toLowerCase();
    return content.includes(searchNormalized);
  });

  songsGrid.innerHTML = visibleSongs
    .map(
      (song) => `
        <article class="song-card">
          <span class="song-category-badge">${song.category}</span>
          <h3 class="mt-3 font-display text-lg font-semibold">${song.title}</h3>
          <p class="mt-2 text-sm text-ink/80">${song.description}</p>
          <audio class="mt-4 w-full" controls preload="none">
            <source src="${song.src}" type="audio/mpeg" />
            Ваш браузер не поддерживает аудиоэлемент.
          </audio>
        </article>
      `
    )
    .join("");

  if (!visibleSongs.length) {
    songsGrid.innerHTML = `
      <article class="song-card sm:col-span-2 lg:col-span-3">
        <p class="font-medium">По вашему запросу песни не найдены.</p>
        <p class="mt-2 text-sm text-ink/75">Попробуйте изменить категорию или ключевое слово.</p>
      </article>
    `;
  }
}

function renderOrderCategories() {
  categoriesGrid.innerHTML = orderCategories
    .map(
      (item) => `
        <article class="category-card animate-on-scroll">
          <h3 class="font-display text-lg font-semibold">${item}</h3>
          <p class="mt-2 text-sm">Персональная композиция с учетом повода, характера и истории человека.</p>
        </article>
      `
    )
    .join("");
}

function renderBenefits() {
  benefitsList.innerHTML = benefits
    .map(
      (item) => `
        <li class="benefit-card animate-on-scroll">
          <p class="font-medium">${item}</p>
        </li>
      `
    )
    .join("");
}

function renderProcess() {
  processGrid.innerHTML = processSteps
    .map(
      (step, index) => `
        <article class="process-card animate-on-scroll">
          <span class="process-step">${index + 1}</span>
          <h3 class="mt-3 font-display text-xl font-semibold">${step.title}</h3>
          <p class="mt-2 text-sm text-ink/80">${step.description}</p>
        </article>
      `
    )
    .join("");
}

function renderReviews() {
  reviewsGrid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card animate-on-scroll">
          <p>"${review.text}"</p>
          <p class="review-author">${review.author}</p>
        </article>
      `
    )
    .join("");
}

function renderFaq() {
  faqList.innerHTML = faqItems
    .map(
      (item) => `
        <article class="faq-item animate-on-scroll">
          <button type="button">
            <span>${item.q}</span>
            <span>+</span>
          </button>
          <p>${item.a}</p>
        </article>
      `
    )
    .join("");

  faqList.querySelectorAll(".faq-item").forEach((faq) => {
    faq.querySelector("button").addEventListener("click", () => {
      faq.classList.toggle("open");
    });
  });
}

function renderContacts() {
  contactsGrid.innerHTML = contacts
    .map(
      (item) => `
        <div class="animate-on-scroll">
          <p class="text-sm font-semibold text-goldDark">${item.label}</p>
          <a href="${item.href}" class="mt-1 inline-block text-sm text-ink/80 hover:text-goldDark">${item.value}</a>
        </div>
      `
    )
    .join("");
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(orderForm);
  const payload = Object.fromEntries(formData.entries());

  // Подготовлено для подключения backend (Supabase/Firebase/API).
  console.log("Новая заявка:", payload);

  orderForm.reset();
  localStorage.removeItem(ORDER_DRAFT_KEY);
  formMessage.textContent =
    "Спасибо! Ваша заявка отправлена. Наталья свяжется с вами в ближайшее время.";
}

function saveOrderDraft() {
  const formData = new FormData(orderForm);
  const payload = Object.fromEntries(formData.entries());
  localStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(payload));
}

function loadOrderDraft() {
  const rawDraft = localStorage.getItem(ORDER_DRAFT_KEY);
  if (!rawDraft) return;

  try {
    const draft = JSON.parse(rawDraft);
    Object.entries(draft).forEach(([name, value]) => {
      const field = orderForm.elements.namedItem(name);
      if (field && typeof value === "string") {
        field.value = value;
      }
    });
  } catch (_error) {
    localStorage.removeItem(ORDER_DRAFT_KEY);
  }
}

function setupHeaderScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (window.scrollY > 500) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  });
}

function setupMobileMenu() {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
}

function setupSearch() {
  songSearchInput.addEventListener("input", () => {
    currentSearch = songSearchInput.value;
    renderSongs();
  });
}

function setupOrderDraft() {
  loadOrderDraft();
  orderForm.addEventListener("input", saveOrderDraft);
}

function setupScrollTopButton() {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupFooterYear() {
  currentYear.textContent = String(new Date().getFullYear());
}

function init() {
  renderSongFilters();
  renderSongs();
  renderOrderCategories();
  renderProcess();
  renderBenefits();
  renderReviews();
  renderFaq();
  renderContacts();
  setupHeaderScroll();
  setupMobileMenu();
  setupSearch();
  setupOrderDraft();
  setupScrollTopButton();
  setupFooterYear();
  setupScrollAnimations();

  orderForm.addEventListener("submit", handleSubmit);
}

document.addEventListener("DOMContentLoaded", init);
