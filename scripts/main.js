window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".hero-text h1");
  if (!heading) return;

  const text = heading.textContent;
  heading.textContent = "";

  let i = 0;
  function typeNextLetter() {
    if (i < text.length) {
      heading.textContent += text[i];
      i++;
      setTimeout(typeNextLetter, 50);
    }
  }
  typeNextLetter();
});