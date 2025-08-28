# Sitemap Verification and Submission Guide

This guide explains how to verify the sitemap for your Astro project and submit it to Google Search Console.

## 1. Automatic Sitemap Generation

Your project is configured with the `@astrojs/sitemap` integration. This means that a `sitemap.xml` file is **automatically generated** every time you build your website. You do not need to create or update it manually.

The sitemap is crucial for SEO as it helps Google and other search engines efficiently discover and index all the pages on your website.

## 2. How to Verify the Sitemap

Before deploying, you can verify the contents of the sitemap locally.

1.  **Build Your Project:**
    Run the following command in your terminal:
    ```bash
    npm run build
    ```

2.  **Locate the Sitemap:**
    After the build is complete, a new `dist/` directory will be created. Your sitemap will be located at:
    ```
    dist/sitemap-index.xml
    ```
    *(Note: Astro might generate a `sitemap-index.xml` which then links to other sitemaps, like `sitemap-0.xml`. This is a standard practice for managing multiple pages and is perfectly fine.)*

3.  **Inspect the Contents:**
    Open the `sitemap-index.xml` and any linked sitemap files (e.g., `sitemap-0.xml`) in a text editor. You should see a list of all the pages on your website, including material pages, service pages, and blog posts. Verify that the URLs are correct.

## 3. How to Submit to Google Search Console

Once your website is deployed, you need to tell Google where to find your sitemap.

1.  **Log in to Google Search Console:**
    Go to [https://search.google.com/search-console/](https://search.google.com/search-console/) and select your website property.

2.  **Navigate to Sitemaps:**
    In the left-hand menu, under the "Indexing" section, click on **Sitemaps**.

3.  **Add a New Sitemap:**
    *   In the "Add a new sitemap" section, you only need to enter the path to your sitemap file.
    *   Enter: `sitemap-index.xml`
    *   The full URL should look like `https://www.tepatlaser.com/sitemap-index.xml`.

4.  **Click Submit:**
    Google will now crawl and process your sitemap. It may take some time for the status to update. Once processed, you should see a "Success" status.

By following these steps, you ensure that search engines can effectively crawl and rank your website.
