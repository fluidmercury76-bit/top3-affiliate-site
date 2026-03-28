async function loadInclude(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.status}`);
    }
    const html = await response.text();
    target.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadInclude("site-header", "/includes/site-header.html");
  await loadInclude("site-footer", "/includes/site-footer.html");
});
