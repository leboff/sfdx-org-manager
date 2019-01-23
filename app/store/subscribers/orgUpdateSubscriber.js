const { ipcRenderer } = require('electron');

export default function orgUpdateSubscriber(store) {
  let currentValue;
  return () => {
    const previousValue = currentValue && JSON.stringify(currentValue);
    const state = store.getState();
    currentValue = state.orgs;

    if (previousValue !== JSON.stringify(currentValue)) {
      ipcRenderer.send('orgs-updated', state.orgs);
    }
  };
}
