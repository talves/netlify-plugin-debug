function pluginDebug(config) {
  return {
    name: "debug-plugin",
    // Hook into lifecycles
    onInit: () => {
      console.log("[onInit:init] Build Starting 🔥");
    },
    onGetCache: () => {
      console.log("[onGetCache:getCache] Fetching the last build’s cache 🐾");
    },
    onInstall: () => {
      console.log("[onInstall:install] Project dependencies are installing ⚙");
    },
    onPreBuild: () => {
      console.log(
        "[onPreBuild:preBuild] Prior to building the functions and running the build commands 🎢"
      );
    },
    onFunctionsBuild: () => {
      console.log(
        "[onFunctionsBuild:functionsBuild] Serverless functions are building, if they exist on the site 🧨"
      );
    },
    onBuild: () => {
      console.log("[onBuild:build] Build commands are executing ✨");
    },
    onPreDeploy: () => {
      console.log(
        "[onPreDeploy:preDeploy] Prior to the built package being deployed 🔮"
      );
    },
    onFunctionsPackage: () => {
      console.log(
        "[onFunctionsPackage:package] Packaging functions to be deployed 🎁"
      );
    },
    onSaveCache: () => {
      console.log("[onSaveCache:saveCache] Saving cached assets 🎨");
    },
    onEnd: () => {
      console.log("[onEnd:finally] Site build finished, site deployed! 🚀");
    }
  };
}

module.exports = pluginDebug;
