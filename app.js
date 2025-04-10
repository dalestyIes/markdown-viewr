const editor = document.getElementById('editor');
const output = document.getElementById('output');
const darkModeButton = document.getElementById('toggle-dark-mode');

// Render markdown to HTML
function renderMarkdown() {
  const markdownText = editor.value;
  output.innerHTML = marked(markdownText);
}

editor.addEventListener('input', renderMarkdown);

// Toggle dark mode
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Initial render
renderMarkdown();
