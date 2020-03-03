## netlify-plugin-debug

To test a quick debug to see the timeline of [Netlify builds][build] local and on deploy.

**_NOTES:_**

  - Config file commands run prior to package function hooks
    `Running build.lifecycle.onInit command from netlify.yml config file`  
    Runs prior to `plugins\debug\index.js` build.lifecycle.onInit
  - `index.js` function hook order is order of function timing
  - 

Using yarn here and a local dependency of the [`netlify-cli`][cli]

[cli]: https://github.com/netlify/cli
[build]: https://github.com/netlify/build
