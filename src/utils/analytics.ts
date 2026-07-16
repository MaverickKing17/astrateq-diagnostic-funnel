/**
 * Google Analytics 4 (GA4) Integration Utility
 * Supports real-time user flow and conversion event tracking.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Read the GA4 Measurement ID from the Vite environment
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

/**
 * Initializes Google Analytics 4 by dynamically injecting the official global tracking tag script (gtag.js)
 * into the document head if a Measurement ID is configured.
 */
export function initGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    console.log(
      "%c[Google Analytics] Analytics is running in simulation mode. Set VITE_GA_MEASUREMENT_ID in your environment to stream events live.",
      "color: #0ea5e9; font-weight: bold; font-family: monospace;"
    );
    return;
  }

  try {
    // Check if script is already injected
    const existingScript = document.getElementById("google-tag-manager-script");
    if (existingScript) return;

    // Create script tag for gtag.js
    const script = document.createElement("script");
    script.id = "google-tag-manager-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize the dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: true, // Automatically sends initial page_view event
      cookie_flags: "SameSite=None;Secure", // Recommended for cross-origin iframe security inside sandbox
    });

    console.log(
      `%c[Google Analytics] Live tracking connected successfully using measurement ID: ${GA_MEASUREMENT_ID}`,
      "color: #10b981; font-weight: bold; font-family: monospace;"
    );
  } catch (error) {
    console.error("[Google Analytics] Failed to initialize Google Analytics:", error);
  }
}

/**
 * Sends a custom tracking event to Google Analytics 4.
 * Automatically falls back to local console logging if GA is not configured.
 */
export function sendAnalyticsEvent(eventName: string, params?: Record<string, any>) {
  if (GA_MEASUREMENT_ID && typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, params);
      console.log(`[Google Analytics Event] Streamed "${eventName}":`, params);
    } catch (error) {
      console.error("[Google Analytics] Error streaming event:", error);
    }
  } else {
    // Simulated fallback log
    console.log(`[Simulated Analytics Event] ${eventName}:`, params);
  }
}
