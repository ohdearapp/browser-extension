const availabilityLink = {
        elem: document.getElementById('check-availability-link'),
        prefix: 'https://ohdear.app/tools/reachable?prefill='
    },
    certificateLink = {
        elem: document.getElementById('check-certificate-link'),
        prefix: 'https://ohdear.app/tools/certificate?prefill='
    },
    scheme_list = ['https://', 'http://'];

function isURL(tab) {
    for (let scheme of scheme_list) if (tab.url.startsWith(scheme)) return true;
    return false;
}

function run() {
    try {
        let browserAPI = typeof browser == 'object' ? browser : chrome;
        browserAPI.tabs.query({ currentWindow: true, active: true }, tabs => {
            if (tabs.length) {
                let tab = tabs.filter(isURL)[0];

                // Seeing errors in some cases where we have a tab, but it's undefined... Guard
                if (tab && tab.url) {
                    for (let link of [availabilityLink, certificateLink]) {
                        link.elem.href = link.prefix + encodeURIComponent(tab.url);
                        link.elem.target = '_blank';
                        link.elem.classList.remove('bg-darken'); // using this as a disabled state
                    }
                }
            }
        });
    } catch (e) {
        console.log(e);
        alert('Extension incompatible with browser. Cannot get active tab');
    }
}
document.addEventListener('DOMContentLoaded', run);
