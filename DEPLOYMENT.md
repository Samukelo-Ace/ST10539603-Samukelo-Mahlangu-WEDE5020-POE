# Publishing the website

## GitHub Pages (free)
1. Open the repository: https://github.com/Samukelo-Ace/ST10539603-Samukelo-Mahlangu-WEDE5020-POE
2. Upload/commit the updated website files to the repository's `master` branch. Keep `index.html`, `style.css`, `script.js`, the five page files, `Images`, `robots.txt` and `sitemap.xml` in the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **master** and folder **/(root)**, then save.
6. Wait for GitHub Pages to publish. The project URL is normally `https://samukelo-ace.github.io/ST10539603-Samukelo-Mahlangu-WEDE5020-POE/`. Confirm the actual URL in Settings → Pages.
7. Open every page and test navigation, service search, gallery lightbox, map and both forms.

## Netlify alternative
1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Connect the GitHub repository above.
3. Leave the build command empty and set the publish directory to `/` (repository root).
4. Deploy the site and copy the published URL for submission.
5. If you use a Netlify URL instead of GitHub Pages, update the canonical URLs in each HTML page and the URLs in `sitemap.xml` and `robots.txt` to match the deployed site.

## Form activation
The forms use FormSubmit's AJAX endpoint addressed to `info@dlalisamoyenifoundation.org.za`. The first form submission may trigger an activation email to that inbox. The mailbox owner must open that activation email and approve the form before messages can be delivered. Test both forms after activation.
