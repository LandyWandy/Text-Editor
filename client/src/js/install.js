const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async (event) => {
  butInstall.style.display = 'none';
  deferredPrompt.prompt();
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
  deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});
