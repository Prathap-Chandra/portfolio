// src/global.d.ts

// Extend the global Window interface
interface Window {
  gtag?: (...args: any[]) => void;
}
