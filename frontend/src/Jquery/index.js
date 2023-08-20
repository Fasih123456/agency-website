(function () {
  const FLASH_MIMETYPE = "application/x-shockwave-flash";
  const FUTURESPLASH_MIMETYPE = "application/futuresplash";
  const FLASH7_AND_8_MIMETYPE = "application/x-shockwave-flash2-preview";
  const FLASH_MOVIE_MIMETYPE = "application/vnd.adobe.flash.movie";
  const FLASH_ACTIVEX_CLASSID = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";

  class RuffleMimeTypeArray {
    constructor(mimeTypes) {
      this.__mimeTypes = [];
      this.__namedMimeTypes = {};
      if (mimeTypes) {
        for (let i = 0; i < mimeTypes.length; i++) {
          this.install(mimeTypes[i]);
        }
      }
    }
    install(mimeType) {
      const index = this.__mimeTypes.length;
      this.__mimeTypes.push(mimeType);
      this.__namedMimeTypes[mimeType.type] = mimeType;
      this[mimeType.type] = mimeType;
      this[index] = mimeType;
    }
    item(index) {
      // This behavior is done to emulate a 32-bit uint,
      // which browsers use.
      return this.__mimeTypes[index >>> 0];
    }
    namedItem(name) {
      return this.__namedMimeTypes[name];
    }
    get length() {
      return this.__mimeTypes.length;
    }
    [Symbol.iterator]() {
      return this.__mimeTypes[Symbol.iterator]();
    }
  }
  class RufflePlugin extends RuffleMimeTypeArray {
    constructor(name, description, filename) {
      super();
      this.name = name;
      this.description = description;
      this.filename = filename;
    }
  }
  class RufflePluginArray {
    constructor(plugins) {
      this.__plugins = [];
      this.__namedPlugins = {};
      for (let i = 0; i < plugins.length; i++) {
        this.install(plugins[i]);
      }
    }
    install(plugin) {
      const index = this.__plugins.length;
      this.__plugins.push(plugin);
      this.__namedPlugins[plugin.name] = plugin;
      this[plugin.name] = plugin;
      this[index] = plugin;
    }
    item(index) {
      // This behavior is done to emulate a 32-bit uint,
      // which browsers use. Cloudflare's anti-bot
      // checks rely on this.
      return this.__plugins[index >>> 0];
    }
    namedItem(name) {
      return this.__namedPlugins[name];
    }
    refresh() {
      // Nothing to do, we just need to define the method.
    }
    [Symbol.iterator]() {
      return this.__plugins[Symbol.iterator]();
    }
    get length() {
      return this.__plugins.length;
    }
  }
  /**
   * A fake plugin designed to trigger Flash detection scripts.
   */
  const FLASH_PLUGIN = new RufflePlugin("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js");
  /**
   * A fake plugin designed to allow early detection of if the Ruffle extension is in use.
   */
  const RUFFLE_EXTENSION = new RufflePlugin("Ruffle Extension", "Ruffle Extension", "ruffle.js");
  FLASH_PLUGIN.install({
    type: FUTURESPLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "spl",
    enabledPlugin: FLASH_PLUGIN,
  });
  FLASH_PLUGIN.install({
    type: FLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
  });
  FLASH_PLUGIN.install({
    type: FLASH7_AND_8_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
  });
  FLASH_PLUGIN.install({
    type: FLASH_MOVIE_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
  });
  RUFFLE_EXTENSION.install({
    type: "",
    description: "Ruffle Detection",
    suffixes: "",
    enabledPlugin: RUFFLE_EXTENSION,
  });
  function installPlugin(plugin) {
    if (!("install" in navigator.plugins) || !navigator.plugins["install"]) {
      Object.defineProperty(navigator, "plugins", {
        value: new RufflePluginArray(navigator.plugins),
        writable: false,
      });
    }
    const plugins = navigator.plugins;
    plugins.install(plugin);
    if (
      plugin.length > 0 &&
      (!("install" in navigator.mimeTypes) || !navigator.mimeTypes["install"])
    ) {
      Object.defineProperty(navigator, "mimeTypes", {
        value: new RuffleMimeTypeArray(navigator.mimeTypes),
        writable: false,
      });
    }
    const mimeTypes = navigator.mimeTypes;
    for (let i = 0; i < plugin.length; i += 1) {
      mimeTypes.install(plugin[i]);
    }
  }

  installPlugin(FLASH_PLUGIN);
  installPlugin(RUFFLE_EXTENSION);
})();

/* <![CDATA[ */
var ajaxData = { url: "https://www.winwinit.eu/wp-admin/admin-ajax.php" };
/* ]]> */

/* <![CDATA[ */
var wpcf7_recaptcha = {
  sitekey: "6LeABtoaAAAAAPjUCwBYQqQt3FnUnxrNuCZQw-EI",
  actions: { homepage: "homepage", contactform: "contactform" },
};
/* ]]> */

/* <![CDATA[ */
var wpcf7 = { api: { root: "https://www.winwinit.eu/wp-json/", namespace: "contact-form-7/v1" } };
/* ]]> */
