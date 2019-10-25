function pluginDebug(config) {
  return {
    name: "debug-plugin",
    // Hook into lifecycles
    init: () => {
      console.log("Build Starting 🔥");
    },
    getCache: () => {
      console.log("Fetching the last build’s cache 🐾");
    },
    install: () => {
      console.log("Project dependencies are installing ⚙");
    },
    preBuild: () => {
      console.log(
        "Prior to building the functions and running the build commands 🎢"
      );
    },
    functionsBuild: () => {
      console.log(
        "Serverless functions are building, if they exist on the site 🧨"
      );
    },
    build: () => {
      console.log("Build commands are executing ✨");
    },
    preDeploy: () => {
      console.log("Prior to the built package being deployed 🔮");
    },
    package: () => {
      console.log("Packaging site to be deployed 🎁");
    },
    saveCache: () => {
      console.log("Saving cached assets 🎨");
    },
    finally: () => {
      console.log("Site build finished, site deployed! 🚀");
    }
  };
}

module.exports = pluginDebug;
