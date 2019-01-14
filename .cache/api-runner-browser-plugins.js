module.exports = [{
      plugin: require('/Users/gracescheibe/git/personal-website/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"YOUR_GOOGLE_ANALYTICS_TRACKING_ID","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"optimizeId":"YOUR_GOOGLE_OPTIMIZE_TRACKING_ID","experimentId":"YOUR_GOOGLE_EXPERIMENT_ID","variationId":"YOUR_GOOGLE_OPTIMIZE_VARIATION_ID","sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"example.com"},
    },{
      plugin: require('/Users/gracescheibe/git/personal-website/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/gracescheibe/git/personal-website/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
