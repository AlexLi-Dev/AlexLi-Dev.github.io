import gsap from "gsap";

const INTRO_KEY = "alexli-intro-v1";

export function initIntro(): void {
  const root = document.documentElement;
  const overlay = document.querySelector<HTMLElement>(".intro-overlay");

  if (!root.classList.contains("intro-active") || !overlay) return;

  const nameEl = overlay.querySelector(".intro-name");
  if (!nameEl) return;

  const rawName = nameEl.textContent ?? "";
  nameEl.textContent = "";
  [...rawName].forEach((ch) => {
    const mask = document.createElement("span");
    mask.className = "intro-letter-mask";
    const letter = document.createElement("span");
    letter.className = "intro-letter";
    letter.textContent = ch === " " ? "\u00A0" : ch;
    mask.appendChild(letter);
    nameEl.appendChild(mask);
  });

  const letters = overlay.querySelectorAll(".intro-letter");
  const fill = overlay.querySelector(".intro-progress-fill");
  const num = overlay.querySelector(".intro-progress-num");
  const content = overlay.querySelector(".intro-content");

  if (!fill || !num || !content) return;

  const counter = { value: 0 };
  let finished = false;

  gsap.set(overlay, { clipPath: "circle(0% at 50% 42%)" });
  gsap.set(letters, { yPercent: 120 });
  gsap.set(".intro-corner, .intro-rule, .intro-subtitle, .intro-progress, .intro-avatar", {
    opacity: 0,
  });

  const finish = () => {
    if (finished) return;
    finished = true;
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch (e) {
      /* ignore */
    }
    root.classList.remove("intro-active");
    window.setTimeout(() => overlay.remove(), 1000);
  };

  const watchdog = window.setTimeout(finish, 9000);

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(overlay, { clipPath: "circle(150% at 50% 42%)", duration: 0.55, ease: "power2.out" }, 0)
    .from(".intro-avatar", { scale: 0, rotation: -120, duration: 0.9, ease: "back.out(1.7)" }, 0.15)
    .to(".intro-avatar", { opacity: 1, duration: 0.3 }, 0.15)
    .to(letters, { yPercent: 0, duration: 0.75, stagger: 0.055, ease: "power4.out" }, 0.55)
    .to(".intro-rule, .intro-subtitle", { opacity: 1, duration: 0.5, stagger: 0.08 }, 1.15)
    .to(".intro-corner", { opacity: 1, duration: 0.5, stagger: 0.06 }, 1.0)
    .to(".intro-progress", { opacity: 1, duration: 0.4 }, 1.1)
    .fromTo(fill, { width: "0%" }, { width: "100%", duration: 1.5, ease: "power2.inOut" }, 1.1)
    .to(
      counter,
      {
        value: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          num.textContent = String(Math.round(counter.value)).padStart(3, "0");
        },
      },
      1.1
    )
    .to(content, { y: -26, opacity: 0, duration: 0.4, ease: "power2.in" }, 2.75)
    .to(
      overlay,
      {
        clipPath: "circle(0% at 50% 42%)",
        duration: 0.85,
        ease: "power3.inOut",
        onComplete: () => {
          window.clearTimeout(watchdog);
          finish();
        },
      },
      3.15
    );
}
