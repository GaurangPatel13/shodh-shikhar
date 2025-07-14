// hero section javascript

const thumbSwiper = new Swiper(".thumbSwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  loop: false, // Important
});

const mainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
  on: {
    slideChange: function () {
      const activeIndex = this.realIndex; // real index without loop offset
      updateThumbVisibility(activeIndex);
    },
  },
});


function updateThumbVisibility(activeIndex) {
  const thumbSlides = document.querySelectorAll(".thumbSwiper .swiper-slide");

  thumbSlides.forEach((slide, index) => {
    if (index === activeIndex) {
      slide.style.opacity = 0; // Hide active thumb
    } else {
      slide.style.opacity = 1; // Show all others
    }
  });

  // Scroll the thumbSwiper to show the upcoming thumbs
  // Show the next 2 thumbnails after the hidden one
  thumbSwiper.slideTo(activeIndex + 1);
}


// marquee section javascript

const marquee = document.querySelector(".marquee-content");
marquee.innerHTML += marquee.innerHTML;

// host university section javascript

const track = document.getElementById("hostSliderTrack");
const slides = track.querySelectorAll("img");
const totalSlides = slides.length;

let currentIndex = 0;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 2100); // 1.5s pause + 0.6s transition

// host university section co-sponsor part

function slideImage(button, direction) {
  const slider = button.closest(".image-slider");
  const track = slider.querySelector(".image-track");
  const images = track.querySelectorAll("img");
  const totalSlides = images.length;
  const slideWidth = slider.offsetWidth;

  let currentIndex = parseInt(track.getAttribute("data-index")) || 0;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  track.setAttribute("data-index", currentIndex);
}

// reviews section javascript
// Testimonials Data
const testimonials = [
  {
    text1: `Shodh Shikhar was more than just a research conference—it was an inspiring academic journey. The platform brought together a diverse community of scholars, researchers, and educators from across disciplines, making it a truly interdisciplinary experience. The quality of paper presentations, panel discussions, and keynote speeches was outstanding, offering valuable insights into current and future trends in research.`,

    text2: `What stood out most was the flawless organization, the professionalism of the event coordinators, and the supportive environment that encouraged young researchers like me to share our work with confidence. I returned from the event not only with new ideas but also with meaningful connections and a renewed motivation to pursue excellence in research.
I wholeheartedly recommend Shodh Shikhar to anyone passionate about knowledge, innovation, and academic growth.`,
    author: "Dr. Aastha Kapoor",
    designation: "Postdoctoral Fellow, Delhi University",
  },
  {
    text1: `Shodh Shikhar was more than just a research conference—it was an inspiring academic journey. The platform brought together a diverse community of scholars, researchers, and educators from across disciplines, making it a truly interdisciplinary experience. The quality of paper presentations, panel discussions, and keynote speeches was outstanding, offering valuable insights into current and future trends in research.`,

    text2: `What stood out most was the flawless organization, the professionalism of the event coordinators, and the supportive environment that encouraged young researchers like me to share our work with confidence. I returned from the event not only with new ideas but also with meaningful connections and a renewed motivation to pursue excellence in research.
I wholeheartedly recommend Shodh Shikhar to anyone passionate about knowledge, innovation, and academic growth.`,
    author: "Dr. Raghav Sharma",
    designation: "Associate Professor, IISER Bhopal",
  },
  {
    text1: `Shodh Shikhar was more than just a research conference—it was an inspiring academic journey. The platform brought together a diverse community of scholars, researchers, and educators from across disciplines, making it a truly interdisciplinary experience. The quality of paper presentations, panel discussions, and keynote speeches was outstanding, offering valuable insights into current and future trends in research.`,

    text2: `What stood out most was the flawless organization, the professionalism of the event coordinators, and the supportive environment that encouraged young researchers like me to share our work with confidence. I returned from the event not only with new ideas but also with meaningful connections and a renewed motivation to pursue excellence in research.
I wholeheartedly recommend Shodh Shikhar to anyone passionate about knowledge, innovation, and academic growth.`,
    author: "Dr. Neha Bhatt",
    designation: "Research Scholar, JNU",
  },
];

let currentTestimonial = 0;
let currentVideo = 0;

// DOM Elements
const testimonialSlide = document.getElementById("testimonial-slide");
const videoTrack = document.getElementById("videoTrack");

// Testimonial Functions
function updateTestimonial(index) {
  const t = testimonials[index];
  testimonialSlide.innerHTML = `
    <p class="text1">${t.text1}</p>
    <p class="text2">${t.text2}</p>
    <h4>${t.author}</h4>
    <span>${t.designation}</span>
  `;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 7000); // auto scroll

