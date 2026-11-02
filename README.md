# Dlalisa Moyeni Academy Website — WEDE5020 Part 3

**Student:** Samukelo Mahlangu  
**Student number:** ST10539603  
**Module:** WEDE5020 — Web Development (Introduction)

## Project overview
This responsive five-page website introduces Dlalisa Moyeni Academy and provides information about its football and youth-development focus. It includes Home, About Us, Services, Enquiry and Contact pages.

## Website features
- Responsive navigation for desktop and mobile.
- JavaScript image gallery lightbox.
- FAQ accordion using accessible HTML disclosure elements.
- Dynamic service search and category filtering.
- Client-side validation for the enquiry and contact forms.
- Enquiry response that explains how to confirm availability and costs.
- Contact form that validates and prepares an email using the visitor's email application.
- Interactive Leaflet/OpenStreetMap map on the Contact page.
- SEO title tags, meta descriptions, heading structure, image alternative text, canonical links, `robots.txt` and `sitemap.xml`.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Academy introduction and image gallery |
| `about.html` | Academy background, vision, values and FAQs |
| `services.html` | Training and community opportunities with search/filter |
| `enquiry.html` | Enquiry form for training, volunteering and sponsorship |
| `contact.html` | Contact details, map and general message form |

## How to run
Open `index.html` in a modern web browser. An internet connection is required for Google Fonts, the Leaflet map library and OpenStreetMap map tiles/geocoding. All local HTML, CSS, JavaScript and image files are included in this repository.

## Forms and important limitations
Both forms validate the information in the browser and use the FormSubmit AJAX endpoint to submit JSON asynchronously to `info@dlalisamoyenifoundation.org.za`. On first use, FormSubmit may send an activation email to the recipient address; the mailbox owner must approve it before submissions can be delivered. A live internet connection is required. The enquiry response explains that availability and costs must be confirmed by the academy.

## SEO and publishing
The site includes page-specific metadata, descriptive image alt text, internal navigation, `robots.txt` and `sitemap.xml`. The canonical URLs and sitemap currently use the GitHub Pages project URL for the linked repository; update them if the final deployment uses a different domain. After publishing, submit the sitemap URL to Google Search Console if available. See `DEPLOYMENT.md` for GitHub Pages and Netlify steps.

## Changelog
### Part 3 — 2 November 2026
- Corrected the page structure by creating consistent, descriptive filenames for all five pages and updating navigation links to match the real files.
- Moved the stylesheet reference to the project root and created a central `style.css` file so every page loads the same responsive design.
- Rebuilt the Services page with academy opportunities instead of the enquiry form, and restored the Enquiry page with a dedicated enquiry form.
- Added a missing image to the About Us page and descriptive alternative text to images throughout the site.
- Added responsive mobile navigation, a JavaScript image lightbox, FAQ accordion elements, animated section entrances and dynamic service search/category filtering.
- Added client-side validation and user-facing error messages to the enquiry and contact forms. The enquiry form now displays a response explaining that availability and fees must be confirmed by the academy. Both forms submit asynchronously through FormSubmit after client-side validation.
- Added a Leaflet map using OpenStreetMap data to the Contact page, with a fallback link if the map cannot load.
- Added page-specific SEO titles and descriptions, keywords, canonical links, semantic headings, `robots.txt` and `sitemap.xml`.
- Added this README overview, implementation notes, changelog and references.
- No lecturer feedback for Part 2 was available at the time of these changes; therefore, the above corrections are based on a review of the submitted Part 2 source files and the Part 3 requirements, not on claimed lecturer feedback.

## References
- Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 2 November 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 2 November 2026).
- Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 2 November 2026).
- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).
- FormSubmit (n.d.) *FormSubmit — Easy form endpoints for your HTML forms*. Available at: https://formsubmit.co/ (Accessed: 2 November 2026).
- Leaflet (n.d.) *Leaflet — a JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 2 November 2026).
- W3C (n.d.) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 2 November 2026).

## GitHub repository
https://github.com/Samukelo-Ace/ST10539603-Samukelo-Mahlangu-WEDE5020-POE
