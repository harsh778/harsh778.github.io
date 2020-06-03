window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
deferredInstallPrompt = evt;
installButton.removeAttribute('hidden');
deferredInstallPrompt.prompt();
// Hide the install button, it can't be called twice.
evt.srcElement.setAttribute('hidden', true);
deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
window.addEventListener('appinstalled', logAppInstalled);
