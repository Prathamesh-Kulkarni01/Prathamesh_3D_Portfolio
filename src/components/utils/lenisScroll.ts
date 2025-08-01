import Lenis from 'lenis';

export class LenisScroll {
  private lenis: Lenis | null = null;
  private rafId: number | null = null;

  constructor() {
    // Don't initialize immediately - wait for first use
  }

  private initLenis() {
    this.lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }

  private setupRaf() {
    const raf = (time: number) => {
      if (this.lenis) {
        this.lenis.raf(time);
      }
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);
  }

  private ensureInitialized() {
    if (!this.lenis) {
      this.initLenis();
      this.setupRaf();
    }
  }

  scrollTop(value?: number) {
    this.ensureInitialized();
    if (this.lenis && value !== undefined) {
      this.lenis.scrollTo(value, { immediate: true });
    }
    return this;
  }

  scrollTo(target: string | number, smooth: boolean = true) {
    this.ensureInitialized();
    if (!this.lenis) return this;

    let targetElement: HTMLElement | null = null;
    let targetTop = 0;

    if (typeof target === 'string') {
      targetElement = document.querySelector(target);
      if (targetElement) {
        targetTop = targetElement.offsetTop;
      }
    } else {
      targetTop = target;
    }

    if (smooth) {
      this.lenis.scrollTo(targetTop);
    } else {
      this.lenis.scrollTo(targetTop, { immediate: true });
    }

    return this;
  }

  paused(value?: boolean) {
    this.ensureInitialized();
    if (this.lenis) {
      if (value !== undefined) {
        if (value) {
          this.lenis.stop();
        } else {
          this.lenis.start();
        }
      }
    }
    return this;
  }

  refresh() {
    this.ensureInitialized();
    if (this.lenis) {
      this.lenis.resize();
    }
    return this;
  }

  kill() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
  }

  static get() {
    return window.lenisInstance;
  }

  static refresh() {
    if (window.lenisInstance) {
      window.lenisInstance.refresh();
    }
  }
}

// Extend Window interface
declare global {
  interface Window {
    lenisInstance?: LenisScroll;
  }
}

// Create and export a singleton instance
export const lenisScroll = new LenisScroll();
window.lenisInstance = lenisScroll; 