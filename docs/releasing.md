Release process

### Locally

1. clone / checkout branch, from within the `src` folder zip all files and folders (I'm using a GUI right now)

### Chrome Web Store

1. Go to [chrome developer dashboard](https://chrome.google.com/webstore/developer/dashboard) (in browser)
1. Click `edit` on `Oh Dear`
1. Choose file and select the zip created in [#locally]
1. Click upload
1. wait an inordinate amount of time for publishing (can be up to 24hr, but is generally ~1hour)
1. Go to [chrome developer dashboard](https://chrome.google.com/webstore/developer/dashboard) (in browser)
1. click `More info` on `Oh Dear`
1. click to download the main.crx (actually not named that after download. Something like `gilidmallionanede...crx`
1. zip that (github won't accept .crx files)
1. rename zip to `oh_dear-{version}-chrome.zip`

### Firefox web store

1. navigate to Firefox [submit new addon](https://addons.mozilla.org/en-GB/developers/addon/submit/distribution) page
1. Select `on your own`
1. Click `Continue`
1. Choose file and select the zip created in [#locally] using `Select a file` button
1. Ensure Firefox is ticked (unsure if firefox for android will work)
1. Wait for upload to complete
1. Click `Sign Add-on`
1. Select appropriate answer for source packers, obfuscators etc (our answer is No)
1. Click `Continue`
1. Click `Download oh_dear-{version}-fx.xpi`
1. Click `Go to My Submissions`
1. Click `Oh Dear - Plugin`
1. Click `Upload New Version`
1. Choose file and select the zip created in [#locally] using `Select a file` button
1. Ensure Firefox is ticked (unsure if firefox for android will work)
1. Wait for upload to complete
1. Click `Continue`
1. save & release version

TODO:
need to wait until next release as they won't let me re-release 0.0.4
