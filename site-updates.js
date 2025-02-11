function updateSiteContent() {
    // Update page title
    const pageName = document.title.split('-')[0].trim();
    document.title = `${pageName} - ${window.siteConfig.name}`;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = window.siteConfig.description;
    }

    // Update all images
    document.querySelectorAll('img[src*="naomi"]').forEach(img => {
        img.src = img.src.replace('Naomi-Portrait', 'abhishek-portrait');
        img.src = img.src.replace('naomi', 'abhishek');
    });

    // Update configuration
    const elementorConfig = window.elementorFrontendConfig;
    if (elementorConfig) {
        elementorConfig.post.title = document.title;
        elementorConfig.urls.assets = elementorConfig.urls.assets.replace('naomicreates.co.za', 'theabhisheksain.com');
    }
}

// Add this script to all pages and call it
document.addEventListener('DOMContentLoaded', updateSiteContent); 