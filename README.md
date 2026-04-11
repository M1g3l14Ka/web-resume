# Hi there 👋

## Live Demo: [https://michaelkasion.ru/](https://michaelkasion.ru/)

## Features

This is my personal interactive resume designed to showcase my skills and projects. It features a modern dark UI with animated tile backgrounds, horizontal project gallery, and interactive elements throughout.

## 🛠️ Tools & Tech Stack

- **Core:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Integrations:** Resend (Email API) + Server Actions

## 🗂️ Structure

- **`/` (Home):** Hero section with profile photo, tagline, CTA buttons, and horizontal project gallery with arrow navigation.
- **`/about`:** Full page about me — skills with progress bars, core values, work experience timeline, and CV download buttons (EN/RU).
- **`/contact`:** Contact page with form, social links, and quick info.
- **`not-found.tsx`:** Custom 404 page with humorous error messages and terminal-style decoration.

## 🗓️ Changelog

### 12.04.2026 — Full Project Rebuild

Complete redesign and restructuring of the portfolio site.

**What changed:**

- **Routing:** Replaced mega-landing page with proper multi-page architecture (`/`, `/about`, `/contact`, 404).
- **Navigation:** Added global Navbar with blur-glass effect, active route indicator, and mobile hamburger menu.
- **Modals → Pages:** Removed About Me and Hire Me modals. Converted them into full dedicated pages for better UX and SEO.
- **Horizontal Project Gallery:** Replaced vertical scroll with horizontal card carousel and arrow navigation buttons.
- **In Progress Badge:** Projects marked as "in progress" now display grayscale overlay with a centered badge.
- **Tile Background:** Unified tile background component (`TileBackground`) shared across all pages — fixed hydration errors and overflow issues.
- **Custom Cursor:** Standard cursor replaced with an animated fox emoji (🦊) that smoothly follows mouse movement.
- **Language:** Entire site translated to English.
- **CV Download:** Added dual CV download buttons (English and Russian) on the About page.
- **Performance:** Optimized animations using `requestAnimationFrame`, GPU-accelerated `translate3d`, lazy-loaded images, and removed unnecessary `useScroll` hooks.

**Files added:**
- `src/components/Navbar.tsx`
- `src/components/CursorFollower.tsx`
- `src/components/TileBackground.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/not-found.tsx`
- `public/cv/en/` and `public/cv/ru/`

**Files removed:**
- `src/components/Hero.tsx` (merged into HomePage)
- `src/components/ProjectsPage.tsx`
- `src/components/WorkPage.tsx`
- `src/components/FooterPage.tsx`
- `src/components/HireForm.tsx`
- `src/components/AboutMe.tsx`
- `src/components/HomePage.tsx` (rewritten)

## 🤪 What I Learned

- Deepened my knowledge of Tailwind CSS (complex gradients, grid layouts).
- Successfully integrated a real-world email service (Resend) using Next.js backend capabilities.
- Leveled up my animation skills with Framer Motion (scroll-driven effects, staggered appearances).
- Improved overall Next.js project architecture and component isolation.
- Built custom cursor with `requestAnimationFrame` for smooth GPU-accelerated animation.
- Learned to manage SSR/client hydration mismatches in Next.js.

## 🤔 Future Improvements

- Implementing even smoother, highly complex animations.
- Adding more micro-interactions for better user engagement.
- Adding unit and integration tests.
- Implementing dark/light theme toggle.
- Adding blog section.

## 🛜 How to Run Locally

If you want to run this project on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/M1g3l14Ka/pet-projects.git
   cd pet-projects/Next-projects/resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory
   - Copy the contents from `.env.example`
   - Add your Resend API key and email configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   RECIPIENT_EMAIL=your_email@example.com
   FROM_EMAIL=Portfolio Contact <your-verified-domain@yourdomain.com>
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

