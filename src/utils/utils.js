export function tg_theme_toggler() {
  const toggle_class = document.querySelector('.modeSwitch');
  toggle_class.addEventListener('change', () => {
    toggleTheme();
  });

  // Set toggle theme scheme
  function tg_set_scheme(tg_theme) {
    localStorage.setItem('tg_theme_scheme', tg_theme);
    document.documentElement.setAttribute("tg-theme", tg_theme);
  }

  // Toggle theme scheme
  function toggleTheme() {
    if (localStorage.getItem('tg_theme_scheme') === 'dark') {
      tg_set_scheme('light');
    } else {
      tg_set_scheme('dark');
    }
  }

  // Set the first theme scheme
  function tg_init_theme() {
    if (localStorage.getItem('tg_theme_scheme') === 'light') {
      tg_set_scheme('light');
      document.querySelector('.modeSwitch').checked = false;
    } else {
      tg_set_scheme('dark'); // Default to dark mode
      document.querySelector('.modeSwitch').checked = true;
    }
  }

  tg_init_theme();
}
