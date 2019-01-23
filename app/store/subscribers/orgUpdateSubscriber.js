const { ipcRenderer } = require('electron');

export default function orgUpdateSubscriber(store) {
  return () => {
    let currentValue;
    const previousValue = currentValue && JSON.stringify(currentValue.orgs);
    const state = store.getState();
    currentValue = state && state.orgs;

    if (previousValue !== JSON.stringify(currentValue)) {
      console.log('Orgs Updated!');
      ipcRenderer.send('orgs-updated', state.orgs);
    }
  };
}
