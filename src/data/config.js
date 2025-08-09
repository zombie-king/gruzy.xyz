// Configuration file for gruzy.xyz

const config = {
    // Site information
    site: {
        name: 'Gruzy.xyz',
        description: 'A modern web application',
        version: '1.0.0',
        author: 'Your Name'
    },
    
    // API endpoints
    api: {
        baseUrl: 'https://api.example.com',
        timeout: 5000
    },
    
    // Feature flags
    features: {
        darkMode: true,
        animations: true,
        analytics: false
    },
    
    // UI settings
    ui: {
        theme: 'light',
        language: 'en',
        itemsPerPage: 10
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.CONFIG = config;
}