// Video Carousel Functions
function updateVideoCarousel(index) {
  const videoWidth = videoTrack.querySelector("video").offsetWidth;
  videoTrack.style.transform = `translateX(-${index * videoWidth}px)`;
}

function nextVideo() {
  currentVideo = (currentVideo + 1) % videoTrack.children.length;
  updateVideoCarousel(currentVideo);
}

function prevVideo() {
  currentVideo =
    (currentVideo - 1 + videoTrack.children.length) %
    videoTrack.children.length;
  updateVideoCarousel(currentVideo);
}

// Init
updateTestimonial(currentTestimonial);

// gallery section javascript

const galleryTrack = document.getElementById("galleryTrack");
const slides1 = document.querySelectorAll(".gallery-slide");
const nextBtn = document.getElementById("galleryNext");
const prevBtn = document.getElementById("galleryPrev");

let currentGalleryIndex = 0;
const visibleSlides = 3;
const totalGallerySlides = slides1.length;
let interval;

function updateGallerySlide() {
  const slideWidth = slides1[0].offsetWidth;
  const offset = currentGalleryIndex * slideWidth;
  galleryTrack.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  if (currentGalleryIndex < totalGallerySlides - visibleSlides) {
    currentGalleryIndex++;
  } else {
    currentGalleryIndex = 0;
  }
  updateGallerySlide();
}

function prevSlide() {
  if (currentGalleryIndex > 0) {
    currentGalleryIndex--;
  } else {
    currentGalleryIndex = totalGallerySlides - visibleSlides;
  }
  updateGallerySlide();
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 6000); // 5s pause + 1s animation
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Initial setup
window.addEventListener("load", () => {
  updateGallerySlide();
  startAutoSlide();
});

// winner section javascript

// ========== 1. Static Data ==========
const winnerData = {
  2025: {
    year: 2025,
    paper: [
      { name: "Alice", title: "A Cutting Edge Machine Learning Model for crowd surveillance using YOLOV 8 University", dept: "CSE" },
      { name: "Bob", title: "Agri -Export Digital Dashboard", dept: "EEE" },
      { name: "Charlie", title: "Contemporary Science and Technology in Education: A Comprehensive Review", dept: "CIVIL" },
      { name: "David", title: "An Empirical Study to Measure Impact of Influencer Based marketing on Consumer Behaviour", dept: "IT" },
      { name: "Eva", title: "To Comparative Study to Assess Level of The Anxiety Toward Childbirth Among Primigravida Multigravida Mothers in Selected Hospital Bhopal (M.P.)", dept: "AGRI" },
      { name: "Frank", title: "Green Buildings", dept: "ARCH" },
    ],
    project: [
      { name: "Gina", title: "Solar Drone", dept: "EEE" },
      { name: "Harry", title: "Smart Wheelchair", dept: "MECH" },
      { name: "Irene", title: "Eco Irrigation", dept: "AGRI" },
      { name: "Jack", title: "Traffic AI", dept: "CSE" },
    ],
  },
  2024: { year: 2024, paper: [], project: [] },
  2023: { year: 2023, paper: [], project: [] },
  2022: { year: 2022, paper: [], project: [] },
  2021: { year: 2021, paper: [], project: [] },
};

// ========== 2. DOM Generation ==========
const tablesWrapper = document.querySelector(".year-tables-wrapper");
const years = Object.keys(winnerData).sort((a, b) => b - a);

years.forEach((year, index) => {
  const container = document.createElement("div");
  container.className = `year-content ${index === 0 ? "active" : ""}`;
  container.dataset.year = year;

  container.innerHTML = `
    <div class="all-controls-and-tabs">
    <h1 class="table-heading">Shodh Shikhar-${year} Winners List</h1>
    <div class="inner-tabs">
      <div class="inner-tab-container">
        <div class="inner-tab active" data-type="paper">Research Papers</div>
      <div class="inner-tab" data-type="project">Research Projects</div>
      </div>
      <div class="table-controls">
      <button class="download-btn">Download</button>
        <input class="search-input" type="text" placeholder="Search..." />
      </div>
    </div>
    </div>
    <div class="table-container">
      <table class="winner-table">
        <thead>
          <tr><th>S.No.</th><th>Author</th><th>Title of paper</th><th>Institute/University</th></tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div class="pagination-controls">
    <label class="rows-label">
  Show
  <select class="rows-per-page">
    <option value="5" selected>5</option>
    <option value="10">10</option>
    <option value="25">25</option>
  </select>
  rows
</label>
    <div class="pagination"></div>
    </div>
  `;

  tablesWrapper.appendChild(container);
});

