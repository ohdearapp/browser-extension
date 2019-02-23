const availabilityLink = {
    elem: document.getElementById('check-availability-link'),
    prefix: 'https://ohdear.app/tools/reachable?prefill='
};
const certificateLink = {
    elem: document.getElementById('check-certificate-link'),
    prefix: 'https://ohdear.app/tools/certificate?prefill='
};
const scheme_list = ['https://', 'http://'];

function run() {
    try {
        const browserApi = typeof browser === 'object' ? browser : chrome;

        browserApi.tabs.query({ currentWindow: true, active: true }, tabs => {
            const tab = findActiveTab(tabs);

            if (!tab) {
                return;
            }

            for (let link of [availabilityLink, certificateLink]) {
                link.elem.href = link.prefix + encodeURIComponent(tab.url);
                link.elem.target = '_blank';
                link.elem.classList.remove('disabled');
            }
        });
    } catch (exception) {
        alert("The extension couldn't be loaded.");
    }
}

function findActiveTab(tabs) {
    if (tabs.length === 0) {
        return;
    }

    let tab = tabs.filter(isUrl)[0];

    if (!tab.url) {
        return;
    }

    return tab;
}

function isUrl(tab) {
    for (let scheme of scheme_list) {
        if (tab.url.startsWith(scheme)) {
            return true;
        }
    }

    return false;
}

document.addEventListener('DOMContentLoaded', run);
