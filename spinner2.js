let spinnerAnims = ["|", "/", "-", "\\", "\n"]
let delay = 100;
for (const anim of spinnerAnims) {
  setTimeout(() => {
    process.stdout.write(`\r${anim}`);
  }, delay);
  delay += 200;
};