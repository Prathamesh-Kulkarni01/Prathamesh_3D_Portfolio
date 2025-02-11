interface ParaElement extends HTMLElement {
  anim?: Animation;
  split?: { words: HTMLElement[], revert: () => void };
}

const splitText = (element: HTMLElement) => {
  const words = element.innerHTML.split(" ");
  element.innerHTML = words.map(word => `<span class="split-word">${word}</span>`).join(" ");
  const lines = element.querySelectorAll(".split-word");
  return {
    words: Array.from(lines) as HTMLElement[],
    revert: () => {
      element.innerHTML = words.join(" ");
    }
  };
};

const animateElements = (elements: HTMLElement[], options: KeyframeAnimationOptions) => {
  elements.forEach((element, index) => {
    element.animate(
      [
        { opacity: 0, transform: "translateY(80px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { ...options, delay: index * 50 }
    );
  });
};

export default function setSplitText() {
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as ParaElement;
        if (element.split) {
          animateElements(element.split.words, { duration: 1000, easing: "ease-out" });
        }
        observer.unobserve(element);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.cancel();
      para.split?.revert();
    }

    para.split = splitText(para);
    observer.observe(para);
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.cancel();
      title.split?.revert();
    }

    title.split = splitText(title);
    observer.observe(title);
  });
}