// ========== 3. Tab Switching ==========
const yearTabs = document.querySelectorAll(".year-tab");
const allYearContents = document.querySelectorAll(".year-content");

yearTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".year-tab.active")?.classList.remove("active");
    tab.classList.add("active");

    const year = tab.dataset.year;
    allYearContents.forEach((content) => {
      content.classList.remove("active");
    });

    const activeContent = document.querySelector(
      `.year-content[data-year="${year}"]`
    );
    activeContent.classList.add("active");

    setActiveInnerTab(activeContent, "paper");
  });
});

function setActiveInnerTab(container, type) {
  const innerTabs = container.querySelectorAll(".inner-tab");
  innerTabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.type === type) tab.classList.add("active");
  });

  renderTable(container, type);
}

// ========== 4. Table Rendering ==========
function renderTable(container, type) {
  const year = container.dataset.year;
  const data = winnerData[year][type] || [];

  let currentPage = 1;
  let rowsPerPage = 5;

const rowsSelector = container.querySelector(".rows-per-page");
if (rowsSelector) {
  rowsSelector.addEventListener("change", () => {
    rowsPerPage = parseInt(rowsSelector.value);
    currentPage = 1;
    displayPage(currentPage);
  });
}

  let filteredData = [...data];

  const searchInput = container.querySelector(".search-input");
  const tbody = container.querySelector("tbody");
  const pagination = container.querySelector(".pagination");

  function displayPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    tbody.innerHTML = pageData
      .map(
        (row, index) => `
      <tr>
        <td>${start + index + 1}.</td>
        <td>${row.name}</td>
        <td>${row.title}</td>
        <td>${row.dept}</td>
      </tr>
    `
      )
      .join("");

    renderPagination();
  }

  function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pagination.innerHTML = "";

  // Don't show pagination if only 1 page
  if (totalPages <= 1) return;

  const createButton = (text, page, isActive = false, disabled = false) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    if (isActive) btn.classList.add("active");
    if (disabled) btn.disabled = true;
    btn.addEventListener("click", () => {
      currentPage = page;
      displayPage(currentPage);
    });
    return btn;
  };

  // First and Prev
  pagination.appendChild(createButton("«", 1, false, currentPage === 1));
  pagination.appendChild(createButton("‹", currentPage - 1, false, currentPage === 1));

  // Visible pages logic
  const maxVisible = 3;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  if (startPage > 1) {
    pagination.appendChild(createButton("1", 1, currentPage === 1));
    if (startPage > 2) pagination.appendChild(createEllipsis());
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.appendChild(createButton(i, i, currentPage === i));
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pagination.appendChild(createEllipsis());
    pagination.appendChild(createButton(totalPages, totalPages, currentPage === totalPages));
  }

  // Next and Last
  pagination.appendChild(createButton("›", currentPage + 1, false, currentPage === totalPages));
  pagination.appendChild(createButton("»", totalPages, false, currentPage === totalPages));
}

function createEllipsis() {
  const span = document.createElement("span");
  span.textContent = "...";
  span.className = "ellipsis";
  return span;
}


  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    filteredData = data.filter(
      (row) =>
        row.name.toLowerCase().includes(keyword) ||
        row.title.toLowerCase().includes(keyword) ||
        row.dept.toLowerCase().includes(keyword)
    );
    currentPage = 1;
    displayPage(currentPage);
  });

  displayPage(currentPage);
}

// ========== 5. Inner Tab Event Bind ==========
document.querySelectorAll(".year-content").forEach((container) => {
  const tabs = container.querySelectorAll(".inner-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const type = tab.dataset.type;
      setActiveInnerTab(container, type);
    });
  });

  // Initial render for paper tab
  renderTable(container, "paper");
});

// ========== 6. Export Button ==========
document.querySelectorAll(".download-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.closest(".year-content");
    const table = container.querySelector("table");
    const year = container.dataset.year;
    const type = container.querySelector(".inner-tab.active").dataset.type;

    const option = prompt("Enter 'pdf' or 'excel' to download:");

    if (option === "pdf") {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // Ensure the autoTable plugin is available
      if (doc.autoTable) {
        doc.autoTable({ html: table });
        doc.save(`${year}-${type}-winners.pdf`);
      } else {
        alert("autoTable plugin is not loaded correctly.");
      }
    } else if (option === "excel") {
      const wb = XLSX.utils.table_to_book(table);
      XLSX.writeFile(wb, `${year}-${type}-winners.xlsx`);
    }
  });
});
