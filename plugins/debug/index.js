function formatPrint(text) {
  console.log(JSON.stringify(text, null, 2));
}

function pluginDebug(config) {
  return {
    name: "debug-plugin",
    // Hook into lifecycles
    onInit: options => {
      console.log("Build Starting 🔥 - Before everythings");
      console.log(`${config.options && config.options.message}`);
      // formatPrint(options);
    },
    onPreGetCache: options => {
      console.log("Prior to on get cache 🐾");
      // formatPrint(options);
    },
    onGetCache: options => {
      console.log("[onGetCache:getCache] Fetching the last build’s cache 🐾");
      // formatPrint(options);
    },
    onPostGetCache: options => {
      console.log("After on get cache 🐾");
      // formatPrint(options);
    },
    onPreInstall: options => {
      console.log("Prior to on install ⚙");
      // formatPrint(options);
    },
    onInstall: options => {
      console.log("Project dependencies are installing ⚙");
      // formatPrint(options);
    },
    onPostInstall: options => {
      console.log("After on install ⚙");
      // formatPrint(options);
    },
    onPreBuild: options => {
      console.log("Prior to on build ✨");
      // formatPrint(options);
    },
    onBuild: options => {
      console.log("[onBuild:build] Build commands are executing ✨");
      // formatPrint(options);
    },
    onPostBuild: options => {
      console.log("After to on build ✨");
      // formatPrint(options);
    },
    onPreFunctionsBuild: options => {
      console.log("Prior to on functions build 🧨");
      // formatPrint(options);
    },
    onFunctionsBuild: options => {
      console.log(
        "Serverless functions are building, if they exist on the site 🧨"
      );
      // formatPrint(options);
    },
    onPostFunctionsBuild: options => {
      console.log("After on functions build 🧨");
      // formatPrint(options);
    },
    onPreFunctionsPackage: options => {
      console.log("Prior to on functions package 🎁");
      // formatPrint(options);
    },
    onFunctionsPackage: options => {
      console.log("Packaging functions to be deployed 🎁");
      // formatPrint(options);
    },
    onPostFunctionsPackage: options => {
      console.log("Prior to on functions package 🎁");
      // formatPrint(options);
    },
    onPreDeploy: options => {
      console.log("Prior to the built artifacts being deployed 🔮");
      // formatPrint(options);
    },
    onDeploy: options => {
      console.log("Built artifacts are deployed 🔮");
      // formatPrint(options);
    },
    onPostDeploy: options => {
      console.log("After built artifacts being deployed 🔮");
      // formatPrint(options);
    },
    onPreSaveCache: options => {
      console.log("Prior to saving cached assets 🎨");
      // formatPrint(options);
    },
    onSaveCache: options => {
      console.log("Saving cached assets 🎨");
      // formatPrint(options);
    },
    onPostSaveCache: options => {
      console.log("After saving cached assets 🎨");
      // formatPrint(options);
    },
    onSuccess: options => {
      console.log("Sucessful Build! ✨🚀✨");
      // formatPrint(options);
    },
    onError: options => {
      console.log("Unsucessful Build 👎☠💀");
      // formatPrint(options);
    },
    onEnd: options => {
      console.log("Site build finished, site deployed! 🚀");
      // formatPrint(options);
    }
  };
}

module.exports = pluginDebug;
