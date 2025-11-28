
**Tech Stack:**
- Next.js 14 (App Router)
- React 18
- Pure CSS (No external CSS frameworks)
- Node.js

🧩 Components Structure

### 1. **Header Component** (`app/components/Header.js`)

**Purpose:** Main navigation and branding

**Features:**
- Top bar with date/time display
- Logo and branding
- Main navigation menu (14 categories)
- State-wise navigation (9 states)
- Search functionality
- Mobile-responsive hamburger menu
- Language switcher

**State Management:**
```javascript
- menuOpen: Boolean - Controls mobile menu visibility
- currentTime: String - Displays real-time clock
- currentDate: String - Displays current date in Hindi

2. BreakingNews Component (app/components/BreakingNews.js)

Purpose: Display breaking news ticker

Features:

-Auto-rotating news headlines (changes every 5 seconds)

-Animated text slider

-Click-through to full article

3. HeroSection Component (app/components/HeroSection.js)

Purpose: Featured news showcase

Layout:

-Main Hero (2/3 width): Large featured article with overlay

-Side Stories (1/3 width): 3 secondary news items

Features:

-Image optimization with Next.js Image

-Gradient overlay for text readability

-Hover effects

-Fallback for missing images

4. CategorySection Component (app/components/CategorySection.js)

Purpose: Display news by category

Features:

-Grid layout (2 columns on desktop, 1 on mobile)

Category badge

-Truncated titles (3 lines max)

-"Load More" button

-Empty state handling

5. NewsCard Component (Within CategorySection)

Purpose: Individual news item display

Structure:

┌─────────────────┐
│     Image       │ ← 400x200px
├─────────────────┤
│ Category Badge  │
│ Title (3 lines) │
│ Description     │
│ Time stamp      │
└─────────────────┘

6. Sidebar Component (app/components/Sidebar.js)

Purpose: Supplementary content display

Sections:

1 Trending Section:

-Numbered list (1–8)

-Click-through functionality

2 Video Section:

-Video thumbnails with play button overlay

-2 featured videos

3 Advertisement Section:

-Placeholder for ads

4 Latest Stories:

-Time-stamped news items

-Real-time updates

5 Social Media:

-Links to platforms

-Styled buttons (Facebook, Twitter, Instagram, YouTube)

7. Footer Component (app/components/Footer.js)

Purpose: Site-wide navigation and information

Layout (4 columns):

1 Categories (श्रेणियाँ)

2 States (राज्य)

3 Services (सेवाएं)

4 About Us (हमारे बारे में)

Footer Bottom:

-Copyright notice

-Tagline

8. SafeImage Component (app/components/SafeImage.js)

Purpose: Error-proof image loading

Features:

-Automatic error handling

-Fallback placeholder on error

-Loading state management

-Client-side component ('use client')

9. NoData Component (app/components/NoData.js)

Purpose: Empty state display

Features:

-Customizable title and message

-Optional home button

-Icon display 

-Centered layout

10. LoadingSpinner Component (app/components/LoadingSpinner.js)

Purpose: Loading state indication

Features:

-Animated CSS spinner

-Customizable loading text

-Centered display

11. ErrorBoundary Component (app/components/ErrorBoundary.js)

-Purpose: Catch and display React errors

Features:

-Error boundary for React components

-User-friendly error message

-Reload button

-Error logging



**Main Content (8 cols) + Sidebar (4 cols)**

**Why?**
-Optimal reading width (~800px for main content)
- Golden ratio (66/33) is visually pleasing
- Prioritizes primary content
- Perfect sidebar width for ads and trending
- Industry standard (used by NYTimes, BBC, etc.)
┌─────────────────────────┬──────────┐
│ Main Content (66%) │ Sidebar │
│ Hero + News │ (33%) │
└─────────────────────────┴──────────┘

text

---

### 2. Hero Section: 2-1 Split

**Large featured article (2/3) + 3 side stories (1/3)**

**Why?**
- Visual hierarchy - biggest = most important
- F-pattern reading (left-to-right, top-to-bottom)
- Shows 4 stories above fold without scrolling
- Large image drives engagement
- Balances impact and variety
┌────────────────┬─────┐
│ │ S 1 │
│ Main Feature ├─────┤
│ (Big Image) │ S 2 │
│ ├─────┤
│ │ S 3 │
└────────────────┴─────┘

text

---

### 3. Category Grid: 2-Column Layout

**Why 2 columns, not 3 or 4?**
- Easy to scan quickly
- Cards maintain good size (400px width)
- Images stay high quality
- Collapses naturally to 1 column on mobile
- Less scrolling than 1 column, less cramped than 3

**Rejected alternatives:**
- 3 columns: Cards too small, text cramped
- 1 column: Excessive scrolling
- 4 columns: Overwhelming, poor mobile experience

---

### 4. Sidebar Order (Top to Bottom)

1. ** Trending** - Most engaging content first
2. ** Videos** - Visual content captures attention
3. ** Ads** - Sandwiched between engaging content
4. ** Latest** - Time-sensitive updates
5. ** Social** - CTA at bottom

**Why this order?**
- Engages users immediately with trending
- Ads placed strategically (not ignored)
- Progressive engagement flow
- Sticky on desktop (follows scroll)

---

### 5. News Card Structure: Image-First Vertical
┌─────────────┐
│ Image │ ← Visual first (200px)
├─────────────┤
│ Category │ ← Context
│ Title │ ← Main content (3 lines max)
│ Description │ ← Preview (2 lines max)
│ Time │ ← Metadata
└─────────────┘

text

**Why this structure?**
- Image captures attention first
- Natural top-to-bottom reading flow
- Line-clamp prevents grid breaking
- Consistent card heights
- Clear visual hierarchy (size = importance)

---

### 6. Header: Three-Tier Structure
┌────────────────────────────────────┐
│ Time | Date हिन्दी | English│ ← Utility bar
├────────────────────────────────────┤
│ LOGO [Search] [Menu] │ ← Branding
├────────────────────────────────────┤
│ होम देश राजनीति खेल मनोरंजन... │ ← Main nav
├────────────────────────────────────┤
│ उत्तर प्रदेश दिल्ली बिहार... │ ← State nav
└────────────────────────────────────┘

text

**Why three tiers?**
- Clear separation of utility, branding, and navigation
- Sticky on scroll (entire header on desktop)
- Mobile: Only logo + hamburger stick (saves space)

---

### 7. Breaking News: Full-Width Red Banner

**Why?**
- Red = urgent/important (universal signal)
- Full-width = maximum visibility
- Auto-rotates every 5 seconds (shows multiple stories)
- Below header = prime position
- Non-intrusive (doesn't block content)

**Rejected:** Pop-ups (too intrusive), Vertical ticker (too much space)

---

### 8. Article Page: Single Column (900px max)

**Why centered single column?**
- Reading-optimized line length (65-75 characters)
- No distractions for focused reading
- Larger text (18px) for comfort
- Works same on all devices
- Line height 1.8 for spacious reading

---

### 9. Footer: 4-Column Layout

**Why 4 columns?**
- Logical grouping: Categories | States | Services | About
- Equal visual weight (balanced)
- Easy to scan
- Responsive: 2 cols (tablet), 1 col (mobile)

---

### 10. Responsive Strategy: Mobile-First

**Breakpoints:**
- **< 480px:** Mobile (1 column, large touch targets)
- **481-768px:** Tablet (2 cols, sidebar moves below)
- **769-1024px:** Small desktop (sidebar on right)
- **> 1024px:** Full desktop (max-width 1200px, sticky sidebar)

**Why mobile-first?**
- Majority of news consumed on mobile
- Easier to scale up than down
- Forces focus on essential content

---

### 11. Highlighting Top Stories

**Visual Hierarchy Techniques Used:**

1. **Size:** Hero = 800x450px, Cards = 400x200px
2. **Position:** Top-left gets most attention (F-pattern)
3. **Color:** Red badges for categories, red for CTAs
4. **Whitespace:** More space around important items
5. **Typography:** Bold titles (16px), lighter descriptions (14px)
6. **Badges:** Red category badges draw eye
7. **Hover effects:** Cards lift on hover (shows interactivity)

**Priority order:**
1. Hero main story (largest)
2. Hero side stories
3. Breaking news ticker
4. Category news (equal weight)
5. Sidebar trending

---

### 12. Design Principles Applied

**F-Pattern Reading:**
- Important content top-left
- Scannable horizontal sections
- Sidebar on right (secondary)

**Visual Hierarchy:**
- Size indicates importance
- Color draws attention (red)
- Whitespace creates focus

**Consistency:**
- All cards same structure
- Predictable navigation
- Uniform spacing (8px scale)

**Accessibility:**
- 44px minimum touch targets (mobile)
- High contrast text
- Semantic HTML structure

**Performance:**
- Images lazy-load
- Above-fold content prioritized
- Minimal CSS/JS

---

### Key Takeaway

**Layout philosophy:** 
> "Guide the user's eye from most to least important content, using size, position, and color, while maintaining clean, scannable sections that work on any device."

Every layout decision serves three goals:
1. **User engagement** (show best content first)
2. **Readability** (easy to scan and read)
3. **Responsiveness** (works everywhere)

 Challenges & Solutions
Challenge 1: Making the Website Dynamic
Problem:
Initially, the website was static with hardcoded content. The requirement was to make it fully dynamic with:

Category-based filtering
State-wise news sections
Individual article pages
Dynamic routing
Solution with AI Assistance:

Created Dynamic Routes:

Used Next.js App Router's [slug] pattern
Implemented generateStaticParams() for pre-rendering

Data Fetching:

Separated data into lib/data.js
Created helper functions for data access
Implemented server-side data fetching

URL Encoding Issues:

Hindi text in URLs needed proper encoding
Used decodeURIComponent() to handle special characters
AI helped by:

Suggesting proper URL encoding methods
Debugging Hindi character display issues
Providing URL structure examples


Challenge 2: Edge Cases and Error Handling
Problem:
The website needed to handle various edge cases:

Missing images
Empty categories
Very long titles
Invalid article IDs
API failures
Broken image links
Solution with AI Assistance:

Missing Images:

Created SafeImage component with automatic fallback
Client-side error handling with onError event

AI helped by:

Explaining the "Event handlers cannot be passed to Server Components" error
Suggesting the 'use client' directive
Providing placeholder design patterns

Empty States:

Created NoData component for empty categories
Conditional rendering based on data availability

AI helped by:

Designing user-friendly empty state UIs
Suggesting appropriate messaging
Providing fallback component patterns
404 and Error Pages:

Custom not-found.js for missing pages
error.js for runtime errors
Error boundary component

AI helped by:

Explaining Next.js error handling conventions
Creating user-friendly error messages
Implementing error recovery options
API Error Handling:

Try-catch blocks for all API calls
Proper error responses with status codes
Fallback data mechanisms

AI helped by:

Suggesting comprehensive error handling patterns
Providing proper HTTP status codes
Debugging API endpoint issues


Challenge 3: Testing Edge Cases
Problem:
Needed to thoroughly test various scenarios:

Missing data fields
Invalid URLs
Broken image links
Long content
Empty arrays
API failures
Solution with AI Assistance:

Created Test Page:

Dedicated /test route for edge cases
Visual demonstration of all error states

Mock Data for Edge Cases:

Added test category with problematic data

Loading States:

Created LoadingSpinner component
Skeleton loading cards

AI helped by:

Suggesting comprehensive test scenarios
Providing skeleton loading patterns
Creating visual loading indicators
Debugging test cases

Challenge 4: Image Optimization
Problem:

Large image files slowing down page load
Need for responsive images
Handling various image sources (Unsplash)
Event handler errors in Server Components
Solution with AI Assistance:

Next.js Image Component:

Replaced <img> with <Image>
Configured next.config.js for external domains

SafeImage Wrapper:

Client component for error handling
Automatic fallback to placeholder
AI helped by:

Explaining Server vs Client components
Debugging image loading errors
Configuring external image domains
Suggesting optimization strategies

Challenge 6: State Management (Hindi URLs)
Problem:

Hindi text in URLs causing encoding issues
Navigation between states and categories
Browser URL display problems
Solution with AI Assistance:

URL Encoding/Decoding:
// Encoding for links
<Link href={`/state/${encodeURIComponent('दिल्ली')}`}>

// Decoding in page
const state = decodeURIComponent(params.slug);

generateStaticParams for Hindi:

javascript
export async function generateStaticParams() {
  return states.map((state) => ({
    slug: state,  // Next.js handles encoding
  }));
}
AI helped by:

Explaining URL encoding for non-ASCII characters
Debugging Hindi text display in URLs
Providing encoding/decoding strategies
Testing URL navigation

**improvement that i will do if given more time

NewsAPI integration
Live data fetching
Auto-refresh
Bookmarks
Reading history
Personalized feed
Dark mode


**part of the assignment done with the help of AI**
-AI helped in styling the website making it look more clean and easy to understand
-It also helped  in giving logic where i got confused such as in image optimization and handling the errors if there were no news available
-it also helped in creating a boilerplate which i then altered it according the use i wanted to be done


**times when AI suggestions were suboptimal**
-when i asked for the boilerplate there were many times where many errors and the data structure was not accurate so i had to alter it according to the need and requirements
-i corrected my AI-generated snippets by comparing it through different LLMs and by going through different open source projects for some referrence

