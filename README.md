# Citravelia — Website

Static site for **Citravelia**, a real estate consultancy for developers and private clients. No build step — plain HTML/CSS/JS.

## Files

```
citravelia/
├── index.html              # the site
├── styles.css               # all styling
├── script.js                 # nav, scroll animation, contact form
├── assets/
│   ├── logo.png               # original logo (white background)
│   └── logo-transparent.png   # logo with background removed — used on the site
└── README.md
```

## Upload to GitHub

1. Create a new repository on GitHub (e.g. `citravelia-site`).
2. Upload all the files above, keeping the `assets/` folder structure intact.
3. Go to **Settings → Pages** in the repository.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`.
5. GitHub will publish the site at `https://<your-username>.github.io/citravelia-site/`.

## Connecting citravelia.com

In your domain registrar's DNS settings, add:

- **A records** for the root domain (`citravelia.com`) pointing to GitHub Pages' IPs:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- A **CNAME record** for `www` pointing to `<your-username>.github.io`

Then, in the repo's **Settings → Pages → Custom domain**, enter `citravelia.com` and save — GitHub will add a `CNAME` file to the repo automatically and issue an HTTPS certificate (this can take up to 24 hours).

## Contact form note

The form currently opens the visitor's email client with the message pre-filled (it's a static site, so there's no server to receive submissions). If you'd like actual form submissions to land in your inbox without a mail client popping up, connect a form backend such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — both offer free tiers and take a few minutes to wire in.

## Editing content

- Copy, phone, and email live directly in `index.html`.
- Colors, fonts, and spacing live in `styles.css` under `:root` at the top of the file.
