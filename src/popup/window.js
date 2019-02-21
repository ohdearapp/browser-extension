const link = document.getElementById('check-link'),
      scheme_list = ["https://", "http://"];

function isURL(tab){
  for (let scheme of scheme_list) 
    if (tab.url.startsWith(scheme))
      return true;
  return false;
}

function run() {
  try {
    let browserAPI = (typeof browser == "object") ? browser : chrome;
    browserAPI.tabs.query({currentWindow: true, active: true}, (tabs) => {
      console.log(tabs);
      if (tabs.length) {
        let tab = tabs.filter(isURL)[0]
        link.href = 'https://ohdear.app/tools/reachable?prefill='+encodeURIComponent(tab.url);
        link.target = '_blank';
      }
    });
  } catch (e) {
    console.log(e);
    alert('Extension incompatible with browser. Cannot get active tab');
  }
}
document.addEventListener('DOMContentLoaded', run);
