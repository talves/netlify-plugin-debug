function formatPrint(text) {
  console.log(JSON.stringify(text, null, 2));
}

function pluginDebug(config) {
  return {
    name: "debug-plugin",
    // Hook into lifecycles
    onInit: options => {
      console.log("[onInit:init] Build Starting 🔥");
      console.log(`${config.options && config.options.message}`);
      // formatPrint(options);
    },
    onGetCache: options => {
      console.log("[onGetCache:getCache] Fetching the last build’s cache 🐾");
      // formatPrint(options);
    },
    onInstall: options => {
      console.log("[onInstall:install] Project dependencies are installing ⚙");
      // formatPrint(options);
    },
    onPreBuild: options => {
      console.log(
        "[onPreBuild:preBuild] Prior to building the functions and running the build commands 🎢"
      );
      // formatPrint(options);
    },
    onBuild: options => {
      console.log("[onBuild:build] Build commands are executing ✨");
      // formatPrint(options);
    },
    onFunctionsBuild: options => {
      console.log(
        "[onFunctionsBuild:functionsBuild] Serverless functions are building, if they exist on the site 🧨"
      );
      // formatPrint(options);
    },
    onFunctionsPackage: options => {
      console.log(
        "[onFunctionsPackage:package] Packaging functions to be deployed 🎁"
      );
      // formatPrint(options);
    },
    onPreDeploy: options => {
      console.log(
        "[onPreDeploy:preDeploy] Prior to the built package being deployed 🔮"
      );
      // formatPrint(options);
    },
    onSaveCache: options => {
      console.log("[onSaveCache:saveCache] Saving cached assets 🎨");
      // formatPrint(options);
    },
    onEnd: options => {
      console.log("[onEnd:finally] Site build finished, site deployed! 🚀");
      // formatPrint(options);
    }
  };
}

module.exports = pluginDebug;
