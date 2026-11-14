# Product Requirements Document (PRD)

## Project Overview

- **Project Name:** Personal Portfolio Website - Andre Ilyas
- **Target Audience:** Recruiters, Tech Lead, Potential Clients, & Tech Community
- **Core Vibe:** Dark Space / Galaxy Theme, Glassmorphic UI, Interactive, & Professional

## 1. Project Objectives

- Transformasi portofolio personal Andre Ilyas dari tampilan dasar menjadi portofolio modern berskala production-ready dengan nuansa **Space Glassmorphism**.
- Menampilkan keahlian utama secara interaktif:
  - Web & Software Development
  - Troubleshooting & IT Support
- Menyediakan jalur komunikasi dan konversi yang jelas melalui:
  - Call to Action
  - Media sosial
  - Buku tamu interaktif

## 2. Technical Stack & Tools

- **Frontend:** HTML5, CSS3, JavaScript (ES6+) / React.js
- **CSS Framework:** Tailwind CSS untuk styling, grid, dan glassmorphism
- **Icons & Animation:** Lucide Icons / FontAwesome, Framer Motion (opsional untuk animasi smooth scroll & floating)
- **Deployment Platform:** Vercel / GitHub Pages

## 3. Detailed Feature Specifications

### Module 1: Floating Navigation Bar (Header)

#### Layout

- Melayang di bagian atas tengah dalam bentuk **pill-shaped floating navbar**.

#### Features

- Background glassmorphism dengan efek `backdrop-blur`.
- Menu navigasi:
  - Beranda
  - Tentang
  - Portofolio
  - Kontak
- Indikator active state berbentuk pill highlight biru/ungu yang berpindah secara dinamis.
- Tombol navigasi cepat **Up/Down Scroll** di sisi kanan.

### Module 2: Hero Section (Home)

#### Left Column: Profile & Bio

- **Badge/Tagline:** "Halo, Selamat Datang di Ruang Saya"
- **Main Headline:** "Saya Andre Ilyas."
- **Sub-headline:** "Membangun solusi digital. Menyelesaikan masalah."
- **Tag Keahlian (Pill Badges):**
  - Web & Software
  - Troubleshooting & IT Support
- **Primary CTAs:**
  - **Button 1:** Lihat Proyek ↗
    - Aksen warna solid dengan efek hover glow.
  - **Button 2:** Kontak Saya →
    - Aksen outline / transparan.
- **Social Media Cards (Find Me):**
  - Kartu glassmorphism kecil berisi ikon kustom menuju:
    - GitHub
    - LinkedIn
    - Instagram

#### Right Column: Visual Profile Frame & Spotify Widget

- Frame foto profil melengkung (**Arch Frame**) dengan efek glow gradient di latar belakangnya.
- Tag kartu melayang: "Merancang. Memahami. Menyelesaikan."
- Interactive Audio/Spotify Widget (**Daily Rotation**):
  - Widget pemutar musik/playlist interaktif yang menampilkan lagu favorit saat coding.

### Module 3: About & Credentials Section

#### Sub-section A: About Me Layout

- Teks perkenalan besar: "Hi, I'm Andre Ilyas"
- Tombol **View Resume**.
- Foto profil cutout / transparan di bagian tengah.
- Deskripsi latar belakang pendidikan/keahlian.
- Tombol **View Projects ( < > )**.

#### Sub-section B: Education, Experience & Stats

- Grid dua kolom:
  - Kartu riwayat pendidikan di sisi kiri.
  - Kartu pengalaman organisasi/kerja di sisi kanan.
- **Counter Stats Bar:**
  - Projects Completed
  - Certificates
  - Awards

### Module 4: Tech Stack & Projects Showcase

- Tab navigasi filter:
  - Projects
  - Certificates
  - Awards
  - Tech Stack
- **Interactive Tech Stack Grid:**
  - Kartu bernuansa glassmorphism.
  - Menampilkan logo dan nama teknologi yang dikuasai, seperti:
    - HTML
    - CSS
    - JavaScript
    - React
    - Node.js
    - Python
    - Dan teknologi lainnya.
- **Project Cards:**
  - Gambar pratinjau proyek.
  - Tag teknologi.
  - Tombol **Live Demo**.
  - Link **GitHub Repository**.

### Module 5: Contact & Interactive Guestbook

#### Left Column: Direct Contact

- Form pesan langsung dengan field:
  - Nama
  - Email
  - Pesan
- Tautan media sosial resmi:
  - LinkedIn
  - Instagram
  - GitHub

#### Right Column: Interactive Guestbook / Live Comments

- Fitur buku tamu interaktif bagi pengunjung untuk meninggalkan komentar publik.
- Komentar dapat menyertakan:
  - Nama
  - Foto avatar

## 4. UI/UX & Visual Guidelines

- **Color Palette:**
  - **Background Utama:** `#0A0D14` / `#0D0B18` (Space Dark)
  - **Primary Accent:** `#3B82F6` (Electric Blue) / `#8B5CF6` (Purple Glow)
  - **Card Fill:** `rgba(255, 255, 255, 0.05)` dengan `backdrop-filter: blur(12px)`
  - **Text Primary:** `#FFFFFF`
  - **Text Secondary:** `#9CA3AF`
- **Background Effects:**
  - Partikel bintang melayang menggunakan particle/constellation canvas.
  - Efek radial glow gradient di belakang elemen penting.

## 5. Phased Implementation Roadmap

### Phase 1: Setup & Design System

- Menyiapkan struktur folder.
- Mengonfigurasi Tailwind CSS dan gaya glassmorphism.
- Membuat latar belakang animasi bintang.

### Phase 2: Header & Hero Section

- Membangun Floating Navbar.
- Menyesuaikan teks dan CTA Hero.
- Membuat Social Media Cards.
- Membuat frame foto.

### Phase 3: About & Credentials

- Membuat layout tiga kolom About Me.
- Membuat kartu Pendidikan/Pengalaman.
- Membuat Stats Counter.

### Phase 4: Tech Stack & Projects Showcase

- Membuat sistem tabbing.
- Membuat grid layout untuk teknologi.
- Membuat daftar proyek.

### Phase 5: Contact, Guestbook & Polishing

- Membuat form kontak.
- Membuat widget buku tamu.
- Mengoptimalkan responsiveness untuk HP dan tablet.
- Menguji persistensi light/dark mode.
