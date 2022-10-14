(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop2 in b || (b = {}))
      if (__hasOwnProp.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    if (__getOwnPropSymbols)
      for (var prop2 of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop2))
          __defNormalProp(a, prop2, b[prop2]);
      }
    return a;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // utils/fivem.ts
  var Delay, uuidv4;
  var init_fivem = __esm({
    "utils/fivem.ts"() {
      Delay = (ms) => new Promise((res) => setTimeout(res, ms));
      uuidv4 = () => {
        let uuid = "";
        for (let ii = 0; ii < 32; ii += 1) {
          switch (ii) {
            case 8:
            case 20:
              uuid += "-";
              uuid += (Math.random() * 16 | 0).toString(16);
              break;
            case 12:
              uuid += "-";
              uuid += "4";
              break;
            case 16:
              uuid += "-";
              uuid += (Math.random() * 4 | 8).toString(16);
              break;
            default:
              uuid += (Math.random() * 16 | 0).toString(16);
          }
        }
        return uuid;
      };
    }
  });

  // client/cl_utils.ts
  var ClientUtils, RegisterNuiCB, playerLoaded, RegisterNuiProxy, verifyExportArgType;
  var init_cl_utils = __esm({
    "client/cl_utils.ts"() {
      init_fivem();
      init_client();
      ClientUtils = class {
        constructor(settings) {
          this._defaultSettings = {
            promiseTimeout: 15e3
          };
          this.setSettings(settings);
        }
        setSettings(settings) {
          this._settings = __spreadValues(__spreadValues({}, this._defaultSettings), settings);
        }
        emitNetPromise(eventName, ...args) {
          return new Promise((resolve, reject) => {
            let hasTimedOut = false;
            setTimeout(() => {
              hasTimedOut = true;
              reject(`${eventName} has timed out after ${this._settings.promiseTimeout} ms`);
            }, this._settings.promiseTimeout);
            const uniqId = uuidv4();
            const listenEventName = `${eventName}:${uniqId}`;
            emitNet(eventName, listenEventName, ...args);
            const handleListenEvent = (data) => {
              removeEventListener(listenEventName, handleListenEvent);
              if (hasTimedOut)
                return;
              resolve(data);
            };
            onNet(listenEventName, handleListenEvent);
          });
        }
      };
      RegisterNuiCB = (event, callback) => {
        RegisterNuiCallbackType(event);
        on(`__cfx_nui:${event}`, callback);
      };
      playerLoaded = () => {
        return new Promise((resolve) => {
          const id = setInterval(() => {
            if (global.isPlayerLoaded)
              resolve(id);
          }, 50);
        }).then((id) => clearInterval(id));
      };
      RegisterNuiProxy = (event) => {
        RegisterNuiCallbackType(event);
        on(`__cfx_nui:${event}`, (data, cb) => __async(void 0, null, function* () {
          if (!global.isPlayerLoaded)
            yield playerLoaded();
          try {
            const res = yield ClUtils.emitNetPromise(event, data);
            cb(res);
          } catch (e) {
            console.error("Error encountered while listening to resp. Error:", e);
            cb({ status: "error" });
          }
        }));
      };
      verifyExportArgType = (exportName, passedArg, validTypes) => {
        const passedArgType = typeof passedArg;
        if (!validTypes.includes(passedArgType))
          throw new Error(`Export ${exportName} was called with incorrect argument type (${validTypes.join(", ")}. Passed: ${passedArg}, Type: ${passedArgType})`);
      };
    }
  });

  // ../shared/deepMergeObjects.ts
  function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  function deepMergeObjects(target, ...sources) {
    if (!sources.length)
      return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key])
            Object.assign(target, { [key]: {} });
          deepMergeObjects(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return deepMergeObjects(target, ...sources);
  }
  var init_deepMergeObjects = __esm({
    "../shared/deepMergeObjects.ts"() {
    }
  });

  // ../config.default.json
  var PhoneAsItem, general, database, images, imageSafety, profanityFilter, twitter, match, debug, config_default_default;
  var init_config_default = __esm({
    "../config.default.json"() {
      PhoneAsItem = {
        enabled: false,
        exportResource: "my-core-resource",
        exportFunction: "myCheckerFunction"
      };
      general = {
        useResourceIntegration: false,
        toggleKey: "f1",
        toggleCommand: "phone",
        defaultLanguage: "en"
      };
      database = {
        useIdentifierPrefix: false,
        playerTable: "users",
        identifierColumn: "identifier",
        identifierType: "license",
        profileQueries: true,
        phoneNumberColumn: "phone_number"
      };
      images = {
        url: "https://i.pma.network/v1/image",
        type: "imgur",
        imageEncoding: "jpg",
        contentType: "multipart/form-data",
        authorizationPrefix: "Client-ID",
        useAuthorization: false,
        returnedDataIndexes: ["data", "link"]
      };
      imageSafety = {
        filterUnsafeImageUrls: true,
        embedUnsafeImages: true,
        embedUrl: "https://i.pma.network/v1/embed",
        safeImageUrls: [
          "imgur.com",
          "file.glass",
          "dropbox.com",
          "tenor.com",
          "discord.com",
          "discordapp.com",
          "wikipedia.org",
          "i.pma.network"
        ]
      };
      profanityFilter = {
        enabled: false,
        badWords: ["esx"]
      };
      twitter = {
        showNotifications: true,
        generateProfileNameFromUsers: true,
        allowEditableProfileName: true,
        allowDeleteTweets: true,
        allowReportTweets: true,
        allowRetweet: false,
        characterLimit: 160,
        newLineLimit: 10,
        enableAvatars: true,
        enableEmojis: true,
        enableImages: true,
        maxImages: 3
      };
      match = {
        generateProfileNameFromUsers: true,
        allowEditableProfileName: true
      };
      debug = {
        level: "error",
        enabled: true,
        sentryEnabled: true
      };
      config_default_default = {
        PhoneAsItem,
        general,
        database,
        images,
        imageSafety,
        profanityFilter,
        twitter,
        match,
        debug
      };
    }
  });

  // client/cl_config.ts
  var config;
  var init_cl_config = __esm({
    "client/cl_config.ts"() {
      init_deepMergeObjects();
      init_config_default();
      config = (() => {
        const resourceName = GetCurrentResourceName();
        const config2 = JSON.parse(LoadResourceFile(resourceName, "config.json"));
        let phoneAsItem = GetConvar("npwd:phoneAsItem", "");
        if (phoneAsItem !== "") {
          phoneAsItem = JSON.parse(phoneAsItem);
          Object.entries(config2.PhoneAsItem).forEach(([key, value]) => {
            if (phoneAsItem[key] && typeof value === typeof phoneAsItem[key]) {
              config2.PhoneAsItem[key] = phoneAsItem[key];
            }
          });
        }
        return deepMergeObjects({}, config_default_default, config2);
      })();
    }
  });

  // utils/apps.ts
  var apps_default;
  var init_apps = __esm({
    "utils/apps.ts"() {
      apps_default = {
        TWITTER: "TWITTER",
        MATCH: "MATCH",
        MESSAGES: "MESSAGES",
        NOTES: "NOTES",
        MARKETPLACE: "MARKETPLACE",
        CONTACTS: "CONTACTS",
        CAMERA: "CAMERA",
        PHONE: "PHONE"
      };
    }
  });

  // utils/messages.ts
  function sendMessage(app, method, data) {
    return SendNUIMessage({
      app,
      method,
      data
    });
  }
  function sendTwitterMessage(method, data = {}) {
    return sendMessage(apps_default.TWITTER, method, data);
  }
  function sendMessageEvent(method, data = {}) {
    return sendMessage(apps_default.MESSAGES, method, data);
  }
  function sendNotesEvent(method, data = {}) {
    return sendMessage(apps_default.NOTES, method, data);
  }
  function sendMarketplaceEvent(method, data = {}) {
    sendMessage(apps_default.MARKETPLACE, method, data);
  }
  function sendContactsEvent(method, data = {}) {
    sendMessage(apps_default.CONTACTS, method, data);
  }
  function sendCameraEvent(method, data = {}) {
    sendMessage(apps_default.CAMERA, method, data);
  }
  function sendMatchEvent(method, data = {}) {
    return sendMessage(apps_default.MATCH, method, data);
  }
  function sendPhoneEvent(method, data = {}) {
    return sendMessage(apps_default.PHONE, method, data);
  }
  var init_messages = __esm({
    "utils/messages.ts"() {
      init_apps();
    }
  });

  // ../typings/phone.ts
  var init_phone = __esm({
    "../typings/phone.ts"() {
    }
  });

  // client/functions.ts
  function removePhoneProp() {
    if (prop != 0) {
      DeleteEntity(prop);
      prop = 0;
      propCreated = false;
    }
  }
  var prop, propCreated, phoneModel, newPhoneProp;
  var init_functions = __esm({
    "client/functions.ts"() {
      init_fivem();
      prop = 0;
      propCreated = false;
      phoneModel = "prop_amb_phone";
      newPhoneProp = () => __async(void 0, null, function* () {
        removePhoneProp();
        if (!propCreated) {
          RequestModel(phoneModel);
          while (!HasModelLoaded(phoneModel)) {
            yield Delay(1);
          }
          const playerPed = PlayerPedId();
          const [x, y, z] = GetEntityCoords(playerPed, true);
          prop = CreateObject(GetHashKey(phoneModel), x, y, z + 0.2, true, true, true);
          const boneIndex = GetPedBoneIndex(playerPed, 28422);
          AttachEntityToEntity(prop, playerPed, boneIndex, 0, 0, 0, 0, 0, -0, true, true, false, true, 1, true);
          propCreated = true;
        } else if (propCreated) {
          console.log("prop already created");
        }
      });
    }
  });

  // client/animations/animation.service.ts
  var AnimationService;
  var init_animation_service = __esm({
    "client/animations/animation.service.ts"() {
      init_functions();
      init_fivem();
      AnimationService = class {
        constructor() {
          this.onCall = false;
          this.phoneOpen = false;
          this.onCamera = false;
        }
        createAnimationInterval() {
          this.animationInterval = setInterval(() => __async(this, null, function* () {
            const playerPed = PlayerPedId();
            if (this.onCall) {
              this.handleCallAnimation(playerPed);
            } else if (this.phoneOpen && !this.onCamera) {
              this.handleOpenAnimation(playerPed);
            }
          }), 250);
        }
        setPhoneState(state, stateValue) {
          switch (state) {
            case 0 /* ON_CALL */:
              this.onCall = stateValue;
              break;
            case 1 /* PHONE_OPEN */:
              this.phoneOpen = stateValue;
              break;
            case 2 /* ON_CAMERA */:
              this.onCamera = stateValue;
              break;
          }
          if (!this.onCall && !this.phoneOpen) {
            if (this.animationInterval) {
              clearInterval(this.animationInterval);
              this.animationInterval = null;
            }
          } else if (!this.animationInterval) {
            this.createAnimationInterval();
          }
        }
        handleCallAnimation(playerPed) {
          if (IsPedInAnyVehicle(playerPed, true)) {
            this.handleOnCallInVehicle(playerPed);
          } else {
            this.handleOnCallNormal(playerPed);
          }
        }
        handleOpenAnimation(playerPed) {
          if (IsPedInAnyVehicle(playerPed, true)) {
            this.handleOpenVehicleAnim(playerPed);
          } else {
            this.handleOpenNormalAnim(playerPed);
          }
        }
        handleCallEndAnimation(playerPed) {
          if (IsPedInAnyVehicle(playerPed, true)) {
            this.handleCallEndVehicleAnim(playerPed);
          } else {
            this.handleCallEndNormalAnim(playerPed);
          }
        }
        handleCloseAnimation(playerPed) {
          if (IsPedInAnyVehicle(playerPed, true)) {
            this.handleCloseVehicleAnim(playerPed);
          } else {
            this.handleCloseNormalAnim(playerPed);
          }
        }
        openPhone() {
          return __async(this, null, function* () {
            newPhoneProp();
            if (!this.onCall) {
              this.handleOpenAnimation(PlayerPedId());
            }
            this.setPhoneState(1 /* PHONE_OPEN */, true);
          });
        }
        closePhone() {
          return __async(this, null, function* () {
            removePhoneProp();
            this.setPhoneState(1 /* PHONE_OPEN */, false);
            if (!this.onCall) {
              this.handleCloseAnimation(PlayerPedId());
            }
          });
        }
        startPhoneCall() {
          return __async(this, null, function* () {
            this.handleCallAnimation(PlayerPedId());
            this.setPhoneState(0 /* ON_CALL */, true);
          });
        }
        endPhoneCall() {
          return __async(this, null, function* () {
            this.handleCallEndAnimation(PlayerPedId());
            this.setPhoneState(0 /* ON_CALL */, false);
          });
        }
        openCamera() {
          return __async(this, null, function* () {
            this.setPhoneState(2 /* ON_CAMERA */, true);
          });
        }
        closeCamera() {
          return __async(this, null, function* () {
            this.setPhoneState(2 /* ON_CAMERA */, false);
          });
        }
        loadAnimDict(dict) {
          return __async(this, null, function* () {
            RequestAnimDict(dict);
            while (!HasAnimDictLoaded(dict)) {
              yield Delay(100);
            }
          });
        }
        handleOpenVehicleAnim(playerPed) {
          return __async(this, null, function* () {
            const dict = "anim@cellphone@in_car@ps";
            const anim = "cellphone_text_in";
            yield this.loadAnimDict(dict);
            if (!IsEntityPlayingAnim(playerPed, dict, anim, 3)) {
              SetCurrentPedWeapon(playerPed, 2725352035, true);
              TaskPlayAnim(playerPed, dict, anim, 7, -1, -1, 50, 0, false, false, false);
            }
          });
        }
        handleOpenNormalAnim(playerPed) {
          return __async(this, null, function* () {
            const dict = "cellphone@";
            const anim = "cellphone_text_in";
            yield this.loadAnimDict(dict);
            if (!IsEntityPlayingAnim(playerPed, dict, anim, 3)) {
              SetCurrentPedWeapon(playerPed, 2725352035, true);
              TaskPlayAnim(playerPed, dict, anim, 8, -1, -1, 50, 0, false, false, false);
            }
          });
        }
        handleCloseVehicleAnim(playerPed) {
          return __async(this, null, function* () {
            const DICT = "anim@cellphone@in_car@ps";
            StopAnimTask(playerPed, DICT, "cellphone_text_in", 1);
            StopAnimTask(playerPed, DICT, "cellphone_call_to_text", 1);
            removePhoneProp();
          });
        }
        handleCloseNormalAnim(playerPed) {
          return __async(this, null, function* () {
            const DICT = "cellphone@";
            const ANIM = "cellphone_text_out";
            StopAnimTask(playerPed, DICT, "cellphone_text_in", 1);
            yield Delay(100);
            yield this.loadAnimDict(DICT);
            TaskPlayAnim(playerPed, DICT, ANIM, 7, -1, -1, 50, 0, false, false, false);
            yield Delay(200);
            StopAnimTask(playerPed, DICT, ANIM, 1);
            removePhoneProp();
          });
        }
        handleOnCallInVehicle(playerPed) {
          return __async(this, null, function* () {
            const DICT = "anim@cellphone@in_car@ps";
            const ANIM = "cellphone_call_listen_base";
            if (!IsEntityPlayingAnim(playerPed, DICT, ANIM, 3)) {
              yield this.loadAnimDict(DICT);
              TaskPlayAnim(playerPed, DICT, ANIM, 3, 3, -1, 49, 0, false, false, false);
            }
          });
        }
        handleOnCallNormal(playerPed) {
          return __async(this, null, function* () {
            const DICT = "cellphone@";
            const ANIM = "cellphone_call_listen_base";
            if (!IsEntityPlayingAnim(playerPed, DICT, ANIM, 3)) {
              yield this.loadAnimDict(DICT);
              TaskPlayAnim(playerPed, DICT, ANIM, 3, 3, -1, 49, 0, false, false, false);
            }
          });
        }
        handleCallEndVehicleAnim(playerPed) {
          return __async(this, null, function* () {
            const DICT = "anim@cellphone@in_car@ps";
            const ANIM = "cellphone_call_to_text";
            StopAnimTask(playerPed, DICT, "cellphone_call_listen_base", 1);
            yield this.loadAnimDict(DICT);
            TaskPlayAnim(playerPed, DICT, ANIM, 1.3, 5, -1, 50, 0, false, false, false);
          });
        }
        handleCallEndNormalAnim(playerPed) {
          return __async(this, null, function* () {
            const DICT = "cellphone@";
            const ANIM = "cellphone_call_to_text";
            if (IsEntityPlayingAnim(playerPed, "cellphone@", "cellphone_call_listen_base", 49)) {
              yield this.loadAnimDict(DICT);
              TaskPlayAnim(playerPed, DICT, ANIM, 2.5, 8, -1, 50, 0, false, false, false);
            }
          });
        }
      };
    }
  });

  // client/animations/animation.controller.ts
  var animationService;
  var init_animation_controller = __esm({
    "client/animations/animation.controller.ts"() {
      init_animation_service();
      animationService = new AnimationService();
    }
  });

  // client/cl_main.ts
  function togglePhone() {
    return __async(this, null, function* () {
      const canAccess = yield checkHasPhone();
      if (!canAccess)
        return;
      if (global.isPhoneOpen)
        return yield hidePhone();
      yield showPhone();
    });
  }
  var exps, getCurrentGameTime, showPhone, hidePhone, checkHasPhone;
  var init_cl_main = __esm({
    "client/cl_main.ts"() {
      init_messages();
      init_phone();
      init_cl_config();
      init_animation_controller();
      init_cl_utils();
      global.isPhoneOpen = false;
      global.isPhoneDisabled = false;
      global.isPlayerLoaded = false;
      exps = global.exports;
      onNet("npwd:setPlayerLoaded" /* SET_PLAYER_LOADED */, (state) => {
        global.isPlayerLoaded = state;
        sendMessage("PHONE", "npwd:unloadCharacter" /* UNLOAD_CHARACTER */, {});
      });
      RegisterKeyMapping(config.general.toggleCommand, "Toggle Phone", "keyboard", config.general.toggleKey);
      setTimeout(() => {
        emit("chat:addSuggestion", `${config.general.toggleCommand}`, "Toggle displaying your cellphone");
      }, 1e3);
      getCurrentGameTime = () => {
        let hour = GetClockHours();
        let minute = GetClockMinutes();
        if (hour < 10)
          hour = `0${hour}`;
        if (minute < 10)
          minute = `0${minute}`;
        return `${hour}:${minute}`;
      };
      showPhone = () => __async(void 0, null, function* () {
        global.isPhoneOpen = true;
        const time = getCurrentGameTime();
        yield animationService.openPhone();
        emitNet("npwd:getCredentials" /* FETCH_CREDENTIALS */);
        SetCursorLocation(0.9, 0.922);
        sendMessage("PHONE", "npwd:setVisibility" /* SET_VISIBILITY */, true);
        sendMessage("PHONE", "npwd:setGameTime" /* SET_TIME */, time);
        SetNuiFocus(true, true);
        SetNuiFocusKeepInput(true);
        emit("npwd:disableControlActions", true);
      });
      hidePhone = () => __async(void 0, null, function* () {
        global.isPhoneOpen = false;
        sendMessage("PHONE", "npwd:setVisibility" /* SET_VISIBILITY */, false);
        yield animationService.closePhone();
        SetNuiFocus(false, false);
        SetNuiFocusKeepInput(false);
        emit("npwd:disableControlActions", false);
      });
      RegisterCommand(config.general.toggleCommand, () => __async(void 0, null, function* () {
        if (IsPauseMenuActive())
          return;
        if (!global.isPhoneDisabled)
          yield togglePhone();
      }), false);
      RegisterCommand("phone:restart", () => __async(void 0, null, function* () {
        yield hidePhone();
        sendMessage("PHONE", "npwd:unloadCharacter" /* UNLOAD_CHARACTER */, {});
      }), false);
      checkHasPhone = () => __async(void 0, null, function* () {
        if (!config.PhoneAsItem.enabled)
          return true;
        const exportResp = yield Promise.resolve(exps[config.PhoneAsItem.exportResource][config.PhoneAsItem.exportFunction]());
        if (typeof exportResp !== "number" && typeof exportResp !== "boolean") {
          throw new Error("You must return either a boolean or number from your export function");
        }
        return !!exportResp;
      });
      onNet("npwd:sendCredentials" /* SEND_CREDENTIALS */, (number) => {
        sendMessage("SIMCARD", "npwd:setNumber" /* SET_NUMBER */, number);
      });
      on("onResourceStop", (resource) => {
        if (resource === GetCurrentResourceName()) {
          sendMessage("PHONE", "npwd:setVisibility" /* SET_VISIBILITY */, false);
          SetNuiFocus(false, false);
          animationService.endPhoneCall();
          animationService.closePhone();
          ClearPedTasks(PlayerPedId());
        }
      });
      RegisterNuiCB("npwd:close" /* CLOSE_PHONE */, (_, cb) => __async(void 0, null, function* () {
        yield hidePhone();
        cb();
      }));
      RegisterNuiCB("npwd:toggleAllControls" /* TOGGLE_KEYS */, (_0, _1) => __async(void 0, [_0, _1], function* ({ keepGameFocus }, cb) {
        if (global.isPhoneOpen)
          SetNuiFocusKeepInput(keepGameFocus);
        cb({});
      }));
      if (config.PhoneAsItem.enabled) {
        setTimeout(() => {
          let doesExportExist = false;
          const { exportResource, exportFunction } = config.PhoneAsItem;
          emit(`__cfx_export_${exportResource}_${exportFunction}`, () => {
            doesExportExist = true;
          });
          if (!doesExportExist) {
            console.log("\n^1Incorrect PhoneAsItem configuration detected. Export does not exist.^0\n");
          }
        }, 100);
      }
    }
  });

  // ../typings/twitter.ts
  var init_twitter = __esm({
    "../typings/twitter.ts"() {
    }
  });

  // client/cl_twitter.ts
  var init_cl_twitter = __esm({
    "client/cl_twitter.ts"() {
      init_twitter();
      init_messages();
      init_cl_utils();
      RegisterNuiProxy("npwd:getOrCreateTwitterProfile" /* GET_OR_CREATE_PROFILE */);
      RegisterNuiProxy("npwd:deleteTweet" /* DELETE_TWEET */);
      RegisterNuiProxy("npwd:updateTwitterProfile" /* UPDATE_PROFILE */);
      RegisterNuiProxy("npwd:createTwitterProfile" /* CREATE_PROFILE */);
      RegisterNuiProxy("npwd:fetchTweets" /* FETCH_TWEETS */);
      RegisterNuiProxy("npwd:createTweet" /* CREATE_TWEET */);
      RegisterNuiProxy("npwd:fetchTweetsFiltered" /* FETCH_TWEETS_FILTERED */);
      RegisterNuiProxy("npwd:toggleLike" /* TOGGLE_LIKE */);
      RegisterNuiProxy("npwd:reportTweet" /* REPORT */);
      RegisterNuiProxy("npwd:retweet" /* RETWEET */);
      onNet("createTweetBroadcast" /* CREATE_TWEET_BROADCAST */, (tweet) => {
        sendTwitterMessage("createTweetBroadcast" /* CREATE_TWEET_BROADCAST */, tweet);
      });
    }
  });

  // ../typings/contact.ts
  var init_contact = __esm({
    "../typings/contact.ts"() {
    }
  });

  // client/cl_contacts.ts
  var init_cl_contacts = __esm({
    "client/cl_contacts.ts"() {
      init_contact();
      init_cl_utils();
      RegisterNuiProxy("npwd:getContacts" /* GET_CONTACTS */);
      RegisterNuiProxy("npwd:addContacts" /* ADD_CONTACT */);
      RegisterNuiProxy("npwd:deleteContact" /* DELETE_CONTACT */);
      RegisterNuiProxy("npwd:updateContact" /* UPDATE_CONTACT */);
    }
  });

  // ../typings/marketplace.ts
  var init_marketplace = __esm({
    "../typings/marketplace.ts"() {
    }
  });

  // client/cl_marketplace.ts
  var init_cl_marketplace = __esm({
    "client/cl_marketplace.ts"() {
      init_marketplace();
      init_cl_utils();
      init_messages();
      RegisterNuiProxy("npwd:fetchAllListings" /* FETCH_LISTING */);
      RegisterNuiProxy("npwd:addListing" /* ADD_LISTING */);
      RegisterNuiProxy("npwd:marketplaceDeleteListing" /* DELETE_LISTING */);
      RegisterNuiProxy("npwd:reportListing" /* REPORT_LISTING */);
      onNet("npwd:sendMarketplaceBroadcastAdd" /* BROADCAST_ADD */, (broadcastEvent) => {
        sendMarketplaceEvent("npwd:sendMarketplaceBroadcastAdd" /* BROADCAST_ADD */, broadcastEvent);
      });
      onNet("npwd:sendMarketplaceBroadcastDelete" /* BROADCAST_DELETE */, (broadcastEvent) => {
        sendMarketplaceEvent("npwd:sendMarketplaceBroadcastDelete" /* BROADCAST_DELETE */, broadcastEvent);
      });
    }
  });

  // ../typings/notes.ts
  var init_notes = __esm({
    "../typings/notes.ts"() {
    }
  });

  // client/cl_notes.ts
  var init_cl_notes = __esm({
    "client/cl_notes.ts"() {
      init_notes();
      init_cl_utils();
      RegisterNuiProxy("npwd:addNote" /* ADD_NOTE */);
      RegisterNuiProxy("npwd:fetchAllNotes" /* FETCH_ALL_NOTES */);
      RegisterNuiProxy("npwd:updateNote" /* UPDATE_NOTE */);
      RegisterNuiProxy("npwd:deleteNote" /* DELETE_NOTE */);
    }
  });

  // ../typings/photo.ts
  var init_photo = __esm({
    "../typings/photo.ts"() {
    }
  });

  // client/cl_photo.ts
  var require_cl_photo = __commonJS({
    "client/cl_photo.ts"(exports) {
      init_photo();
      init_fivem();
      init_messages();
      init_phone();
      init_client();
      init_cl_config();
      init_animation_controller();
      init_cl_utils();
      var SCREENSHOT_BASIC_TOKEN = GetConvar("SCREENSHOT_BASIC_TOKEN", "none");
      var exp2 = global.exports;
      var inCameraMode = false;
      function closePhoneTemp() {
        SetNuiFocus(false, false);
        sendMessage("PHONE", "npwd:setVisibility" /* SET_VISIBILITY */, false);
      }
      function openPhoneTemp() {
        SetNuiFocus(true, true);
        sendMessage("PHONE", "npwd:setVisibility" /* SET_VISIBILITY */, true);
      }
      function CellFrontCamActivate(activate) {
        return Citizen.invokeNative("0x2491A93618B7D838", activate);
      }
      var displayHelperText = () => {
        BeginTextCommandDisplayHelp("THREESTRINGS");
        AddTextComponentString("Exit Camera Mode: ~INPUT_CELLPHONE_CANCEL~");
        AddTextComponentString("Toggle Front/Back: ~INPUT_PHONE~");
        AddTextComponentString("Take Picture: ~INPUT_CELLPHONE_SELECT~");
        EndTextCommandDisplayHelp(0, true, false, -1);
      };
      RegisterNuiCB("npwd:TakePhoto" /* TAKE_PHOTO */, (_, cb) => __async(exports, null, function* () {
        yield animationService.openCamera();
        emit("npwd:disableControlActions", false);
        let frontCam = false;
        CreateMobilePhone(1);
        CellCamActivate(true, true);
        closePhoneTemp();
        SetNuiFocus(false, false);
        inCameraMode = true;
        emit("npwd:PhotoModeStarted" /* NPWD_PHOTO_MODE_STARTED */);
        while (inCameraMode) {
          yield Delay(0);
          if (IsControlJustPressed(1, 27)) {
            frontCam = !frontCam;
            CellFrontCamActivate(frontCam);
          } else if (IsControlJustPressed(1, 176)) {
            const resp = yield handleTakePicture();
            cb(resp);
            break;
          } else if (IsControlJustPressed(1, 194)) {
            yield handleCameraExit();
            break;
          }
          displayHelperText();
        }
        ClearHelp(true);
        emit("npwd:PhotoModeEnded" /* NPWD_PHOTO_MODE_ENDED */);
        emit("npwd:disableControlActions", true);
        yield animationService.closeCamera();
      }));
      var handleTakePicture = () => __async(exports, null, function* () {
        ClearHelp(true);
        yield Delay(0);
        setTimeout(() => {
          DestroyMobilePhone();
          CellCamActivate(false, false);
          openPhoneTemp();
          animationService.openPhone();
          emit("npwd:disableControlActions", true);
        }, 200);
        const resp = yield takePhoto();
        inCameraMode = false;
        return resp;
      });
      var handleCameraExit = () => __async(exports, null, function* () {
        sendCameraEvent("npwd:cameraExited" /* CAMERA_EXITED */);
        ClearHelp(true);
        yield animationService.closeCamera();
        emit("npwd:disableControlActions", true);
        DestroyMobilePhone();
        CellCamActivate(false, false);
        openPhoneTemp();
        inCameraMode = false;
      });
      var takePhoto = () => new Promise((res, rej) => {
        if (SCREENSHOT_BASIC_TOKEN === "none" && config.images.useAuthorization) {
          return console.error("Screenshot basic token not found. Please set in server.cfg");
        }
        exp2["screenshot-basic"].requestScreenshotUpload(config.images.url, config.images.type, {
          encoding: config.images.imageEncoding,
          headers: {
            authorization: config.images.useAuthorization ? `${config.images.authorizationPrefix} ${SCREENSHOT_BASIC_TOKEN}` : void 0,
            "content-type": config.images.contentType
          }
        }, (data) => __async(exports, null, function* () {
          try {
            let parsedData = JSON.parse(data);
            for (const index of config.images.returnedDataIndexes)
              parsedData = parsedData[index];
            const resp = yield ClUtils.emitNetPromise("npwd:UploadPhoto" /* UPLOAD_PHOTO */, parsedData);
            res(resp);
          } catch (e) {
            rej(e.message);
          }
        }));
      });
      RegisterNuiProxy("npwd:FetchPhotos" /* FETCH_PHOTOS */);
      RegisterNuiProxy("npwd:deletePhoto" /* DELETE_PHOTO */);
    }
  });

  // ../typings/messages.ts
  var init_messages2 = __esm({
    "../typings/messages.ts"() {
    }
  });

  // client/cl_messages.ts
  var init_cl_messages = __esm({
    "client/cl_messages.ts"() {
      init_messages2();
      init_messages();
      init_cl_utils();
      RegisterNuiProxy("npwd:fetchMessageGroups" /* FETCH_MESSAGE_CONVERSATIONS */);
      RegisterNuiProxy("npwd:deleteMessage" /* DELETE_MESSAGE */);
      RegisterNuiProxy("npwd:fetchMessages" /* FETCH_MESSAGES */);
      RegisterNuiProxy("npwd:createMessageGroup" /* CREATE_MESSAGE_CONVERSATION */);
      RegisterNuiProxy("nwpd:deleteConversation" /* DELETE_CONVERSATION */);
      RegisterNuiProxy("npwd:sendMessage" /* SEND_MESSAGE */);
      RegisterNuiProxy("npwd:setReadMessages" /* SET_MESSAGE_READ */);
      RegisterNuiProxy("npwd:getMessageLocation" /* GET_MESSAGE_LOCATION */);
      RegisterNuiCB("npwd:setWaypoint" /* MESSAGES_SET_WAYPOINT */, ({ coords }) => {
        SetNewWaypoint(coords[0], coords[1]);
      });
      onNet("npwd:sendMessageSuccess" /* SEND_MESSAGE_SUCCESS */, (messageDto) => {
        sendMessageEvent("npwd:sendMessageSuccess" /* SEND_MESSAGE_SUCCESS */, messageDto);
      });
      onNet("npwd:createMessagesBroadcast" /* CREATE_MESSAGE_BROADCAST */, (result) => {
        sendMessageEvent("npwd:createMessagesBroadcast" /* CREATE_MESSAGE_BROADCAST */, result);
      });
      onNet("npwd:createMessageConversationSuccess" /* CREATE_MESSAGE_CONVERSATION_SUCCESS */, (result) => {
        sendMessageEvent("npwd:createMessageConversationSuccess" /* CREATE_MESSAGE_CONVERSATION_SUCCESS */, result);
      });
    }
  });

  // ../typings/call.ts
  var init_call = __esm({
    "../typings/call.ts"() {
    }
  });

  // client/sounds/client-sound.class.ts
  var Sound;
  var init_client_sound_class = __esm({
    "client/sounds/client-sound.class.ts"() {
      Sound = class {
        constructor(soundName, soundSetName) {
          this._soundName = soundName;
          this._soundSetName = soundSetName;
          this._soundId = GetSoundId();
        }
        play() {
          PlaySoundFrontend(this._soundId, this._soundName, this._soundSetName, false);
        }
        stop() {
          StopSound(this._soundId);
        }
      };
    }
  });

  // client/calls/cl_calls.service.ts
  var exp, CallService;
  var init_cl_calls_service = __esm({
    "client/calls/cl_calls.service.ts"() {
      init_cl_main();
      init_call();
      init_client_sound_class();
      exp = global.exports;
      CallService = class {
        constructor() {
          this.callSoundName = "Remote_Ring";
          this.hangUpSoundName = "Hang_Up";
          this.soundSet = "Phone_SoundSet_Default";
          this.hangUpSoundSet = "Phone_SoundSet_Michael";
          this.currentCall = 0;
        }
        static sendCallAction(method, data) {
          SendNUIMessage({
            app: "CALL",
            method,
            data
          });
        }
        static sendDialerAction(method, data) {
          SendNUIMessage({
            app: "DIALER",
            method,
            data
          });
        }
        isInCall() {
          return this.currentCall !== 0;
        }
        isCurrentCall(tgtCall) {
          return this.currentCall === tgtCall;
        }
        isInPendingCall() {
          return !!this.currentPendingCall;
        }
        isCurrentPendingCall(target) {
          return target === this.currentPendingCall;
        }
        openCallModal(show) {
          CallService.sendCallAction("npwd:callModal" /* SET_CALL_MODAL */, show);
        }
        handleRejectCall(receiver) {
          if (this.isInCall() || !this.isCurrentPendingCall(receiver))
            return;
          if (this.callSound)
            this.callSound.stop();
          this.currentPendingCall = null;
          this.openCallModal(false);
          CallService.sendCallAction("npwd:setCaller" /* SET_CALL_INFO */, null);
          const hangUpSound = new Sound(this.hangUpSoundName, this.hangUpSoundSet);
          hangUpSound.play();
        }
        handleStartCall(transmitter, receiver, isTransmitter, isUnavailable) {
          return __async(this, null, function* () {
            if (this.isInCall() || !(yield checkHasPhone()) || this.currentPendingCall)
              return emitNet("npwd:rejectCall" /* REJECTED */, { transmitterNumber: transmitter }, 1 /* BUSY_LINE */);
            this.currentPendingCall = receiver;
            this.openCallModal(true);
            if (isTransmitter) {
              this.callSound = new Sound(this.callSoundName, this.soundSet);
              this.callSound.play();
            }
            CallService.sendCallAction("npwd:setCaller" /* SET_CALL_INFO */, {
              active: true,
              transmitter,
              receiver,
              isTransmitter,
              accepted: false,
              isUnavailable
            });
          });
        }
        handleCallAccepted(callData) {
          this.currentCall = callData.channelId;
          if (this.callSound)
            this.callSound.stop();
          exp["pma-voice"].setCallChannel(callData.channelId);
          CallService.sendCallAction("npwd:setCaller" /* SET_CALL_INFO */, callData);
        }
        handleEndCall() {
          if (this.callSound)
            this.callSound.stop();
          this.currentCall = 0;
          exp["pma-voice"].setCallChannel(0);
          this.currentPendingCall = null;
          this.openCallModal(false);
          CallService.sendCallAction("npwd:setCaller" /* SET_CALL_INFO */, null);
          const hangUpSound = new Sound(this.hangUpSoundName, this.hangUpSoundSet);
          hangUpSound.play();
        }
        handleSendAlert(alert) {
          SendNUIMessage({
            app: "DIALER",
            method: "npwd:callSetAlert" /* SEND_ALERT */,
            data: alert
          });
        }
      };
    }
  });

  // server/utils/miscUtils.ts
  var onNetTyped, emitNetTyped;
  var init_miscUtils = __esm({
    "server/utils/miscUtils.ts"() {
      onNetTyped = (eventName, cb) => onNet(eventName, cb);
      emitNetTyped = (eventName, data, src) => {
        if (src) {
          return emitNet(eventName, src, data);
        }
        emitNet(eventName, data);
      };
    }
  });

  // client/calls/cl_calls.controller.ts
  var callService, initializeCallHandler;
  var init_cl_calls_controller = __esm({
    "client/calls/cl_calls.controller.ts"() {
      init_call();
      init_cl_calls_service();
      init_animation_controller();
      init_miscUtils();
      init_cl_utils();
      init_client();
      callService = new CallService();
      initializeCallHandler = (data, cb) => __async(void 0, null, function* () {
        if (callService.isInCall())
          return;
        try {
          const serverRes = yield ClUtils.emitNetPromise("npwd:beginCall" /* INITIALIZE_CALL */, data);
          animationService.startPhoneCall();
          if (serverRes.status !== "ok") {
            return cb(serverRes);
          }
          const { transmitter, isTransmitter, receiver, isUnavailable } = serverRes.data;
          callService.handleStartCall(transmitter, receiver, isTransmitter, isUnavailable);
          cb(serverRes);
        } catch (e) {
          console.error(e);
          cb({ status: "error", errorMsg: "CLIENT_TIMED_OUT" });
        }
      });
      RegisterNuiCB("npwd:beginCall" /* INITIALIZE_CALL */, initializeCallHandler);
      onNetTyped("npwd:startCall" /* START_CALL */, (data) => __async(void 0, null, function* () {
        const { transmitter, isTransmitter, receiver, isUnavailable } = data;
        callService.handleStartCall(transmitter, receiver, isTransmitter, isUnavailable);
      }));
      RegisterNuiCB("npwd:acceptCall" /* ACCEPT_CALL */, (data, cb) => {
        animationService.startPhoneCall();
        emitNetTyped("npwd:acceptCall" /* ACCEPT_CALL */, data);
        cb({});
      });
      onNetTyped("npwd:callAccepted" /* WAS_ACCEPTED */, (callData) => {
        callService.handleCallAccepted(callData);
      });
      RegisterNuiCB("npwd:rejectCall" /* REJECTED */, (data, cb) => {
        emitNetTyped("npwd:rejectCall" /* REJECTED */, data);
        cb({});
      });
      onNet("npwd:callRejected" /* WAS_REJECTED */, (currentCall) => __async(void 0, null, function* () {
        callService.handleRejectCall(currentCall.receiver);
        animationService.endPhoneCall();
        CallService.sendDialerAction("npwd:callRejected" /* WAS_REJECTED */, currentCall);
      }));
      RegisterNuiCB("npwd:endCall" /* END_CALL */, (data, cb) => __async(void 0, null, function* () {
        try {
          const serverRes = yield ClUtils.emitNetPromise("npwd:endCall" /* END_CALL */, data);
          if (serverRes.status === "error")
            return console.error(serverRes.errorMsg);
          cb({});
        } catch (e) {
          console.error(e);
          cb({ status: "error", errorMsg: "CLIENT_TIMED_OUT" });
        }
        animationService.endPhoneCall();
      }));
      onNet("npwd:callEnded" /* WAS_ENDED */, (callStarter, currentCall) => {
        if (callService.isInCall() && !callService.isCurrentCall(callStarter))
          return;
        callService.handleEndCall();
        animationService.endPhoneCall();
        if (currentCall) {
          CallService.sendDialerAction("npwd:callRejected" /* WAS_REJECTED */, currentCall);
        }
      });
      RegisterNuiProxy("npwd:fetchCalls" /* FETCH_CALLS */);
      onNet("npwd:callSetAlert" /* SEND_ALERT */, (alert) => {
        callService.handleSendAlert(alert);
      });
    }
  });

  // ../typings/match.ts
  var init_match = __esm({
    "../typings/match.ts"() {
    }
  });

  // client/cl_match.ts
  var init_cl_match = __esm({
    "client/cl_match.ts"() {
      init_match();
      init_messages();
      init_cl_utils();
      RegisterNuiProxy("phone:getMatchProfiles" /* GET_PROFILES */);
      RegisterNuiProxy("phone:getMyProfile" /* GET_MY_PROFILE */);
      RegisterNuiProxy("phone:getMatches" /* GET_MATCHES */);
      RegisterNuiProxy("phone:saveLikes" /* SAVE_LIKES */);
      RegisterNuiProxy("phone:createMyProfile" /* CREATE_MY_PROFILE */);
      RegisterNuiProxy("phone:updateMyProfile" /* UPDATE_MY_PROFILE */);
      onNet("phone:saveLikesBroadcast" /* SAVE_LIKES_BROADCAST */, (result) => {
        sendMatchEvent("phone:saveLikesBroadcast" /* SAVE_LIKES_BROADCAST */, result);
      });
      onNet("phone:matchAccountBroadcast" /* CREATE_MATCH_ACCOUNT_BROADCAST */, (result) => {
        sendMatchEvent("phone:matchAccountBroadcast" /* CREATE_MATCH_ACCOUNT_BROADCAST */, result);
      });
    }
  });

  // client/cl_exports.ts
  var require_cl_exports = __commonJS({
    "client/cl_exports.ts"(exports) {
      init_messages();
      init_phone();
      init_cl_utils();
      init_cl_calls_controller();
      init_contact();
      init_notes();
      init_cl_main();
      var exps2 = global.exports;
      exps2("openApp", (app) => {
        verifyExportArgType("openApp", app, ["string"]);
        sendMessage("PHONE", "npwd:openApp" /* OPEN_APP */, app);
      });
      exps2("setPhoneVisible", (bool) => __async(exports, null, function* () {
        verifyExportArgType("setPhoneVisible", bool, ["boolean", "number"]);
        const isPhoneDisabled = global.isPhoneDisabled;
        const isPhoneOpen = global.isPhoneOpen;
        if (isPhoneDisabled && !bool && isPhoneOpen)
          return;
        const coercedType = !!bool;
        if (coercedType)
          yield showPhone();
        else
          yield hidePhone();
      }));
      exps2("isPhoneVisible", () => global.isPhoneOpen);
      exps2("setPhoneDisabled", (bool) => __async(exports, null, function* () {
        verifyExportArgType("setPhoneDisabled", bool, ["boolean", "number"]);
        const coercedType = !!bool;
        global.isPhoneDisabled = coercedType;
        if (global.isPhoneOpen) {
          yield hidePhone();
        }
        sendPhoneEvent("npwd:isPhoneDisabled" /* IS_PHONE_DISABLED */, bool);
      }));
      exps2("isPhoneDisabled", () => global.isPhoneDisabled);
      exps2("startPhoneCall", (number) => {
        verifyExportArgType("startPhoneCall", number, ["string"]);
        initializeCallHandler({ receiverNumber: number });
      });
      exps2("fillNewContact", (contactData) => {
        verifyExportArgType("fillNewContact", contactData, ["object"]);
        sendContactsEvent("npwd:addContactExport" /* ADD_CONTACT_EXPORT */, contactData);
      });
      exps2("fillNewNote", (noteData) => {
        verifyExportArgType("fillNewNote", noteData, ["object"]);
        sendNotesEvent("npwd:addNoteExport" /* ADD_NOTE_EXPORT */, noteData);
      });
    }
  });

  // ../typings/settings.ts
  var init_settings = __esm({
    "../typings/settings.ts"() {
    }
  });

  // client/settings/client-kvp.service.ts
  var _KvpService, KvpService, client_kvp_service_default;
  var init_client_kvp_service = __esm({
    "client/settings/client-kvp.service.ts"() {
      _KvpService = class {
        setKvp(key, value) {
          SetResourceKvp(key, value);
        }
        setKvpFloat(key, value) {
          SetResourceKvpFloat(key, value);
        }
        setKvpInt(key, value) {
          SetResourceKvpInt(key, value);
        }
        getKvpString(key) {
          return GetResourceKvpString(key);
        }
        getKvpInt(key) {
          return GetResourceKvpInt(key);
        }
        getKvpFloat(key) {
          return GetResourceKvpFloat(key);
        }
      };
      KvpService = new _KvpService();
      client_kvp_service_default = KvpService;
    }
  });

  // client/settings/client-settings.ts
  var init_client_settings = __esm({
    "client/settings/client-settings.ts"() {
      init_cl_utils();
      init_settings();
      init_client_kvp_service();
      RegisterNuiCB("npwd:nuiSettingsUpdated" /* NUI_SETTINGS_UPDATED */, (cfg, cb) => {
        global.exports["pma-voice"].setCallVolume(cfg.callVolume);
        client_kvp_service_default.setKvp("npwd-ringtone" /* NPWD_RINGTONE */, cfg.ringtone.value);
        client_kvp_service_default.setKvp("npwd-notification" /* NPWD_NOTIFICATION */, cfg.notiSound.value);
        cb({});
      });
    }
  });

  // ../typings/bank.ts
  var init_bank = __esm({
    "../typings/bank.ts"() {
    }
  });

  // client/cl_bank.ts
  var iterator;
  var init_cl_bank = __esm({
    "client/cl_bank.ts"() {
      init_bank();
      RegisterNuiCallbackType("npwd:getBankCredentials" /* GET_CREDENTIALS */);
      RegisterNuiCallbackType("npwd:addTransfer" /* ADD_TRANSFER */);
      on(`__cfx_nui:${"npwd:getBankCredentials" /* GET_CREDENTIALS */}`, (data, cb) => {
        emitNet("npwd:getBankCredentials" /* GET_CREDENTIALS */);
        cb({});
      });
      on(`__cfx_nui:${"npwd:addTransfer" /* ADD_TRANSFER */}`, (data, cb) => {
        emitNet("npwd:addTransfer" /* ADD_TRANSFER */, data);
        cb({});
      });
      onNet("npwd:sendBankCredentials" /* SEND_CREDENTIALS */, (credentials) => {
        SendNUIMessage({
          app: "BANK",
          method: "npwd:sendBankCredentials" /* SEND_CREDENTIALS */,
          data: credentials
        });
        SendNUIMessage({
          app: "BANK",
          method: "npwd:fetchAllTransactions" /* FETCH_TRANSACTIONS */,
          data: credentials.transactions
        });
      });
      iterator = 0;
      onNet("npwd:sendBankNotification" /* SEND_NOTIFICATION */, (message) => {
        SendNUIMessage({
          app: "BANK",
          method: "npwd:sendBankNotification" /* SEND_NOTIFICATION */,
          data: {
            title: "Bank Alert",
            bankNotify: iterator += 1,
            message
          }
        });
      });
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/Vector3.js
  var Vector3;
  var init_Vector3 = __esm({
    "node_modules/@nativewrappers/client/lib/utils/Vector3.js"() {
      Vector3 = class {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        static create(v1) {
          if (typeof v1 === "number")
            return new Vector3(v1, v1, v1);
          return new Vector3(v1.x, v1.y, v1.z);
        }
        static fromArray(primitive) {
          return new Vector3(primitive[0], primitive[1], primitive[2]);
        }
        static fromArrays(primitives) {
          return primitives.map((prim) => new Vector3(prim[0], prim[1], prim[2]));
        }
        static clone(v1) {
          return Vector3.create(v1);
        }
        static add(v1, v2) {
          if (typeof v2 === "number")
            return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
          return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
        }
        static subtract(v1, v2) {
          if (typeof v2 === "number")
            return new Vector3(v1.x - v2, v1.y - v2, v1.z - v2);
          return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
        }
        static multiply(v1, v2) {
          if (typeof v2 === "number")
            return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
          return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
        }
        static divide(v1, v2) {
          if (typeof v2 === "number")
            return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
          return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
        }
        static dotProduct(v1, v2) {
          return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
        }
        static crossProduct(v1, v2) {
          const x = v1.y * v2.z - v1.z * v2.y;
          const y = v1.z * v2.x - v1.z * v2.z;
          const z = v1.x * v2.y - v1.z * v2.x;
          return new Vector3(x, y, z);
        }
        static normalize(v) {
          return Vector3.divide(v, v.Length);
        }
        clone() {
          return new Vector3(this.x, this.y, this.z);
        }
        distanceSquared(v) {
          const w = this.subtract(v);
          return Vector3.dotProduct(w, w);
        }
        distance(v) {
          return Math.sqrt(this.distanceSquared(v));
        }
        get normalize() {
          return Vector3.normalize(this);
        }
        crossProduct(v) {
          return Vector3.crossProduct(this, v);
        }
        dotProduct(v) {
          return Vector3.dotProduct(this, v);
        }
        add(v) {
          return Vector3.add(this, v);
        }
        subtract(v) {
          return Vector3.subtract(this, v);
        }
        multiply(v) {
          return Vector3.multiply(this, v);
        }
        divide(v) {
          return Vector3.divide(this, v);
        }
        toArray() {
          return [this.x, this.y, this.z];
        }
        replace(v) {
          this.x = v.x;
          this.y = v.y;
          this.z = v.z;
        }
        get Length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/Maths.js
  var Maths;
  var init_Maths = __esm({
    "node_modules/@nativewrappers/client/lib/utils/Maths.js"() {
      Maths = class {
        static clamp(num, min, max) {
          return num <= min ? min : num >= max ? max : num;
        }
        static getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/Color.js
  var Color;
  var init_Color = __esm({
    "node_modules/@nativewrappers/client/lib/utils/Color.js"() {
      Color = class {
        constructor(a = 255, r, g, b) {
          this.a = a;
          this.r = r;
          this.g = g;
          this.b = b;
        }
        static fromArgb(a, r, g, b) {
          return new Color(a, r, g, b);
        }
        static fromRgb(r, g, b) {
          return new Color(255, r, g, b);
        }
        static fromArray(primitive) {
          return new Color(255, primitive[0], primitive[1], primitive[2]);
        }
      };
      Color.empty = new Color(0, 0, 0, 0);
      Color.transparent = new Color(0, 0, 0, 0);
      Color.black = new Color(255, 0, 0, 0);
      Color.white = new Color(255, 255, 255, 255);
      Color.whiteSmoke = new Color(255, 245, 245, 245);
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/Quaternion.js
  var Quaternion;
  var init_Quaternion = __esm({
    "node_modules/@nativewrappers/client/lib/utils/Quaternion.js"() {
      init_Vector3();
      Quaternion = class {
        constructor(valueXOrVector, yOrW, z, w) {
          if (valueXOrVector instanceof Vector3) {
            this.x = valueXOrVector.x;
            this.y = valueXOrVector.y;
            this.z = valueXOrVector.z;
            this.w = yOrW ?? 0;
          } else if (yOrW === void 0) {
            this.x = valueXOrVector;
            this.y = valueXOrVector;
            this.z = valueXOrVector;
            this.w = valueXOrVector;
          } else {
            this.x = valueXOrVector;
            this.y = yOrW;
            this.z = z ?? 0;
            this.w = w ?? 0;
          }
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/enumValues.js
  function* enumValues(enumObj) {
    let isStringEnum = true;
    for (const property in enumObj) {
      if (typeof enumObj[property] === "number") {
        isStringEnum = false;
        break;
      }
    }
    for (const property in enumObj) {
      if (isStringEnum || typeof enumObj[property] === "number") {
        yield enumObj[property];
      }
    }
  }
  var init_enumValues = __esm({
    "node_modules/@nativewrappers/client/lib/utils/enumValues.js"() {
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/getStringFromUInt8Array.js
  var getStringFromUInt8Array;
  var init_getStringFromUInt8Array = __esm({
    "node_modules/@nativewrappers/client/lib/utils/getStringFromUInt8Array.js"() {
      getStringFromUInt8Array = (buffer, start, end) => String.fromCharCode(...buffer.slice(start, end)).replace(/\u0000/g, "");
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/getUInt32FromUint8Array.js
  var getUInt32FromUint8Array;
  var init_getUInt32FromUint8Array = __esm({
    "node_modules/@nativewrappers/client/lib/utils/getUInt32FromUint8Array.js"() {
      getUInt32FromUint8Array = (buffer, start, end) => new Uint32Array(buffer.slice(start, end).buffer)[0];
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/Animations.js
  var LoadAnimDict;
  var init_Animations = __esm({
    "node_modules/@nativewrappers/client/lib/utils/Animations.js"() {
      init_lib();
      LoadAnimDict = async (animDict, waitTime = 1e3) => {
        const start = GetGameTimer();
        if (!HasAnimDictLoaded(animDict)) {
          RequestAnimDict(animDict);
        }
        while (!HasAnimDictLoaded(animDict)) {
          if (GetGameTimer() - start >= waitTime)
            return false;
          await Wait(0);
        }
        return true;
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/utils/index.js
  var Wait;
  var init_utils = __esm({
    "node_modules/@nativewrappers/client/lib/utils/index.js"() {
      init_Vector3();
      init_Color();
      init_Maths();
      init_Quaternion();
      init_enumValues();
      init_getStringFromUInt8Array();
      init_getUInt32FromUint8Array();
      init_Animations();
      Wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
  });

  // node_modules/@nativewrappers/client/lib/Audio.js
  var Audio;
  var init_Audio = __esm({
    "node_modules/@nativewrappers/client/lib/Audio.js"() {
      Audio = class {
        static playSoundAt(position, sound, set, generateSoundId = true) {
          const SOUND_ID = generateSoundId ? GetSoundId() : -1;
          PlaySoundFromCoord(SOUND_ID, sound, position.x, position.y, position.z, set ?? "", false, 0, false);
          return SOUND_ID;
        }
        static playSoundFromEntity(entity, sound, set, generateSoundId = true) {
          const SOUND_ID = generateSoundId ? GetSoundId() : -1;
          PlaySoundFromEntity(SOUND_ID, sound, entity.Handle, set ?? "", false, 0);
          return SOUND_ID;
        }
        static playSoundFrontEnd(sound, set, generateSoundId = true) {
          const SOUND_ID = generateSoundId ? GetSoundId() : -1;
          PlaySoundFrontend(SOUND_ID, sound, set ?? "", false);
          return SOUND_ID;
        }
        static stopSound(soundId) {
          StopSound(soundId);
        }
        static releaseSound(soundId) {
          ReleaseSoundId(soundId);
        }
        static hasSoundFinished(soundId) {
          return HasSoundFinished(soundId);
        }
        static setAudioFlag(flag, toggle) {
          if (typeof flag === "string") {
            SetAudioFlag(flag, toggle);
          } else {
            SetAudioFlag(this.audioFlags[Number(flag)], toggle);
          }
        }
        static playSound(soundFile, soundSet) {
          this.releaseSound(this.playSoundFrontEnd(soundFile, soundSet));
        }
        static playMusic(musicFile) {
          if (!this.cachedMusicFile) {
            CancelMusicEvent(musicFile);
          }
          this.cachedMusicFile = musicFile;
          TriggerMusicEvent(musicFile);
        }
        static stopMusic(musicFile) {
          if (!musicFile) {
            if (!this.cachedMusicFile) {
              CancelMusicEvent(this.cachedMusicFile);
              this.cachedMusicFile = "";
            }
          } else {
            CancelMusicEvent(musicFile ?? "");
          }
        }
      };
      Audio.audioFlags = [
        "ActivateSwitchWheelAudio",
        "AllowCutsceneOverScreenFade",
        "AllowForceRadioAfterRetune",
        "AllowPainAndAmbientSpeechToPlayDuringCutscene",
        "AllowPlayerAIOnMission",
        "AllowPoliceScannerWhenPlayerHasNoControl",
        "AllowRadioDuringSwitch",
        "AllowRadioOverScreenFade",
        "AllowScoreAndRadio",
        "AllowScriptedSpeechInSlowMo",
        "AvoidMissionCompleteDelay",
        "DisableAbortConversationForDeathAndInjury",
        "DisableAbortConversationForRagdoll",
        "DisableBarks",
        "DisableFlightMusic",
        "DisableReplayScriptStreamRecording",
        "EnableHeadsetBeep",
        "ForceConversationInterrupt",
        "ForceSeamlessRadioSwitch",
        "ForceSniperAudio",
        "FrontendRadioDisabled",
        "HoldMissionCompleteWhenPrepared",
        "IsDirectorModeActive",
        "IsPlayerOnMissionForSpeech",
        "ListenerReverbDisabled",
        "LoadMPData",
        "MobileRadioInGame",
        "OnlyAllowScriptTriggerPoliceScanner",
        "PlayMenuMusic",
        "PoliceScannerDisabled",
        "ScriptedConvListenerMaySpeak",
        "SpeechDucksScore",
        "SuppressPlayerScubaBreathing",
        "WantedMusicDisabled",
        "WantedMusicOnMission"
      ];
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/Blip.js
  var BlipColor, BlipSprite;
  var init_Blip = __esm({
    "node_modules/@nativewrappers/client/lib/enums/Blip.js"() {
      (function(BlipColor2) {
        BlipColor2[BlipColor2["White"] = 0] = "White";
        BlipColor2[BlipColor2["Red"] = 1] = "Red";
        BlipColor2[BlipColor2["Green"] = 2] = "Green";
        BlipColor2[BlipColor2["Blue"] = 3] = "Blue";
        BlipColor2[BlipColor2["MichaelBlue"] = 42] = "MichaelBlue";
        BlipColor2[BlipColor2["FranklinGreen"] = 43] = "FranklinGreen";
        BlipColor2[BlipColor2["TrevorOrange"] = 44] = "TrevorOrange";
        BlipColor2[BlipColor2["Yellow"] = 66] = "Yellow";
      })(BlipColor || (BlipColor = {}));
      (function(BlipSprite2) {
        BlipSprite2[BlipSprite2["Standard"] = 1] = "Standard";
        BlipSprite2[BlipSprite2["BigBlip"] = 2] = "BigBlip";
        BlipSprite2[BlipSprite2["PoliceOfficer"] = 3] = "PoliceOfficer";
        BlipSprite2[BlipSprite2["PoliceArea"] = 4] = "PoliceArea";
        BlipSprite2[BlipSprite2["Square"] = 5] = "Square";
        BlipSprite2[BlipSprite2["Player"] = 6] = "Player";
        BlipSprite2[BlipSprite2["North"] = 7] = "North";
        BlipSprite2[BlipSprite2["Waypoint"] = 8] = "Waypoint";
        BlipSprite2[BlipSprite2["BigCircle"] = 9] = "BigCircle";
        BlipSprite2[BlipSprite2["BigCircleOutline"] = 10] = "BigCircleOutline";
        BlipSprite2[BlipSprite2["ArrowUpOutlined"] = 11] = "ArrowUpOutlined";
        BlipSprite2[BlipSprite2["ArrowDownOutlined"] = 12] = "ArrowDownOutlined";
        BlipSprite2[BlipSprite2["ArrowUp"] = 13] = "ArrowUp";
        BlipSprite2[BlipSprite2["ArrowDown"] = 14] = "ArrowDown";
        BlipSprite2[BlipSprite2["PoliceHelicopterAnimated"] = 15] = "PoliceHelicopterAnimated";
        BlipSprite2[BlipSprite2["Jet"] = 16] = "Jet";
        BlipSprite2[BlipSprite2["Number1"] = 17] = "Number1";
        BlipSprite2[BlipSprite2["Number2"] = 18] = "Number2";
        BlipSprite2[BlipSprite2["Number3"] = 19] = "Number3";
        BlipSprite2[BlipSprite2["Number4"] = 20] = "Number4";
        BlipSprite2[BlipSprite2["Number5"] = 21] = "Number5";
        BlipSprite2[BlipSprite2["Number6"] = 22] = "Number6";
        BlipSprite2[BlipSprite2["Number7"] = 23] = "Number7";
        BlipSprite2[BlipSprite2["Number8"] = 24] = "Number8";
        BlipSprite2[BlipSprite2["Number9"] = 25] = "Number9";
        BlipSprite2[BlipSprite2["Number10"] = 26] = "Number10";
        BlipSprite2[BlipSprite2["GTAOCrew"] = 27] = "GTAOCrew";
        BlipSprite2[BlipSprite2["GTAOFriendly"] = 28] = "GTAOFriendly";
        BlipSprite2[BlipSprite2["Lift"] = 36] = "Lift";
        BlipSprite2[BlipSprite2["RaceFinish"] = 38] = "RaceFinish";
        BlipSprite2[BlipSprite2["Safehouse"] = 40] = "Safehouse";
        BlipSprite2[BlipSprite2["PoliceOfficer2"] = 41] = "PoliceOfficer2";
        BlipSprite2[BlipSprite2["PoliceCarDot"] = 42] = "PoliceCarDot";
        BlipSprite2[BlipSprite2["PoliceHelicopter"] = 43] = "PoliceHelicopter";
        BlipSprite2[BlipSprite2["ChatBubble"] = 47] = "ChatBubble";
        BlipSprite2[BlipSprite2["Garage2"] = 50] = "Garage2";
        BlipSprite2[BlipSprite2["Drugs"] = 51] = "Drugs";
        BlipSprite2[BlipSprite2["Store"] = 52] = "Store";
        BlipSprite2[BlipSprite2["PoliceCar"] = 56] = "PoliceCar";
        BlipSprite2[BlipSprite2["PolicePlayer"] = 58] = "PolicePlayer";
        BlipSprite2[BlipSprite2["PoliceStation"] = 60] = "PoliceStation";
        BlipSprite2[BlipSprite2["Hospital"] = 61] = "Hospital";
        BlipSprite2[BlipSprite2["Helicopter"] = 64] = "Helicopter";
        BlipSprite2[BlipSprite2["StrangersAndFreaks"] = 65] = "StrangersAndFreaks";
        BlipSprite2[BlipSprite2["ArmoredTruck"] = 66] = "ArmoredTruck";
        BlipSprite2[BlipSprite2["TowTruck"] = 68] = "TowTruck";
        BlipSprite2[BlipSprite2["Barber"] = 71] = "Barber";
        BlipSprite2[BlipSprite2["LosSantosCustoms"] = 72] = "LosSantosCustoms";
        BlipSprite2[BlipSprite2["Clothes"] = 73] = "Clothes";
        BlipSprite2[BlipSprite2["TattooParlor"] = 75] = "TattooParlor";
        BlipSprite2[BlipSprite2["Simeon"] = 76] = "Simeon";
        BlipSprite2[BlipSprite2["Lester"] = 77] = "Lester";
        BlipSprite2[BlipSprite2["Michael"] = 78] = "Michael";
        BlipSprite2[BlipSprite2["Trevor"] = 79] = "Trevor";
        BlipSprite2[BlipSprite2["Rampage"] = 84] = "Rampage";
        BlipSprite2[BlipSprite2["VinewoodTours"] = 85] = "VinewoodTours";
        BlipSprite2[BlipSprite2["Lamar"] = 86] = "Lamar";
        BlipSprite2[BlipSprite2["Franklin"] = 88] = "Franklin";
        BlipSprite2[BlipSprite2["Chinese"] = 89] = "Chinese";
        BlipSprite2[BlipSprite2["Airport"] = 90] = "Airport";
        BlipSprite2[BlipSprite2["Bar"] = 93] = "Bar";
        BlipSprite2[BlipSprite2["BaseJump"] = 94] = "BaseJump";
        BlipSprite2[BlipSprite2["CarWash"] = 100] = "CarWash";
        BlipSprite2[BlipSprite2["ComedyClub"] = 102] = "ComedyClub";
        BlipSprite2[BlipSprite2["Dart"] = 103] = "Dart";
        BlipSprite2[BlipSprite2["FIB"] = 106] = "FIB";
        BlipSprite2[BlipSprite2["DollarSign"] = 108] = "DollarSign";
        BlipSprite2[BlipSprite2["Golf"] = 109] = "Golf";
        BlipSprite2[BlipSprite2["AmmuNation"] = 110] = "AmmuNation";
        BlipSprite2[BlipSprite2["Exile"] = 112] = "Exile";
        BlipSprite2[BlipSprite2["ShootingRange"] = 119] = "ShootingRange";
        BlipSprite2[BlipSprite2["Solomon"] = 120] = "Solomon";
        BlipSprite2[BlipSprite2["StripClub"] = 121] = "StripClub";
        BlipSprite2[BlipSprite2["Tennis"] = 122] = "Tennis";
        BlipSprite2[BlipSprite2["Triathlon"] = 126] = "Triathlon";
        BlipSprite2[BlipSprite2["OffRoadRaceFinish"] = 127] = "OffRoadRaceFinish";
        BlipSprite2[BlipSprite2["Key"] = 134] = "Key";
        BlipSprite2[BlipSprite2["MovieTheater"] = 135] = "MovieTheater";
        BlipSprite2[BlipSprite2["Music"] = 136] = "Music";
        BlipSprite2[BlipSprite2["Marijuana"] = 140] = "Marijuana";
        BlipSprite2[BlipSprite2["Hunting"] = 141] = "Hunting";
        BlipSprite2[BlipSprite2["ArmsTraffickingGround"] = 147] = "ArmsTraffickingGround";
        BlipSprite2[BlipSprite2["Nigel"] = 149] = "Nigel";
        BlipSprite2[BlipSprite2["AssaultRifle"] = 150] = "AssaultRifle";
        BlipSprite2[BlipSprite2["Bat"] = 151] = "Bat";
        BlipSprite2[BlipSprite2["Grenade"] = 152] = "Grenade";
        BlipSprite2[BlipSprite2["Health"] = 153] = "Health";
        BlipSprite2[BlipSprite2["Knife"] = 154] = "Knife";
        BlipSprite2[BlipSprite2["Molotov"] = 155] = "Molotov";
        BlipSprite2[BlipSprite2["Pistol"] = 156] = "Pistol";
        BlipSprite2[BlipSprite2["RPG"] = 157] = "RPG";
        BlipSprite2[BlipSprite2["Shotgun"] = 158] = "Shotgun";
        BlipSprite2[BlipSprite2["SMG"] = 159] = "SMG";
        BlipSprite2[BlipSprite2["Sniper"] = 160] = "Sniper";
        BlipSprite2[BlipSprite2["SonicWave"] = 161] = "SonicWave";
        BlipSprite2[BlipSprite2["PointOfInterest"] = 162] = "PointOfInterest";
        BlipSprite2[BlipSprite2["GTAOPassive"] = 163] = "GTAOPassive";
        BlipSprite2[BlipSprite2["GTAOUsingMenu"] = 164] = "GTAOUsingMenu";
        BlipSprite2[BlipSprite2["Link"] = 171] = "Link";
        BlipSprite2[BlipSprite2["Minigun"] = 173] = "Minigun";
        BlipSprite2[BlipSprite2["GrenadeLauncher"] = 174] = "GrenadeLauncher";
        BlipSprite2[BlipSprite2["Armor"] = 175] = "Armor";
        BlipSprite2[BlipSprite2["Castle"] = 176] = "Castle";
        BlipSprite2[BlipSprite2["Camera"] = 184] = "Camera";
        BlipSprite2[BlipSprite2["Handcuffs"] = 188] = "Handcuffs";
        BlipSprite2[BlipSprite2["Yoga"] = 197] = "Yoga";
        BlipSprite2[BlipSprite2["Cab"] = 198] = "Cab";
        BlipSprite2[BlipSprite2["Number11"] = 199] = "Number11";
        BlipSprite2[BlipSprite2["Number12"] = 200] = "Number12";
        BlipSprite2[BlipSprite2["Number13"] = 201] = "Number13";
        BlipSprite2[BlipSprite2["Number14"] = 202] = "Number14";
        BlipSprite2[BlipSprite2["Number15"] = 203] = "Number15";
        BlipSprite2[BlipSprite2["Number16"] = 204] = "Number16";
        BlipSprite2[BlipSprite2["Shrink"] = 205] = "Shrink";
        BlipSprite2[BlipSprite2["Epsilon"] = 206] = "Epsilon";
        BlipSprite2[BlipSprite2["PersonalVehicleCar"] = 225] = "PersonalVehicleCar";
        BlipSprite2[BlipSprite2["PersonalVehicleBike"] = 226] = "PersonalVehicleBike";
        BlipSprite2[BlipSprite2["Custody"] = 237] = "Custody";
        BlipSprite2[BlipSprite2["ArmsTraffickingAir"] = 251] = "ArmsTraffickingAir";
        BlipSprite2[BlipSprite2["Fairground"] = 266] = "Fairground";
        BlipSprite2[BlipSprite2["PropertyManagement"] = 267] = "PropertyManagement";
        BlipSprite2[BlipSprite2["Altruist"] = 269] = "Altruist";
        BlipSprite2[BlipSprite2["Enemy"] = 270] = "Enemy";
        BlipSprite2[BlipSprite2["Chop"] = 273] = "Chop";
        BlipSprite2[BlipSprite2["Dead"] = 274] = "Dead";
        BlipSprite2[BlipSprite2["Hooker"] = 279] = "Hooker";
        BlipSprite2[BlipSprite2["Friend"] = 280] = "Friend";
        BlipSprite2[BlipSprite2["BountyHit"] = 303] = "BountyHit";
        BlipSprite2[BlipSprite2["GTAOMission"] = 304] = "GTAOMission";
        BlipSprite2[BlipSprite2["GTAOSurvival"] = 305] = "GTAOSurvival";
        BlipSprite2[BlipSprite2["CrateDrop"] = 306] = "CrateDrop";
        BlipSprite2[BlipSprite2["PlaneDrop"] = 307] = "PlaneDrop";
        BlipSprite2[BlipSprite2["Sub"] = 308] = "Sub";
        BlipSprite2[BlipSprite2["Race"] = 309] = "Race";
        BlipSprite2[BlipSprite2["Deathmatch"] = 310] = "Deathmatch";
        BlipSprite2[BlipSprite2["ArmWrestling"] = 311] = "ArmWrestling";
        BlipSprite2[BlipSprite2["AmmuNationShootingRange"] = 313] = "AmmuNationShootingRange";
        BlipSprite2[BlipSprite2["RaceAir"] = 314] = "RaceAir";
        BlipSprite2[BlipSprite2["RaceCar"] = 315] = "RaceCar";
        BlipSprite2[BlipSprite2["RaceSea"] = 316] = "RaceSea";
        BlipSprite2[BlipSprite2["GarbageTruck"] = 318] = "GarbageTruck";
        BlipSprite2[BlipSprite2["SafehouseForSale"] = 350] = "SafehouseForSale";
        BlipSprite2[BlipSprite2["Package"] = 351] = "Package";
        BlipSprite2[BlipSprite2["MartinMadrazo"] = 352] = "MartinMadrazo";
        BlipSprite2[BlipSprite2["EnemyHelicopter"] = 353] = "EnemyHelicopter";
        BlipSprite2[BlipSprite2["Boost"] = 354] = "Boost";
        BlipSprite2[BlipSprite2["Devin"] = 355] = "Devin";
        BlipSprite2[BlipSprite2["Marina"] = 356] = "Marina";
        BlipSprite2[BlipSprite2["Garage"] = 357] = "Garage";
        BlipSprite2[BlipSprite2["GolfFlag"] = 358] = "GolfFlag";
        BlipSprite2[BlipSprite2["Hangar"] = 359] = "Hangar";
        BlipSprite2[BlipSprite2["Helipad"] = 360] = "Helipad";
        BlipSprite2[BlipSprite2["JerryCan"] = 361] = "JerryCan";
        BlipSprite2[BlipSprite2["Masks"] = 362] = "Masks";
        BlipSprite2[BlipSprite2["HeistSetup"] = 363] = "HeistSetup";
        BlipSprite2[BlipSprite2["Incapacitated"] = 364] = "Incapacitated";
        BlipSprite2[BlipSprite2["PickupSpawn"] = 365] = "PickupSpawn";
        BlipSprite2[BlipSprite2["BoilerSuit"] = 366] = "BoilerSuit";
        BlipSprite2[BlipSprite2["Completed"] = 367] = "Completed";
        BlipSprite2[BlipSprite2["Rockets"] = 368] = "Rockets";
        BlipSprite2[BlipSprite2["GarageForSale"] = 369] = "GarageForSale";
        BlipSprite2[BlipSprite2["HelipadForSale"] = 370] = "HelipadForSale";
        BlipSprite2[BlipSprite2["MarinaForSale"] = 371] = "MarinaForSale";
        BlipSprite2[BlipSprite2["HangarForSale"] = 372] = "HangarForSale";
        BlipSprite2[BlipSprite2["Business"] = 374] = "Business";
        BlipSprite2[BlipSprite2["BusinessForSale"] = 375] = "BusinessForSale";
        BlipSprite2[BlipSprite2["RaceBike"] = 376] = "RaceBike";
        BlipSprite2[BlipSprite2["Parachute"] = 377] = "Parachute";
        BlipSprite2[BlipSprite2["TeamDeathmatch"] = 378] = "TeamDeathmatch";
        BlipSprite2[BlipSprite2["RaceFoot"] = 379] = "RaceFoot";
        BlipSprite2[BlipSprite2["VehicleDeathmatch"] = 380] = "VehicleDeathmatch";
        BlipSprite2[BlipSprite2["Barry"] = 381] = "Barry";
        BlipSprite2[BlipSprite2["Dom"] = 382] = "Dom";
        BlipSprite2[BlipSprite2["MaryAnn"] = 383] = "MaryAnn";
        BlipSprite2[BlipSprite2["Cletus"] = 384] = "Cletus";
        BlipSprite2[BlipSprite2["Josh"] = 385] = "Josh";
        BlipSprite2[BlipSprite2["Minute"] = 386] = "Minute";
        BlipSprite2[BlipSprite2["Omega"] = 387] = "Omega";
        BlipSprite2[BlipSprite2["Tonya"] = 388] = "Tonya";
        BlipSprite2[BlipSprite2["Paparazzo"] = 389] = "Paparazzo";
        BlipSprite2[BlipSprite2["Crosshair"] = 390] = "Crosshair";
        BlipSprite2[BlipSprite2["Creator"] = 398] = "Creator";
        BlipSprite2[BlipSprite2["CreatorDirection"] = 399] = "CreatorDirection";
        BlipSprite2[BlipSprite2["Abigail"] = 400] = "Abigail";
        BlipSprite2[BlipSprite2["Blimp"] = 401] = "Blimp";
        BlipSprite2[BlipSprite2["Repair"] = 402] = "Repair";
        BlipSprite2[BlipSprite2["Testosterone"] = 403] = "Testosterone";
        BlipSprite2[BlipSprite2["Dinghy"] = 404] = "Dinghy";
        BlipSprite2[BlipSprite2["Fanatic"] = 405] = "Fanatic";
        BlipSprite2[BlipSprite2["Information"] = 407] = "Information";
        BlipSprite2[BlipSprite2["CaptureBriefcase"] = 408] = "CaptureBriefcase";
        BlipSprite2[BlipSprite2["LastTeamStanding"] = 409] = "LastTeamStanding";
        BlipSprite2[BlipSprite2["Boat"] = 410] = "Boat";
        BlipSprite2[BlipSprite2["CaptureHouse"] = 411] = "CaptureHouse";
        BlipSprite2[BlipSprite2["JerryCan2"] = 415] = "JerryCan2";
        BlipSprite2[BlipSprite2["RP"] = 416] = "RP";
        BlipSprite2[BlipSprite2["GTAOPlayerSafehouse"] = 417] = "GTAOPlayerSafehouse";
        BlipSprite2[BlipSprite2["GTAOPlayerSafehouseDead"] = 418] = "GTAOPlayerSafehouseDead";
        BlipSprite2[BlipSprite2["CaptureAmericanFlag"] = 419] = "CaptureAmericanFlag";
        BlipSprite2[BlipSprite2["CaptureFlag"] = 420] = "CaptureFlag";
        BlipSprite2[BlipSprite2["Tank"] = 421] = "Tank";
        BlipSprite2[BlipSprite2["HelicopterAnimated"] = 422] = "HelicopterAnimated";
        BlipSprite2[BlipSprite2["Plane"] = 423] = "Plane";
        BlipSprite2[BlipSprite2["PlayerNoColor"] = 425] = "PlayerNoColor";
        BlipSprite2[BlipSprite2["GunCar"] = 426] = "GunCar";
        BlipSprite2[BlipSprite2["Speedboat"] = 427] = "Speedboat";
        BlipSprite2[BlipSprite2["Heist"] = 428] = "Heist";
        BlipSprite2[BlipSprite2["Stopwatch"] = 430] = "Stopwatch";
        BlipSprite2[BlipSprite2["DollarSignCircled"] = 431] = "DollarSignCircled";
        BlipSprite2[BlipSprite2["Crosshair2"] = 432] = "Crosshair2";
        BlipSprite2[BlipSprite2["DollarSignSquared"] = 434] = "DollarSignSquared";
      })(BlipSprite || (BlipSprite = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/CloudHat.js
  var CloudHat;
  var init_CloudHat = __esm({
    "node_modules/@nativewrappers/client/lib/enums/CloudHat.js"() {
      (function(CloudHat2) {
        CloudHat2[CloudHat2["Unknown"] = 1] = "Unknown";
        CloudHat2[CloudHat2["Altostratus"] = 2] = "Altostratus";
        CloudHat2[CloudHat2["Cirrus"] = 3] = "Cirrus";
        CloudHat2[CloudHat2["Cirrocumulus"] = 4] = "Cirrocumulus";
        CloudHat2[CloudHat2["Clear"] = 5] = "Clear";
        CloudHat2[CloudHat2["Cloudy"] = 6] = "Cloudy";
        CloudHat2[CloudHat2["Contrails"] = 7] = "Contrails";
        CloudHat2[CloudHat2["Horizon"] = 8] = "Horizon";
        CloudHat2[CloudHat2["HorizonBand1"] = 9] = "HorizonBand1";
        CloudHat2[CloudHat2["HorizonBand2"] = 10] = "HorizonBand2";
        CloudHat2[CloudHat2["HorizonBand3"] = 11] = "HorizonBand3";
        CloudHat2[CloudHat2["Horsey"] = 12] = "Horsey";
        CloudHat2[CloudHat2["Nimbus"] = 13] = "Nimbus";
        CloudHat2[CloudHat2["Puffs"] = 14] = "Puffs";
        CloudHat2[CloudHat2["Rain"] = 15] = "Rain";
        CloudHat2[CloudHat2["Snowy"] = 16] = "Snowy";
        CloudHat2[CloudHat2["Stormy"] = 17] = "Stormy";
        CloudHat2[CloudHat2["Stratoscumulus"] = 18] = "Stratoscumulus";
        CloudHat2[CloudHat2["Stripey"] = 19] = "Stripey";
        CloudHat2[CloudHat2["Shower"] = 20] = "Shower";
        CloudHat2[CloudHat2["Wispy"] = 21] = "Wispy";
      })(CloudHat || (CloudHat = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/Driving.js
  var DrivingStyle, VehicleDrivingFlags;
  var init_Driving = __esm({
    "node_modules/@nativewrappers/client/lib/enums/Driving.js"() {
      (function(DrivingStyle2) {
        DrivingStyle2[DrivingStyle2["None"] = 0] = "None";
        DrivingStyle2[DrivingStyle2["Normal"] = 786603] = "Normal";
        DrivingStyle2[DrivingStyle2["IgnoreLights"] = 2883621] = "IgnoreLights";
        DrivingStyle2[DrivingStyle2["SometimesOvertakeTraffic"] = 5] = "SometimesOvertakeTraffic";
        DrivingStyle2[DrivingStyle2["Rushed"] = 1074528293] = "Rushed";
        DrivingStyle2[DrivingStyle2["AvoidTraffic"] = 786468] = "AvoidTraffic";
        DrivingStyle2[DrivingStyle2["AvoidTrafficExtremely"] = 6] = "AvoidTrafficExtremely";
        DrivingStyle2[DrivingStyle2["AvoidHighwaysWhenPossible"] = 536870912] = "AvoidHighwaysWhenPossible";
        DrivingStyle2[DrivingStyle2["IgnorePathing"] = 16777216] = "IgnorePathing";
        DrivingStyle2[DrivingStyle2["IgnoreRoads"] = 4194304] = "IgnoreRoads";
        DrivingStyle2[DrivingStyle2["ShortestPath"] = 262144] = "ShortestPath";
        DrivingStyle2[DrivingStyle2["Backwards"] = 1024] = "Backwards";
      })(DrivingStyle || (DrivingStyle = {}));
      (function(VehicleDrivingFlags2) {
        VehicleDrivingFlags2[VehicleDrivingFlags2["None"] = 0] = "None";
        VehicleDrivingFlags2[VehicleDrivingFlags2["FollowTraffic"] = 1] = "FollowTraffic";
        VehicleDrivingFlags2[VehicleDrivingFlags2["YieldToPeds"] = 2] = "YieldToPeds";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidVehicles"] = 4] = "AvoidVehicles";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidEmptyVehicles"] = 8] = "AvoidEmptyVehicles";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidPeds"] = 16] = "AvoidPeds";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidObjects"] = 32] = "AvoidObjects";
        VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtTrafficLights"] = 128] = "StopAtTrafficLights";
        VehicleDrivingFlags2[VehicleDrivingFlags2["UseBlinkers"] = 256] = "UseBlinkers";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AllowGoingWrongWay"] = 512] = "AllowGoingWrongWay";
        VehicleDrivingFlags2[VehicleDrivingFlags2["Reverse"] = 1024] = "Reverse";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AllowMedianCrossing"] = 262144] = "AllowMedianCrossing";
        VehicleDrivingFlags2[VehicleDrivingFlags2["DriveBySight"] = 4194304] = "DriveBySight";
        VehicleDrivingFlags2[VehicleDrivingFlags2["IgnorePathFinding"] = 16777216] = "IgnorePathFinding";
        VehicleDrivingFlags2[VehicleDrivingFlags2["TryToAvoidHighways"] = 536870912] = "TryToAvoidHighways";
        VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtDestination"] = 2147483648] = "StopAtDestination";
      })(VehicleDrivingFlags || (VehicleDrivingFlags = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/FiringPattern.js
  var FiringPattern;
  var init_FiringPattern = __esm({
    "node_modules/@nativewrappers/client/lib/enums/FiringPattern.js"() {
      (function(FiringPattern2) {
        FiringPattern2[FiringPattern2["Default"] = 0] = "Default";
        FiringPattern2[FiringPattern2["FullAuto"] = 3337513804] = "FullAuto";
        FiringPattern2[FiringPattern2["BurstFire"] = 3607063905] = "BurstFire";
        FiringPattern2[FiringPattern2["BurstInCover"] = 40051185] = "BurstInCover";
        FiringPattern2[FiringPattern2["BurstFireDriveby"] = 3541198322] = "BurstFireDriveby";
        FiringPattern2[FiringPattern2["FromGround"] = 577037782] = "FromGround";
        FiringPattern2[FiringPattern2["DelayFireByOneSec"] = 2055493265] = "DelayFireByOneSec";
        FiringPattern2[FiringPattern2["SingleShot"] = 1566631136] = "SingleShot";
        FiringPattern2[FiringPattern2["BurstFirePistol"] = 2685983626] = "BurstFirePistol";
        FiringPattern2[FiringPattern2["BurstFireSMG"] = 3507334638] = "BurstFireSMG";
        FiringPattern2[FiringPattern2["BurstFireRifle"] = 2624893958] = "BurstFireRifle";
        FiringPattern2[FiringPattern2["BurstFireMG"] = 3044263348] = "BurstFireMG";
        FiringPattern2[FiringPattern2["BurstFirePumpShotGun"] = 12239771] = "BurstFirePumpShotGun";
        FiringPattern2[FiringPattern2["BurstFireHeli"] = 2437838959] = "BurstFireHeli";
        FiringPattern2[FiringPattern2["BurstFireMicro"] = 1122960381] = "BurstFireMicro";
        FiringPattern2[FiringPattern2["BurstFireBursts"] = 1122960381] = "BurstFireBursts";
        FiringPattern2[FiringPattern2["BurstFireTank"] = 3804904049] = "BurstFireTank";
      })(FiringPattern || (FiringPattern = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/ForceType.js
  var ForceType;
  var init_ForceType = __esm({
    "node_modules/@nativewrappers/client/lib/enums/ForceType.js"() {
      (function(ForceType2) {
        ForceType2[ForceType2["MinForce"] = 0] = "MinForce";
        ForceType2[ForceType2["MaxForceRot"] = 1] = "MaxForceRot";
        ForceType2[ForceType2["MinForce2"] = 2] = "MinForce2";
        ForceType2[ForceType2["MaxForceRot2"] = 3] = "MaxForceRot2";
        ForceType2[ForceType2["ForceNoRot"] = 4] = "ForceNoRot";
        ForceType2[ForceType2["ForceRotPlusForce"] = 5] = "ForceRotPlusForce";
      })(ForceType || (ForceType = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/Gender.js
  var Gender;
  var init_Gender = __esm({
    "node_modules/@nativewrappers/client/lib/enums/Gender.js"() {
      (function(Gender2) {
        Gender2[Gender2["Male"] = 0] = "Male";
        Gender2[Gender2["Female"] = 1] = "Female";
      })(Gender || (Gender = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/InputMode.js
  var InputMode;
  var init_InputMode = __esm({
    "node_modules/@nativewrappers/client/lib/enums/InputMode.js"() {
      (function(InputMode2) {
        InputMode2[InputMode2["MouseAndKeyboard"] = 0] = "MouseAndKeyboard";
        InputMode2[InputMode2["GamePad"] = 2] = "GamePad";
      })(InputMode || (InputMode = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/RadioStation.js
  var RadioStation;
  var init_RadioStation = __esm({
    "node_modules/@nativewrappers/client/lib/enums/RadioStation.js"() {
      (function(RadioStation2) {
        RadioStation2["LosSantosRockRadio"] = "RADIO_01_CLASS_ROCK";
        RadioStation2["NonStopPopFM"] = "RADIO_02_POP";
        RadioStation2["RadioLosSantos"] = "RADIO_03_HIPHOP_NEW";
        RadioStation2["ChannelX"] = "RADIO_04_PUNK";
        RadioStation2["WestCoastTalkRadio"] = "RADIO_05_TALK_01";
        RadioStation2["RebelRadio"] = "RADIO_06_COUNTRY";
        RadioStation2["SoulwaxFM"] = "RADIO_07_DANCE_01";
        RadioStation2["EastLosFM"] = "RADIO_08_MEXICAN";
        RadioStation2["WestCoastClassics"] = "RADIO_09_HIPHOP_OLD";
        RadioStation2["BlaineCountyRadio"] = "RADIO_11_TALK_02";
        RadioStation2["TheBlueArk"] = "RADIO_12_REGGAE";
        RadioStation2["WorldWideFM"] = "RADIO_13_JAZZ";
        RadioStation2["FlyloFM"] = "RADIO_14_DANCE_02";
        RadioStation2["TheLowdown"] = "RADIO_15_MOTOWN";
        RadioStation2["RadioMirrorPark"] = "RADIO_16_SILVERLAKE";
        RadioStation2["Space"] = "RADIO_17_FUNK";
        RadioStation2["VinewoodBoulevardRadio"] = "RADIO_18_90S_ROCK";
        RadioStation2["SelfRadio"] = "RADIO_19_USER";
        RadioStation2["TheLab"] = "RADIO_20_THELAB";
        RadioStation2["BlondedLosSantos"] = "RADIO_21_DLC_XM17";
        RadioStation2["LosSantosUndergroundRadio"] = "RADIO_22_DLC_BATTLE_MIX1_RADIO";
        RadioStation2["RadioOff"] = "OFF";
      })(RadioStation || (RadioStation = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/RagdollType.js
  var RagdollType;
  var init_RagdollType = __esm({
    "node_modules/@nativewrappers/client/lib/enums/RagdollType.js"() {
      (function(RagdollType2) {
        RagdollType2[RagdollType2["Normal"] = 0] = "Normal";
        RagdollType2[RagdollType2["StiffLegs"] = 1] = "StiffLegs";
        RagdollType2[RagdollType2["NarrowLegs"] = 2] = "NarrowLegs";
        RagdollType2[RagdollType2["WideLegs"] = 3] = "WideLegs";
      })(RagdollType || (RagdollType = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/SpeechModifier.js
  var SpeechModifier;
  var init_SpeechModifier = __esm({
    "node_modules/@nativewrappers/client/lib/enums/SpeechModifier.js"() {
      (function(SpeechModifier2) {
        SpeechModifier2[SpeechModifier2["Standard"] = 0] = "Standard";
        SpeechModifier2[SpeechModifier2["AllowRepeat"] = 1] = "AllowRepeat";
        SpeechModifier2[SpeechModifier2["Beat"] = 2] = "Beat";
        SpeechModifier2[SpeechModifier2["Force"] = 3] = "Force";
        SpeechModifier2[SpeechModifier2["ForceFrontend"] = 4] = "ForceFrontend";
        SpeechModifier2[SpeechModifier2["ForceNoRepeatFrontend"] = 5] = "ForceNoRepeatFrontend";
        SpeechModifier2[SpeechModifier2["ForceNormal"] = 6] = "ForceNormal";
        SpeechModifier2[SpeechModifier2["ForceNormalClear"] = 7] = "ForceNormalClear";
        SpeechModifier2[SpeechModifier2["ForceNormalCritical"] = 8] = "ForceNormalCritical";
        SpeechModifier2[SpeechModifier2["ForceShouted"] = 9] = "ForceShouted";
        SpeechModifier2[SpeechModifier2["ForceShoutedClear"] = 10] = "ForceShoutedClear";
        SpeechModifier2[SpeechModifier2["ForceShoutedCritical"] = 11] = "ForceShoutedCritical";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnly"] = 12] = "ForcePreloadOnly";
        SpeechModifier2[SpeechModifier2["Megaphone"] = 13] = "Megaphone";
        SpeechModifier2[SpeechModifier2["Helicopter"] = 14] = "Helicopter";
        SpeechModifier2[SpeechModifier2["ForceMegaphone"] = 15] = "ForceMegaphone";
        SpeechModifier2[SpeechModifier2["ForceHelicopter"] = 16] = "ForceHelicopter";
        SpeechModifier2[SpeechModifier2["Interrupt"] = 17] = "Interrupt";
        SpeechModifier2[SpeechModifier2["InterruptShouted"] = 18] = "InterruptShouted";
        SpeechModifier2[SpeechModifier2["InterruptShoutedClear"] = 19] = "InterruptShoutedClear";
        SpeechModifier2[SpeechModifier2["InterruptShoutedCritical"] = 20] = "InterruptShoutedCritical";
        SpeechModifier2[SpeechModifier2["InterruptNoForce"] = 21] = "InterruptNoForce";
        SpeechModifier2[SpeechModifier2["InterruptFrontend"] = 22] = "InterruptFrontend";
        SpeechModifier2[SpeechModifier2["InterruptNoForceFrontend"] = 23] = "InterruptNoForceFrontend";
        SpeechModifier2[SpeechModifier2["AddBlip"] = 24] = "AddBlip";
        SpeechModifier2[SpeechModifier2["AddBlipAllowRepeat"] = 25] = "AddBlipAllowRepeat";
        SpeechModifier2[SpeechModifier2["AddBlipForce"] = 26] = "AddBlipForce";
        SpeechModifier2[SpeechModifier2["AddBlipShouted"] = 27] = "AddBlipShouted";
        SpeechModifier2[SpeechModifier2["AddBlipShoutedForce"] = 28] = "AddBlipShoutedForce";
        SpeechModifier2[SpeechModifier2["AddBlipInterrupt"] = 29] = "AddBlipInterrupt";
        SpeechModifier2[SpeechModifier2["AddBlipInterruptForce"] = 30] = "AddBlipInterruptForce";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShouted"] = 31] = "ForcePreloadOnlyShouted";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedClear"] = 32] = "ForcePreloadOnlyShoutedClear";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedCritical"] = 33] = "ForcePreloadOnlyShoutedCritical";
        SpeechModifier2[SpeechModifier2["Shouted"] = 34] = "Shouted";
        SpeechModifier2[SpeechModifier2["ShoutedClear"] = 35] = "ShoutedClear";
        SpeechModifier2[SpeechModifier2["ShoutedCritical"] = 36] = "ShoutedCritical";
      })(SpeechModifier || (SpeechModifier = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/Vehicle.js
  var CargobobHook, LicensePlateStyle, LicensePlateType, VehicleClass, VehicleColor, VehicleLandingGearState, VehicleLockStatus, VehicleNeonLight, VehicleRoofState, VehicleSeat, VehicleWindowTint, VehicleWindowIndex, VehicleModType, VehicleToggleModType, VehiclePaintType, VehicleDoorIndex, VehicleWheelType, VehicleWheelIndex;
  var init_Vehicle = __esm({
    "node_modules/@nativewrappers/client/lib/enums/Vehicle.js"() {
      (function(CargobobHook2) {
        CargobobHook2[CargobobHook2["Hook"] = 0] = "Hook";
        CargobobHook2[CargobobHook2["Magnet"] = 1] = "Magnet";
      })(CargobobHook || (CargobobHook = {}));
      (function(LicensePlateStyle2) {
        LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite1"] = 3] = "BlueOnWhite1";
        LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite2"] = 0] = "BlueOnWhite2";
        LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite3"] = 4] = "BlueOnWhite3";
        LicensePlateStyle2[LicensePlateStyle2["YellowOnBlack"] = 1] = "YellowOnBlack";
        LicensePlateStyle2[LicensePlateStyle2["YellowOnBlue"] = 2] = "YellowOnBlue";
        LicensePlateStyle2[LicensePlateStyle2["NorthYankton"] = 5] = "NorthYankton";
      })(LicensePlateStyle || (LicensePlateStyle = {}));
      (function(LicensePlateType2) {
        LicensePlateType2[LicensePlateType2["FrontAndRearPlates"] = 0] = "FrontAndRearPlates";
        LicensePlateType2[LicensePlateType2["FrontPlate"] = 1] = "FrontPlate";
        LicensePlateType2[LicensePlateType2["RearPlate"] = 2] = "RearPlate";
        LicensePlateType2[LicensePlateType2["None"] = 3] = "None";
      })(LicensePlateType || (LicensePlateType = {}));
      (function(VehicleClass2) {
        VehicleClass2[VehicleClass2["Compacts"] = 0] = "Compacts";
        VehicleClass2[VehicleClass2["Sedans"] = 1] = "Sedans";
        VehicleClass2[VehicleClass2["SUVs"] = 2] = "SUVs";
        VehicleClass2[VehicleClass2["Coupes"] = 3] = "Coupes";
        VehicleClass2[VehicleClass2["Muscle"] = 4] = "Muscle";
        VehicleClass2[VehicleClass2["SportsClassics"] = 5] = "SportsClassics";
        VehicleClass2[VehicleClass2["Sports"] = 6] = "Sports";
        VehicleClass2[VehicleClass2["Super"] = 7] = "Super";
        VehicleClass2[VehicleClass2["Motorcycles"] = 8] = "Motorcycles";
        VehicleClass2[VehicleClass2["OffRoad"] = 9] = "OffRoad";
        VehicleClass2[VehicleClass2["Industrial"] = 10] = "Industrial";
        VehicleClass2[VehicleClass2["Utility"] = 11] = "Utility";
        VehicleClass2[VehicleClass2["Vans"] = 12] = "Vans";
        VehicleClass2[VehicleClass2["Cycles"] = 13] = "Cycles";
        VehicleClass2[VehicleClass2["Boats"] = 14] = "Boats";
        VehicleClass2[VehicleClass2["Helicopters"] = 15] = "Helicopters";
        VehicleClass2[VehicleClass2["Planes"] = 16] = "Planes";
        VehicleClass2[VehicleClass2["Service"] = 17] = "Service";
        VehicleClass2[VehicleClass2["Emergency"] = 18] = "Emergency";
        VehicleClass2[VehicleClass2["Military"] = 19] = "Military";
        VehicleClass2[VehicleClass2["Commercial"] = 20] = "Commercial";
        VehicleClass2[VehicleClass2["Trains"] = 21] = "Trains";
      })(VehicleClass || (VehicleClass = {}));
      (function(VehicleColor2) {
        VehicleColor2[VehicleColor2["MetallicBlack"] = 0] = "MetallicBlack";
        VehicleColor2[VehicleColor2["MetallicGraphiteBlack"] = 1] = "MetallicGraphiteBlack";
        VehicleColor2[VehicleColor2["MetallicBlackSteel"] = 2] = "MetallicBlackSteel";
        VehicleColor2[VehicleColor2["MetallicDarkSilver"] = 3] = "MetallicDarkSilver";
        VehicleColor2[VehicleColor2["MetallicSilver"] = 4] = "MetallicSilver";
        VehicleColor2[VehicleColor2["MetallicBlueSilver"] = 5] = "MetallicBlueSilver";
        VehicleColor2[VehicleColor2["MetallicSteelGray"] = 6] = "MetallicSteelGray";
        VehicleColor2[VehicleColor2["MetallicShadowSilver"] = 7] = "MetallicShadowSilver";
        VehicleColor2[VehicleColor2["MetallicStoneSilver"] = 8] = "MetallicStoneSilver";
        VehicleColor2[VehicleColor2["MetallicMidnightSilver"] = 9] = "MetallicMidnightSilver";
        VehicleColor2[VehicleColor2["MetallicGunMetal"] = 10] = "MetallicGunMetal";
        VehicleColor2[VehicleColor2["MetallicAnthraciteGray"] = 11] = "MetallicAnthraciteGray";
        VehicleColor2[VehicleColor2["MatteBlack"] = 12] = "MatteBlack";
        VehicleColor2[VehicleColor2["MatteGray"] = 13] = "MatteGray";
        VehicleColor2[VehicleColor2["MatteLightGray"] = 14] = "MatteLightGray";
        VehicleColor2[VehicleColor2["UtilBlack"] = 15] = "UtilBlack";
        VehicleColor2[VehicleColor2["UtilBlackPoly"] = 16] = "UtilBlackPoly";
        VehicleColor2[VehicleColor2["UtilDarksilver"] = 17] = "UtilDarksilver";
        VehicleColor2[VehicleColor2["UtilSilver"] = 18] = "UtilSilver";
        VehicleColor2[VehicleColor2["UtilGunMetal"] = 19] = "UtilGunMetal";
        VehicleColor2[VehicleColor2["UtilShadowSilver"] = 20] = "UtilShadowSilver";
        VehicleColor2[VehicleColor2["WornBlack"] = 21] = "WornBlack";
        VehicleColor2[VehicleColor2["WornGraphite"] = 22] = "WornGraphite";
        VehicleColor2[VehicleColor2["WornSilverGray"] = 23] = "WornSilverGray";
        VehicleColor2[VehicleColor2["WornSilver"] = 24] = "WornSilver";
        VehicleColor2[VehicleColor2["WornBlueSilver"] = 25] = "WornBlueSilver";
        VehicleColor2[VehicleColor2["WornShadowSilver"] = 26] = "WornShadowSilver";
        VehicleColor2[VehicleColor2["MetallicRed"] = 27] = "MetallicRed";
        VehicleColor2[VehicleColor2["MetallicTorinoRed"] = 28] = "MetallicTorinoRed";
        VehicleColor2[VehicleColor2["MetallicFormulaRed"] = 29] = "MetallicFormulaRed";
        VehicleColor2[VehicleColor2["MetallicBlazeRed"] = 30] = "MetallicBlazeRed";
        VehicleColor2[VehicleColor2["MetallicGracefulRed"] = 31] = "MetallicGracefulRed";
        VehicleColor2[VehicleColor2["MetallicGarnetRed"] = 32] = "MetallicGarnetRed";
        VehicleColor2[VehicleColor2["MetallicDesertRed"] = 33] = "MetallicDesertRed";
        VehicleColor2[VehicleColor2["MetallicCabernetRed"] = 34] = "MetallicCabernetRed";
        VehicleColor2[VehicleColor2["MetallicCandyRed"] = 35] = "MetallicCandyRed";
        VehicleColor2[VehicleColor2["MetallicSunriseOrange"] = 36] = "MetallicSunriseOrange";
        VehicleColor2[VehicleColor2["MetallicClassicGold"] = 37] = "MetallicClassicGold";
        VehicleColor2[VehicleColor2["MetallicOrange"] = 38] = "MetallicOrange";
        VehicleColor2[VehicleColor2["MatteRed"] = 39] = "MatteRed";
        VehicleColor2[VehicleColor2["MatteDarkRed"] = 40] = "MatteDarkRed";
        VehicleColor2[VehicleColor2["MatteOrange"] = 41] = "MatteOrange";
        VehicleColor2[VehicleColor2["MatteYellow"] = 42] = "MatteYellow";
        VehicleColor2[VehicleColor2["UtilRed"] = 43] = "UtilRed";
        VehicleColor2[VehicleColor2["UtilBrightRed"] = 44] = "UtilBrightRed";
        VehicleColor2[VehicleColor2["UtilGarnetRed"] = 45] = "UtilGarnetRed";
        VehicleColor2[VehicleColor2["WornRed"] = 46] = "WornRed";
        VehicleColor2[VehicleColor2["WornGoldenRed"] = 47] = "WornGoldenRed";
        VehicleColor2[VehicleColor2["WornDarkRed"] = 48] = "WornDarkRed";
        VehicleColor2[VehicleColor2["MetallicDarkGreen"] = 49] = "MetallicDarkGreen";
        VehicleColor2[VehicleColor2["MetallicRacingGreen"] = 50] = "MetallicRacingGreen";
        VehicleColor2[VehicleColor2["MetallicSeaGreen"] = 51] = "MetallicSeaGreen";
        VehicleColor2[VehicleColor2["MetallicOliveGreen"] = 52] = "MetallicOliveGreen";
        VehicleColor2[VehicleColor2["MetallicGreen"] = 53] = "MetallicGreen";
        VehicleColor2[VehicleColor2["MetallicGasolineBlueGreen"] = 54] = "MetallicGasolineBlueGreen";
        VehicleColor2[VehicleColor2["MatteLimeGreen"] = 55] = "MatteLimeGreen";
        VehicleColor2[VehicleColor2["UtilDarkGreen"] = 56] = "UtilDarkGreen";
        VehicleColor2[VehicleColor2["UtilGreen"] = 57] = "UtilGreen";
        VehicleColor2[VehicleColor2["WornDarkGreen"] = 58] = "WornDarkGreen";
        VehicleColor2[VehicleColor2["WornGreen"] = 59] = "WornGreen";
        VehicleColor2[VehicleColor2["WornSeaWash"] = 60] = "WornSeaWash";
        VehicleColor2[VehicleColor2["MetallicMidnightBlue"] = 61] = "MetallicMidnightBlue";
        VehicleColor2[VehicleColor2["MetallicDarkBlue"] = 62] = "MetallicDarkBlue";
        VehicleColor2[VehicleColor2["MetallicSaxonyBlue"] = 63] = "MetallicSaxonyBlue";
        VehicleColor2[VehicleColor2["MetallicBlue"] = 64] = "MetallicBlue";
        VehicleColor2[VehicleColor2["MetallicMarinerBlue"] = 65] = "MetallicMarinerBlue";
        VehicleColor2[VehicleColor2["MetallicHarborBlue"] = 66] = "MetallicHarborBlue";
        VehicleColor2[VehicleColor2["MetallicDiamondBlue"] = 67] = "MetallicDiamondBlue";
        VehicleColor2[VehicleColor2["MetallicSurfBlue"] = 68] = "MetallicSurfBlue";
        VehicleColor2[VehicleColor2["MetallicNauticalBlue"] = 69] = "MetallicNauticalBlue";
        VehicleColor2[VehicleColor2["MetallicBrightBlue"] = 70] = "MetallicBrightBlue";
        VehicleColor2[VehicleColor2["MetallicPurpleBlue"] = 71] = "MetallicPurpleBlue";
        VehicleColor2[VehicleColor2["MetallicSpinnakerBlue"] = 72] = "MetallicSpinnakerBlue";
        VehicleColor2[VehicleColor2["MetallicUltraBlue"] = 73] = "MetallicUltraBlue";
        VehicleColor2[VehicleColor2["UtilDarkBlue"] = 75] = "UtilDarkBlue";
        VehicleColor2[VehicleColor2["UtilMidnightBlue"] = 76] = "UtilMidnightBlue";
        VehicleColor2[VehicleColor2["UtilBlue"] = 77] = "UtilBlue";
        VehicleColor2[VehicleColor2["UtilSeaFoamBlue"] = 78] = "UtilSeaFoamBlue";
        VehicleColor2[VehicleColor2["UtilLightningBlue"] = 79] = "UtilLightningBlue";
        VehicleColor2[VehicleColor2["UtilMauiBluePoly"] = 80] = "UtilMauiBluePoly";
        VehicleColor2[VehicleColor2["UtilBrightBlue"] = 81] = "UtilBrightBlue";
        VehicleColor2[VehicleColor2["MatteDarkBlue"] = 82] = "MatteDarkBlue";
        VehicleColor2[VehicleColor2["MatteBlue"] = 83] = "MatteBlue";
        VehicleColor2[VehicleColor2["MatteMidnightBlue"] = 84] = "MatteMidnightBlue";
        VehicleColor2[VehicleColor2["WornDarkBlue"] = 85] = "WornDarkBlue";
        VehicleColor2[VehicleColor2["WornBlue"] = 86] = "WornBlue";
        VehicleColor2[VehicleColor2["WornLightBlue"] = 87] = "WornLightBlue";
        VehicleColor2[VehicleColor2["MetallicTaxiYellow"] = 88] = "MetallicTaxiYellow";
        VehicleColor2[VehicleColor2["MetallicRaceYellow"] = 89] = "MetallicRaceYellow";
        VehicleColor2[VehicleColor2["MetallicBronze"] = 90] = "MetallicBronze";
        VehicleColor2[VehicleColor2["MetallicYellowBird"] = 91] = "MetallicYellowBird";
        VehicleColor2[VehicleColor2["MetallicLime"] = 92] = "MetallicLime";
        VehicleColor2[VehicleColor2["MetallicChampagne"] = 93] = "MetallicChampagne";
        VehicleColor2[VehicleColor2["MetallicPuebloBeige"] = 94] = "MetallicPuebloBeige";
        VehicleColor2[VehicleColor2["MetallicDarkIvory"] = 95] = "MetallicDarkIvory";
        VehicleColor2[VehicleColor2["MetallicChocoBrown"] = 96] = "MetallicChocoBrown";
        VehicleColor2[VehicleColor2["MetallicGoldenBrown"] = 97] = "MetallicGoldenBrown";
        VehicleColor2[VehicleColor2["MetallicLightBrown"] = 98] = "MetallicLightBrown";
        VehicleColor2[VehicleColor2["MetallicStrawBeige"] = 99] = "MetallicStrawBeige";
        VehicleColor2[VehicleColor2["MetallicMossBrown"] = 100] = "MetallicMossBrown";
        VehicleColor2[VehicleColor2["MetallicBistonBrown"] = 101] = "MetallicBistonBrown";
        VehicleColor2[VehicleColor2["MetallicBeechwood"] = 102] = "MetallicBeechwood";
        VehicleColor2[VehicleColor2["MetallicDarkBeechwood"] = 103] = "MetallicDarkBeechwood";
        VehicleColor2[VehicleColor2["MetallicChocoOrange"] = 104] = "MetallicChocoOrange";
        VehicleColor2[VehicleColor2["MetallicBeachSand"] = 105] = "MetallicBeachSand";
        VehicleColor2[VehicleColor2["MetallicSunBleechedSand"] = 106] = "MetallicSunBleechedSand";
        VehicleColor2[VehicleColor2["MetallicCream"] = 107] = "MetallicCream";
        VehicleColor2[VehicleColor2["UtilBrown"] = 108] = "UtilBrown";
        VehicleColor2[VehicleColor2["UtilMediumBrown"] = 109] = "UtilMediumBrown";
        VehicleColor2[VehicleColor2["UtilLightBrown"] = 110] = "UtilLightBrown";
        VehicleColor2[VehicleColor2["MetallicWhite"] = 111] = "MetallicWhite";
        VehicleColor2[VehicleColor2["MetallicFrostWhite"] = 112] = "MetallicFrostWhite";
        VehicleColor2[VehicleColor2["WornHoneyBeige"] = 113] = "WornHoneyBeige";
        VehicleColor2[VehicleColor2["WornBrown"] = 114] = "WornBrown";
        VehicleColor2[VehicleColor2["WornDarkBrown"] = 115] = "WornDarkBrown";
        VehicleColor2[VehicleColor2["WornStrawBeige"] = 116] = "WornStrawBeige";
        VehicleColor2[VehicleColor2["BrushedSteel"] = 117] = "BrushedSteel";
        VehicleColor2[VehicleColor2["BrushedBlackSteel"] = 118] = "BrushedBlackSteel";
        VehicleColor2[VehicleColor2["BrushedAluminium"] = 119] = "BrushedAluminium";
        VehicleColor2[VehicleColor2["Chrome"] = 120] = "Chrome";
        VehicleColor2[VehicleColor2["WornOffWhite"] = 121] = "WornOffWhite";
        VehicleColor2[VehicleColor2["UtilOffWhite"] = 122] = "UtilOffWhite";
        VehicleColor2[VehicleColor2["WornOrange"] = 123] = "WornOrange";
        VehicleColor2[VehicleColor2["WornLightOrange"] = 124] = "WornLightOrange";
        VehicleColor2[VehicleColor2["MetallicSecuricorGreen"] = 125] = "MetallicSecuricorGreen";
        VehicleColor2[VehicleColor2["WornTaxiYellow"] = 126] = "WornTaxiYellow";
        VehicleColor2[VehicleColor2["PoliceCarBlue"] = 127] = "PoliceCarBlue";
        VehicleColor2[VehicleColor2["MatteGreen"] = 128] = "MatteGreen";
        VehicleColor2[VehicleColor2["MatteBrown"] = 129] = "MatteBrown";
        VehicleColor2[VehicleColor2["MatteWhite"] = 131] = "MatteWhite";
        VehicleColor2[VehicleColor2["WornWhite"] = 132] = "WornWhite";
        VehicleColor2[VehicleColor2["WornOliveArmyGreen"] = 133] = "WornOliveArmyGreen";
        VehicleColor2[VehicleColor2["PureWhite"] = 134] = "PureWhite";
        VehicleColor2[VehicleColor2["HotPink"] = 135] = "HotPink";
        VehicleColor2[VehicleColor2["Salmonpink"] = 136] = "Salmonpink";
        VehicleColor2[VehicleColor2["MetallicVermillionPink"] = 137] = "MetallicVermillionPink";
        VehicleColor2[VehicleColor2["Orange"] = 138] = "Orange";
        VehicleColor2[VehicleColor2["Green"] = 139] = "Green";
        VehicleColor2[VehicleColor2["Blue"] = 140] = "Blue";
        VehicleColor2[VehicleColor2["MettalicBlackBlue"] = 141] = "MettalicBlackBlue";
        VehicleColor2[VehicleColor2["MetallicBlackPurple"] = 142] = "MetallicBlackPurple";
        VehicleColor2[VehicleColor2["MetallicBlackRed"] = 143] = "MetallicBlackRed";
        VehicleColor2[VehicleColor2["HunterGreen"] = 144] = "HunterGreen";
        VehicleColor2[VehicleColor2["MetallicPurple"] = 145] = "MetallicPurple";
        VehicleColor2[VehicleColor2["MetaillicVDarkBlue"] = 146] = "MetaillicVDarkBlue";
        VehicleColor2[VehicleColor2["ModshopBlack1"] = 147] = "ModshopBlack1";
        VehicleColor2[VehicleColor2["MattePurple"] = 148] = "MattePurple";
        VehicleColor2[VehicleColor2["MatteDarkPurple"] = 149] = "MatteDarkPurple";
        VehicleColor2[VehicleColor2["MetallicLavaRed"] = 150] = "MetallicLavaRed";
        VehicleColor2[VehicleColor2["MatteForestGreen"] = 151] = "MatteForestGreen";
        VehicleColor2[VehicleColor2["MatteOliveDrab"] = 152] = "MatteOliveDrab";
        VehicleColor2[VehicleColor2["MatteDesertBrown"] = 153] = "MatteDesertBrown";
        VehicleColor2[VehicleColor2["MatteDesertTan"] = 154] = "MatteDesertTan";
        VehicleColor2[VehicleColor2["MatteFoliageGreen"] = 155] = "MatteFoliageGreen";
        VehicleColor2[VehicleColor2["DefaultAlloyColor"] = 156] = "DefaultAlloyColor";
        VehicleColor2[VehicleColor2["EpsilonBlue"] = 157] = "EpsilonBlue";
        VehicleColor2[VehicleColor2["PureGold"] = 158] = "PureGold";
        VehicleColor2[VehicleColor2["BrushedGold"] = 159] = "BrushedGold";
      })(VehicleColor || (VehicleColor = {}));
      (function(VehicleLandingGearState2) {
        VehicleLandingGearState2[VehicleLandingGearState2["Deployed"] = 0] = "Deployed";
        VehicleLandingGearState2[VehicleLandingGearState2["Closing"] = 1] = "Closing";
        VehicleLandingGearState2[VehicleLandingGearState2["Opening"] = 2] = "Opening";
        VehicleLandingGearState2[VehicleLandingGearState2["Retracted"] = 3] = "Retracted";
      })(VehicleLandingGearState || (VehicleLandingGearState = {}));
      (function(VehicleLockStatus2) {
        VehicleLockStatus2[VehicleLockStatus2["None"] = 0] = "None";
        VehicleLockStatus2[VehicleLockStatus2["Unlocked"] = 1] = "Unlocked";
        VehicleLockStatus2[VehicleLockStatus2["Locked"] = 2] = "Locked";
        VehicleLockStatus2[VehicleLockStatus2["LockedForPlayer"] = 3] = "LockedForPlayer";
        VehicleLockStatus2[VehicleLockStatus2["StickPlayerInside"] = 4] = "StickPlayerInside";
        VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
        VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
        VehicleLockStatus2[VehicleLockStatus2["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
      })(VehicleLockStatus || (VehicleLockStatus = {}));
      (function(VehicleNeonLight2) {
        VehicleNeonLight2[VehicleNeonLight2["Left"] = 0] = "Left";
        VehicleNeonLight2[VehicleNeonLight2["Right"] = 1] = "Right";
        VehicleNeonLight2[VehicleNeonLight2["Front"] = 2] = "Front";
        VehicleNeonLight2[VehicleNeonLight2["Back"] = 3] = "Back";
      })(VehicleNeonLight || (VehicleNeonLight = {}));
      (function(VehicleRoofState2) {
        VehicleRoofState2[VehicleRoofState2["Closed"] = 0] = "Closed";
        VehicleRoofState2[VehicleRoofState2["Opening"] = 1] = "Opening";
        VehicleRoofState2[VehicleRoofState2["Opened"] = 2] = "Opened";
        VehicleRoofState2[VehicleRoofState2["Closing"] = 3] = "Closing";
      })(VehicleRoofState || (VehicleRoofState = {}));
      (function(VehicleSeat2) {
        VehicleSeat2[VehicleSeat2["None"] = -3] = "None";
        VehicleSeat2[VehicleSeat2["Any"] = -2] = "Any";
        VehicleSeat2[VehicleSeat2["Driver"] = -1] = "Driver";
        VehicleSeat2[VehicleSeat2["Passenger"] = 0] = "Passenger";
        VehicleSeat2[VehicleSeat2["LeftFront"] = -1] = "LeftFront";
        VehicleSeat2[VehicleSeat2["RightFront"] = 0] = "RightFront";
        VehicleSeat2[VehicleSeat2["LeftRear"] = 1] = "LeftRear";
        VehicleSeat2[VehicleSeat2["RightRear"] = 2] = "RightRear";
        VehicleSeat2[VehicleSeat2["ExtraSeat1"] = 3] = "ExtraSeat1";
        VehicleSeat2[VehicleSeat2["ExtraSeat2"] = 4] = "ExtraSeat2";
        VehicleSeat2[VehicleSeat2["ExtraSeat3"] = 5] = "ExtraSeat3";
        VehicleSeat2[VehicleSeat2["ExtraSeat4"] = 6] = "ExtraSeat4";
        VehicleSeat2[VehicleSeat2["ExtraSeat5"] = 7] = "ExtraSeat5";
        VehicleSeat2[VehicleSeat2["ExtraSeat6"] = 8] = "ExtraSeat6";
        VehicleSeat2[VehicleSeat2["ExtraSeat7"] = 9] = "ExtraSeat7";
        VehicleSeat2[VehicleSeat2["ExtraSeat8"] = 10] = "ExtraSeat8";
        VehicleSeat2[VehicleSeat2["ExtraSeat9"] = 11] = "ExtraSeat9";
        VehicleSeat2[VehicleSeat2["ExtraSeat10"] = 12] = "ExtraSeat10";
        VehicleSeat2[VehicleSeat2["ExtraSeat11"] = 13] = "ExtraSeat11";
        VehicleSeat2[VehicleSeat2["ExtraSeat12"] = 14] = "ExtraSeat12";
      })(VehicleSeat || (VehicleSeat = {}));
      (function(VehicleWindowTint2) {
        VehicleWindowTint2[VehicleWindowTint2["None"] = 0] = "None";
        VehicleWindowTint2[VehicleWindowTint2["PureBlack"] = 1] = "PureBlack";
        VehicleWindowTint2[VehicleWindowTint2["DarkSmoke"] = 2] = "DarkSmoke";
        VehicleWindowTint2[VehicleWindowTint2["LightSmoke"] = 3] = "LightSmoke";
        VehicleWindowTint2[VehicleWindowTint2["Stock"] = 4] = "Stock";
        VehicleWindowTint2[VehicleWindowTint2["Limo"] = 5] = "Limo";
        VehicleWindowTint2[VehicleWindowTint2["Green"] = 6] = "Green";
      })(VehicleWindowTint || (VehicleWindowTint = {}));
      (function(VehicleWindowIndex2) {
        VehicleWindowIndex2[VehicleWindowIndex2["FrontRightWindow"] = 1] = "FrontRightWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["FrontLeftWindow"] = 0] = "FrontLeftWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["BackRightWindow"] = 3] = "BackRightWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["BackLeftWindow"] = 2] = "BackLeftWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow1"] = 4] = "ExtraWindow1";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow2"] = 5] = "ExtraWindow2";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow3"] = 6] = "ExtraWindow3";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow4"] = 7] = "ExtraWindow4";
      })(VehicleWindowIndex || (VehicleWindowIndex = {}));
      (function(VehicleModType2) {
        VehicleModType2[VehicleModType2["Spoilers"] = 0] = "Spoilers";
        VehicleModType2[VehicleModType2["FrontBumper"] = 1] = "FrontBumper";
        VehicleModType2[VehicleModType2["RearBumper"] = 2] = "RearBumper";
        VehicleModType2[VehicleModType2["SideSkirt"] = 3] = "SideSkirt";
        VehicleModType2[VehicleModType2["Exhaust"] = 4] = "Exhaust";
        VehicleModType2[VehicleModType2["Frame"] = 5] = "Frame";
        VehicleModType2[VehicleModType2["Grille"] = 6] = "Grille";
        VehicleModType2[VehicleModType2["Hood"] = 7] = "Hood";
        VehicleModType2[VehicleModType2["Fender"] = 8] = "Fender";
        VehicleModType2[VehicleModType2["RightFender"] = 9] = "RightFender";
        VehicleModType2[VehicleModType2["Roof"] = 10] = "Roof";
        VehicleModType2[VehicleModType2["Engine"] = 11] = "Engine";
        VehicleModType2[VehicleModType2["Brakes"] = 12] = "Brakes";
        VehicleModType2[VehicleModType2["Transmission"] = 13] = "Transmission";
        VehicleModType2[VehicleModType2["Horns"] = 14] = "Horns";
        VehicleModType2[VehicleModType2["Suspension"] = 15] = "Suspension";
        VehicleModType2[VehicleModType2["Armor"] = 16] = "Armor";
        VehicleModType2[VehicleModType2["FrontWheel"] = 23] = "FrontWheel";
        VehicleModType2[VehicleModType2["RearWheel"] = 24] = "RearWheel";
        VehicleModType2[VehicleModType2["PlateHolder"] = 25] = "PlateHolder";
        VehicleModType2[VehicleModType2["VanityPlates"] = 26] = "VanityPlates";
        VehicleModType2[VehicleModType2["TrimDesign"] = 27] = "TrimDesign";
        VehicleModType2[VehicleModType2["Ornaments"] = 28] = "Ornaments";
        VehicleModType2[VehicleModType2["Dashboard"] = 29] = "Dashboard";
        VehicleModType2[VehicleModType2["DialDesign"] = 30] = "DialDesign";
        VehicleModType2[VehicleModType2["DoorSpeakers"] = 31] = "DoorSpeakers";
        VehicleModType2[VehicleModType2["Seats"] = 32] = "Seats";
        VehicleModType2[VehicleModType2["SteeringWheels"] = 33] = "SteeringWheels";
        VehicleModType2[VehicleModType2["ColumnShifterLevers"] = 34] = "ColumnShifterLevers";
        VehicleModType2[VehicleModType2["Plaques"] = 35] = "Plaques";
        VehicleModType2[VehicleModType2["Speakers"] = 36] = "Speakers";
        VehicleModType2[VehicleModType2["Trunk"] = 37] = "Trunk";
        VehicleModType2[VehicleModType2["Hydraulics"] = 38] = "Hydraulics";
        VehicleModType2[VehicleModType2["EngineBlock"] = 39] = "EngineBlock";
        VehicleModType2[VehicleModType2["AirFilter"] = 40] = "AirFilter";
        VehicleModType2[VehicleModType2["Struts"] = 41] = "Struts";
        VehicleModType2[VehicleModType2["ArchCover"] = 42] = "ArchCover";
        VehicleModType2[VehicleModType2["Aerials"] = 43] = "Aerials";
        VehicleModType2[VehicleModType2["Trim"] = 44] = "Trim";
        VehicleModType2[VehicleModType2["Tank"] = 45] = "Tank";
        VehicleModType2[VehicleModType2["Windows"] = 46] = "Windows";
        VehicleModType2[VehicleModType2["Livery"] = 48] = "Livery";
      })(VehicleModType || (VehicleModType = {}));
      (function(VehicleToggleModType2) {
        VehicleToggleModType2[VehicleToggleModType2["Turbo"] = 18] = "Turbo";
        VehicleToggleModType2[VehicleToggleModType2["TireSmoke"] = 20] = "TireSmoke";
        VehicleToggleModType2[VehicleToggleModType2["XenonHeadlights"] = 22] = "XenonHeadlights";
      })(VehicleToggleModType || (VehicleToggleModType = {}));
      (function(VehiclePaintType2) {
        VehiclePaintType2[VehiclePaintType2["Normal"] = 0] = "Normal";
        VehiclePaintType2[VehiclePaintType2["Metallic"] = 1] = "Metallic";
        VehiclePaintType2[VehiclePaintType2["Pearl"] = 2] = "Pearl";
        VehiclePaintType2[VehiclePaintType2["Matte"] = 3] = "Matte";
        VehiclePaintType2[VehiclePaintType2["Metal"] = 4] = "Metal";
        VehiclePaintType2[VehiclePaintType2["Chrome"] = 5] = "Chrome";
      })(VehiclePaintType || (VehiclePaintType = {}));
      (function(VehicleDoorIndex2) {
        VehicleDoorIndex2[VehicleDoorIndex2["FrontRightDoor"] = 1] = "FrontRightDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["FrontLeftDoor"] = 0] = "FrontLeftDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["BackRightDoor"] = 3] = "BackRightDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["BackLeftDoor"] = 2] = "BackLeftDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["Hood"] = 4] = "Hood";
        VehicleDoorIndex2[VehicleDoorIndex2["Trunk"] = 5] = "Trunk";
      })(VehicleDoorIndex || (VehicleDoorIndex = {}));
      (function(VehicleWheelType2) {
        VehicleWheelType2[VehicleWheelType2["Sport"] = 0] = "Sport";
        VehicleWheelType2[VehicleWheelType2["Muscle"] = 1] = "Muscle";
        VehicleWheelType2[VehicleWheelType2["Lowrider"] = 2] = "Lowrider";
        VehicleWheelType2[VehicleWheelType2["SUV"] = 3] = "SUV";
        VehicleWheelType2[VehicleWheelType2["Offroad"] = 4] = "Offroad";
        VehicleWheelType2[VehicleWheelType2["Tuner"] = 5] = "Tuner";
        VehicleWheelType2[VehicleWheelType2["BikeWheels"] = 6] = "BikeWheels";
        VehicleWheelType2[VehicleWheelType2["HighEnd"] = 7] = "HighEnd";
        VehicleWheelType2[VehicleWheelType2["BennysOriginals"] = 8] = "BennysOriginals";
        VehicleWheelType2[VehicleWheelType2["BennysBespoke"] = 9] = "BennysBespoke";
      })(VehicleWheelType || (VehicleWheelType = {}));
      (function(VehicleWheelIndex2) {
        VehicleWheelIndex2[VehicleWheelIndex2["FrontLeftWheel"] = 0] = "FrontLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["FrontRightWheel"] = 1] = "FrontRightWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["MidLeftWheel"] = 2] = "MidLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["MidRightWheel"] = 3] = "MidRightWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["RearLeftWheel"] = 4] = "RearLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["RearRightWheel"] = 5] = "RearRightWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidLeftWheel"] = 45] = "TrailerMidLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidRightWheel"] = 47] = "TrailerMidRightWheel";
      })(VehicleWheelIndex || (VehicleWheelIndex = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/Weather.js
  var Weather;
  var init_Weather = __esm({
    "node_modules/@nativewrappers/client/lib/enums/Weather.js"() {
      (function(Weather2) {
        Weather2[Weather2["Unknown"] = -1] = "Unknown";
        Weather2[Weather2["ExtraSunny"] = 0] = "ExtraSunny";
        Weather2[Weather2["Clear"] = 1] = "Clear";
        Weather2[Weather2["Clouds"] = 2] = "Clouds";
        Weather2[Weather2["Smog"] = 3] = "Smog";
        Weather2[Weather2["Foggy"] = 4] = "Foggy";
        Weather2[Weather2["Overcast"] = 5] = "Overcast";
        Weather2[Weather2["Raining"] = 6] = "Raining";
        Weather2[Weather2["ThunderStorm"] = 7] = "ThunderStorm";
        Weather2[Weather2["Clearing"] = 8] = "Clearing";
        Weather2[Weather2["Neutral"] = 9] = "Neutral";
        Weather2[Weather2["Snowing"] = 10] = "Snowing";
        Weather2[Weather2["Blizzard"] = 11] = "Blizzard";
        Weather2[Weather2["Snowlight"] = 12] = "Snowlight";
        Weather2[Weather2["Christmas"] = 13] = "Christmas";
        Weather2[Weather2["Halloween"] = 14] = "Halloween";
      })(Weather || (Weather = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/index.js
  var init_enums = __esm({
    "node_modules/@nativewrappers/client/lib/enums/index.js"() {
      init_Blip();
      init_CloudHat();
      init_Driving();
      init_FiringPattern();
      init_ForceType();
      init_Gender();
      init_InputMode();
      init_RadioStation();
      init_RagdollType();
      init_SpeechModifier();
      init_Vehicle();
      init_Weather();
    }
  });

  // node_modules/@nativewrappers/client/lib/Blip.js
  var Blip;
  var init_Blip2 = __esm({
    "node_modules/@nativewrappers/client/lib/Blip.js"() {
      init_utils();
      init_models();
      Blip = class {
        constructor(handle) {
          this.handle = handle;
        }
        get Handle() {
          return this.handle;
        }
        get Position() {
          const coords = GetBlipInfoIdCoord(this.handle);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        set Position(location) {
          SetBlipCoords(this.handle, location.x, location.y, location.z);
        }
        set Rotation(rotation) {
          SetBlipRotation(this.handle, rotation);
        }
        set Scale(scale) {
          SetBlipScale(this.handle, scale);
        }
        get Type() {
          return GetBlipInfoIdType(this.handle);
        }
        get Alpha() {
          return GetBlipAlpha(this.handle);
        }
        set Alpha(alpha) {
          SetBlipAlpha(this.handle, alpha);
        }
        set Priority(priority) {
          SetBlipPriority(this.handle, priority);
        }
        set NumberLabel(number) {
          ShowNumberOnBlip(this.handle, number);
        }
        get Color() {
          return GetBlipColour(this.handle);
        }
        set Color(color) {
          SetBlipColour(this.handle, color);
        }
        get Sprite() {
          return GetBlipSprite(this.handle);
        }
        set Sprite(sprite) {
          SetBlipSprite(this.handle, sprite);
        }
        set Display(display) {
          SetBlipDisplay(this.handle, display);
        }
        set Name(name) {
          BeginTextCommandSetBlipName("STRING");
          AddTextComponentSubstringPlayerName(name);
          EndTextCommandSetBlipName(this.handle);
        }
        setNameToPlayerName(player) {
          SetBlipNameToPlayerName(this.handle, player.Handle);
        }
        get Entity() {
          return Entity2.fromHandle(GetBlipInfoIdEntityIndex(this.handle));
        }
        set ShowHeadingIndicator(show) {
          ShowHeadingIndicatorOnBlip(this.handle, show);
        }
        set ShowRoute(show) {
          SetBlipRoute(this.handle, show);
        }
        set IsFriendly(friendly) {
          SetBlipAsFriendly(this.handle, friendly);
        }
        set IsFriend(friend) {
          SetBlipFriend(this.handle, friend);
        }
        set IsCrew(crew) {
          SetBlipCrew(this.handle, crew);
        }
        get IsFlashing() {
          return IsBlipFlashing(this.handle);
        }
        set IsFlashing(flashing) {
          SetBlipFlashes(this.handle, flashing);
        }
        get IsOnMinimap() {
          return IsBlipOnMinimap(this.handle);
        }
        get IsShortRange() {
          return IsBlipShortRange(this.handle);
        }
        set IsShortRange(shortRange) {
          SetBlipAsShortRange(this.handle, shortRange);
        }
        removeNumberLabel() {
          HideNumberOnBlip(this.handle);
        }
        delete() {
          if (this.exists()) {
            RemoveBlip(this.handle);
          }
        }
        exists() {
          return DoesBlipExist(this.handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/hashes/VehicleHash.js
  var VehicleHash;
  var init_VehicleHash = __esm({
    "node_modules/@nativewrappers/client/lib/hashes/VehicleHash.js"() {
      (function(VehicleHash2) {
        VehicleHash2[VehicleHash2["Adder"] = 3078201489] = "Adder";
        VehicleHash2[VehicleHash2["Airbus"] = 1283517198] = "Airbus";
        VehicleHash2[VehicleHash2["Airtug"] = 1560980623] = "Airtug";
        VehicleHash2[VehicleHash2["Akuma"] = 1672195559] = "Akuma";
        VehicleHash2[VehicleHash2["Alpha"] = 767087018] = "Alpha";
        VehicleHash2[VehicleHash2["Ambulance"] = 1171614426] = "Ambulance";
        VehicleHash2[VehicleHash2["Annihilator"] = 837858166] = "Annihilator";
        VehicleHash2[VehicleHash2["Apc"] = 562680400] = "Apc";
        VehicleHash2[VehicleHash2["Ardent"] = 159274291] = "Ardent";
        VehicleHash2[VehicleHash2["ArmyTanker"] = 3087536137] = "ArmyTanker";
        VehicleHash2[VehicleHash2["ArmyTrailer"] = 2818520053] = "ArmyTrailer";
        VehicleHash2[VehicleHash2["ArmyTrailer2"] = 2657817814] = "ArmyTrailer2";
        VehicleHash2[VehicleHash2["Asea"] = 2485144969] = "Asea";
        VehicleHash2[VehicleHash2["Asea2"] = 2487343317] = "Asea2";
        VehicleHash2[VehicleHash2["Asterope"] = 2391954683] = "Asterope";
        VehicleHash2[VehicleHash2["Avarus"] = 2179174271] = "Avarus";
        VehicleHash2[VehicleHash2["Bagger"] = 2154536131] = "Bagger";
        VehicleHash2[VehicleHash2["BaleTrailer"] = 3895125590] = "BaleTrailer";
        VehicleHash2[VehicleHash2["Baller"] = 3486135912] = "Baller";
        VehicleHash2[VehicleHash2["Baller2"] = 142944341] = "Baller2";
        VehicleHash2[VehicleHash2["Baller3"] = 1878062887] = "Baller3";
        VehicleHash2[VehicleHash2["Baller4"] = 634118882] = "Baller4";
        VehicleHash2[VehicleHash2["Baller5"] = 470404958] = "Baller5";
        VehicleHash2[VehicleHash2["Baller6"] = 666166960] = "Baller6";
        VehicleHash2[VehicleHash2["Banshee"] = 3253274834] = "Banshee";
        VehicleHash2[VehicleHash2["Banshee2"] = 633712403] = "Banshee2";
        VehicleHash2[VehicleHash2["Barracks"] = 3471458123] = "Barracks";
        VehicleHash2[VehicleHash2["Barracks2"] = 1074326203] = "Barracks2";
        VehicleHash2[VehicleHash2["Barracks3"] = 630371791] = "Barracks3";
        VehicleHash2[VehicleHash2["Bati"] = 4180675781] = "Bati";
        VehicleHash2[VehicleHash2["Bati2"] = 3403504941] = "Bati2";
        VehicleHash2[VehicleHash2["Benson"] = 2053223216] = "Benson";
        VehicleHash2[VehicleHash2["Besra"] = 1824333165] = "Besra";
        VehicleHash2[VehicleHash2["BestiaGTS"] = 1274868363] = "BestiaGTS";
        VehicleHash2[VehicleHash2["BF400"] = 86520421] = "BF400";
        VehicleHash2[VehicleHash2["BfInjection"] = 1126868326] = "BfInjection";
        VehicleHash2[VehicleHash2["Biff"] = 850991848] = "Biff";
        VehicleHash2[VehicleHash2["Bifta"] = 3945366167] = "Bifta";
        VehicleHash2[VehicleHash2["Bison"] = 4278019151] = "Bison";
        VehicleHash2[VehicleHash2["Bison2"] = 2072156101] = "Bison2";
        VehicleHash2[VehicleHash2["Bison3"] = 1739845664] = "Bison3";
        VehicleHash2[VehicleHash2["BJXL"] = 850565707] = "BJXL";
        VehicleHash2[VehicleHash2["Blade"] = 3089165662] = "Blade";
        VehicleHash2[VehicleHash2["Blazer"] = 2166734073] = "Blazer";
        VehicleHash2[VehicleHash2["Blazer2"] = 4246935337] = "Blazer2";
        VehicleHash2[VehicleHash2["Blazer3"] = 3025077634] = "Blazer3";
        VehicleHash2[VehicleHash2["Blazer4"] = 3854198872] = "Blazer4";
        VehicleHash2[VehicleHash2["Blazer5"] = 2704629607] = "Blazer5";
        VehicleHash2[VehicleHash2["Blimp"] = 4143991942] = "Blimp";
        VehicleHash2[VehicleHash2["Blimp2"] = 3681241380] = "Blimp2";
        VehicleHash2[VehicleHash2["Blista"] = 3950024287] = "Blista";
        VehicleHash2[VehicleHash2["Blista2"] = 1039032026] = "Blista2";
        VehicleHash2[VehicleHash2["Blista3"] = 3703315515] = "Blista3";
        VehicleHash2[VehicleHash2["Bmx"] = 1131912276] = "Bmx";
        VehicleHash2[VehicleHash2["BoatTrailer"] = 524108981] = "BoatTrailer";
        VehicleHash2[VehicleHash2["BobcatXL"] = 1069929536] = "BobcatXL";
        VehicleHash2[VehicleHash2["Bodhi2"] = 2859047862] = "Bodhi2";
        VehicleHash2[VehicleHash2["Boxville"] = 2307837162] = "Boxville";
        VehicleHash2[VehicleHash2["Boxville2"] = 4061868990] = "Boxville2";
        VehicleHash2[VehicleHash2["Boxville3"] = 121658888] = "Boxville3";
        VehicleHash2[VehicleHash2["Boxville4"] = 444171386] = "Boxville4";
        VehicleHash2[VehicleHash2["Boxville5"] = 682434785] = "Boxville5";
        VehicleHash2[VehicleHash2["Brawler"] = 2815302597] = "Brawler";
        VehicleHash2[VehicleHash2["Brickade"] = 3989239879] = "Brickade";
        VehicleHash2[VehicleHash2["Brioso"] = 1549126457] = "Brioso";
        VehicleHash2[VehicleHash2["BType"] = 117401876] = "BType";
        VehicleHash2[VehicleHash2["BType2"] = 3463132580] = "BType2";
        VehicleHash2[VehicleHash2["BType3"] = 3692679425] = "BType3";
        VehicleHash2[VehicleHash2["Buccaneer"] = 3612755468] = "Buccaneer";
        VehicleHash2[VehicleHash2["Buccaneer2"] = 3281516360] = "Buccaneer2";
        VehicleHash2[VehicleHash2["Buffalo"] = 3990165190] = "Buffalo";
        VehicleHash2[VehicleHash2["Buffalo2"] = 736902334] = "Buffalo2";
        VehicleHash2[VehicleHash2["Buffalo3"] = 237764926] = "Buffalo3";
        VehicleHash2[VehicleHash2["Bulldozer"] = 1886712733] = "Bulldozer";
        VehicleHash2[VehicleHash2["Bullet"] = 2598821281] = "Bullet";
        VehicleHash2[VehicleHash2["Burrito"] = 2948279460] = "Burrito";
        VehicleHash2[VehicleHash2["Burrito2"] = 3387490166] = "Burrito2";
        VehicleHash2[VehicleHash2["Burrito3"] = 2551651283] = "Burrito3";
        VehicleHash2[VehicleHash2["Burrito4"] = 893081117] = "Burrito4";
        VehicleHash2[VehicleHash2["Burrito5"] = 1132262048] = "Burrito5";
        VehicleHash2[VehicleHash2["Bus"] = 3581397346] = "Bus";
        VehicleHash2[VehicleHash2["Buzzard"] = 788747387] = "Buzzard";
        VehicleHash2[VehicleHash2["Buzzard2"] = 745926877] = "Buzzard2";
        VehicleHash2[VehicleHash2["CableCar"] = 3334677549] = "CableCar";
        VehicleHash2[VehicleHash2["Caddy"] = 1147287684] = "Caddy";
        VehicleHash2[VehicleHash2["Caddy2"] = 3757070668] = "Caddy2";
        VehicleHash2[VehicleHash2["Caddy3"] = 3525819835] = "Caddy3";
        VehicleHash2[VehicleHash2["Camper"] = 1876516712] = "Camper";
        VehicleHash2[VehicleHash2["Carbonizzare"] = 2072687711] = "Carbonizzare";
        VehicleHash2[VehicleHash2["CarbonRS"] = 11251904] = "CarbonRS";
        VehicleHash2[VehicleHash2["Cargobob"] = 4244420235] = "Cargobob";
        VehicleHash2[VehicleHash2["Cargobob2"] = 1621617168] = "Cargobob2";
        VehicleHash2[VehicleHash2["Cargobob3"] = 1394036463] = "Cargobob3";
        VehicleHash2[VehicleHash2["Cargobob4"] = 2025593404] = "Cargobob4";
        VehicleHash2[VehicleHash2["CargoPlane"] = 368211810] = "CargoPlane";
        VehicleHash2[VehicleHash2["Casco"] = 941800958] = "Casco";
        VehicleHash2[VehicleHash2["Cavalcade"] = 2006918058] = "Cavalcade";
        VehicleHash2[VehicleHash2["Cavalcade2"] = 3505073125] = "Cavalcade2";
        VehicleHash2[VehicleHash2["Cheetah"] = 2983812512] = "Cheetah";
        VehicleHash2[VehicleHash2["Cheetah2"] = 223240013] = "Cheetah2";
        VehicleHash2[VehicleHash2["Chimera"] = 6774487] = "Chimera";
        VehicleHash2[VehicleHash2["Chino"] = 349605904] = "Chino";
        VehicleHash2[VehicleHash2["Chino2"] = 2933279331] = "Chino2";
        VehicleHash2[VehicleHash2["Cliffhanger"] = 390201602] = "Cliffhanger";
        VehicleHash2[VehicleHash2["Coach"] = 2222034228] = "Coach";
        VehicleHash2[VehicleHash2["Cog55"] = 906642318] = "Cog55";
        VehicleHash2[VehicleHash2["Cog552"] = 704435172] = "Cog552";
        VehicleHash2[VehicleHash2["CogCabrio"] = 330661258] = "CogCabrio";
        VehicleHash2[VehicleHash2["Cognoscenti"] = 2264796e3] = "Cognoscenti";
        VehicleHash2[VehicleHash2["Cognoscenti2"] = 3690124666] = "Cognoscenti2";
        VehicleHash2[VehicleHash2["Comet2"] = 3249425686] = "Comet2";
        VehicleHash2[VehicleHash2["Comet3"] = 2272483501] = "Comet3";
        VehicleHash2[VehicleHash2["Contender"] = 683047626] = "Contender";
        VehicleHash2[VehicleHash2["Coquette"] = 108773431] = "Coquette";
        VehicleHash2[VehicleHash2["Coquette2"] = 1011753235] = "Coquette2";
        VehicleHash2[VehicleHash2["Coquette3"] = 784565758] = "Coquette3";
        VehicleHash2[VehicleHash2["Cruiser"] = 448402357] = "Cruiser";
        VehicleHash2[VehicleHash2["Crusader"] = 321739290] = "Crusader";
        VehicleHash2[VehicleHash2["Cuban800"] = 3650256867] = "Cuban800";
        VehicleHash2[VehicleHash2["Cutter"] = 3288047904] = "Cutter";
        VehicleHash2[VehicleHash2["Daemon"] = 2006142190] = "Daemon";
        VehicleHash2[VehicleHash2["Daemon2"] = 2890830793] = "Daemon2";
        VehicleHash2[VehicleHash2["Defiler"] = 822018448] = "Defiler";
        VehicleHash2[VehicleHash2["Diablous"] = 4055125828] = "Diablous";
        VehicleHash2[VehicleHash2["Diablous2"] = 1790834270] = "Diablous2";
        VehicleHash2[VehicleHash2["Dilettante"] = 3164157193] = "Dilettante";
        VehicleHash2[VehicleHash2["Dilettante2"] = 1682114128] = "Dilettante2";
        VehicleHash2[VehicleHash2["Dinghy"] = 1033245328] = "Dinghy";
        VehicleHash2[VehicleHash2["Dinghy2"] = 276773164] = "Dinghy2";
        VehicleHash2[VehicleHash2["Dinghy3"] = 509498602] = "Dinghy3";
        VehicleHash2[VehicleHash2["Dinghy4"] = 867467158] = "Dinghy4";
        VehicleHash2[VehicleHash2["DLoader"] = 1770332643] = "DLoader";
        VehicleHash2[VehicleHash2["DockTrailer"] = 2154757102] = "DockTrailer";
        VehicleHash2[VehicleHash2["Docktug"] = 3410276810] = "Docktug";
        VehicleHash2[VehicleHash2["Dodo"] = 3393804037] = "Dodo";
        VehicleHash2[VehicleHash2["Dominator"] = 80636076] = "Dominator";
        VehicleHash2[VehicleHash2["Dominator2"] = 3379262425] = "Dominator2";
        VehicleHash2[VehicleHash2["Double"] = 2623969160] = "Double";
        VehicleHash2[VehicleHash2["Dubsta"] = 1177543287] = "Dubsta";
        VehicleHash2[VehicleHash2["Dubsta2"] = 3900892662] = "Dubsta2";
        VehicleHash2[VehicleHash2["Dubsta3"] = 3057713523] = "Dubsta3";
        VehicleHash2[VehicleHash2["Dukes"] = 723973206] = "Dukes";
        VehicleHash2[VehicleHash2["Dukes2"] = 3968823444] = "Dukes2";
        VehicleHash2[VehicleHash2["Dump"] = 2164484578] = "Dump";
        VehicleHash2[VehicleHash2["Dune"] = 2633113103] = "Dune";
        VehicleHash2[VehicleHash2["Dune2"] = 534258863] = "Dune2";
        VehicleHash2[VehicleHash2["Dune3"] = 1897744184] = "Dune3";
        VehicleHash2[VehicleHash2["Dune4"] = 3467805257] = "Dune4";
        VehicleHash2[VehicleHash2["Dune5"] = 3982671785] = "Dune5";
        VehicleHash2[VehicleHash2["Duster"] = 970356638] = "Duster";
        VehicleHash2[VehicleHash2["Elegy"] = 196747873] = "Elegy";
        VehicleHash2[VehicleHash2["Elegy2"] = 3728579874] = "Elegy2";
        VehicleHash2[VehicleHash2["Emperor"] = 3609690755] = "Emperor";
        VehicleHash2[VehicleHash2["Emperor2"] = 2411965148] = "Emperor2";
        VehicleHash2[VehicleHash2["Emperor3"] = 3053254478] = "Emperor3";
        VehicleHash2[VehicleHash2["Enduro"] = 1753414259] = "Enduro";
        VehicleHash2[VehicleHash2["EntityXF"] = 3003014393] = "EntityXF";
        VehicleHash2[VehicleHash2["Esskey"] = 2035069708] = "Esskey";
        VehicleHash2[VehicleHash2["Exemplar"] = 4289813342] = "Exemplar";
        VehicleHash2[VehicleHash2["F620"] = 3703357e3] = "F620";
        VehicleHash2[VehicleHash2["Faction"] = 2175389151] = "Faction";
        VehicleHash2[VehicleHash2["Faction2"] = 2504420315] = "Faction2";
        VehicleHash2[VehicleHash2["Faction3"] = 2255212070] = "Faction3";
        VehicleHash2[VehicleHash2["Faggio"] = 2452219115] = "Faggio";
        VehicleHash2[VehicleHash2["Faggio2"] = 55628203] = "Faggio2";
        VehicleHash2[VehicleHash2["Faggio3"] = 3005788552] = "Faggio3";
        VehicleHash2[VehicleHash2["FBI"] = 1127131465] = "FBI";
        VehicleHash2[VehicleHash2["FBI2"] = 2647026068] = "FBI2";
        VehicleHash2[VehicleHash2["FCR"] = 627535535] = "FCR";
        VehicleHash2[VehicleHash2["FCR2"] = 3537231886] = "FCR2";
        VehicleHash2[VehicleHash2["Felon"] = 3903372712] = "Felon";
        VehicleHash2[VehicleHash2["Felon2"] = 4205676014] = "Felon2";
        VehicleHash2[VehicleHash2["Feltzer2"] = 2299640309] = "Feltzer2";
        VehicleHash2[VehicleHash2["Feltzer3"] = 2728226064] = "Feltzer3";
        VehicleHash2[VehicleHash2["FireTruk"] = 1938952078] = "FireTruk";
        VehicleHash2[VehicleHash2["Fixter"] = 3458454463] = "Fixter";
        VehicleHash2[VehicleHash2["Flatbed"] = 1353720154] = "Flatbed";
        VehicleHash2[VehicleHash2["Forklift"] = 1491375716] = "Forklift";
        VehicleHash2[VehicleHash2["FMJ"] = 1426219628] = "FMJ";
        VehicleHash2[VehicleHash2["FQ2"] = 3157435195] = "FQ2";
        VehicleHash2[VehicleHash2["Freight"] = 1030400667] = "Freight";
        VehicleHash2[VehicleHash2["FreightCar"] = 184361638] = "FreightCar";
        VehicleHash2[VehicleHash2["FreightCont1"] = 920453016] = "FreightCont1";
        VehicleHash2[VehicleHash2["FreightCont2"] = 240201337] = "FreightCont2";
        VehicleHash2[VehicleHash2["FreightGrain"] = 642617954] = "FreightGrain";
        VehicleHash2[VehicleHash2["FreightTrailer"] = 3517691494] = "FreightTrailer";
        VehicleHash2[VehicleHash2["Frogger"] = 744705981] = "Frogger";
        VehicleHash2[VehicleHash2["Frogger2"] = 1949211328] = "Frogger2";
        VehicleHash2[VehicleHash2["Fugitive"] = 1909141499] = "Fugitive";
        VehicleHash2[VehicleHash2["Furoregt"] = 3205927392] = "Furoregt";
        VehicleHash2[VehicleHash2["Fusilade"] = 499169875] = "Fusilade";
        VehicleHash2[VehicleHash2["Futo"] = 2016857647] = "Futo";
        VehicleHash2[VehicleHash2["Gargoyle"] = 741090084] = "Gargoyle";
        VehicleHash2[VehicleHash2["Gauntlet"] = 2494797253] = "Gauntlet";
        VehicleHash2[VehicleHash2["Gauntlet2"] = 349315417] = "Gauntlet2";
        VehicleHash2[VehicleHash2["GBurrito"] = 2549763894] = "GBurrito";
        VehicleHash2[VehicleHash2["GBurrito2"] = 296357396] = "GBurrito2";
        VehicleHash2[VehicleHash2["Glendale"] = 75131841] = "Glendale";
        VehicleHash2[VehicleHash2["GP1"] = 1234311532] = "GP1";
        VehicleHash2[VehicleHash2["GrainTrailer"] = 1019737494] = "GrainTrailer";
        VehicleHash2[VehicleHash2["Granger"] = 2519238556] = "Granger";
        VehicleHash2[VehicleHash2["Gresley"] = 2751205197] = "Gresley";
        VehicleHash2[VehicleHash2["Guardian"] = 2186977100] = "Guardian";
        VehicleHash2[VehicleHash2["Habanero"] = 884422927] = "Habanero";
        VehicleHash2[VehicleHash2["Hakuchou"] = 1265391242] = "Hakuchou";
        VehicleHash2[VehicleHash2["Hakuchou2"] = 4039289119] = "Hakuchou2";
        VehicleHash2[VehicleHash2["HalfTrack"] = 4262731174] = "HalfTrack";
        VehicleHash2[VehicleHash2["Handler"] = 444583674] = "Handler";
        VehicleHash2[VehicleHash2["Hauler"] = 1518533038] = "Hauler";
        VehicleHash2[VehicleHash2["Hauler2"] = 387748548] = "Hauler2";
        VehicleHash2[VehicleHash2["Hexer"] = 301427732] = "Hexer";
        VehicleHash2[VehicleHash2["Hotknife"] = 37348240] = "Hotknife";
        VehicleHash2[VehicleHash2["Huntley"] = 486987393] = "Huntley";
        VehicleHash2[VehicleHash2["Hydra"] = 970385471] = "Hydra";
        VehicleHash2[VehicleHash2["Infernus"] = 418536135] = "Infernus";
        VehicleHash2[VehicleHash2["Infernus2"] = 2889029532] = "Infernus2";
        VehicleHash2[VehicleHash2["Ingot"] = 3005245074] = "Ingot";
        VehicleHash2[VehicleHash2["Innovation"] = 4135840458] = "Innovation";
        VehicleHash2[VehicleHash2["Insurgent"] = 2434067162] = "Insurgent";
        VehicleHash2[VehicleHash2["Insurgent2"] = 2071877360] = "Insurgent2";
        VehicleHash2[VehicleHash2["Insurgent3"] = 2370534026] = "Insurgent3";
        VehicleHash2[VehicleHash2["Intruder"] = 886934177] = "Intruder";
        VehicleHash2[VehicleHash2["Issi2"] = 3117103977] = "Issi2";
        VehicleHash2[VehicleHash2["ItaliGTB"] = 2246633323] = "ItaliGTB";
        VehicleHash2[VehicleHash2["ItaliGTB2"] = 3812247419] = "ItaliGTB2";
        VehicleHash2[VehicleHash2["Jackal"] = 3670438162] = "Jackal";
        VehicleHash2[VehicleHash2["JB700"] = 1051415893] = "JB700";
        VehicleHash2[VehicleHash2["Jester"] = 2997294755] = "Jester";
        VehicleHash2[VehicleHash2["Jester2"] = 3188613414] = "Jester2";
        VehicleHash2[VehicleHash2["Jet"] = 1058115860] = "Jet";
        VehicleHash2[VehicleHash2["Jetmax"] = 861409633] = "Jetmax";
        VehicleHash2[VehicleHash2["Journey"] = 4174679674] = "Journey";
        VehicleHash2[VehicleHash2["Kalahari"] = 92612664] = "Kalahari";
        VehicleHash2[VehicleHash2["Khamelion"] = 544021352] = "Khamelion";
        VehicleHash2[VehicleHash2["Kuruma"] = 2922118804] = "Kuruma";
        VehicleHash2[VehicleHash2["Kuruma2"] = 410882957] = "Kuruma2";
        VehicleHash2[VehicleHash2["Landstalker"] = 1269098716] = "Landstalker";
        VehicleHash2[VehicleHash2["Lazer"] = 3013282534] = "Lazer";
        VehicleHash2[VehicleHash2["LE7B"] = 3062131285] = "LE7B";
        VehicleHash2[VehicleHash2["Lectro"] = 640818791] = "Lectro";
        VehicleHash2[VehicleHash2["Lguard"] = 469291905] = "Lguard";
        VehicleHash2[VehicleHash2["Limo2"] = 4180339789] = "Limo2";
        VehicleHash2[VehicleHash2["Lurcher"] = 2068293287] = "Lurcher";
        VehicleHash2[VehicleHash2["Luxor"] = 621481054] = "Luxor";
        VehicleHash2[VehicleHash2["Luxor2"] = 3080673438] = "Luxor2";
        VehicleHash2[VehicleHash2["Lynx"] = 482197771] = "Lynx";
        VehicleHash2[VehicleHash2["Mamba"] = 2634021974] = "Mamba";
        VehicleHash2[VehicleHash2["Mammatus"] = 2548391185] = "Mammatus";
        VehicleHash2[VehicleHash2["Manana"] = 2170765704] = "Manana";
        VehicleHash2[VehicleHash2["Manchez"] = 2771538552] = "Manchez";
        VehicleHash2[VehicleHash2["Marquis"] = 3251507587] = "Marquis";
        VehicleHash2[VehicleHash2["Marshall"] = 1233534620] = "Marshall";
        VehicleHash2[VehicleHash2["Massacro"] = 4152024626] = "Massacro";
        VehicleHash2[VehicleHash2["Massacro2"] = 3663206819] = "Massacro2";
        VehicleHash2[VehicleHash2["Maverick"] = 2634305738] = "Maverick";
        VehicleHash2[VehicleHash2["Mesa"] = 914654722] = "Mesa";
        VehicleHash2[VehicleHash2["Mesa2"] = 3546958660] = "Mesa2";
        VehicleHash2[VehicleHash2["Mesa3"] = 2230595153] = "Mesa3";
        VehicleHash2[VehicleHash2["MetroTrain"] = 868868440] = "MetroTrain";
        VehicleHash2[VehicleHash2["Miljet"] = 165154707] = "Miljet";
        VehicleHash2[VehicleHash2["Minivan"] = 3984502180] = "Minivan";
        VehicleHash2[VehicleHash2["Minivan2"] = 3168702960] = "Minivan2";
        VehicleHash2[VehicleHash2["Mixer"] = 3510150843] = "Mixer";
        VehicleHash2[VehicleHash2["Mixer2"] = 475220373] = "Mixer2";
        VehicleHash2[VehicleHash2["Monroe"] = 3861591579] = "Monroe";
        VehicleHash2[VehicleHash2["Monster"] = 3449006043] = "Monster";
        VehicleHash2[VehicleHash2["Moonbeam"] = 525509695] = "Moonbeam";
        VehicleHash2[VehicleHash2["Moonbeam2"] = 1896491931] = "Moonbeam2";
        VehicleHash2[VehicleHash2["Mower"] = 1783355638] = "Mower";
        VehicleHash2[VehicleHash2["Mule"] = 904750859] = "Mule";
        VehicleHash2[VehicleHash2["Mule2"] = 3244501995] = "Mule2";
        VehicleHash2[VehicleHash2["Mule3"] = 2242229361] = "Mule3";
        VehicleHash2[VehicleHash2["Nemesis"] = 3660088182] = "Nemesis";
        VehicleHash2[VehicleHash2["Nero"] = 1034187331] = "Nero";
        VehicleHash2[VehicleHash2["Nero2"] = 1093792632] = "Nero2";
        VehicleHash2[VehicleHash2["Nightblade"] = 2688780135] = "Nightblade";
        VehicleHash2[VehicleHash2["Nightshade"] = 2351681756] = "Nightshade";
        VehicleHash2[VehicleHash2["NightShark"] = 433954513] = "NightShark";
        VehicleHash2[VehicleHash2["Nimbus"] = 2999939664] = "Nimbus";
        VehicleHash2[VehicleHash2["Ninef"] = 1032823388] = "Ninef";
        VehicleHash2[VehicleHash2["Ninef2"] = 2833484545] = "Ninef2";
        VehicleHash2[VehicleHash2["Omnis"] = 3517794615] = "Omnis";
        VehicleHash2[VehicleHash2["Oppressor"] = 884483972] = "Oppressor";
        VehicleHash2[VehicleHash2["Oracle"] = 1348744438] = "Oracle";
        VehicleHash2[VehicleHash2["Oracle2"] = 3783366066] = "Oracle2";
        VehicleHash2[VehicleHash2["Osiris"] = 1987142870] = "Osiris";
        VehicleHash2[VehicleHash2["Packer"] = 569305213] = "Packer";
        VehicleHash2[VehicleHash2["Panto"] = 3863274624] = "Panto";
        VehicleHash2[VehicleHash2["Paradise"] = 1488164764] = "Paradise";
        VehicleHash2[VehicleHash2["Patriot"] = 3486509883] = "Patriot";
        VehicleHash2[VehicleHash2["PBus"] = 2287941233] = "PBus";
        VehicleHash2[VehicleHash2["PCJ"] = 3385765638] = "PCJ";
        VehicleHash2[VehicleHash2["Penetrator"] = 2536829930] = "Penetrator";
        VehicleHash2[VehicleHash2["Penumbra"] = 3917501776] = "Penumbra";
        VehicleHash2[VehicleHash2["Peyote"] = 1830407356] = "Peyote";
        VehicleHash2[VehicleHash2["Pfister811"] = 2465164804] = "Pfister811";
        VehicleHash2[VehicleHash2["Phantom"] = 2157618379] = "Phantom";
        VehicleHash2[VehicleHash2["Phantom2"] = 2645431192] = "Phantom2";
        VehicleHash2[VehicleHash2["Phantom3"] = 177270108] = "Phantom3";
        VehicleHash2[VehicleHash2["Phoenix"] = 2199527893] = "Phoenix";
        VehicleHash2[VehicleHash2["Picador"] = 1507916787] = "Picador";
        VehicleHash2[VehicleHash2["Pigalle"] = 1078682497] = "Pigalle";
        VehicleHash2[VehicleHash2["Police"] = 2046537925] = "Police";
        VehicleHash2[VehicleHash2["Police2"] = 2667966721] = "Police2";
        VehicleHash2[VehicleHash2["Police3"] = 1912215274] = "Police3";
        VehicleHash2[VehicleHash2["Police4"] = 2321795001] = "Police4";
        VehicleHash2[VehicleHash2["Policeb"] = 4260343491] = "Policeb";
        VehicleHash2[VehicleHash2["PoliceOld1"] = 2758042359] = "PoliceOld1";
        VehicleHash2[VehicleHash2["PoliceOld2"] = 2515846680] = "PoliceOld2";
        VehicleHash2[VehicleHash2["PoliceT"] = 456714581] = "PoliceT";
        VehicleHash2[VehicleHash2["Polmav"] = 353883353] = "Polmav";
        VehicleHash2[VehicleHash2["Pony"] = 4175309224] = "Pony";
        VehicleHash2[VehicleHash2["Pony2"] = 943752001] = "Pony2";
        VehicleHash2[VehicleHash2["Pounder"] = 2112052861] = "Pounder";
        VehicleHash2[VehicleHash2["Prairie"] = 2844316578] = "Prairie";
        VehicleHash2[VehicleHash2["Pranger"] = 741586030] = "Pranger";
        VehicleHash2[VehicleHash2["Predator"] = 3806844075] = "Predator";
        VehicleHash2[VehicleHash2["Premier"] = 2411098011] = "Premier";
        VehicleHash2[VehicleHash2["Primo"] = 3144368207] = "Primo";
        VehicleHash2[VehicleHash2["Primo2"] = 2254540506] = "Primo2";
        VehicleHash2[VehicleHash2["PropTrailer"] = 356391690] = "PropTrailer";
        VehicleHash2[VehicleHash2["Prototipo"] = 2123327359] = "Prototipo";
        VehicleHash2[VehicleHash2["Radi"] = 2643899483] = "Radi";
        VehicleHash2[VehicleHash2["RakeTrailer"] = 390902130] = "RakeTrailer";
        VehicleHash2[VehicleHash2["RancherXL"] = 1645267888] = "RancherXL";
        VehicleHash2[VehicleHash2["RancherXL2"] = 1933662059] = "RancherXL2";
        VehicleHash2[VehicleHash2["RallyTruck"] = 2191146052] = "RallyTruck";
        VehicleHash2[VehicleHash2["RapidGT"] = 2360515092] = "RapidGT";
        VehicleHash2[VehicleHash2["RapidGT2"] = 1737773231] = "RapidGT2";
        VehicleHash2[VehicleHash2["Raptor"] = 3620039993] = "Raptor";
        VehicleHash2[VehicleHash2["RatBike"] = 1873600305] = "RatBike";
        VehicleHash2[VehicleHash2["RatLoader"] = 3627815886] = "RatLoader";
        VehicleHash2[VehicleHash2["RatLoader2"] = 3705788919] = "RatLoader2";
        VehicleHash2[VehicleHash2["Reaper"] = 234062309] = "Reaper";
        VehicleHash2[VehicleHash2["Rebel"] = 3087195462] = "Rebel";
        VehicleHash2[VehicleHash2["Rebel2"] = 2249373259] = "Rebel2";
        VehicleHash2[VehicleHash2["Regina"] = 4280472072] = "Regina";
        VehicleHash2[VehicleHash2["RentalBus"] = 3196165219] = "RentalBus";
        VehicleHash2[VehicleHash2["Rhapsody"] = 841808271] = "Rhapsody";
        VehicleHash2[VehicleHash2["Rhino"] = 782665360] = "Rhino";
        VehicleHash2[VehicleHash2["Riot"] = 3089277354] = "Riot";
        VehicleHash2[VehicleHash2["Ripley"] = 3448987385] = "Ripley";
        VehicleHash2[VehicleHash2["Rocoto"] = 2136773105] = "Rocoto";
        VehicleHash2[VehicleHash2["Romero"] = 627094268] = "Romero";
        VehicleHash2[VehicleHash2["Rubble"] = 2589662668] = "Rubble";
        VehicleHash2[VehicleHash2["Ruffian"] = 3401388520] = "Ruffian";
        VehicleHash2[VehicleHash2["Ruiner"] = 4067225593] = "Ruiner";
        VehicleHash2[VehicleHash2["Ruiner2"] = 941494461] = "Ruiner2";
        VehicleHash2[VehicleHash2["Ruiner3"] = 777714999] = "Ruiner3";
        VehicleHash2[VehicleHash2["Rumpo"] = 1162065741] = "Rumpo";
        VehicleHash2[VehicleHash2["Rumpo2"] = 2518351607] = "Rumpo2";
        VehicleHash2[VehicleHash2["Rumpo3"] = 1475773103] = "Rumpo3";
        VehicleHash2[VehicleHash2["Ruston"] = 719660200] = "Ruston";
        VehicleHash2[VehicleHash2["SabreGT"] = 2609945748] = "SabreGT";
        VehicleHash2[VehicleHash2["SabreGT2"] = 223258115] = "SabreGT2";
        VehicleHash2[VehicleHash2["Sadler"] = 3695398481] = "Sadler";
        VehicleHash2[VehicleHash2["Sadler2"] = 734217681] = "Sadler2";
        VehicleHash2[VehicleHash2["Sanchez"] = 788045382] = "Sanchez";
        VehicleHash2[VehicleHash2["Sanchez2"] = 2841686334] = "Sanchez2";
        VehicleHash2[VehicleHash2["Sanctus"] = 1491277511] = "Sanctus";
        VehicleHash2[VehicleHash2["Sandking"] = 3105951696] = "Sandking";
        VehicleHash2[VehicleHash2["Sandking2"] = 989381445] = "Sandking2";
        VehicleHash2[VehicleHash2["Savage"] = 4212341271] = "Savage";
        VehicleHash2[VehicleHash2["Schafter2"] = 3039514899] = "Schafter2";
        VehicleHash2[VehicleHash2["Schafter3"] = 2809443750] = "Schafter3";
        VehicleHash2[VehicleHash2["Schafter4"] = 1489967196] = "Schafter4";
        VehicleHash2[VehicleHash2["Schafter5"] = 3406724313] = "Schafter5";
        VehicleHash2[VehicleHash2["Schafter6"] = 1922255844] = "Schafter6";
        VehicleHash2[VehicleHash2["Schwarzer"] = 3548084598] = "Schwarzer";
        VehicleHash2[VehicleHash2["Scorcher"] = 4108429845] = "Scorcher";
        VehicleHash2[VehicleHash2["Scrap"] = 2594165727] = "Scrap";
        VehicleHash2[VehicleHash2["Seashark"] = 3264692260] = "Seashark";
        VehicleHash2[VehicleHash2["Seashark2"] = 3678636260] = "Seashark2";
        VehicleHash2[VehicleHash2["Seashark3"] = 3983945033] = "Seashark3";
        VehicleHash2[VehicleHash2["Seminole"] = 1221512915] = "Seminole";
        VehicleHash2[VehicleHash2["Sentinel"] = 1349725314] = "Sentinel";
        VehicleHash2[VehicleHash2["Sentinel2"] = 873639469] = "Sentinel2";
        VehicleHash2[VehicleHash2["Serrano"] = 1337041428] = "Serrano";
        VehicleHash2[VehicleHash2["Seven70"] = 2537130571] = "Seven70";
        VehicleHash2[VehicleHash2["Shamal"] = 3080461301] = "Shamal";
        VehicleHash2[VehicleHash2["Sheava"] = 819197656] = "Sheava";
        VehicleHash2[VehicleHash2["Sheriff"] = 2611638396] = "Sheriff";
        VehicleHash2[VehicleHash2["Sheriff2"] = 1922257928] = "Sheriff2";
        VehicleHash2[VehicleHash2["Shotaro"] = 3889340782] = "Shotaro";
        VehicleHash2[VehicleHash2["Skylift"] = 1044954915] = "Skylift";
        VehicleHash2[VehicleHash2["SlamVan"] = 729783779] = "SlamVan";
        VehicleHash2[VehicleHash2["SlamVan2"] = 833469436] = "SlamVan2";
        VehicleHash2[VehicleHash2["SlamVan3"] = 1119641113] = "SlamVan3";
        VehicleHash2[VehicleHash2["Sovereign"] = 743478836] = "Sovereign";
        VehicleHash2[VehicleHash2["Specter"] = 1886268224] = "Specter";
        VehicleHash2[VehicleHash2["Specter2"] = 1074745671] = "Specter2";
        VehicleHash2[VehicleHash2["Speeder"] = 231083307] = "Speeder";
        VehicleHash2[VehicleHash2["Speeder2"] = 437538602] = "Speeder2";
        VehicleHash2[VehicleHash2["Speedo"] = 3484649228] = "Speedo";
        VehicleHash2[VehicleHash2["Speedo2"] = 728614474] = "Speedo2";
        VehicleHash2[VehicleHash2["Squalo"] = 400514754] = "Squalo";
        VehicleHash2[VehicleHash2["Stalion"] = 1923400478] = "Stalion";
        VehicleHash2[VehicleHash2["Stalion2"] = 3893323758] = "Stalion2";
        VehicleHash2[VehicleHash2["Stanier"] = 2817386317] = "Stanier";
        VehicleHash2[VehicleHash2["Stinger"] = 1545842587] = "Stinger";
        VehicleHash2[VehicleHash2["StingerGT"] = 2196019706] = "StingerGT";
        VehicleHash2[VehicleHash2["Stockade"] = 1747439474] = "Stockade";
        VehicleHash2[VehicleHash2["Stockade3"] = 4080511798] = "Stockade3";
        VehicleHash2[VehicleHash2["Stratum"] = 1723137093] = "Stratum";
        VehicleHash2[VehicleHash2["Stretch"] = 2333339779] = "Stretch";
        VehicleHash2[VehicleHash2["Stunt"] = 2172210288] = "Stunt";
        VehicleHash2[VehicleHash2["Submersible"] = 771711535] = "Submersible";
        VehicleHash2[VehicleHash2["Submersible2"] = 3228633070] = "Submersible2";
        VehicleHash2[VehicleHash2["Sultan"] = 970598228] = "Sultan";
        VehicleHash2[VehicleHash2["SultanRS"] = 3999278268] = "SultanRS";
        VehicleHash2[VehicleHash2["Suntrap"] = 4012021193] = "Suntrap";
        VehicleHash2[VehicleHash2["Superd"] = 1123216662] = "Superd";
        VehicleHash2[VehicleHash2["Supervolito"] = 710198397] = "Supervolito";
        VehicleHash2[VehicleHash2["Supervolito2"] = 2623428164] = "Supervolito2";
        VehicleHash2[VehicleHash2["Surano"] = 384071873] = "Surano";
        VehicleHash2[VehicleHash2["Surfer"] = 699456151] = "Surfer";
        VehicleHash2[VehicleHash2["Surfer2"] = 2983726598] = "Surfer2";
        VehicleHash2[VehicleHash2["Surge"] = 2400073108] = "Surge";
        VehicleHash2[VehicleHash2["Swift2"] = 1075432268] = "Swift2";
        VehicleHash2[VehicleHash2["Swift"] = 3955379698] = "Swift";
        VehicleHash2[VehicleHash2["T20"] = 1663218586] = "T20";
        VehicleHash2[VehicleHash2["Taco"] = 1951180813] = "Taco";
        VehicleHash2[VehicleHash2["Tailgater"] = 3286105550] = "Tailgater";
        VehicleHash2[VehicleHash2["Tampa"] = 972671128] = "Tampa";
        VehicleHash2[VehicleHash2["Tampa2"] = 3223586949] = "Tampa2";
        VehicleHash2[VehicleHash2["Tampa3"] = 3084515313] = "Tampa3";
        VehicleHash2[VehicleHash2["Tanker"] = 3564062519] = "Tanker";
        VehicleHash2[VehicleHash2["Tanker2"] = 1956216962] = "Tanker2";
        VehicleHash2[VehicleHash2["TankerCar"] = 586013744] = "TankerCar";
        VehicleHash2[VehicleHash2["Taxi"] = 3338918751] = "Taxi";
        VehicleHash2[VehicleHash2["Technical"] = 2198148358] = "Technical";
        VehicleHash2[VehicleHash2["Technical2"] = 1180875963] = "Technical2";
        VehicleHash2[VehicleHash2["Technical3"] = 1356124575] = "Technical3";
        VehicleHash2[VehicleHash2["Tempesta"] = 272929391] = "Tempesta";
        VehicleHash2[VehicleHash2["Thrust"] = 1836027715] = "Thrust";
        VehicleHash2[VehicleHash2["TipTruck"] = 48339065] = "TipTruck";
        VehicleHash2[VehicleHash2["TipTruck2"] = 3347205726] = "TipTruck2";
        VehicleHash2[VehicleHash2["Titan"] = 1981688531] = "Titan";
        VehicleHash2[VehicleHash2["Torero"] = 1504306544] = "Torero";
        VehicleHash2[VehicleHash2["Tornado"] = 464687292] = "Tornado";
        VehicleHash2[VehicleHash2["Tornado2"] = 1531094468] = "Tornado2";
        VehicleHash2[VehicleHash2["Tornado3"] = 1762279763] = "Tornado3";
        VehicleHash2[VehicleHash2["Tornado4"] = 2261744861] = "Tornado4";
        VehicleHash2[VehicleHash2["Tornado5"] = 2497353967] = "Tornado5";
        VehicleHash2[VehicleHash2["Tornado6"] = 2736567667] = "Tornado6";
        VehicleHash2[VehicleHash2["Toro"] = 1070967343] = "Toro";
        VehicleHash2[VehicleHash2["Toro2"] = 908897389] = "Toro2";
        VehicleHash2[VehicleHash2["Tourbus"] = 1941029835] = "Tourbus";
        VehicleHash2[VehicleHash2["TowTruck"] = 2971866336] = "TowTruck";
        VehicleHash2[VehicleHash2["TowTruck2"] = 3852654278] = "TowTruck2";
        VehicleHash2[VehicleHash2["TR2"] = 2078290630] = "TR2";
        VehicleHash2[VehicleHash2["TR3"] = 1784254509] = "TR3";
        VehicleHash2[VehicleHash2["TR4"] = 2091594960] = "TR4";
        VehicleHash2[VehicleHash2["Tractor"] = 1641462412] = "Tractor";
        VehicleHash2[VehicleHash2["Tractor2"] = 2218488798] = "Tractor2";
        VehicleHash2[VehicleHash2["Tractor3"] = 1445631933] = "Tractor3";
        VehicleHash2[VehicleHash2["TrailerLogs"] = 2016027501] = "TrailerLogs";
        VehicleHash2[VehicleHash2["TrailerLarge"] = 1502869817] = "TrailerLarge";
        VehicleHash2[VehicleHash2["Trailers"] = 3417488910] = "Trailers";
        VehicleHash2[VehicleHash2["Trailers2"] = 2715434129] = "Trailers2";
        VehicleHash2[VehicleHash2["Trailers3"] = 2236089197] = "Trailers3";
        VehicleHash2[VehicleHash2["Trailers4"] = 3194418602] = "Trailers4";
        VehicleHash2[VehicleHash2["TrailerSmall"] = 712162987] = "TrailerSmall";
        VehicleHash2[VehicleHash2["TrailerSmall2"] = 2413121211] = "TrailerSmall2";
        VehicleHash2[VehicleHash2["Trash"] = 1917016601] = "Trash";
        VehicleHash2[VehicleHash2["Trash2"] = 3039269212] = "Trash2";
        VehicleHash2[VehicleHash2["TRFlat"] = 2942498482] = "TRFlat";
        VehicleHash2[VehicleHash2["TriBike"] = 1127861609] = "TriBike";
        VehicleHash2[VehicleHash2["TriBike2"] = 3061159916] = "TriBike2";
        VehicleHash2[VehicleHash2["TriBike3"] = 3894672200] = "TriBike3";
        VehicleHash2[VehicleHash2["TrophyTruck"] = 101905590] = "TrophyTruck";
        VehicleHash2[VehicleHash2["TrophyTruck2"] = 3631668194] = "TrophyTruck2";
        VehicleHash2[VehicleHash2["Tropic"] = 290013743] = "Tropic";
        VehicleHash2[VehicleHash2["Tropic2"] = 1448677353] = "Tropic2";
        VehicleHash2[VehicleHash2["Tropos"] = 1887331236] = "Tropos";
        VehicleHash2[VehicleHash2["Tug"] = 2194326579] = "Tug";
        VehicleHash2[VehicleHash2["Turismor"] = 408192225] = "Turismor";
        VehicleHash2[VehicleHash2["Turismo2"] = 3312836369] = "Turismo2";
        VehicleHash2[VehicleHash2["TVTrailer"] = 2524324030] = "TVTrailer";
        VehicleHash2[VehicleHash2["Tyrus"] = 2067820283] = "Tyrus";
        VehicleHash2[VehicleHash2["UtilliTruck"] = 516990260] = "UtilliTruck";
        VehicleHash2[VehicleHash2["UtilliTruck2"] = 887537515] = "UtilliTruck2";
        VehicleHash2[VehicleHash2["UtilliTruck3"] = 2132890591] = "UtilliTruck3";
        VehicleHash2[VehicleHash2["Vacca"] = 338562499] = "Vacca";
        VehicleHash2[VehicleHash2["Vader"] = 4154065143] = "Vader";
        VehicleHash2[VehicleHash2["Vagner"] = 1939284556] = "Vagner";
        VehicleHash2[VehicleHash2["Valkyrie"] = 2694714877] = "Valkyrie";
        VehicleHash2[VehicleHash2["Valkyrie2"] = 1543134283] = "Valkyrie2";
        VehicleHash2[VehicleHash2["Velum"] = 2621610858] = "Velum";
        VehicleHash2[VehicleHash2["Velum2"] = 1077420264] = "Velum2";
        VehicleHash2[VehicleHash2["Verlierer2"] = 1102544804] = "Verlierer2";
        VehicleHash2[VehicleHash2["Vestra"] = 1341619767] = "Vestra";
        VehicleHash2[VehicleHash2["Vigero"] = 3469130167] = "Vigero";
        VehicleHash2[VehicleHash2["Vindicator"] = 2941886209] = "Vindicator";
        VehicleHash2[VehicleHash2["Virgo"] = 3796912450] = "Virgo";
        VehicleHash2[VehicleHash2["Virgo2"] = 3395457658] = "Virgo2";
        VehicleHash2[VehicleHash2["Virgo3"] = 16646064] = "Virgo3";
        VehicleHash2[VehicleHash2["Volatus"] = 2449479409] = "Volatus";
        VehicleHash2[VehicleHash2["Voltic"] = 2672523198] = "Voltic";
        VehicleHash2[VehicleHash2["Voltic2"] = 989294410] = "Voltic2";
        VehicleHash2[VehicleHash2["Voodoo"] = 2006667053] = "Voodoo";
        VehicleHash2[VehicleHash2["Voodoo2"] = 523724515] = "Voodoo2";
        VehicleHash2[VehicleHash2["Vortex"] = 3685342204] = "Vortex";
        VehicleHash2[VehicleHash2["Warrener"] = 1373123368] = "Warrener";
        VehicleHash2[VehicleHash2["Washington"] = 1777363799] = "Washington";
        VehicleHash2[VehicleHash2["Wastelander"] = 2382949506] = "Wastelander";
        VehicleHash2[VehicleHash2["Windsor"] = 1581459400] = "Windsor";
        VehicleHash2[VehicleHash2["Windsor2"] = 2364918497] = "Windsor2";
        VehicleHash2[VehicleHash2["Wolfsbane"] = 3676349299] = "Wolfsbane";
        VehicleHash2[VehicleHash2["XA21"] = 917809321] = "XA21";
        VehicleHash2[VehicleHash2["XLS"] = 1203490606] = "XLS";
        VehicleHash2[VehicleHash2["XLS2"] = 3862958888] = "XLS2";
        VehicleHash2[VehicleHash2["Youga"] = 65402552] = "Youga";
        VehicleHash2[VehicleHash2["Youga2"] = 1026149675] = "Youga2";
        VehicleHash2[VehicleHash2["Zentorno"] = 2891838741] = "Zentorno";
        VehicleHash2[VehicleHash2["Zion"] = 3172678083] = "Zion";
        VehicleHash2[VehicleHash2["Zion2"] = 3101863448] = "Zion2";
        VehicleHash2[VehicleHash2["ZombieA"] = 3285698347] = "ZombieA";
        VehicleHash2[VehicleHash2["ZombieB"] = 3724934023] = "ZombieB";
        VehicleHash2[VehicleHash2["ZType"] = 758895617] = "ZType";
      })(VehicleHash || (VehicleHash = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/hashes/WeaponHash.js
  var WeaponHash, VehicleWeaponHash, AmmoType;
  var init_WeaponHash = __esm({
    "node_modules/@nativewrappers/client/lib/hashes/WeaponHash.js"() {
      (function(WeaponHash2) {
        WeaponHash2[WeaponHash2["Dagger"] = -1834847097] = "Dagger";
        WeaponHash2[WeaponHash2["Bat"] = -1786099057] = "Bat";
        WeaponHash2[WeaponHash2["Bottle"] = -102323637] = "Bottle";
        WeaponHash2[WeaponHash2["Crowbar"] = -2067956739] = "Crowbar";
        WeaponHash2[WeaponHash2["Unarmed"] = -1569615261] = "Unarmed";
        WeaponHash2[WeaponHash2["Flashlight"] = -1951375401] = "Flashlight";
        WeaponHash2[WeaponHash2["GolfClub"] = 1141786504] = "GolfClub";
        WeaponHash2[WeaponHash2["Hammer"] = 1317494643] = "Hammer";
        WeaponHash2[WeaponHash2["Hatchet"] = -102973651] = "Hatchet";
        WeaponHash2[WeaponHash2["KnuckleDuster"] = -656458692] = "KnuckleDuster";
        WeaponHash2[WeaponHash2["Knife"] = -1716189206] = "Knife";
        WeaponHash2[WeaponHash2["Machete"] = -581044007] = "Machete";
        WeaponHash2[WeaponHash2["SwitchBlade"] = -538741184] = "SwitchBlade";
        WeaponHash2[WeaponHash2["Nightstick"] = 1737195953] = "Nightstick";
        WeaponHash2[WeaponHash2["Wrench"] = 419712736] = "Wrench";
        WeaponHash2[WeaponHash2["BattleAxe"] = -853065399] = "BattleAxe";
        WeaponHash2[WeaponHash2["PoolCue"] = -1810795771] = "PoolCue";
        WeaponHash2[WeaponHash2["StoneHatchet"] = 940833800] = "StoneHatchet";
        WeaponHash2[WeaponHash2["Pistol"] = 453432689] = "Pistol";
        WeaponHash2[WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
        WeaponHash2[WeaponHash2["CombatPistol"] = 1593441988] = "CombatPistol";
        WeaponHash2[WeaponHash2["APPistol"] = 584646201] = "APPistol";
        WeaponHash2[WeaponHash2["StunGun"] = 911657153] = "StunGun";
        WeaponHash2[WeaponHash2["StunGunMp"] = 1171102963] = "StunGunMp";
        WeaponHash2[WeaponHash2["Pistol50"] = -1716589765] = "Pistol50";
        WeaponHash2[WeaponHash2["SNSPistol"] = -1076751822] = "SNSPistol";
        WeaponHash2[WeaponHash2["SNSPistolMk2"] = -2009644972] = "SNSPistolMk2";
        WeaponHash2[WeaponHash2["HeavyPistol"] = -771403250] = "HeavyPistol";
        WeaponHash2[WeaponHash2["VintagePistol"] = 137902532] = "VintagePistol";
        WeaponHash2[WeaponHash2["FlareGun"] = 1198879012] = "FlareGun";
        WeaponHash2[WeaponHash2["MarksmanPistol"] = -598887786] = "MarksmanPistol";
        WeaponHash2[WeaponHash2["Revolver"] = -1045183535] = "Revolver";
        WeaponHash2[WeaponHash2["RevolverMk2"] = -879347409] = "RevolverMk2";
        WeaponHash2[WeaponHash2["DoubleAction"] = -1746263880] = "DoubleAction";
        WeaponHash2[WeaponHash2["RayPistol"] = -1355376991] = "RayPistol";
        WeaponHash2[WeaponHash2["CeramicPistol"] = 727643628] = "CeramicPistol";
        WeaponHash2[WeaponHash2["NavyRevolver"] = -1853920116] = "NavyRevolver";
        WeaponHash2[WeaponHash2["GadgetPistol"] = 1470379660] = "GadgetPistol";
        WeaponHash2[WeaponHash2["MicroSMG"] = 324215364] = "MicroSMG";
        WeaponHash2[WeaponHash2["SMG"] = 736523883] = "SMG";
        WeaponHash2[WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
        WeaponHash2[WeaponHash2["AssaultSMG"] = -270015777] = "AssaultSMG";
        WeaponHash2[WeaponHash2["CombatPDW"] = 171789620] = "CombatPDW";
        WeaponHash2[WeaponHash2["MachinePistol"] = -619010992] = "MachinePistol";
        WeaponHash2[WeaponHash2["MiniSMG"] = -1121678507] = "MiniSMG";
        WeaponHash2[WeaponHash2["RayCarbine"] = 1198256469] = "RayCarbine";
        WeaponHash2[WeaponHash2["MG"] = -1660422300] = "MG";
        WeaponHash2[WeaponHash2["CombatMG"] = 2144741730] = "CombatMG";
        WeaponHash2[WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
        WeaponHash2[WeaponHash2["Gusenberg"] = 1627465347] = "Gusenberg";
        WeaponHash2[WeaponHash2["PumpShotgun"] = 487013001] = "PumpShotgun";
        WeaponHash2[WeaponHash2["PumpShotgunMk2"] = 1432025498] = "PumpShotgunMk2";
        WeaponHash2[WeaponHash2["SawnOffShotgun"] = 2017895192] = "SawnOffShotgun";
        WeaponHash2[WeaponHash2["AssaultShotgun"] = -494615257] = "AssaultShotgun";
        WeaponHash2[WeaponHash2["BullpupShotgun"] = -1654528753] = "BullpupShotgun";
        WeaponHash2[WeaponHash2["Musket"] = -1466123874] = "Musket";
        WeaponHash2[WeaponHash2["HeavyShotgun"] = 984333226] = "HeavyShotgun";
        WeaponHash2[WeaponHash2["DoubleBarrelShotgun"] = -275439685] = "DoubleBarrelShotgun";
        WeaponHash2[WeaponHash2["SweeperShotgun"] = 317205821] = "SweeperShotgun";
        WeaponHash2[WeaponHash2["CombatShotgun"] = 94989220] = "CombatShotgun";
        WeaponHash2[WeaponHash2["AssaultRifle"] = -1074790547] = "AssaultRifle";
        WeaponHash2[WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
        WeaponHash2[WeaponHash2["CarbineRifle"] = -2084633992] = "CarbineRifle";
        WeaponHash2[WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
        WeaponHash2[WeaponHash2["AdvancedRifle"] = -1357824103] = "AdvancedRifle";
        WeaponHash2[WeaponHash2["SpecialCarbine"] = -1063057011] = "SpecialCarbine";
        WeaponHash2[WeaponHash2["SpecialCarbineMk2"] = -1768145561] = "SpecialCarbineMk2";
        WeaponHash2[WeaponHash2["BullpupRifle"] = 2132975508] = "BullpupRifle";
        WeaponHash2[WeaponHash2["BullpupRifleMk2"] = -2066285827] = "BullpupRifleMk2";
        WeaponHash2[WeaponHash2["CompactRifle"] = 1649403952] = "CompactRifle";
        WeaponHash2[WeaponHash2["MilitaryRifle"] = -1658906650] = "MilitaryRifle";
        WeaponHash2[WeaponHash2["HeavyRifle"] = -947031628] = "HeavyRifle";
        WeaponHash2[WeaponHash2["SniperRifle"] = 100416529] = "SniperRifle";
        WeaponHash2[WeaponHash2["HeavySniper"] = 205991906] = "HeavySniper";
        WeaponHash2[WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
        WeaponHash2[WeaponHash2["MarksmanRifle"] = -952879014] = "MarksmanRifle";
        WeaponHash2[WeaponHash2["MarksmanRifleMk2"] = 1785463520] = "MarksmanRifleMk2";
        WeaponHash2[WeaponHash2["RPG"] = -1312131151] = "RPG";
        WeaponHash2[WeaponHash2["GrenadeLauncher"] = -1568386805] = "GrenadeLauncher";
        WeaponHash2[WeaponHash2["GrenadeLauncherSmoke"] = 1305664598] = "GrenadeLauncherSmoke";
        WeaponHash2[WeaponHash2["Minigun"] = 1119849093] = "Minigun";
        WeaponHash2[WeaponHash2["Firework"] = 2138347493] = "Firework";
        WeaponHash2[WeaponHash2["Railgun"] = 1834241177] = "Railgun";
        WeaponHash2[WeaponHash2["HomingLauncher"] = 1672152130] = "HomingLauncher";
        WeaponHash2[WeaponHash2["CompactGrenadeLauncher"] = 125959754] = "CompactGrenadeLauncher";
        WeaponHash2[WeaponHash2["RayMinigun"] = -1238556825] = "RayMinigun";
        WeaponHash2[WeaponHash2["EmpLauncher"] = -618237638] = "EmpLauncher";
        WeaponHash2[WeaponHash2["Grenade"] = -1813897027] = "Grenade";
        WeaponHash2[WeaponHash2["BZGas"] = -1600701090] = "BZGas";
        WeaponHash2[WeaponHash2["Molotov"] = 615608432] = "Molotov";
        WeaponHash2[WeaponHash2["StickyBomb"] = 741814745] = "StickyBomb";
        WeaponHash2[WeaponHash2["ProximityMine"] = -1420407917] = "ProximityMine";
        WeaponHash2[WeaponHash2["Snowball"] = 126349499] = "Snowball";
        WeaponHash2[WeaponHash2["PipeBomb"] = -1169823560] = "PipeBomb";
        WeaponHash2[WeaponHash2["Ball"] = 600439132] = "Ball";
        WeaponHash2[WeaponHash2["SmokeGrenade"] = -37975472] = "SmokeGrenade";
        WeaponHash2[WeaponHash2["Flare"] = 1233104067] = "Flare";
        WeaponHash2[WeaponHash2["PetrolCan"] = 883325847] = "PetrolCan";
        WeaponHash2[WeaponHash2["Parachute"] = -72657034] = "Parachute";
        WeaponHash2[WeaponHash2["FireExtinguisher"] = 101631238] = "FireExtinguisher";
        WeaponHash2[WeaponHash2["HazardCan"] = -1168940174] = "HazardCan";
        WeaponHash2[WeaponHash2["FertilizerCan"] = 406929569] = "FertilizerCan";
      })(WeaponHash || (WeaponHash = {}));
      (function(VehicleWeaponHash2) {
        VehicleWeaponHash2[VehicleWeaponHash2["Invalid"] = -1] = "Invalid";
        VehicleWeaponHash2[VehicleWeaponHash2["Tank"] = 1945616459] = "Tank";
        VehicleWeaponHash2[VehicleWeaponHash2["SpaceRocket"] = -123497569] = "SpaceRocket";
        VehicleWeaponHash2[VehicleWeaponHash2["PlaneRocket"] = -821520672] = "PlaneRocket";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerLaser"] = -268631733] = "PlayerLaser";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerBullet"] = 1259576109] = "PlayerBullet";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerBuzzard"] = 1186503822] = "PlayerBuzzard";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerHunter"] = -1625648674] = "PlayerHunter";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerLazer"] = -494786007] = "PlayerLazer";
        VehicleWeaponHash2[VehicleWeaponHash2["EnemyLaser"] = 1566990507] = "EnemyLaser";
        VehicleWeaponHash2[VehicleWeaponHash2["SearchLight"] = -844344963] = "SearchLight";
        VehicleWeaponHash2[VehicleWeaponHash2["Radar"] = -764006018] = "Radar";
      })(VehicleWeaponHash || (VehicleWeaponHash = {}));
      (function(AmmoType2) {
        AmmoType2[AmmoType2["Melee"] = 0] = "Melee";
        AmmoType2[AmmoType2["FireExtinguisher"] = 1359393852] = "FireExtinguisher";
        AmmoType2[AmmoType2["Flare"] = 1808594799] = "Flare";
        AmmoType2[AmmoType2["FlareGun"] = 1173416293] = "FlareGun";
        AmmoType2[AmmoType2["PetrolCan"] = 3395492001] = "PetrolCan";
        AmmoType2[AmmoType2["Shotgun"] = 2416459067] = "Shotgun";
        AmmoType2[AmmoType2["Pistol"] = 1950175060] = "Pistol";
        AmmoType2[AmmoType2["Ball"] = 4287981158] = "Ball";
        AmmoType2[AmmoType2["Snowball"] = 2182627693] = "Snowball";
        AmmoType2[AmmoType2["Sniper"] = 1285032059] = "Sniper";
        AmmoType2[AmmoType2["AssaultRifle"] = 218444191] = "AssaultRifle";
        AmmoType2[AmmoType2["SMG"] = 1820140472] = "SMG";
        AmmoType2[AmmoType2["Molotov"] = 1446246869] = "Molotov";
        AmmoType2[AmmoType2["StunGun"] = 2955849184] = "StunGun";
        AmmoType2[AmmoType2["MG"] = 1788949567] = "MG";
        AmmoType2[AmmoType2["GrenadeLauncher"] = 1003267566] = "GrenadeLauncher";
        AmmoType2[AmmoType2["RPG"] = 1742569970] = "RPG";
        AmmoType2[AmmoType2["Minigun"] = 2680539266] = "Minigun";
        AmmoType2[AmmoType2["Firework"] = 2938367503] = "Firework";
        AmmoType2[AmmoType2["Railgun"] = 2034517757] = "Railgun";
        AmmoType2[AmmoType2["HomingLauncher"] = 2568293933] = "HomingLauncher";
        AmmoType2[AmmoType2["Grenade"] = 1003688881] = "Grenade";
        AmmoType2[AmmoType2["StickyBomb"] = 1411692055] = "StickyBomb";
        AmmoType2[AmmoType2["ProximityMine"] = 2938243239] = "ProximityMine";
        AmmoType2[AmmoType2["PipeBomb"] = 357983224] = "PipeBomb";
        AmmoType2[AmmoType2["SmokeGrenade"] = 3859679398] = "SmokeGrenade";
        AmmoType2[AmmoType2["BZGas"] = 2608103076] = "BZGas";
      })(AmmoType || (AmmoType = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/hashes/index.js
  var init_hashes = __esm({
    "node_modules/@nativewrappers/client/lib/hashes/index.js"() {
      init_VehicleHash();
      init_WeaponHash();
    }
  });

  // node_modules/@nativewrappers/client/lib/Model.js
  var Model;
  var init_Model = __esm({
    "node_modules/@nativewrappers/client/lib/Model.js"() {
      init_Game();
      init_hashes();
      init_utils();
      Model = class {
        constructor(hash) {
          if (typeof hash === "string") {
            this.hash = Game.generateHash(hash);
          } else {
            this.hash = hash;
          }
        }
        get Hash() {
          return this.hash;
        }
        get IsValid() {
          return IsModelValid(this.hash);
        }
        get IsInCdImage() {
          return IsModelInCdimage(this.hash);
        }
        get IsLoaded() {
          return HasModelLoaded(this.hash);
        }
        get IsCollisionLoaded() {
          return HasCollisionForModelLoaded(this.hash);
        }
        get IsBicycle() {
          return IsThisModelABicycle(this.hash);
        }
        get IsBike() {
          return IsThisModelABike(this.hash);
        }
        get IsBoat() {
          return IsThisModelABoat(this.hash);
        }
        get IsCar() {
          return IsThisModelACar(this.hash);
        }
        get IsCargobob() {
          return this.hash === VehicleHash.Cargobob || this.hash === VehicleHash.Cargobob2 || this.hash === VehicleHash.Cargobob3 || this.hash === VehicleHash.Cargobob4;
        }
        get IsHelicopter() {
          return IsThisModelAHeli(this.hash);
        }
        get IsPed() {
          return IsModelAPed(this.hash);
        }
        get IsPlane() {
          return IsThisModelAPlane(this.hash);
        }
        get IsProp() {
          return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
        }
        get IsQuadbike() {
          return IsThisModelAQuadbike(this.hash);
        }
        get IsTrain() {
          return IsThisModelATrain(this.hash);
        }
        get IsVehicle() {
          return IsModelAVehicle(this.hash);
        }
        get Dimensions() {
          const [min, max] = GetModelDimensions(this.hash);
          const right = new Vector3(min[0], min[1], min[2]);
          const left = new Vector3(max[0], max[1], max[2]);
          return Vector3.subtract(left, right);
        }
        request(timeout = 1e3) {
          return new Promise((resolve) => {
            if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
              resolve(false);
            }
            RequestModel(this.hash);
            const start = GetGameTimer();
            const interval = setInterval(() => {
              if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                clearInterval(interval);
                this.markAsNoLongerNeeded();
                resolve(this.IsLoaded);
              }
            }, 0);
          });
        }
        markAsNoLongerNeeded() {
          SetModelAsNoLongerNeeded(this.hash);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/cfx/index.js
  var cfx_default;
  var init_cfx = __esm({
    "node_modules/@nativewrappers/client/lib/cfx/index.js"() {
      cfx_default = { Entity, Player };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/Entity.js
  var Entity2;
  var init_Entity = __esm({
    "node_modules/@nativewrappers/client/lib/models/Entity.js"() {
      init_Blip2();
      init_enums();
      init_Game();
      init_Model();
      init_utils();
      init_models();
      init_cfx();
      Entity2 = class {
        constructor(handle) {
          this.stateBagCookies = [];
          this.handle = handle;
        }
        static fromHandle(handle) {
          switch (GetEntityType(handle)) {
            case 1:
              return new Ped(handle);
            case 2:
              return new Vehicle(handle);
            case 3:
              return new Prop(handle);
          }
          return null;
        }
        static fromNetworkId(networkId) {
          return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
        }
        get Handle() {
          return this.handle;
        }
        get NetworkId() {
          return NetworkGetNetworkIdFromEntity(this.handle);
        }
        get State() {
          return cfx_default.Entity(this.handle).state;
        }
        AddStateBagChangeHandler(keyFilter, handler) {
          const stateBagName = NetworkGetEntityIsNetworked(this.handle) ? `entity:${this.NetworkId}` : `localEntity:${this.handle}`;
          const cookie = AddStateBagChangeHandler(keyFilter, stateBagName, handler);
          this.stateBagCookies.push(cookie);
          return cookie;
        }
        listenForStateChange(keyFilter, handler) {
          return this.AddStateBagChangeHandler(keyFilter, handler);
        }
        removeStateListener(tgtCookie) {
          this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
            const isCookie = cookie == tgtCookie;
            if (isCookie)
              RemoveStateBagChangeHandler(cookie);
            return isCookie;
          });
        }
        get Health() {
          return GetEntityHealth(this.handle);
        }
        set Health(amount) {
          SetEntityHealth(this.handle, amount);
        }
        get MaxHealth() {
          return GetEntityMaxHealth(this.handle);
        }
        set MaxHealth(amount) {
          SetEntityMaxHealth(this.handle, amount);
        }
        isDead() {
          return IsEntityDead(this.handle);
        }
        isAlive() {
          return !this.isDead();
        }
        get Model() {
          return new Model(GetEntityModel(this.handle));
        }
        get Position() {
          const coords = GetEntityCoords(this.handle, false);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        set Position(position) {
          SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
        }
        set PositionNoOffset(position) {
          SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
        }
        get Rotation() {
          const rotation = GetEntityRotation(this.handle, 2);
          return new Vector3(rotation[0], rotation[1], rotation[2]);
        }
        set Rotation(rotation) {
          SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
        }
        get Quaternion() {
          const quaternion = GetEntityQuaternion(this.handle);
          return new Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
        }
        set Quaternion(quaternion) {
          SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
        }
        get Heading() {
          return GetEntityHeading(this.handle);
        }
        set Heading(heading) {
          SetEntityHeading(this.handle, heading);
        }
        set IsPositionFrozen(value) {
          FreezeEntityPosition(this.handle, value);
        }
        get Velocity() {
          const velocity = GetEntityVelocity(this.handle);
          return new Vector3(velocity[0], velocity[1], velocity[2]);
        }
        set Velocity(velocity) {
          SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
        }
        get RotationVelocity() {
          const velocity = GetEntityRotationVelocity(this.handle);
          return new Vector3(velocity[0], velocity[1], velocity[2]);
        }
        set MaxSpeed(value) {
          SetEntityMaxSpeed(this.handle, value);
        }
        set HasGravity(value) {
          SetEntityHasGravity(this.handle, value);
        }
        get HeightAboveGround() {
          return GetEntityHeightAboveGround(this.handle);
        }
        get SubmersionLevel() {
          return GetEntitySubmergedLevel(this.handle);
        }
        get LodDistance() {
          return GetEntityLodDist(this.handle);
        }
        set LodDistance(value) {
          SetEntityLodDist(this.handle, value);
        }
        get IsVisible() {
          return IsEntityVisible(this.handle);
        }
        set IsVisible(value) {
          SetEntityVisible(this.handle, value, false);
        }
        get IsOccluded() {
          return IsEntityOccluded(this.handle);
        }
        get IsOnScreen() {
          return IsEntityOnScreen(this.handle);
        }
        get IsUpright() {
          return IsEntityUpright(this.handle, 0);
        }
        get IsUpsideDown() {
          return IsEntityUpsidedown(this.handle);
        }
        get IsInAir() {
          return IsEntityInAir(this.handle);
        }
        get IsInWater() {
          return IsEntityInWater(this.handle);
        }
        get IsPersistent() {
          return IsEntityAMissionEntity(this.handle);
        }
        set IsPersistent(value) {
          if (value) {
            SetEntityAsMissionEntity(this.handle, true, false);
          } else {
            this.markAsNoLongerNeeded();
          }
        }
        get IsOnFire() {
          return IsEntityOnFire(this.handle);
        }
        set IsInvincible(value) {
          SetEntityInvincible(this.handle, value);
        }
        set IsOnlyDamagedByPlayer(value) {
          SetEntityOnlyDamagedByPlayer(this.handle, value);
        }
        get Opacity() {
          return GetEntityAlpha(this.handle);
        }
        set Opacity(value) {
          SetEntityAlpha(this.handle, value, false);
        }
        resetOpacity() {
          ResetEntityAlpha(this.handle);
        }
        get HasCollided() {
          return HasEntityCollidedWithAnything(this.handle);
        }
        get MaterialCollidingWith() {
          return GetLastMaterialHitByEntity(this.handle);
        }
        get IsCollisionEnabled() {
          return !GetEntityCollisonDisabled(this.handle);
        }
        set IsCollisionEnabled(value) {
          SetEntityCollision(this.handle, value, false);
        }
        set IsRecordingCollisions(value) {
          SetEntityRecordsCollisions(this.handle, value);
        }
        get Bones() {
          if (!this.bones) {
            this.bones = new EntityBoneCollection(this);
          }
          return this.bones;
        }
        get AttachedBlip() {
          const handle = GetBlipFromEntity(this.handle);
          if (DoesBlipExist(handle)) {
            return new Blip(handle);
          }
          return null;
        }
        attachBlip() {
          return new Blip(AddBlipForEntity(this.handle));
        }
        setNoCollision(entity, toggle) {
          SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
        }
        hasClearLosToEntity(entity, traceType = 17) {
          return HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
        }
        hasClearLosToEntityInFront(entity) {
          return HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
        }
        hasBeenDamagedBy(entity) {
          return HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
        }
        hasBeenDamagedByWeapon(weapon) {
          return HasEntityBeenDamagedByWeapon(this.handle, Number(weapon), 0);
        }
        hasBeenDamagedByAnyWeapon() {
          return HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
        }
        hasBeenDamagedByAnyMeleeWeapon() {
          return HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
        }
        clearLastWeaponDamage() {
          ClearEntityLastWeaponDamage(this.handle);
        }
        isInArea(minBounds, maxBounds) {
          return IsEntityInArea(this.handle, minBounds.x, minBounds.y, minBounds.z, maxBounds.x, maxBounds.y, maxBounds.z, false, false, 0);
        }
        isInAngledArea(origin, edge, angle) {
          return IsEntityInAngledArea(this.handle, origin.x, origin.y, origin.z, edge.x, edge.y, edge.z, angle, false, true, 0);
        }
        isInRangeOf(position, range) {
          const v = Vector3.subtract(this.Position, position);
          return v.dotProduct(v) < range * range;
        }
        isNearEntity(entity, bounds) {
          return IsEntityAtEntity(this.handle, entity.Handle, bounds.x, bounds.y, bounds.z, false, true, 0);
        }
        isTouching(entity) {
          return IsEntityTouchingEntity(this.handle, entity.Handle);
        }
        isTouchingModel(model) {
          return IsEntityTouchingModel(this.handle, model.Hash);
        }
        getOffsetPosition(offset) {
          const o = GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z);
          return new Vector3(o[0], o[1], o[2]);
        }
        getPositionOffset(worldCoords) {
          const o = GetOffsetFromEntityGivenWorldCoords(this.handle, worldCoords.x, worldCoords.y, worldCoords.z);
          return new Vector3(o[0], o[1], o[2]);
        }
        attachTo(entity, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
          if (this.handle == entity.Handle) {
            throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
          }
          AttachEntityToEntity(this.handle, entity.Handle, -1, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, unk9, useSoftPinning, collisions, IsEntityAPed(entity.Handle), rotationOrder, true);
        }
        attachToBone(entityBone, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
          if (this.handle == entityBone.Owner.Handle) {
            throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
          }
          AttachEntityToEntity(this.handle, entityBone.Owner.Handle, entityBone.Index, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, unk9, useSoftPinning, collisions, IsEntityAPed(entityBone.Owner.Handle), rotationOrder, true);
        }
        detach() {
          DetachEntity(this.handle, true, true);
        }
        isAttached() {
          return IsEntityAttached(this.handle);
        }
        isAttachedTo(entity) {
          return IsEntityAttachedToEntity(this.handle, entity.Handle);
        }
        getEntityAttachedTo() {
          return Entity2.fromHandle(GetEntityAttachedTo(this.handle));
        }
        applyForce(direction, rotation, forceType = ForceType.MaxForceRot2) {
          ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, false, true, true, false, true);
        }
        applyForceRelative(direction, rotation, forceType = ForceType.MaxForceRot2) {
          ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, true, true, true, false, true);
        }
        removeAllParticleEffects() {
          RemoveParticleFxFromEntity(this.handle);
        }
        exists() {
          return DoesEntityExist(this.handle) ? true : false;
        }
        delete() {
          if (this.handle !== Game.PlayerPed.Handle) {
            SetEntityAsMissionEntity(this.handle, false, true);
            DeleteEntity(this.handle);
            for (const cookie of this.stateBagCookies) {
              RemoveStateBagChangeHandler(cookie);
            }
          }
        }
        markAsNoLongerNeeded() {
          SetEntityAsMissionEntity(this.Handle, false, true);
          SetEntityAsNoLongerNeeded(this.Handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/EntityBone.js
  var EntityBone;
  var init_EntityBone = __esm({
    "node_modules/@nativewrappers/client/lib/models/EntityBone.js"() {
      init_utils();
      EntityBone = class {
        constructor(owner, boneIndex, boneName) {
          this.owner = owner;
          this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "");
        }
        get Index() {
          return this.index;
        }
        get Owner() {
          return this.owner;
        }
        get Position() {
          const coords = GetWorldPositionOfEntityBone(this.owner.Handle, this.index);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        get IsValid() {
          return this.owner.exists() && this.index !== -1;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/EntityBoneCollection.js
  var EntityBoneCollection;
  var init_EntityBoneCollection = __esm({
    "node_modules/@nativewrappers/client/lib/models/EntityBoneCollection.js"() {
      init_models();
      EntityBoneCollection = class {
        constructor(owner) {
          this._currentIndex = -1;
          this.owner = owner;
        }
        hasBone(name) {
          return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
        }
        getBone(boneIndex, boneName) {
          return new EntityBone(this.owner, boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? ""));
        }
        get Core() {
          return new EntityBone(this.owner, -1);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/Tasks.js
  var Tasks;
  var init_Tasks = __esm({
    "node_modules/@nativewrappers/client/lib/Tasks.js"() {
      init_enums();
      init_models();
      init_utils();
      init_Animations();
      Tasks = class {
        constructor(ped) {
          this.ped = ped;
        }
        achieveHeading(heading, timeout = 0) {
          TaskAchieveHeading(this.ped.Handle, heading, timeout);
        }
        blockTemporaryEvents(block = true) {
          TaskSetBlockingOfNonTemporaryEvents(this.ped.Handle, block);
        }
        aimAt(target, duration) {
          if (target instanceof Entity2)
            TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false);
          else
            TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
        }
        arrest(ped) {
          TaskArrestPed(this.ped.Handle, ped.Handle);
        }
        chatTo(ped) {
          TaskChatToPed(this.ped.Handle, ped.Handle, 16, 0, 0, 0, 0, 0);
        }
        jump() {
          TaskJump(this.ped.Handle, true);
        }
        climb() {
          TaskClimb(this.ped.Handle, true);
        }
        climbLadder() {
          TaskClimbLadder(this.ped.Handle, 1);
        }
        cower(duration) {
          TaskCower(this.ped.Handle, duration);
        }
        chaseWithGroundVehicle(target) {
          TaskVehicleChase(this.ped.Handle, target.Handle);
        }
        chaseWithHelicopter(target, offset) {
          TaskHeliChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
        }
        chaseWithPlane(target, offset) {
          TaskPlaneChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
        }
        cruiseWithVehicle(vehicle, speed, drivingstyle = DrivingStyle.None) {
          TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingstyle);
        }
        driveTo(vehicle, target, radius, speed, drivingstyle = DrivingStyle.None) {
          TaskVehicleDriveToCoordLongrange(this.ped.Handle, vehicle.Handle, target.x, target.y, target.z, speed, drivingstyle, radius);
        }
        enterAnyVehicle(seat = VehicleSeat.Any, timeout = -1, speed = 0, flag = 0) {
          TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
        }
        static everyoneLeaveVehicle(vehicle) {
          TaskEveryoneLeaveVehicle(vehicle.Handle);
        }
        fightAgainst(target, duration) {
          if (duration) {
            TaskCombatPedTimed(this.ped.Handle, target.Handle, duration, 0);
          } else {
            TaskCombatPed(this.ped.Handle, target.Handle, 0, 16);
          }
        }
        fightAgainstHatedTargets(radius, duration) {
          if (duration) {
            TaskCombatHatedTargetsAroundPedTimed(this.ped.Handle, radius, duration, 0);
          } else {
            TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0);
          }
        }
        fleeFrom(pedOrPosition, duration = -1) {
          if (pedOrPosition instanceof Ped) {
            TaskSmartFleePed(this.ped.Handle, pedOrPosition.Handle, 100, duration, false, false);
          } else {
            TaskSmartFleeCoord(this.ped.Handle, pedOrPosition.x, pedOrPosition.y, pedOrPosition.z, 100, duration, false, false);
          }
        }
        followPointRoute(points) {
          TaskFlushRoute();
          points.forEach((point) => TaskExtendRoute(point.x, point.y, point.z));
          TaskFollowPointRoute(this.ped.Handle, 1, 0);
        }
        followToOffsetFromEntity(target, offset, timeout, stoppingRange, movementSpeed = 1, persistFollowing = true) {
          TaskFollowToOffsetOfEntity(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z, movementSpeed, timeout, stoppingRange, persistFollowing);
        }
        goTo(position, ignorePaths = false, timeout = -1, speed = 1) {
          if (ignorePaths) {
            TaskGoStraightToCoord(this.ped.Handle, position.x, position.y, position.z, speed, timeout, 0, 0);
          } else {
            TaskFollowNavMeshToCoord(this.ped.Handle, position.x, position.y, position.z, speed, timeout, 0, false, 0);
          }
        }
        goToEntity(target, offset = null, timeout = -1) {
          if (offset === null) {
            offset = new Vector3(0, 0, 0);
          }
          TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
        }
        guardCurrentPosition() {
          TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
        }
        handsUp(duration) {
          TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
        }
        landPlane(startPosition, touchdownPosition, plane = null) {
          if (plane === null) {
            plane = this.ped.CurrentVehicle;
          }
          if (plane === null || !plane.exists() || plane.isDead()) {
            TaskPlaneLand(this.ped.Handle, 0, startPosition.x, startPosition.y, startPosition.z, touchdownPosition.x, touchdownPosition.y, touchdownPosition.z);
          } else {
            TaskPlaneLand(this.ped.Handle, plane.Handle, startPosition.x, startPosition.y, startPosition.z, touchdownPosition.x, touchdownPosition.y, touchdownPosition.z);
          }
        }
        lookAt(targetOrPosition, duration = -1) {
          if (targetOrPosition instanceof Entity2)
            TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 0, 2);
          else
            TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 2);
        }
        parachuteTo(position) {
          TaskParachuteToTarget(this.ped.Handle, position.x, position.y, position.z);
        }
        parkVehicle(vehicle, position, heading, radius = 20, keepEngineOn = false) {
          TaskVehiclePark(this.ped.Handle, vehicle.Handle, position.x, position.y, position.z, heading, 1, radius, keepEngineOn);
        }
        performSequence(sequence) {
          if (!sequence.IsClosed) {
            sequence.close();
          }
          this.clearAll();
          this.ped.BlockPermanentEvents = true;
          TaskPerformSequence(this.ped.Handle, sequence.Handle);
        }
        async playAnimation(animDict, animName, blendInSpeed, blendOutSpeed, duration, playbackRate, flags) {
          await LoadAnimDict(animDict);
          TaskPlayAnim(this.ped.Handle, animDict, animName, blendInSpeed, blendOutSpeed, duration, flags, playbackRate, false, false, false);
          RemoveAnimDict(animDict);
        }
        reactAndFlee(ped) {
          TaskReactAndFleePed(this.ped.Handle, ped.Handle);
        }
        reloadWeapon() {
          TaskReloadWeapon(this.ped.Handle, true);
        }
        shootAt(targetOrPosition, duration = -1, pattern = FiringPattern.Default) {
          if (targetOrPosition instanceof Ped)
            TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern);
          else
            TaskShootAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, pattern);
        }
        shuffleToNextVehicleSeat(vehicle) {
          TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
        }
        skyDive() {
          TaskSkyDive(this.ped.Handle);
        }
        slideTo(position, heading, duration = 0.7) {
          TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
        }
        standStill(duration) {
          TaskStandStill(this.ped.Handle, duration);
        }
        startScenario(name, position, heading = 0, duration = 0, sittingScenario = false, teleport = true) {
          TaskStartScenarioAtPosition(this.ped.Handle, name, position.x, position.y, position.z, heading, duration, sittingScenario, teleport);
        }
        swapWeapon() {
          TaskSwapWeapon(this.ped.Handle, false);
        }
        turnTo(targetOrPosition, duration = -1) {
          if (targetOrPosition instanceof Entity2)
            TaskTurnPedToFaceEntity(this.ped.Handle, targetOrPosition.Handle, duration);
          else
            TaskTurnPedToFaceCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration);
        }
        useParachute() {
          TaskParachute(this.ped.Handle, true);
        }
        useMobilePhone(duration = 1) {
          TaskUseMobilePhone(this.ped.Handle, duration);
        }
        putAwayParachute() {
          TaskParachute(this.ped.Handle, false);
        }
        putAwayMobilePhone() {
          TaskUseMobilePhone(this.ped.Handle, 0);
        }
        vehicleChase(target) {
          TaskVehicleChase(this.ped.Handle, target.Handle);
        }
        vehicleShootAtPed(target) {
          TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
        }
        wait(duration) {
          TaskPause(this.ped.Handle, duration);
        }
        wanderAround(position, radius) {
          if (position && radius)
            TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0);
          else
            TaskWanderStandard(this.ped.Handle, 0, 0);
        }
        warpIntoVehicle(vehicle, seat) {
          TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
        }
        warpOutOfVehicle(vehicle, flags) {
          TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags);
        }
        clearAll() {
          ClearPedTasks(this.ped.Handle);
        }
        clearAllImmediately() {
          ClearPedTasksImmediately(this.ped.Handle);
        }
        clearLookAt() {
          TaskClearLookAt(this.ped.Handle);
        }
        clearSecondary() {
          ClearPedSecondaryTask(this.ped.Handle);
        }
        clearAnimation(animDict, animName) {
          StopAnimTask(this.ped.Handle, animDict, animName, -4);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHash.js
  var WeaponComponentHash;
  var init_WeaponComponentHash = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHash.js"() {
      (function(WeaponComponentHash2) {
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_BASE"] = 4081463091] = "COMPONENT_KNUCKLE_VARMOD_BASE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_PIMP"] = 3323197061] = "COMPONENT_KNUCKLE_VARMOD_PIMP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_BALLAS"] = 4007263587] = "COMPONENT_KNUCKLE_VARMOD_BALLAS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_DOLLAR"] = 1351683121] = "COMPONENT_KNUCKLE_VARMOD_DOLLAR";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_DIAMOND"] = 2539772380] = "COMPONENT_KNUCKLE_VARMOD_DIAMOND";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_HATE"] = 2112683568] = "COMPONENT_KNUCKLE_VARMOD_HATE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_LOVE"] = 1062111910] = "COMPONENT_KNUCKLE_VARMOD_LOVE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_PLAYER"] = 146278587] = "COMPONENT_KNUCKLE_VARMOD_PLAYER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_KING"] = 3800804335] = "COMPONENT_KNUCKLE_VARMOD_KING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_VAGOS"] = 2062808965] = "COMPONENT_KNUCKLE_VARMOD_VAGOS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_BASE"] = 2436343040] = "COMPONENT_SWITCHBLADE_VARMOD_BASE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_VAR1"] = 1530822070] = "COMPONENT_SWITCHBLADE_VARMOD_VAR1";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_VAR2"] = 3885209186] = "COMPONENT_SWITCHBLADE_VARMOD_VAR2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_CLIP_01"] = 4275109233] = "COMPONENT_PISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_CLIP_02"] = 3978713628] = "COMPONENT_PISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH"] = 899381934] = "COMPONENT_AT_PI_FLSH";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_SUPP_02"] = 1709866683] = "COMPONENT_AT_PI_SUPP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_VARMOD_LUXE"] = 3610841222] = "COMPONENT_PISTOL_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_CLIP_01"] = 119648377] = "COMPONENT_COMBATPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_CLIP_02"] = 3598405421] = "COMPONENT_COMBATPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_SUPP"] = 3271853210] = "COMPONENT_AT_PI_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER"] = 3328527730] = "COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_CLIP_01"] = 834974250] = "COMPONENT_APPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_CLIP_02"] = 614078421] = "COMPONENT_APPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_VARMOD_LUXE"] = 2608252716] = "COMPONENT_APPISTOL_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_CLIP_01"] = 580369945] = "COMPONENT_PISTOL50_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_CLIP_02"] = 3654528146] = "COMPONENT_PISTOL50_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_SUPP_02"] = 2805810788] = "COMPONENT_AT_AR_SUPP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_VARMOD_LUXE"] = 2008591151] = "COMPONENT_PISTOL50_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_VARMOD_BOSS"] = 384708672] = "COMPONENT_REVOLVER_VARMOD_BOSS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_VARMOD_GOON"] = 2492708877] = "COMPONENT_REVOLVER_VARMOD_GOON";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_CLIP_01"] = 3917905123] = "COMPONENT_REVOLVER_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_CLIP_01"] = 4169150169] = "COMPONENT_SNSPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_CLIP_02"] = 2063610803] = "COMPONENT_SNSPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_VARMOD_LOWRIDER"] = 2150886575] = "COMPONENT_SNSPISTOL_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_CLIP_01"] = 222992026] = "COMPONENT_HEAVYPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_CLIP_02"] = 1694090795] = "COMPONENT_HEAVYPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_VARMOD_LUXE"] = 2053798779] = "COMPONENT_HEAVYPISTOL_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_01"] = 3122911422] = "COMPONENT_REVOLVER_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_TRACER"] = 3336103030] = "COMPONENT_REVOLVER_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY"] = 15712037] = "COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT"] = 284438159] = "COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_FMJ"] = 231258687] = "COMPONENT_REVOLVER_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SIGHTS"] = 1108334355] = "COMPONENT_AT_SIGHTS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_MK2"] = 77277509] = "COMPONENT_AT_SCOPE_MACRO_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP_03"] = 654802123] = "COMPONENT_AT_PI_COMP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO"] = 3225415071] = "COMPONENT_REVOLVER_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_02"] = 11918884] = "COMPONENT_REVOLVER_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_03"] = 176157112] = "COMPONENT_REVOLVER_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_04"] = 4074914441] = "COMPONENT_REVOLVER_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_05"] = 288456487] = "COMPONENT_REVOLVER_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_06"] = 398658626] = "COMPONENT_REVOLVER_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_07"] = 628697006] = "COMPONENT_REVOLVER_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_08"] = 925911836] = "COMPONENT_REVOLVER_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_09"] = 1222307441] = "COMPONENT_REVOLVER_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_10"] = 552442715] = "COMPONENT_REVOLVER_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_IND_01"] = 3646023783] = "COMPONENT_REVOLVER_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_01"] = 21392614] = "COMPONENT_SNSPISTOL_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_02"] = 3465283442] = "COMPONENT_SNSPISTOL_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_TRACER"] = 2418909806] = "COMPONENT_SNSPISTOL_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY"] = 3870121849] = "COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT"] = 2366665730] = "COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_FMJ"] = 3239176998] = "COMPONENT_SNSPISTOL_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH_03"] = 1246324211] = "COMPONENT_AT_PI_FLSH_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_RAIL_02"] = 1205768792] = "COMPONENT_AT_PI_RAIL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP_02"] = 2860680127] = "COMPONENT_AT_PI_COMP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO"] = 259780317] = "COMPONENT_SNSPISTOL_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_02"] = 2321624822] = "COMPONENT_SNSPISTOL_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_03"] = 1996130345] = "COMPONENT_SNSPISTOL_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_04"] = 2839309484] = "COMPONENT_SNSPISTOL_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_05"] = 2626704212] = "COMPONENT_SNSPISTOL_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_06"] = 1308243489] = "COMPONENT_SNSPISTOL_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_07"] = 1122574335] = "COMPONENT_SNSPISTOL_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_08"] = 1420313469] = "COMPONENT_SNSPISTOL_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_09"] = 109848390] = "COMPONENT_SNSPISTOL_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_10"] = 593945703] = "COMPONENT_SNSPISTOL_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_IND_01"] = 1142457062] = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE"] = 3891161322] = "COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE"] = 691432737] = "COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE"] = 987648331] = "COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE"] = 3863286761] = "COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE"] = 3447384986] = "COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE"] = 4202375078] = "COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE"] = 3800418970] = "COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE"] = 730876697] = "COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE"] = 583159708] = "COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE"] = 2366463693] = "COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE"] = 520557834] = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_01"] = 2499030370] = "COMPONENT_PISTOL_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_02"] = 1591132456] = "COMPONENT_PISTOL_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_TRACER"] = 634039983] = "COMPONENT_PISTOL_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_INCENDIARY"] = 733837882] = "COMPONENT_PISTOL_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT"] = 2248057097] = "COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_FMJ"] = 1329061674] = "COMPONENT_PISTOL_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_RAIL"] = 2396306288] = "COMPONENT_AT_PI_RAIL";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH_02"] = 1140676955] = "COMPONENT_AT_PI_FLSH_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP"] = 568543123] = "COMPONENT_AT_PI_COMP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO"] = 1550611612] = "COMPONENT_PISTOL_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_02"] = 368550800] = "COMPONENT_PISTOL_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_03"] = 2525897947] = "COMPONENT_PISTOL_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_04"] = 24902297] = "COMPONENT_PISTOL_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_05"] = 4066925682] = "COMPONENT_PISTOL_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_06"] = 3710005734] = "COMPONENT_PISTOL_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_07"] = 3141791350] = "COMPONENT_PISTOL_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_08"] = 1301287696] = "COMPONENT_PISTOL_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_09"] = 1597093459] = "COMPONENT_PISTOL_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_10"] = 1769871776] = "COMPONENT_PISTOL_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_IND_01"] = 2467084625] = "COMPONENT_PISTOL_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_SLIDE"] = 3036451504] = "COMPONENT_PISTOL_MK2_CAMO_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_02_SLIDE"] = 438243936] = "COMPONENT_PISTOL_MK2_CAMO_02_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_03_SLIDE"] = 3839888240] = "COMPONENT_PISTOL_MK2_CAMO_03_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_04_SLIDE"] = 740920107] = "COMPONENT_PISTOL_MK2_CAMO_04_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_05_SLIDE"] = 3753350949] = "COMPONENT_PISTOL_MK2_CAMO_05_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_06_SLIDE"] = 1809261196] = "COMPONENT_PISTOL_MK2_CAMO_06_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_07_SLIDE"] = 2648428428] = "COMPONENT_PISTOL_MK2_CAMO_07_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_08_SLIDE"] = 3004802348] = "COMPONENT_PISTOL_MK2_CAMO_08_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_09_SLIDE"] = 3330502162] = "COMPONENT_PISTOL_MK2_CAMO_09_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_10_SLIDE"] = 1135718771] = "COMPONENT_PISTOL_MK2_CAMO_10_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE"] = 1253942266] = "COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_VINTAGEPISTOL_CLIP_01"] = 1168357051] = "COMPONENT_VINTAGEPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_VINTAGEPISTOL_CLIP_02"] = 867832552] = "COMPONENT_VINTAGEPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_RAYPISTOL_VARMOD_XMAS18"] = 3621517063] = "COMPONENT_RAYPISTOL_VARMOD_XMAS18";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_CLIP_01"] = 1423184737] = "COMPONENT_CERAMICPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_CLIP_02"] = 2172153001] = "COMPONENT_CERAMICPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_SUPP"] = 2466764538] = "COMPONENT_CERAMICPISTOL_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_CLIP_01"] = 3410538224] = "COMPONENT_MICROSMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_CLIP_02"] = 283556395] = "COMPONENT_MICROSMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO"] = 2637152041] = "COMPONENT_AT_SCOPE_MACRO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_VARMOD_LUXE"] = 1215999497] = "COMPONENT_MICROSMG_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_01"] = 643254679] = "COMPONENT_SMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_02"] = 889808635] = "COMPONENT_SMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_03"] = 2043113590] = "COMPONENT_SMG_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_FLSH"] = 2076495324] = "COMPONENT_AT_AR_FLSH";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02"] = 1019656791] = "COMPONENT_AT_SCOPE_MACRO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_VARMOD_LUXE"] = 663170192] = "COMPONENT_SMG_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_CLIP_01"] = 2366834608] = "COMPONENT_ASSAULTSMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_CLIP_02"] = 3141985303] = "COMPONENT_ASSAULTSMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER"] = 663517359] = "COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MINISMG_CLIP_01"] = 2227745491] = "COMPONENT_MINISMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MINISMG_CLIP_02"] = 2474561719] = "COMPONENT_MINISMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_01"] = 1277460590] = "COMPONENT_SMG_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_02"] = 3112393518] = "COMPONENT_SMG_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_TRACER"] = 2146055916] = "COMPONENT_SMG_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_INCENDIARY"] = 3650233061] = "COMPONENT_SMG_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT"] = 974903034] = "COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_FMJ"] = 190476639] = "COMPONENT_SMG_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SIGHTS_SMG"] = 2681951826] = "COMPONENT_AT_SIGHTS_SMG";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2"] = 3842157419] = "COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_SMG_MK2"] = 1038927834] = "COMPONENT_AT_SCOPE_SMALL_SMG_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_01"] = 3113485012] = "COMPONENT_AT_MUZZLE_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_02"] = 3362234491] = "COMPONENT_AT_MUZZLE_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_03"] = 3725708239] = "COMPONENT_AT_MUZZLE_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_04"] = 3968886988] = "COMPONENT_AT_MUZZLE_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_05"] = 48731514] = "COMPONENT_AT_MUZZLE_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_06"] = 880736428] = "COMPONENT_AT_MUZZLE_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_07"] = 1303784126] = "COMPONENT_AT_MUZZLE_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SB_BARREL_01"] = 3641720545] = "COMPONENT_AT_SB_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SB_BARREL_02"] = 2774849419] = "COMPONENT_AT_SB_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO"] = 3298267239] = "COMPONENT_SMG_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_02"] = 940943685] = "COMPONENT_SMG_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_03"] = 1263226800] = "COMPONENT_SMG_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_04"] = 3966931456] = "COMPONENT_SMG_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_05"] = 1224100642] = "COMPONENT_SMG_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_06"] = 899228776] = "COMPONENT_SMG_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_07"] = 616006309] = "COMPONENT_SMG_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_08"] = 2733014785] = "COMPONENT_SMG_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_09"] = 572063080] = "COMPONENT_SMG_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_10"] = 1170588613] = "COMPONENT_SMG_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_IND_01"] = 966612367] = "COMPONENT_SMG_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_01"] = 1198425599] = "COMPONENT_MACHINEPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_02"] = 3106695545] = "COMPONENT_MACHINEPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_03"] = 2850671348] = "COMPONENT_MACHINEPISTOL_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_01"] = 1125642654] = "COMPONENT_COMBATPDW_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_02"] = 860508675] = "COMPONENT_COMBATPDW_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_03"] = 1857603803] = "COMPONENT_COMBATPDW_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_AFGRIP"] = 202788691] = "COMPONENT_AT_AR_AFGRIP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL"] = 2855028148] = "COMPONENT_AT_SCOPE_SMALL";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_SUPP"] = 3859329886] = "COMPONENT_AT_SR_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER"] = 2732039643] = "COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE"] = 2242268665] = "COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSHOTGUN_CLIP_01"] = 2498239431] = "COMPONENT_ASSAULTSHOTGUN_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSHOTGUN_CLIP_02"] = 2260565874] = "COMPONENT_ASSAULTSHOTGUN_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_SUPP"] = 2205435306] = "COMPONENT_AT_AR_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_01"] = 3449028929] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY"] = 2676628469] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING"] = 1315288101] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT"] = 3914869031] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE"] = 1004815965] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_MK2"] = 1060929921] = "COMPONENT_AT_SCOPE_SMALL_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_SUPP_03"] = 2890063729] = "COMPONENT_AT_SR_SUPP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_08"] = 1602080333] = "COMPONENT_AT_MUZZLE_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO"] = 3820854852] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_02"] = 387223451] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_03"] = 617753366] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_04"] = 4072589040] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_05"] = 8741501] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_06"] = 3693681093] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_07"] = 3783533691] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_08"] = 3639579478] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_09"] = 4012490698] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_10"] = 1739501925] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01"] = 1178671645] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_01"] = 844049759] = "COMPONENT_HEAVYSHOTGUN_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_02"] = 2535257853] = "COMPONENT_HEAVYSHOTGUN_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_03"] = 2294798931] = "COMPONENT_HEAVYSHOTGUN_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_01"] = 3193891350] = "COMPONENT_ASSAULTRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_02"] = 2971750299] = "COMPONENT_ASSAULTRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_03"] = 3689981245] = "COMPONENT_ASSAULTRIFLE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_VARMOD_LUXE"] = 1319990579] = "COMPONENT_ASSAULTRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_01"] = 2680042476] = "COMPONENT_CARBINERIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_02"] = 2433783441] = "COMPONENT_CARBINERIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_03"] = 3127044405] = "COMPONENT_CARBINERIFLE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MEDIUM"] = 2698550338] = "COMPONENT_AT_SCOPE_MEDIUM";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_VARMOD_LUXE"] = 3634075224] = "COMPONENT_CARBINERIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_CLIP_01"] = 4203716879] = "COMPONENT_ADVANCEDRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_CLIP_02"] = 2395064697] = "COMPONENT_ADVANCEDRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE"] = 930927479] = "COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_01"] = 3334989185] = "COMPONENT_SPECIALCARBINE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_02"] = 2089537806] = "COMPONENT_SPECIALCARBINE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_03"] = 1801039530] = "COMPONENT_SPECIALCARBINE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER"] = 1929467122] = "COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_CLIP_01"] = 3315675008] = "COMPONENT_BULLPUPRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_CLIP_02"] = 3009973007] = "COMPONENT_BULLPUPRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_VARMOD_LOW"] = 2824322168] = "COMPONENT_BULLPUPRIFLE_VARMOD_LOW";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_01"] = 25766362] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_02"] = 4021290536] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER"] = 2183159977] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY"] = 2845636954] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING"] = 4205311469] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ"] = 1130501904] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02_MK2"] = 3350057221] = "COMPONENT_AT_SCOPE_MACRO_02_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_BP_BARREL_01"] = 1704640795] = "COMPONENT_AT_BP_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_BP_BARREL_02"] = 1005743559] = "COMPONENT_AT_BP_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_AFGRIP_02"] = 2640679034] = "COMPONENT_AT_AR_AFGRIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO"] = 2923451831] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_02"] = 3104173419] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_03"] = 2797881576] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_04"] = 2491819116] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_05"] = 2318995410] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_06"] = 36929477] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_07"] = 4026522462] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_08"] = 3720197850] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_09"] = 3412267557] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_10"] = 2826785822] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01"] = 3320426066] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_01"] = 382112385] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_02"] = 3726614828] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER"] = 2271594122] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY"] = 3724612230] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING"] = 1362433589] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ"] = 1346235024] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MEDIUM_MK2"] = 3328927042] = "COMPONENT_AT_SCOPE_MEDIUM_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SC_BARREL_01"] = 3879097257] = "COMPONENT_AT_SC_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SC_BARREL_02"] = 4185880635] = "COMPONENT_AT_SC_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO"] = 3557537083] = "COMPONENT_SPECIALCARBINE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_02"] = 1125852043] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_03"] = 886015732] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_04"] = 3032680157] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_05"] = 3999758885] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_06"] = 3750812792] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_07"] = 172765678] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_08"] = 2312089847] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_09"] = 2072122460] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_10"] = 2308747125] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01"] = 1377355801] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_01"] = 2249208895] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_02"] = 3509242479] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER"] = 4012669121] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY"] = 4218476627] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING"] = 2816286296] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ"] = 1675665560] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_BARREL_01"] = 1134861606] = "COMPONENT_AT_AR_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_BARREL_02"] = 1447477866] = "COMPONENT_AT_AR_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO"] = 2434475183] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_02"] = 937772107] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_03"] = 1401650071] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_04"] = 628662130] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_05"] = 3309920045] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_06"] = 3482022833] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_07"] = 2847614993] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_08"] = 4234628436] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_09"] = 2088750491] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_10"] = 2781053842] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01"] = 3115408816] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_01"] = 1283078430] = "COMPONENT_CARBINERIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_02"] = 1574296533] = "COMPONENT_CARBINERIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER"] = 391640422] = "COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY"] = 1025884839] = "COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING"] = 626875735] = "COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ"] = 1141059345] = "COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_CR_BARREL_01"] = 2201368575] = "COMPONENT_AT_CR_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_CR_BARREL_02"] = 2335983627] = "COMPONENT_AT_CR_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO"] = 1272803094] = "COMPONENT_CARBINERIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_02"] = 1080719624] = "COMPONENT_CARBINERIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_03"] = 792221348] = "COMPONENT_CARBINERIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_04"] = 3842785869] = "COMPONENT_CARBINERIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_05"] = 3548192559] = "COMPONENT_CARBINERIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_06"] = 2250671235] = "COMPONENT_CARBINERIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_07"] = 4095795318] = "COMPONENT_CARBINERIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_08"] = 2866892280] = "COMPONENT_CARBINERIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_09"] = 2559813981] = "COMPONENT_CARBINERIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_10"] = 1796459838] = "COMPONENT_CARBINERIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01"] = 3663056191] = "COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_01"] = 1363085923] = "COMPONENT_COMPACTRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_02"] = 1509923832] = "COMPONENT_COMPACTRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_03"] = 3322377230] = "COMPONENT_COMPACTRIFLE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_CLIP_01"] = 759617595] = "COMPONENT_MILITARYRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_CLIP_02"] = 1749732930] = "COMPONENT_MILITARYRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_SIGHT_01"] = 1803744149] = "COMPONENT_MILITARYRIFLE_SIGHT_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_CLIP_01"] = 4097109892] = "COMPONENT_MG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_CLIP_02"] = 2182449991] = "COMPONENT_MG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_02"] = 1006677997] = "COMPONENT_AT_SCOPE_SMALL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_VARMOD_LOWRIDER"] = 3604658878] = "COMPONENT_MG_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_CLIP_01"] = 3791631178] = "COMPONENT_COMBATMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_CLIP_02"] = 3603274966] = "COMPONENT_COMBATMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_VARMOD_LOWRIDER"] = 2466172125] = "COMPONENT_COMBATMG_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_01"] = 1227564412] = "COMPONENT_COMBATMG_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_02"] = 400507625] = "COMPONENT_COMBATMG_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_TRACER"] = 4133787461] = "COMPONENT_COMBATMG_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY"] = 3274096058] = "COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING"] = 696788003] = "COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_FMJ"] = 1475288264] = "COMPONENT_COMBATMG_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MG_BARREL_01"] = 3276730932] = "COMPONENT_AT_MG_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MG_BARREL_02"] = 3051509595] = "COMPONENT_AT_MG_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO"] = 1249283253] = "COMPONENT_COMBATMG_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_02"] = 3437259709] = "COMPONENT_COMBATMG_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_03"] = 3197423398] = "COMPONENT_COMBATMG_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_04"] = 1980349969] = "COMPONENT_COMBATMG_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_05"] = 1219453777] = "COMPONENT_COMBATMG_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_06"] = 2441508106] = "COMPONENT_COMBATMG_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_07"] = 2220186280] = "COMPONENT_COMBATMG_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_08"] = 457967755] = "COMPONENT_COMBATMG_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_09"] = 235171324] = "COMPONENT_COMBATMG_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_10"] = 42685294] = "COMPONENT_COMBATMG_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_IND_01"] = 3607349581] = "COMPONENT_COMBATMG_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GUSENBERG_CLIP_01"] = 484812453] = "COMPONENT_GUSENBERG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GUSENBERG_CLIP_02"] = 3939025520] = "COMPONENT_GUSENBERG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNIPERRIFLE_CLIP_01"] = 2613461129] = "COMPONENT_SNIPERRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE"] = 3527687644] = "COMPONENT_AT_SCOPE_LARGE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MAX"] = 3159677559] = "COMPONENT_AT_SCOPE_MAX";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNIPERRIFLE_VARMOD_LUXE"] = 1077065191] = "COMPONENT_SNIPERRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_CLIP_01"] = 1198478068] = "COMPONENT_HEAVYSNIPER_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_01"] = 2497785294] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_02"] = 3872379306] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER"] = 3615105746] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY"] = 1842849902] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING"] = 4100968569] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ"] = 3779763923] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2"] = 1528590652] = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MRFL_BARREL_01"] = 941317513] = "COMPONENT_AT_MRFL_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MRFL_BARREL_02"] = 1748450780] = "COMPONENT_AT_MRFL_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO"] = 2425682848] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_02"] = 1931539634] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_03"] = 1624199183] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_04"] = 4268133183] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_05"] = 4084561241] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_06"] = 423313640] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_07"] = 276639596] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_08"] = 3303610433] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_09"] = 2612118995] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_10"] = 996213771] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01"] = 3080918746] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_01"] = 4196276776] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_02"] = 752418717] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY"] = 247526935] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING"] = 4164277972] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ"] = 1005144310] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE"] = 2313935527] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_MK2"] = 2193687427] = "COMPONENT_AT_SCOPE_LARGE_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_NV"] = 3061846192] = "COMPONENT_AT_SCOPE_NV";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_THERMAL"] = 776198721] = "COMPONENT_AT_SCOPE_THERMAL";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_09"] = 1764221345] = "COMPONENT_AT_MUZZLE_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_BARREL_01"] = 2425761975] = "COMPONENT_AT_SR_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_BARREL_02"] = 277524638] = "COMPONENT_AT_SR_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO"] = 4164123906] = "COMPONENT_HEAVYSNIPER_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_02"] = 3317620069] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_03"] = 3916506229] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_04"] = 329939175] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_05"] = 643374672] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_06"] = 807875052] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_07"] = 2893163128] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_08"] = 3198471901] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_09"] = 3447155842] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_10"] = 2881858759] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01"] = 1815270123] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_CLIP_01"] = 3627761985] = "COMPONENT_MARKSMANRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_CLIP_02"] = 3439143621] = "COMPONENT_MARKSMANRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM"] = 471997210] = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_VARMOD_LUXE"] = 371102273] = "COMPONENT_MARKSMANRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GRENADELAUNCHER_CLIP_01"] = 296639639] = "COMPONENT_GRENADELAUNCHER_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["Invalid"] = 4294967295] = "Invalid";
        WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleClip01"] = 4203716879] = "AdvancedRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleClip02"] = 2395064697] = "AdvancedRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleVarmodLuxe"] = 930927479] = "AdvancedRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["APPistolClip01"] = 834974250] = "APPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["APPistolClip02"] = 614078421] = "APPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["APPistolVarmodLuxe"] = 2608252716] = "APPistolVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip01"] = 3193891350] = "AssaultRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip02"] = 2971750299] = "AssaultRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip03"] = 3689981245] = "AssaultRifleClip03";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleVarmodLuxe"] = 1319990579] = "AssaultRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["AssaultSMGClip01"] = 2366834608] = "AssaultSMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["AssaultSMGClip02"] = 3141985303] = "AssaultSMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["AssaultSMGVarmodLowrider"] = 663517359] = "AssaultSMGVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["AssaultShotgunClip01"] = 2498239431] = "AssaultShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["AssaultShotgunClip02"] = 2260565874] = "AssaultShotgunClip02";
        WeaponComponentHash2[WeaponComponentHash2["AtArAfGrip"] = 202788691] = "AtArAfGrip";
        WeaponComponentHash2[WeaponComponentHash2["AtArFlsh"] = 2076495324] = "AtArFlsh";
        WeaponComponentHash2[WeaponComponentHash2["AtArSupp"] = 2205435306] = "AtArSupp";
        WeaponComponentHash2[WeaponComponentHash2["AtArSupp02"] = 2805810788] = "AtArSupp02";
        WeaponComponentHash2[WeaponComponentHash2["AtPiFlsh"] = 899381934] = "AtPiFlsh";
        WeaponComponentHash2[WeaponComponentHash2["AtPiSupp"] = 3271853210] = "AtPiSupp";
        WeaponComponentHash2[WeaponComponentHash2["AtPiSupp02"] = 1709866683] = "AtPiSupp02";
        WeaponComponentHash2[WeaponComponentHash2["AtRailCover01"] = 1967214384] = "AtRailCover01";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeLarge"] = 3527687644] = "AtScopeLarge";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeLargeFixedZoom"] = 471997210] = "AtScopeLargeFixedZoom";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMacro"] = 2637152041] = "AtScopeMacro";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMacro02"] = 1019656791] = "AtScopeMacro02";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMax"] = 3159677559] = "AtScopeMax";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMedium"] = 2698550338] = "AtScopeMedium";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeSmall"] = 2855028148] = "AtScopeSmall";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeSmall02"] = 1006677997] = "AtScopeSmall02";
        WeaponComponentHash2[WeaponComponentHash2["AtSrSupp"] = 3859329886] = "AtSrSupp";
        WeaponComponentHash2[WeaponComponentHash2["BullpupRifleClip01"] = 3315675008] = "BullpupRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["BullpupRifleClip02"] = 3009973007] = "BullpupRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["BullpupRifleVarmodLow"] = 2824322168] = "BullpupRifleVarmodLow";
        WeaponComponentHash2[WeaponComponentHash2["BullpupShotgunClip01"] = 3377353998] = "BullpupShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip01"] = 2680042476] = "CarbineRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip02"] = 2433783441] = "CarbineRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip03"] = 3127044405] = "CarbineRifleClip03";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleVarmodLuxe"] = 3634075224] = "CarbineRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGClip01"] = 3791631178] = "CombatMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGClip02"] = 3603274966] = "CombatMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGVarmodLowrider"] = 2466172125] = "CombatMGVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip01"] = 1125642654] = "CombatPDWClip01";
        WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip02"] = 860508675] = "CombatPDWClip02";
        WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip03"] = 1857603803] = "CombatPDWClip03";
        WeaponComponentHash2[WeaponComponentHash2["CombatPistolClip01"] = 119648377] = "CombatPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["CombatPistolClip02"] = 3598405421] = "CombatPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["CombatPistolVarmodLowrider"] = 3328527730] = "CombatPistolVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip01"] = 1363085923] = "CompactRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip02"] = 1509923832] = "CompactRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip03"] = 3322377230] = "CompactRifleClip03";
        WeaponComponentHash2[WeaponComponentHash2["DBShotgunClip01"] = 703231006] = "DBShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["FireworkClip01"] = 3840197261] = "FireworkClip01";
        WeaponComponentHash2[WeaponComponentHash2["FlareGunClip01"] = 2481569177] = "FlareGunClip01";
        WeaponComponentHash2[WeaponComponentHash2["FlashlightLight"] = 3719772431] = "FlashlightLight";
        WeaponComponentHash2[WeaponComponentHash2["GrenadeLauncherClip01"] = 296639639] = "GrenadeLauncherClip01";
        WeaponComponentHash2[WeaponComponentHash2["GusenbergClip01"] = 484812453] = "GusenbergClip01";
        WeaponComponentHash2[WeaponComponentHash2["GusenbergClip02"] = 3939025520] = "GusenbergClip02";
        WeaponComponentHash2[WeaponComponentHash2["HeavyPistolClip01"] = 222992026] = "HeavyPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["HeavyPistolClip02"] = 1694090795] = "HeavyPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["HeavyPistolVarmodLuxe"] = 2053798779] = "HeavyPistolVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip01"] = 844049759] = "HeavyShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip02"] = 2535257853] = "HeavyShotgunClip02";
        WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip03"] = 2294798931] = "HeavyShotgunClip03";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperClip01"] = 1198478068] = "HeavySniperClip01";
        WeaponComponentHash2[WeaponComponentHash2["HomingLauncherClip01"] = 4162006335] = "HomingLauncherClip01";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodBallas"] = 4007263587] = "KnuckleVarmodBallas";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodBase"] = 4081463091] = "KnuckleVarmodBase";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodDiamond"] = 2539772380] = "KnuckleVarmodDiamond";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodDollar"] = 1351683121] = "KnuckleVarmodDollar";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodHate"] = 2112683568] = "KnuckleVarmodHate";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodKing"] = 3800804335] = "KnuckleVarmodKing";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodLove"] = 1062111910] = "KnuckleVarmodLove";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodPimp"] = 3323197061] = "KnuckleVarmodPimp";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodPlayer"] = 146278587] = "KnuckleVarmodPlayer";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodVagos"] = 2062808965] = "KnuckleVarmodVagos";
        WeaponComponentHash2[WeaponComponentHash2["MGClip01"] = 4097109892] = "MGClip01";
        WeaponComponentHash2[WeaponComponentHash2["MGClip02"] = 2182449991] = "MGClip02";
        WeaponComponentHash2[WeaponComponentHash2["MGVarmodLowrider"] = 3604658878] = "MGVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip01"] = 1198425599] = "MachinePistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip02"] = 3106695545] = "MachinePistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip03"] = 2850671348] = "MachinePistolClip03";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanPistolClip01"] = 3416146413] = "MarksmanPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleClip01"] = 3627761985] = "MarksmanRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleClip02"] = 3439143621] = "MarksmanRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleVarmodLuxe"] = 371102273] = "MarksmanRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["MicroSMGClip01"] = 3410538224] = "MicroSMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["MicroSMGClip02"] = 283556395] = "MicroSMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["MicroSMGVarmodLuxe"] = 1215999497] = "MicroSMGVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["MinigunClip01"] = 3370020614] = "MinigunClip01";
        WeaponComponentHash2[WeaponComponentHash2["MusketClip01"] = 1322387263] = "MusketClip01";
        WeaponComponentHash2[WeaponComponentHash2["Pistol50Clip01"] = 580369945] = "Pistol50Clip01";
        WeaponComponentHash2[WeaponComponentHash2["Pistol50Clip02"] = 3654528146] = "Pistol50Clip02";
        WeaponComponentHash2[WeaponComponentHash2["Pistol50VarmodLuxe"] = 2008591151] = "Pistol50VarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["PistolClip01"] = 4275109233] = "PistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["PistolClip02"] = 3978713628] = "PistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["PistolVarmodLuxe"] = 3610841222] = "PistolVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["PoliceTorchFlashlight"] = 3315797997] = "PoliceTorchFlashlight";
        WeaponComponentHash2[WeaponComponentHash2["PumpShotgunClip01"] = 3513717816] = "PumpShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["PumpShotgunVarmodLowrider"] = 2732039643] = "PumpShotgunVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["RPGClip01"] = 1319465907] = "RPGClip01";
        WeaponComponentHash2[WeaponComponentHash2["RailgunClip01"] = 59044840] = "RailgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["RevolverClip01"] = 3917905123] = "RevolverClip01";
        WeaponComponentHash2[WeaponComponentHash2["RevolverVarmodBoss"] = 384708672] = "RevolverVarmodBoss";
        WeaponComponentHash2[WeaponComponentHash2["RevolverVarmodGoon"] = 2492708877] = "RevolverVarmodGoon";
        WeaponComponentHash2[WeaponComponentHash2["SMGClip01"] = 643254679] = "SMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["SMGClip02"] = 889808635] = "SMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["SMGClip03"] = 2043113590] = "SMGClip03";
        WeaponComponentHash2[WeaponComponentHash2["SMGVarmodLuxe"] = 663170192] = "SMGVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["SNSPistolClip01"] = 4169150169] = "SNSPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["SNSPistolClip02"] = 2063610803] = "SNSPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["SNSPistolVarmodLowrider"] = 2150886575] = "SNSPistolVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["SawnoffShotgunClip01"] = 3352699429] = "SawnoffShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["SawnoffShotgunVarmodLuxe"] = 2242268665] = "SawnoffShotgunVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["SniperRifleClip01"] = 2613461129] = "SniperRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["SniperRifleVarmodLuxe"] = 1077065191] = "SniperRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip01"] = 3334989185] = "SpecialCarbineClip01";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip02"] = 2089537806] = "SpecialCarbineClip02";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip03"] = 1801039530] = "SpecialCarbineClip03";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineVarmodLowrider"] = 1929467122] = "SpecialCarbineVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodBase"] = 2436343040] = "SwitchbladeVarmodBase";
        WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodVar1"] = 1530822070] = "SwitchbladeVarmodVar1";
        WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodVar2"] = 3885209186] = "SwitchbladeVarmodVar2";
        WeaponComponentHash2[WeaponComponentHash2["VintagePistolClip01"] = 1168357051] = "VintagePistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["VintagePistolClip02"] = 867832552] = "VintagePistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["AtSights"] = 1108334355] = "AtSights";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeSmallMk2"] = 1060929921] = "AtScopeSmallMk2";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMacroMk2"] = 77277509] = "AtScopeMacroMk2";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMediumMk2"] = 3328927042] = "AtScopeMediumMk2";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle1"] = 3113485012] = "AtMuzzle1";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle2"] = 3362234491] = "AtMuzzle2";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle3"] = 3725708239] = "AtMuzzle3";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle4"] = 3968886988] = "AtMuzzle4";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle5"] = 48731514] = "AtMuzzle5";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle6"] = 880736428] = "AtMuzzle6";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle7"] = 1303784126] = "AtMuzzle7";
        WeaponComponentHash2[WeaponComponentHash2["AtArAfGrip2"] = 2640679034] = "AtArAfGrip2";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipNormal"] = 2499030370] = "PistolMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipExtended"] = 1591132456] = "PistolMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipFMJ"] = 1329061674] = "PistolMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipHollowpoint"] = 2248057097] = "PistolMk2ClipHollowpoint";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipIncendiary"] = 733837882] = "PistolMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipTracer"] = 634039983] = "PistolMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2Scope"] = 2396306288] = "PistolMk2Scope";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2Flash"] = 1140676955] = "PistolMk2Flash";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2Compensator"] = 568543123] = "PistolMk2Compensator";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoDigital"] = 1550611612] = "PistolMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoBrushstroke"] = 368550800] = "PistolMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoWoodland"] = 2525897947] = "PistolMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSkull"] = 24902297] = "PistolMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSessanta"] = 4066925682] = "PistolMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoPerseus"] = 3710005734] = "PistolMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoLeopard"] = 3141791350] = "PistolMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoZebra"] = 1301287696] = "PistolMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoGeometric"] = 1597093459] = "PistolMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoBoom"] = 1769871776] = "PistolMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoPatriotic"] = 2467084625] = "PistolMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideDigital"] = 3036451504] = "PistolMk2CamoSlideDigital";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideBrushstroke"] = 438243936] = "PistolMk2CamoSlideBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideWoodland"] = 3839888240] = "PistolMk2CamoSlideWoodland";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideSkull"] = 740920107] = "PistolMk2CamoSlideSkull";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideSessanta"] = 3753350949] = "PistolMk2CamoSlideSessanta";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlidePerseus"] = 1809261196] = "PistolMk2CamoSlidePerseus";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideLeopard"] = 2648428428] = "PistolMk2CamoSlideLeopard";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideZebra"] = 3004802348] = "PistolMk2CamoSlideZebra";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideGeometric"] = 3330502162] = "PistolMk2CamoSlideGeometric";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideBoom"] = 1135718771] = "PistolMk2CamoSlideBoom";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlidePatriotic"] = 1253942266] = "PistolMk2CamoSlidePatriotic";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipNormal"] = 2249208895] = "AssaultRifleMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipExtended"] = 3509242479] = "AssaultRifleMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipArmorPiercing"] = 2816286296] = "AssaultRifleMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipFMJ"] = 1675665560] = "AssaultRifleMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipIncendiary"] = 4218476627] = "AssaultRifleMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipTracer"] = 4012669121] = "AssaultRifleMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2BarrelNormal"] = 1134861606] = "AssaultRifleMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2BarrelHeavy"] = 1447477866] = "AssaultRifleMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoDigital"] = 2434475183] = "AssaultRifleMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoBrushstroke"] = 937772107] = "AssaultRifleMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoWoodland"] = 1401650071] = "AssaultRifleMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoSkull"] = 628662130] = "AssaultRifleMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoSessanta"] = 3309920045] = "AssaultRifleMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoPerseus"] = 3482022833] = "AssaultRifleMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoLeopard"] = 2847614993] = "AssaultRifleMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoZebra"] = 4234628436] = "AssaultRifleMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoGeometric"] = 2088750491] = "AssaultRifleMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoBoom"] = 2781053842] = "AssaultRifleMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoPatriotic"] = 3115408816] = "AssaultRifleMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipNormal"] = 1283078430] = "CarbineRifleMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipExtended"] = 1574296533] = "CarbineRifleMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipArmorPiercing"] = 626875735] = "CarbineRifleMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipFMJ"] = 1141059345] = "CarbineRifleMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipIncendiary"] = 1025884839] = "CarbineRifleMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipTracer"] = 391640422] = "CarbineRifleMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2BarrelNormal"] = 2201368575] = "CarbineRifleMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2BarrelHeavy"] = 2335983627] = "CarbineRifleMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoDigital"] = 1272803094] = "CarbineRifleMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoBrushstroke"] = 1080719624] = "CarbineRifleMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoWoodland"] = 792221348] = "CarbineRifleMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoSkull"] = 3842785869] = "CarbineRifleMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoSessanta"] = 3548192559] = "CarbineRifleMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoPerseus"] = 2250671235] = "CarbineRifleMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoLeopard"] = 4095795318] = "CarbineRifleMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoZebra"] = 2866892280] = "CarbineRifleMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoGeometric"] = 2559813981] = "CarbineRifleMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoBoom"] = 1796459838] = "CarbineRifleMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoPatriotic"] = 3663056191] = "CarbineRifleMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipNormal"] = 1227564412] = "CombatMGMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipExtended"] = 400507625] = "CombatMGMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipArmorPiercing"] = 696788003] = "CombatMGMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipFMJ"] = 1475288264] = "CombatMGMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipIncendiary"] = 3274096058] = "CombatMGMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipTracer"] = 4133787461] = "CombatMGMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2BarrelNormal"] = 3276730932] = "CombatMGMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2BarrelHeavy"] = 3051509595] = "CombatMGMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoDigital"] = 1249283253] = "CombatMGMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoBrushstroke"] = 3437259709] = "CombatMGMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoWoodland"] = 3197423398] = "CombatMGMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoSkull"] = 1980349969] = "CombatMGMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoSessanta"] = 1219453777] = "CombatMGMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoPerseus"] = 2441508106] = "CombatMGMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoLeopard"] = 2220186280] = "CombatMGMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoZebra"] = 457967755] = "CombatMGMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoGeometric"] = 235171324] = "CombatMGMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoBoom"] = 42685294] = "CombatMGMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoPatriotic"] = 3607349581] = "CombatMGMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipNormal"] = 4196276776] = "HeavySniperMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipExtended"] = 752418717] = "HeavySniperMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipArmorPiercing"] = 4164277972] = "HeavySniperMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipExplosive"] = 2313935527] = "HeavySniperMk2ClipExplosive";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipFMJ"] = 1005144310] = "HeavySniperMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipIncendiary"] = 247526935] = "HeavySniperMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeLarge"] = 2193687427] = "HeavySniperMk2ScopeLarge";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeNightvision"] = 3061846192] = "HeavySniperMk2ScopeNightvision";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeThermal"] = 776198721] = "HeavySniperMk2ScopeThermal";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Suppressor"] = 2890063729] = "HeavySniperMk2Suppressor";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Muzzle8"] = 1602080333] = "HeavySniperMk2Muzzle8";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Muzzle9"] = 1764221345] = "HeavySniperMk2Muzzle9";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2BarrelNormal"] = 2425761975] = "HeavySniperMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2BarrelHeavy"] = 277524638] = "HeavySniperMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoDigital"] = 4164123906] = "HeavySniperMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoBrushstroke"] = 3317620069] = "HeavySniperMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoWoodland"] = 3916506229] = "HeavySniperMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoSkull"] = 329939175] = "HeavySniperMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoSessanta"] = 643374672] = "HeavySniperMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoPerseus"] = 807875052] = "HeavySniperMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoLeopard"] = 2893163128] = "HeavySniperMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoZebra"] = 3198471901] = "HeavySniperMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoGeometric"] = 3447155842] = "HeavySniperMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoBoom"] = 2881858759] = "HeavySniperMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoPatriotic"] = 1815270123] = "HeavySniperMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipNormal"] = 1277460590] = "SMGMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipExtended"] = 3112393518] = "SMGMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipFMJ"] = 190476639] = "SMGMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipHollowpoint"] = 974903034] = "SMGMk2ClipHollowpoint";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipIncendiary"] = 3650233061] = "SMGMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipTracer"] = 2146055916] = "SMGMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2Sights"] = 2681951826] = "SMGMk2Sights";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ScopeMacro"] = 3842157419] = "SMGMk2ScopeMacro";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ScopeSmall"] = 1038927834] = "SMGMk2ScopeSmall";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2BarrelNormal"] = 3641720545] = "SMGMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2BarrelHeavy"] = 2774849419] = "SMGMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoDigital"] = 3298267239] = "SMGMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoBrushstroke"] = 940943685] = "SMGMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoWoodland"] = 1263226800] = "SMGMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoSkull"] = 3966931456] = "SMGMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoSessanta"] = 1224100642] = "SMGMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoPerseus"] = 899228776] = "SMGMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoLeopard"] = 616006309] = "SMGMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoZebra"] = 2733014785] = "SMGMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoGeometric"] = 572063080] = "SMGMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoBoom"] = 1170588613] = "SMGMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoPatriotic"] = 966612367] = "SMGMk2CamoPatriotic";
      })(WeaponComponentHash || (WeaponComponentHash = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPoint.js
  var ComponentAttachmentPoint;
  var init_ComponentAttachmentPoint = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPoint.js"() {
      (function(ComponentAttachmentPoint2) {
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Invalid"] = 4294967295] = "Invalid";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Clip"] = 3723347892] = "Clip";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Clip2"] = 291640902] = "Clip2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["FlashLaser"] = 679107254] = "FlashLaser";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["FlashLaser2"] = 2722126698] = "FlashLaser2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Supp"] = 1863181664] = "Supp";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Supp2"] = 945598191] = "Supp2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["GunRoot"] = 962500902] = "GunRoot";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Scope"] = 196630833] = "Scope";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Scope2"] = 1684637069] = "Scope2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Grip"] = 2972950469] = "Grip";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Grip2"] = 3748215485] = "Grip2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["TorchBulb"] = 421673795] = "TorchBulb";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Rail"] = 2451679629] = "Rail";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Rail2"] = 497110245] = "Rail2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Barrel"] = 2982890265] = "Barrel";
      })(ComponentAttachmentPoint || (ComponentAttachmentPoint = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/DlcWeaponComponentData.js
  function initializeOnce() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      const strLength = 64;
      const weaponCount = GetNumDlcWeapons();
      for (let i = 0; i < weaponCount; i++) {
        const componentCount = GetNumDlcWeaponComponents(i);
        for (let j = 0; j < componentCount; j++) {
          const buffer = new Uint8Array(14 * intLength + 4 * strLength);
          Citizen.invokeNative("0x6CF598A2957C2BF8", i, j, buffer, Citizen.returnResultAnyway());
          const dlcWeaponComponentData = {
            attachBone: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
            bActiveByDefault: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
            unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
            componentHash: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
            unk2: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
            componentCost: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
            name: getStringFromUInt8Array(buffer, 12 * intLength, 12 * intLength + strLength),
            desc: getStringFromUInt8Array(buffer, 12 * intLength + strLength, 12 * intLength + 2 * strLength)
          };
          DlcWeaponComponentData.set(dlcWeaponComponentData.componentHash, dlcWeaponComponentData);
        }
      }
      isInitialized = true;
    };
  }
  var DlcWeaponComponentData;
  var init_DlcWeaponComponentData = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/DlcWeaponComponentData.js"() {
      init_utils();
      DlcWeaponComponentData = /* @__PURE__ */ new Map();
      initializeOnce()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/ComponentDisplayNameByHash.js
  function initializeOnce2() {
    let isInitialized = false;
    return function() {
      if (isInitialized) {
        return;
      }
      for (const [hash, data] of DlcWeaponComponentData) {
        ComponentDisplayNameByHash.set(hash, data.name);
      }
      isInitialized = true;
    };
  }
  var ComponentDisplayNameByHash;
  var init_ComponentDisplayNameByHash = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/ComponentDisplayNameByHash.js"() {
      init_WeaponComponentHash();
      init_DlcWeaponComponentData();
      ComponentDisplayNameByHash = /* @__PURE__ */ new Map([
        [WeaponComponentHash.Invalid, "WCT_INVALID"],
        [WeaponComponentHash.KnuckleVarmodBase, "WT_KNUCKLE"],
        [WeaponComponentHash.KnuckleVarmodPimp, "WCT_KNUCK_02"],
        [WeaponComponentHash.KnuckleVarmodBallas, "WCT_KNUCK_BG"],
        [WeaponComponentHash.KnuckleVarmodDollar, "WCT_KNUCK_DLR"],
        [WeaponComponentHash.KnuckleVarmodDiamond, "WCT_KNUCK_DMD"],
        [WeaponComponentHash.KnuckleVarmodHate, "WCT_KNUCK_HT"],
        [WeaponComponentHash.KnuckleVarmodLove, "WCT_KNUCK_LV"],
        [WeaponComponentHash.KnuckleVarmodPlayer, "WCT_KNUCK_PC"],
        [WeaponComponentHash.KnuckleVarmodKing, "WCT_KNUCK_SLG"],
        [WeaponComponentHash.KnuckleVarmodVagos, "WCT_KNUCK_VG"],
        [WeaponComponentHash.Invalid, "WCT_INVALID"],
        [WeaponComponentHash.AtRailCover01, "WCT_RAIL"],
        [WeaponComponentHash.AtArAfGrip, "WCT_GRIP"],
        [WeaponComponentHash.AtArAfGrip2, "WCT_GRIP"],
        [WeaponComponentHash.AtPiFlsh, "WCT_FLASH"],
        [WeaponComponentHash.AtArFlsh, "WCT_FLASH"],
        [WeaponComponentHash.PistolMk2Flash, "WCT_FLASH"],
        [WeaponComponentHash.AtScopeMacro, "WCT_SCOPE_MAC"],
        [WeaponComponentHash.AtScopeMacro02, "WCT_SCOPE_MAC"],
        [WeaponComponentHash.AtScopeSmall, "WCT_SCOPE_SML"],
        [WeaponComponentHash.AtScopeSmall02, "WCT_SCOPE_SML"],
        [WeaponComponentHash.AtScopeMedium, "WCT_SCOPE_MED"],
        [WeaponComponentHash.AtScopeLarge, "WCT_SCOPE_LRG"],
        [WeaponComponentHash.AtScopeMax, "WCT_SCOPE_MAX"],
        [WeaponComponentHash.AtPiSupp, "WCT_SUPP"],
        [WeaponComponentHash.AtArSupp, "WCT_SUPP"],
        [WeaponComponentHash.AtArSupp02, "WCT_SUPP"],
        [WeaponComponentHash.AtSrSupp, "WCT_SUPP"],
        [WeaponComponentHash.HeavySniperMk2Suppressor, "WCT_SUPP"],
        [WeaponComponentHash.AtPiSupp02, "WCT_SUPP"],
        [WeaponComponentHash.CombatPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.APPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MicroSMGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.CarbineRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AdvancedRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.CombatMGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultShotgunClip01, "WCT_CLIP1"],
        [WeaponComponentHash.SniperRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.HeavySniperClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultSMGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.Pistol50Clip01, "WCT_CLIP1"],
        [195735895, "WCT_CLIP1"],
        [1525977990, "WCT_CLIP1"],
        [3404452422, "WCT_CLIP1"],
        [4170538377, "WCT_CLIP1"],
        [WeaponComponentHash.SNSPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.VintagePistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.HeavyShotgunClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MarksmanRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.CombatPDWClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MarksmanPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MachinePistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.PistolMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultRifleMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.CarbineRifleMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.CombatMGMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.HeavySniperMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.SMGMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.PistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CombatPistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.APPistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MicroSMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.SMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CarbineRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.AdvancedRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CombatMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultShotgunClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MinigunClip01, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultSMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.Pistol50Clip02, "WCT_CLIP2"],
        [1824470811, "WCT_CLIP2"],
        [3787849722, "WCT_CLIP2"],
        [1048471894, "WCT_CLIP2"],
        [WeaponComponentHash.SNSPistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.VintagePistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.HeavyShotgunClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MarksmanRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CombatPDWClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MachinePistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.PistolMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultRifleMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.CarbineRifleMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.CombatMGMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.HeavySniperMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.SMGMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.AtScopeLargeFixedZoom, "WCT_SCOPE_LRG"],
        [WeaponComponentHash.AssaultRifleVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.CarbineRifleVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.PistolVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.SMGVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.MicroSMGVarmodLuxe, "WCT_VAR_GOLD"],
        [371102273, "WCT_VAR_GOLD"],
        [WeaponComponentHash.AssaultSMGVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.CombatPistolVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.MGVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.PumpShotgunVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.AdvancedRifleVarmodLuxe, "WCT_VAR_METAL"],
        [WeaponComponentHash.APPistolVarmodLuxe, "WCT_VAR_METAL"],
        [WeaponComponentHash.SawnoffShotgunVarmodLuxe, "WCT_VAR_METAL"],
        [WeaponComponentHash.BullpupRifleVarmodLow, "WCT_VAR_METAL"],
        [WeaponComponentHash.Pistol50VarmodLuxe, "WCT_VAR_SIL"],
        [WeaponComponentHash.HeavyPistolVarmodLuxe, "WCT_VAR_WOOD"],
        [WeaponComponentHash.SniperRifleVarmodLuxe, "WCT_VAR_WOOD"],
        [WeaponComponentHash.SNSPistolVarmodLowrider, "WCT_VAR_WOOD"],
        [WeaponComponentHash.CombatMGVarmodLowrider, "WCT_VAR_ETCHM"],
        [WeaponComponentHash.SpecialCarbineVarmodLowrider, "WCT_VAR_ETCHM"],
        [WeaponComponentHash.SwitchbladeVarmodBase, "WCT_SB_BASE"],
        [WeaponComponentHash.SwitchbladeVarmodVar1, "WCT_SB_VAR1"],
        [WeaponComponentHash.SwitchbladeVarmodVar2, "WCT_SB_VAR2"],
        [WeaponComponentHash.RevolverClip01, "WCT_CLIP1"],
        [WeaponComponentHash.RevolverVarmodBoss, "WCT_REV_VARB"],
        [WeaponComponentHash.RevolverVarmodGoon, "WCT_REV_VARG"],
        [WeaponComponentHash.SMGClip03, "WCT_CLIP_DRM"],
        [WeaponComponentHash.AssaultRifleClip03, "WCT_CLIP_DRM"],
        [WeaponComponentHash.HeavyShotgunClip03, "WCT_CLIP_DRM"],
        [WeaponComponentHash.CarbineRifleClip03, "WCT_CLIP_BOX"],
        [WeaponComponentHash.AssaultRifleMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.CarbineRifleMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.CombatMGMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.HeavySniperMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.PistolMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.AssaultRifleMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.CarbineRifleMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.CombatMGMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.HeavySniperMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.SMGMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.PistolMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.AssaultRifleMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.CarbineRifleMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.CombatMGMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.HeavySniperMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.SMGMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.PistolMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.AssaultRifleMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.CarbineRifleMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.CombatMGMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.SMGMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.HeavySniperMk2ClipExplosive, "WCT_CLIP_EX"],
        [WeaponComponentHash.PistolMk2ClipHollowpoint, "WCT_CLIP_HP"],
        [WeaponComponentHash.SMGMk2ClipHollowpoint, "WCT_CLIP_HP"],
        [WeaponComponentHash.AssaultRifleMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.CarbineRifleMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.CombatMGMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.SMGMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.AssaultRifleMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.CarbineRifleMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.CombatMGMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.SMGMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.PistolMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.AssaultRifleMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.CarbineRifleMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.CombatMGMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.HeavySniperMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.SMGMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.PistolMk2CamoSlideDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.PistolMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.AssaultRifleMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.CarbineRifleMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.CombatMGMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.HeavySniperMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.SMGMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.PistolMk2CamoSlideBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.PistolMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.AssaultRifleMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.CarbineRifleMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.CombatMGMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.HeavySniperMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.SMGMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.PistolMk2CamoSlideWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.PistolMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.AssaultRifleMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.CarbineRifleMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.CombatMGMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.HeavySniperMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.SMGMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.PistolMk2CamoSlideSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.PistolMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.AssaultRifleMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.CarbineRifleMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.CombatMGMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.HeavySniperMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.SMGMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.PistolMk2CamoSlideSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.PistolMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.AssaultRifleMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.CarbineRifleMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.CombatMGMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.HeavySniperMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.SMGMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.PistolMk2CamoSlidePerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.PistolMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.AssaultRifleMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.CarbineRifleMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.CombatMGMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.HeavySniperMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.SMGMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.PistolMk2CamoSlideLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.PistolMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.AssaultRifleMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.CarbineRifleMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.CombatMGMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.HeavySniperMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.SMGMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.PistolMk2CamoSlideZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.PistolMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.AssaultRifleMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.CarbineRifleMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.CombatMGMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.HeavySniperMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.SMGMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.PistolMk2CamoSlideGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.PistolMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.AssaultRifleMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.CarbineRifleMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.CombatMGMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.HeavySniperMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.SMGMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.PistolMk2CamoSlideBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.PistolMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.AssaultRifleMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.CarbineRifleMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.CombatMGMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.HeavySniperMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.SMGMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.PistolMk2CamoSlidePatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.AtSights, "WCT_HOLO"],
        [WeaponComponentHash.AtScopeSmallMk2, "WCT_SCOPE_SML2"],
        [WeaponComponentHash.AtScopeMacroMk2, "WCT_SCOPE_MAC2"],
        [WeaponComponentHash.AtScopeMediumMk2, "WCT_SCOPE_MED2"],
        [WeaponComponentHash.AtMuzzle1, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle2, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle3, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle4, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle5, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle7, "WCT_MUZZ"],
        [WeaponComponentHash.HeavySniperMk2Muzzle8, "WCT_MUZZ"],
        [WeaponComponentHash.HeavySniperMk2Muzzle9, "WCT_MUZZ"],
        [WeaponComponentHash.PistolMk2Scope, "WCT_SCOPE_PI"],
        [WeaponComponentHash.PistolMk2Compensator, "WCT_COMP"],
        [WeaponComponentHash.HeavySniperMk2ScopeLarge, "WCT_SCOPE_LRG2"]
      ]);
      initializeOnce2()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHashesByWeaponHash.js
  function initializeOnce3() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      const strLength = 64;
      const weaponCount = GetNumDlcWeapons();
      for (let i = 0; i < weaponCount; i++) {
        const weaponBuffer = new Uint8Array(14 * intLength + 4 * strLength);
        Citizen.invokeNative("0x79923CD21BECE14E", i, weaponBuffer, Citizen.returnResultAnyway());
        const weaponHash = getUInt32FromUint8Array(weaponBuffer, 2 * intLength, 3 * intLength);
        const componentCount = GetNumDlcWeaponComponents(i);
        const componentHashes = [];
        for (let j = 0; j < componentCount; j++) {
          const componentBuffer = new Uint8Array(14 * intLength + 4 * strLength);
          Citizen.invokeNative("0x6CF598A2957C2BF8", i, j, componentBuffer, Citizen.returnResultAnyway());
          const componentHash = getUInt32FromUint8Array(componentBuffer, 6 * intLength, 7 * intLength);
          componentHashes.push(componentHash);
        }
        WeaponComponentHashesByWeaponHash.set(weaponHash, componentHashes);
      }
      isInitialized = true;
    };
  }
  var WeaponComponentHashesByWeaponHash;
  var init_WeaponComponentHashesByWeaponHash = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHashesByWeaponHash.js"() {
      init_hashes();
      init_WeaponComponentHash();
      init_utils();
      WeaponComponentHashesByWeaponHash = /* @__PURE__ */ new Map([
        [
          WeaponHash.KnuckleDuster,
          [
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_BASE,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_PIMP,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_BALLAS,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_DOLLAR,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_DIAMOND,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_HATE,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_LOVE,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_PLAYER,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_KING,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_VAGOS
          ]
        ],
        [
          WeaponHash.SwitchBlade,
          [
            WeaponComponentHash.COMPONENT_SWITCHBLADE_VARMOD_BASE,
            WeaponComponentHash.COMPONENT_SWITCHBLADE_VARMOD_VAR1,
            WeaponComponentHash.COMPONENT_SWITCHBLADE_VARMOD_VAR2
          ]
        ],
        [
          WeaponHash.Pistol,
          [
            WeaponComponentHash.COMPONENT_PISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_PISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP_02,
            WeaponComponentHash.COMPONENT_PISTOL_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.CombatPistol,
          [
            WeaponComponentHash.COMPONENT_COMBATPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.APPistol,
          [
            WeaponComponentHash.COMPONENT_APPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_APPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_APPISTOL_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.Pistol50,
          [
            WeaponComponentHash.COMPONENT_PISTOL50_CLIP_01,
            WeaponComponentHash.COMPONENT_PISTOL50_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_PISTOL50_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.Revolver,
          [
            WeaponComponentHash.COMPONENT_REVOLVER_VARMOD_BOSS,
            WeaponComponentHash.COMPONENT_REVOLVER_VARMOD_GOON,
            WeaponComponentHash.COMPONENT_REVOLVER_CLIP_01
          ]
        ],
        [
          WeaponHash.SNSPistol,
          [
            WeaponComponentHash.COMPONENT_SNSPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_SNSPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.HeavyPistol,
          [
            WeaponComponentHash.COMPONENT_HEAVYPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_HEAVYPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_HEAVYPISTOL_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.RevolverMk2,
          [
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_COMP_03,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.SNSPistolMk2,
          [
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH_03,
            WeaponComponentHash.COMPONENT_AT_PI_RAIL_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_PI_COMP_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_IND_01,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE
          ]
        ],
        [
          WeaponHash.PistolMk2,
          [
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_PI_RAIL,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_PI_COMP,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_IND_01,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_02_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_03_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_04_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_05_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_06_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_07_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_08_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_09_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_10_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE
          ]
        ],
        [
          WeaponHash.VintagePistol,
          [
            WeaponComponentHash.COMPONENT_VINTAGEPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_VINTAGEPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP
          ]
        ],
        [
          WeaponHash.RayPistol,
          [WeaponComponentHash.COMPONENT_RAYPISTOL_VARMOD_XMAS18]
        ],
        [
          WeaponHash.CeramicPistol,
          [
            WeaponComponentHash.COMPONENT_CERAMICPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_CERAMICPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_CERAMICPISTOL_SUPP
          ]
        ],
        [
          WeaponHash.MicroSMG,
          [
            WeaponComponentHash.COMPONENT_MICROSMG_CLIP_01,
            WeaponComponentHash.COMPONENT_MICROSMG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_MICROSMG_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.SMG,
          [
            WeaponComponentHash.COMPONENT_SMG_CLIP_01,
            WeaponComponentHash.COMPONENT_SMG_CLIP_02,
            WeaponComponentHash.COMPONENT_SMG_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_SMG_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.AssaultSMG,
          [
            WeaponComponentHash.COMPONENT_ASSAULTSMG_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTSMG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.MiniSMG,
          [WeaponComponentHash.COMPONENT_MINISMG_CLIP_01, WeaponComponentHash.COMPONENT_MINISMG_CLIP_02]
        ],
        [
          WeaponHash.SMGMk2,
          [
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS_SMG,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_SMG_MK2,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_SB_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_SB_BARREL_02,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.MachinePistol,
          [
            WeaponComponentHash.COMPONENT_MACHINEPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_MACHINEPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_MACHINEPISTOL_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP
          ]
        ],
        [
          WeaponHash.CombatPDW,
          [
            WeaponComponentHash.COMPONENT_COMBATPDW_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATPDW_CLIP_02,
            WeaponComponentHash.COMPONENT_COMBATPDW_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL
          ]
        ],
        [
          WeaponHash.PumpShotgun,
          [
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SR_SUPP,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.SawnOffShotgun,
          [WeaponComponentHash.COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE]
        ],
        [
          WeaponHash.AssaultShotgun,
          [
            WeaponComponentHash.COMPONENT_ASSAULTSHOTGUN_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTSHOTGUN_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP
          ]
        ],
        [
          WeaponHash.BullpupShotgun,
          [
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP
          ]
        ],
        [
          WeaponHash.PumpShotgunMk2,
          [
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SR_SUPP_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_08,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.HeavyShotgun,
          [
            WeaponComponentHash.COMPONENT_HEAVYSHOTGUN_CLIP_01,
            WeaponComponentHash.COMPONENT_HEAVYSHOTGUN_CLIP_02,
            WeaponComponentHash.COMPONENT_HEAVYSHOTGUN_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP
          ]
        ],
        [
          WeaponHash.CombatShotgun,
          [WeaponComponentHash.COMPONENT_AT_AR_FLSH, WeaponComponentHash.COMPONENT_AT_AR_SUPP]
        ],
        [
          WeaponHash.AssaultRifle,
          [
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.CarbineRifle,
          [
            WeaponComponentHash.COMPONENT_CARBINERIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.AdvancedRifle,
          [
            WeaponComponentHash.COMPONENT_ADVANCEDRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_ADVANCEDRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.SpecialCarbine,
          [
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_CLIP_01,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_CLIP_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.BullpupRifle,
          [
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_VARMOD_LOW
          ]
        ],
        [
          WeaponHash.BullpupRifleMk2,
          [
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_02_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_MK2,
            WeaponComponentHash.COMPONENT_AT_BP_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_BP_BARREL_02,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.SpecialCarbineMk2,
          [
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_SC_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_SC_BARREL_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.AssaultRifleMk2,
          [
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_AR_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_AR_BARREL_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.CarbineRifleMk2,
          [
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_CR_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_CR_BARREL_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.CompactRifle,
          [
            WeaponComponentHash.COMPONENT_COMPACTRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_COMPACTRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_COMPACTRIFLE_CLIP_03
          ]
        ],
        [
          WeaponHash.MilitaryRifle,
          [
            WeaponComponentHash.COMPONENT_MILITARYRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_MILITARYRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_MILITARYRIFLE_SIGHT_01,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP
          ]
        ],
        [
          WeaponHash.MG,
          [
            WeaponComponentHash.COMPONENT_MG_CLIP_01,
            WeaponComponentHash.COMPONENT_MG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_02,
            WeaponComponentHash.COMPONENT_MG_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.CombatMG,
          [
            WeaponComponentHash.COMPONENT_COMBATMG_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATMG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_COMBATMG_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.CombatMGMk2,
          [
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_MG_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_MG_BARREL_02,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.Gusenberg,
          [
            WeaponComponentHash.COMPONENT_GUSENBERG_CLIP_01,
            WeaponComponentHash.COMPONENT_GUSENBERG_CLIP_02
          ]
        ],
        [
          WeaponHash.SniperRifle,
          [
            WeaponComponentHash.COMPONENT_SNIPERRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MAX,
            WeaponComponentHash.COMPONENT_SNIPERRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.HeavySniper,
          [
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_CLIP_01,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MAX
          ]
        ],
        [
          WeaponHash.MarksmanRifleMk2,
          [
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_MRFL_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_MRFL_BARREL_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.HeavySniperMk2,
          [
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MAX,
            WeaponComponentHash.COMPONENT_AT_SCOPE_NV,
            WeaponComponentHash.COMPONENT_AT_SCOPE_THERMAL,
            WeaponComponentHash.COMPONENT_AT_SR_SUPP_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_08,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_09,
            WeaponComponentHash.COMPONENT_AT_SR_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_SR_BARREL_02,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.MarksmanRifle,
          [
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.GrenadeLauncher,
          [
            WeaponComponentHash.COMPONENT_GRENADELAUNCHER_CLIP_01,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL
          ]
        ]
      ]);
      initializeOnce3()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPointByHash.js
  function initializeOnce4() {
    let isInitialized = false;
    return function() {
      if (isInitialized) {
        return;
      }
      for (const [hash, data] of DlcWeaponComponentData) {
        ComponentAttachmentPointByHash.set(hash, data.attachBone);
      }
      isInitialized = true;
    };
  }
  var ComponentAttachmentPointByHash;
  var init_ComponentAttachmentPointByHash = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPointByHash.js"() {
      init_WeaponComponentHash();
      init_ComponentAttachmentPoint();
      init_DlcWeaponComponentData();
      ComponentAttachmentPointByHash = /* @__PURE__ */ new Map([
        [WeaponComponentHash.PistolClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatPistolClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatPistolClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.APPistolClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.APPistolClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MicroSMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MicroSMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGClip03, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleClip03, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleClip03, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AdvancedRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AdvancedRifleClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PumpShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultShotgunClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SniperRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MinigunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultSMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultSMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.BullpupShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.Pistol50Clip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.Pistol50Clip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SawnoffShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipHollowpoint, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipExplosive, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipHollowpoint, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.PistolMk2Compensator, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.HeavySniperMk2Suppressor, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.HeavySniperMk2Muzzle8, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.HeavySniperMk2Muzzle9, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.PistolVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatPistolVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.APPistolVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.MicroSMGVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AdvancedRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.MGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PumpShotgunVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SniperRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultSMGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.Pistol50VarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SawnoffShotgunVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMacro02, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMedium, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeSmall, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeSmall02, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMedium, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeLarge, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeLarge, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeSmall, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.PistolMk2Scope, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.PistolMk2Flash, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.HeavySniperMk2ScopeLarge, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.HeavySniperMk2ScopeNightvision, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.HeavySniperMk2ScopeThermal, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.SMGMk2Sights, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.SMGMk2ScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.SMGMk2ScopeSmall, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.PistolMk2CamoSlideDigital, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideBrushstroke, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideWoodland, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideSkull, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideSessanta, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlidePerseus, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideLeopard, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideZebra, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideGeometric, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideBoom, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlidePatriotic, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMacroMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeSmallMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMacroMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.GrenadeLauncherClip01, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtRailCover01, ComponentAttachmentPoint.Rail],
        [WeaponComponentHash.AssaultRifleMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.AssaultRifleMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CarbineRifleMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CarbineRifleMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CombatMGMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CombatMGMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.HeavySniperMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.HeavySniperMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.SMGMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.SMGMk2BarrelHeavy, ComponentAttachmentPoint.Barrel]
      ]);
      initializeOnce4()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHudStats.js
  function initializeOnce5() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      for (const hash of enumValues(WeaponComponentHash)) {
        const buffer = new Uint8Array(40);
        Citizen.invokeNative("0xB3CAF387AE12E9F8", hash, buffer, Citizen.returnResultAnyway());
        const weaponComponentHudStat = {
          hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
        };
        WeaponComponentHudStats.set(hash, weaponComponentHudStat);
      }
      isInitialized = true;
    };
  }
  var WeaponComponentHudStats;
  var init_WeaponComponentHudStats = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHudStats.js"() {
      init_WeaponComponentHash();
      init_utils();
      init_utils();
      WeaponComponentHudStats = /* @__PURE__ */ new Map();
      initializeOnce5()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponent.js
  var WeaponComponent;
  var init_WeaponComponent = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponent.js"() {
      init_WeaponComponentHash();
      init_ComponentAttachmentPoint();
      init_Game();
      init_ComponentDisplayNameByHash();
      init_WeaponComponentHashesByWeaponHash();
      init_ComponentAttachmentPointByHash();
      init_WeaponComponentHudStats();
      WeaponComponent = class {
        constructor(owner, weapon, componentHash) {
          this.owner = owner;
          this.weapon = weapon;
          this.componentHash = componentHash;
        }
        get IsInvalid() {
          return this.componentHash === WeaponComponentHash.Invalid;
        }
        get ComponentHash() {
          return this.componentHash;
        }
        get Active() {
          return HasPedGotWeaponComponent(this.owner.Handle, this.weapon.Hash, this.componentHash);
        }
        set Active(value) {
          if (value) {
            GiveWeaponComponentToPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
          } else {
            RemoveWeaponComponentFromPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
          }
        }
        get DisplayName() {
          return WeaponComponent.getComponentDisplayNameFromHash(this.weapon.Hash, this.componentHash);
        }
        get LocalizedName() {
          return Game.getGXTEntry(this.DisplayName);
        }
        get AttachmentPoint() {
          return WeaponComponent.getAttachmentPoint(this.weapon.Hash, this.componentHash);
        }
        get HudStats() {
          return WeaponComponentHudStats.get(this.componentHash);
        }
        static getComponentDisplayNameFromHash(hash, componentHash) {
          if (!hash) {
            return "WCT_INVALID";
          }
          return ComponentDisplayNameByHash.get(componentHash) ?? "WCT_INVALID";
        }
        static getAttachmentPoint(weaponHash, componentHash) {
          const componentHashes = WeaponComponentHashesByWeaponHash.get(weaponHash);
          if (!componentHashes) {
            return ComponentAttachmentPoint.Invalid;
          }
          if (componentHashes.every((x) => x !== componentHash)) {
            return ComponentAttachmentPoint.Invalid;
          }
          return ComponentAttachmentPointByHash.get(componentHash) ?? ComponentAttachmentPoint.Invalid;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/InvalidWeaponComponent.js
  var InvalidWeaponComponent;
  var init_InvalidWeaponComponent = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/InvalidWeaponComponent.js"() {
      init_WeaponComponent();
      init_WeaponComponentHash();
      init_ComponentAttachmentPoint();
      init_Game();
      InvalidWeaponComponent = class extends WeaponComponent {
        constructor() {
          super(null, null, WeaponComponentHash.Invalid);
        }
        get Active() {
          return false;
        }
        set Active(value) {
        }
        get DisplayName() {
          return "WCT_INVALID";
        }
        get LocalizedName() {
          return Game.getGXTEntry(this.DisplayName);
        }
        static getAttachmentPoint(hash, componentHash) {
          return ComponentAttachmentPoint.Invalid;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentCollection.js
  var WeaponComponentCollection;
  var init_WeaponComponentCollection = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentCollection.js"() {
      init_WeaponComponent();
      init_InvalidWeaponComponent();
      init_WeaponComponentHashesByWeaponHash();
      init_ComponentAttachmentPoint();
      init_ComponentAttachmentPointByHash();
      WeaponComponentCollection = class {
        constructor(owner, weapon) {
          this.components = /* @__PURE__ */ new Map();
          this.invalidComponent = new InvalidWeaponComponent();
          this.owner = owner;
          this.weapon = weapon;
        }
        [Symbol.iterator]() {
          let pointer = 0;
          const components = Array.from(this.components.values());
          return {
            next() {
              if (pointer < components.length) {
                return { done: false, value: components[pointer++] };
              } else {
                return { done: true, value: null };
              }
            }
          };
        }
        get(componentHash) {
          if (this.AllWeaponComponentHashes.some((x) => x === componentHash)) {
            let component = this.components.get(componentHash);
            if (!component) {
              component = this.createAndAddComponent(componentHash);
            }
            return component;
          }
          return this.invalidComponent;
        }
        get Count() {
          return this.components.size;
        }
        getClipComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Clip, ComponentAttachmentPoint.Clip2);
        }
        get ClipVariationsCount() {
          return this.getComponentHashesByAttachmentPoints(ComponentAttachmentPoint.Clip, ComponentAttachmentPoint.Clip2).length;
        }
        getScopeComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Scope, ComponentAttachmentPoint.Scope2);
        }
        get ScopeVariationsCount() {
          return this.getComponentHashesByAttachmentPoints(ComponentAttachmentPoint.Scope, ComponentAttachmentPoint.Scope2).length;
        }
        getSuppressorComponent() {
          return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.Supp, ComponentAttachmentPoint.Supp2);
        }
        getFlashLightComponent() {
          return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.FlashLaser, ComponentAttachmentPoint.FlashLaser2);
        }
        getLuxuryFinishComponent() {
          return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.GunRoot);
        }
        getMk2CamoComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.GunRoot);
        }
        getMk2BarrelComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Barrel);
        }
        createAndAddComponent(hash) {
          const uintHash = hash >>> 0;
          console.log("createAndAdd", hash, uintHash);
          console.log("about to create", this.owner, this.weapon, uintHash);
          const component = new WeaponComponent(this.owner, this.weapon, uintHash);
          this.components.set(uintHash, component);
          return component;
        }
        get AllWeaponComponentHashes() {
          return WeaponComponentHashesByWeaponHash.get(this.weapon.Hash);
        }
        getComponentHashesByAttachmentPoints(...attachmentPoints) {
          return this.AllWeaponComponentHashes.filter((hash) => attachmentPoints.some((attachmentPoint) => ComponentAttachmentPointByHash.get(hash) === attachmentPoint));
        }
        getAnyComponentByAttachmentPoints(index, ...attachmentPoints) {
          const hashes = this.getComponentHashesByAttachmentPoints(...attachmentPoints);
          if (index === void 0) {
            return this.get(hashes[0]) ?? this.invalidComponent;
          }
          return 0 <= index && index <= hashes.length - 1 ? this.get(hashes[index]) : this.invalidComponent;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/DlcWeaponData.js
  function initializeOnce6() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      const strLength = 64;
      const weaponCount = GetNumDlcWeapons();
      for (let i = 0; i < weaponCount; i++) {
        const buffer = new Uint8Array(14 * intLength + 4 * strLength);
        Citizen.invokeNative("0x79923CD21BECE14E", i, buffer, Citizen.returnResultAnyway());
        const dlcWeaponData = {
          validCheck: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          weaponHash: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          weaponCost: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          ammoCost: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
          ammoType: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
          defaultClipSize: getUInt32FromUint8Array(buffer, 12 * intLength, 13 * intLength),
          name: getStringFromUInt8Array(buffer, 14 * intLength, 14 * intLength + strLength),
          desc: getStringFromUInt8Array(buffer, 14 * intLength + strLength, 14 * intLength + 2 * strLength),
          simpleDesc: getStringFromUInt8Array(buffer, 14 * intLength + 2 * strLength, 14 * intLength + 3 * strLength),
          upperCaseName: getStringFromUInt8Array(buffer, 14 * intLength + 3 * strLength, 14 * intLength + 4 * strLength)
        };
        DlcWeaponData.set(dlcWeaponData.weaponHash, dlcWeaponData);
      }
      isInitialized = true;
    };
  }
  var DlcWeaponData;
  var init_DlcWeaponData = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/DlcWeaponData.js"() {
      init_utils();
      init_utils();
      DlcWeaponData = /* @__PURE__ */ new Map();
      initializeOnce6()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/WeaponDisplayNameByHash.js
  function initializeOnce7() {
    let isInitialized = false;
    return function() {
      if (isInitialized) {
        return;
      }
      for (const [hash, data] of DlcWeaponData) {
        WeaponDisplayNameByHash.set(hash, data.name);
      }
      isInitialized = true;
    };
  }
  var WeaponDisplayNameByHash;
  var init_WeaponDisplayNameByHash = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/WeaponDisplayNameByHash.js"() {
      init_DlcWeaponData();
      init_hashes();
      WeaponDisplayNameByHash = /* @__PURE__ */ new Map([
        [WeaponHash.Pistol, "WT_PIST"],
        [WeaponHash.CombatPistol, "WT_PIST_CBT"],
        [WeaponHash.APPistol, "WT_PIST_AP"],
        [WeaponHash.SMG, "WT_SMG"],
        [WeaponHash.MicroSMG, "WT_SMG_MCR"],
        [WeaponHash.AssaultRifle, "WT_RIFLE_ASL"],
        [WeaponHash.CarbineRifle, "WT_RIFLE_CBN"],
        [WeaponHash.AdvancedRifle, "WT_RIFLE_ADV"],
        [WeaponHash.MG, "WT_MG"],
        [WeaponHash.CombatMG, "WT_MG_CBT"],
        [WeaponHash.PumpShotgun, "WT_SG_PMP"],
        [WeaponHash.SawnOffShotgun, "WT_SG_SOF"],
        [WeaponHash.AssaultShotgun, "WT_SG_ASL"],
        [WeaponHash.HeavySniper, "WT_SNIP_HVY"],
        [WeaponHash.SniperRifle, "WT_SNIP_RIF"],
        [WeaponHash.GrenadeLauncher, "WT_GL"],
        [WeaponHash.RPG, "WT_RPG"],
        [WeaponHash.Minigun, "WT_MINIGUN"],
        [WeaponHash.AssaultSMG, "WT_SMG_ASL"],
        [WeaponHash.BullpupShotgun, "WT_SG_BLP"],
        [WeaponHash.Pistol50, "WT_PIST_50"],
        [WeaponHash.Bottle, "WT_BOTTLE"],
        [WeaponHash.Gusenberg, "WT_GUSENBERG"],
        [WeaponHash.SNSPistol, "WT_SNSPISTOL"],
        [WeaponHash.VintagePistol, "TT_VPISTOL"],
        [WeaponHash.Dagger, "WT_DAGGER"],
        [WeaponHash.FlareGun, "WT_FLAREGUN"],
        [WeaponHash.Musket, "WT_MUSKET"],
        [WeaponHash.Firework, "WT_FWRKLNCHR"],
        [WeaponHash.MarksmanRifle, "WT_HMKRIFLE"],
        [WeaponHash.HeavyShotgun, "WT_HVYSHOT"],
        [WeaponHash.ProximityMine, "WT_PRXMINE"],
        [WeaponHash.HomingLauncher, "WT_HOMLNCH"],
        [WeaponHash.CombatPDW, "WT_COMBATPDW"],
        [WeaponHash.KnuckleDuster, "WT_KNUCKLE"],
        [WeaponHash.MarksmanPistol, "WT_MKPISTOL"],
        [WeaponHash.Machete, "WT_MACHETE"],
        [WeaponHash.MachinePistol, "WT_MCHPIST"],
        [WeaponHash.Flashlight, "WT_FLASHLIGHT"],
        [WeaponHash.DoubleBarrelShotgun, "WT_DBSHGN"],
        [WeaponHash.CompactRifle, "WT_CMPRIFLE"],
        [WeaponHash.SwitchBlade, "WT_SWBLADE"],
        [WeaponHash.Revolver, "WT_REVOLVER"],
        [WeaponHash.PistolMk2, "WT_PIST2"],
        [WeaponHash.AssaultRifleMk2, "WT_RIFLE_ASL2"],
        [WeaponHash.CarbineRifleMk2, "WT_RIFLE_CBN2"],
        [WeaponHash.CombatMGMk2, "WT_MG_CBT2"],
        [WeaponHash.HeavySniperMk2, "WT_SNIP_HVY2"],
        [WeaponHash.SMGMk2, "WT_SMG2"]
      ]);
      initializeOnce7()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/WeaponHudStats.js
  function initializeOnce8() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      for (const hash of enumValues(WeaponHash)) {
        const buffer = new Uint8Array(40);
        Citizen.invokeNative("0xD92C739EE34C9EBA", hash, buffer, Citizen.returnResultAnyway());
        const weaponHudStats = {
          hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
        };
        WeaponHudStats.set(hash, weaponHudStats);
      }
      isInitialized = true;
    };
  }
  var WeaponHudStats;
  var init_WeaponHudStats = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/WeaponHudStats.js"() {
      init_utils();
      init_hashes();
      init_utils();
      WeaponHudStats = /* @__PURE__ */ new Map();
      initializeOnce8()();
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/Mk2WeaponHash.js
  var Mk2WeaponHash;
  var init_Mk2WeaponHash = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/Mk2WeaponHash.js"() {
      (function(Mk2WeaponHash2) {
        Mk2WeaponHash2[Mk2WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["SNSPistolMk2"] = 2285322324] = "SNSPistolMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["RevolverMk2"] = 3415619887] = "RevolverMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["PumpShotgunMk2"] = 1432025498] = "PumpShotgunMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["SpecialCarbineMk2"] = 2526821735] = "SpecialCarbineMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["BullpupRifleMk2"] = 2228681469] = "BullpupRifleMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["MarksmanRifleMk2"] = 1785463520] = "MarksmanRifleMk2";
      })(Mk2WeaponHash || (Mk2WeaponHash = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/Weapon.js
  var Weapon;
  var init_Weapon = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/Weapon.js"() {
      init_WeaponComponentCollection();
      init_hashes();
      init_WeaponDisplayNameByHash();
      init_Game();
      init_Model();
      init_WeaponHudStats();
      init_utils();
      init_Mk2WeaponHash();
      init_WeaponComponentHashesByWeaponHash();
      Weapon = class {
        constructor(owner, hash) {
          this.owner = owner;
          this.hash = hash;
          this.components = new WeaponComponentCollection(this.owner, this);
        }
        get Components() {
          return this.components;
        }
        get Hash() {
          return this.hash;
        }
        get IsUnarmed() {
          return this.hash === WeaponHash.Unarmed;
        }
        get IsPresent() {
          if (this.IsUnarmed) {
            return true;
          }
          return HasPedGotWeapon(this.owner.Handle, this.hash, false);
        }
        get DisplayName() {
          return Weapon.getDisplayNameFromHash(this.hash) ?? "WCT_INVALID";
        }
        get LocalizedName() {
          return Game.getGXTEntry(this.DisplayName);
        }
        get Model() {
          return new Model(GetWeapontypeModel(this.hash));
        }
        get Tint() {
          return GetPedWeaponTintIndex(this.owner.Handle, this.hash);
        }
        set Tint(tint) {
          SetPedWeaponTintIndex(this.owner.Handle, this.hash, tint);
        }
        get Group() {
          return GetWeapontypeGroup(this.hash);
        }
        get AmmoType() {
          return GetPedAmmoTypeFromWeapon(this.owner.Handle, this.hash);
        }
        get Ammo() {
          if (this.IsUnarmed) {
            return 1;
          }
          if (!this.IsPresent) {
            return GetPedAmmoByType(this.owner.Handle, this.AmmoType);
          }
          return GetAmmoInPedWeapon(this.owner.Handle, this.hash);
        }
        set Ammo(count) {
          if (this.IsUnarmed) {
            return;
          }
          if (this.IsPresent) {
            SetPedAmmo(this.owner.Handle, this.hash, count);
          } else {
            GiveWeaponToPed(this.owner.Handle, this.hash, count, false, true);
          }
        }
        get MaxAmmo() {
          if (this.IsUnarmed) {
            return 1;
          }
          const amount = Citizen.invokeNative("0xDC16122C7A20C933", this.owner.Handle, this.hash, Citizen.pointerValueInt(), Citizen.resultAsInteger());
          return amount;
        }
        get MaxAmmoInClip() {
          if (this.IsUnarmed) {
            return 1;
          }
          if (!this.IsPresent) {
            return 0;
          }
          return GetMaxAmmoInClip(this.owner.Handle, this.hash, true);
        }
        get DefaultClipSize() {
          return GetWeaponClipSize(this.hash);
        }
        set InfiniteAmmo(toggle) {
          if (this.IsUnarmed) {
            return;
          }
          SetPedInfiniteAmmo(this.owner.Handle, toggle, this.hash);
        }
        set InfiniteAmmoClip(toggle) {
          SetPedInfiniteAmmoClip(this.owner.Handle, toggle);
        }
        get CanUseOnParachute() {
          return CanUseWeaponOnParachute(this.hash);
        }
        get IsMk2() {
          return Array.from(enumValues(Mk2WeaponHash)).some((x) => x === this.hash);
        }
        setLivery(liveryId, colorId) {
          if (!this.IsMk2) {
            console.log(`[ERROR]${this.setLivery.name} failed. Reason: non-Mk2 weapon`);
            return;
          }
          const component = this.Components.getMk2CamoComponent(liveryId);
          if (component.IsInvalid) {
            console.log(`[ERROR]${this.setLivery.name} failed. Reason: invalid liveryId/Component`);
            return;
          }
          component.Active = true;
          SetPedWeaponLiveryColor(this.owner.Handle, this.hash, component.ComponentHash, colorId);
        }
        get HudStats() {
          return WeaponHudStats.get(this.hash);
        }
        static getDisplayNameFromHash(hash) {
          if (!hash) {
            return "WT_INVALID";
          }
          return WeaponDisplayNameByHash.get(hash) ?? "WCT_INVALID";
        }
        static getWeaponComponentHashes(hash) {
          const hashes = WeaponComponentHashesByWeaponHash.get(hash);
          if (!hashes) {
            return [];
          }
          return [...hashes];
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/WeaponCollection.js
  var WeaponCollection;
  var init_WeaponCollection = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/WeaponCollection.js"() {
      init_Weapon();
      init_models();
      WeaponCollection = class {
        constructor(owner) {
          this.weapons = /* @__PURE__ */ new Map();
          this.owner = owner;
        }
        [Symbol.iterator]() {
          let pointer = 0;
          const weapons = Array.from(this.weapons.values());
          return {
            next() {
              if (pointer < weapons.length) {
                return { done: false, value: weapons[pointer++] };
              } else {
                return { done: true, value: null };
              }
            }
          };
        }
        get(hash) {
          let weapon = this.weapons.get(hash);
          if (!weapon) {
            if (!this.hasWeapon(hash)) {
              return null;
            }
            weapon = this.createAndAddWeapon(hash);
          }
          return weapon;
        }
        get Current() {
          const [, hash] = GetCurrentPedWeapon(this.owner.Handle, true);
          if (this.weapons.has(hash)) {
            return this.weapons.get(hash);
          } else {
            return this.createAndAddWeapon(hash);
          }
        }
        get CurrentWeaponObject() {
          if (this.Current.IsUnarmed) {
            return null;
          }
          return new Prop(GetCurrentPedWeaponEntityIndex(this.owner.Handle));
        }
        get BestWeapon() {
          const hash = GetBestPedWeapon(this.owner.Handle, false);
          if (this.weapons.has(hash)) {
            return this.weapons.get(hash);
          } else {
            return this.createAndAddWeapon(hash);
          }
        }
        hasWeapon(hash) {
          return HasPedGotWeapon(this.owner.Handle, hash, false);
        }
        isWeaponValid(hash) {
          return IsWeaponValid(hash);
        }
        give(hash, ammoCount, equipNow, isAmmoLoaded) {
          let weapon = this.weapons.get(hash);
          if (!weapon) {
            weapon = this.createAndAddWeapon(hash);
          }
          if (weapon.IsPresent) {
            this.select(weapon);
          } else {
            GiveWeaponToPed(this.owner.Handle, weapon.Hash, ammoCount, equipNow, isAmmoLoaded);
          }
          return weapon;
        }
        select(weapon) {
          if (weapon instanceof Weapon) {
            if (!weapon.IsPresent) {
              return false;
            }
            SetCurrentPedWeapon(this.owner.Handle, weapon.Hash, true);
            return true;
          } else {
            if (!this.hasWeapon(weapon)) {
              return false;
            }
            SetCurrentPedWeapon(this.owner.Handle, weapon, true);
            return true;
          }
        }
        remove(weapon) {
          if (weapon instanceof Weapon) {
            if (this.weapons.has(weapon.Hash)) {
              this.weapons.delete(weapon.Hash);
            }
            this.remove(weapon.Hash);
          } else {
            RemoveWeaponFromPed(this.owner.Handle, weapon);
          }
        }
        removeAll() {
          RemoveAllPedWeapons(this.owner.Handle, true);
          this.weapons.clear();
        }
        drop() {
          SetPedDropsWeapon(this.owner.Handle);
        }
        createAndAddWeapon(hash) {
          const uintHash = hash >>> 0;
          const weapon = new Weapon(this.owner, uintHash);
          this.weapons.set(uintHash, weapon);
          return weapon;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/Ped.js
  var Ped;
  var init_Ped = __esm({
    "node_modules/@nativewrappers/client/lib/models/Ped.js"() {
      init_lib();
      init_enums();
      init_Tasks();
      init_models();
      init_WeaponCollection();
      Ped = class extends Entity2 {
        constructor(handle) {
          super(handle);
          this.speechModifierNames = [
            "SPEECH_PARAMS_STANDARD",
            "SPEECH_PARAMS_ALLOW_REPEAT",
            "SPEECH_PARAMS_BEAT",
            "SPEECH_PARAMS_FORCE",
            "SPEECH_PARAMS_FORCE_FRONTEND",
            "SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND",
            "SPEECH_PARAMS_FORCE_NORMAL",
            "SPEECH_PARAMS_FORCE_NORMAL_CLEAR",
            "SPEECH_PARAMS_FORCE_NORMAL_CRITICAL",
            "SPEECH_PARAMS_FORCE_SHOUTED",
            "SPEECH_PARAMS_FORCE_SHOUTED_CLEAR",
            "SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY",
            "SPEECH_PARAMS_MEGAPHONE",
            "SPEECH_PARAMS_HELI",
            "SPEECH_PARAMS_FORCE_MEGAPHONE",
            "SPEECH_PARAMS_FORCE_HELI",
            "SPEECH_PARAMS_INTERRUPT",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_INTERRUPT_NO_FORCE",
            "SPEECH_PARAMS_INTERRUPT_FRONTEND",
            "SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND",
            "SPEECH_PARAMS_ADD_BLIP",
            "SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT",
            "SPEECH_PARAMS_ADD_BLIP_FORCE",
            "SPEECH_PARAMS_ADD_BLIP_SHOUTED",
            "SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE",
            "SPEECH_PARAMS_ADD_BLIP_INTERRUPT",
            "SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_SHOUTED",
            "SPEECH_PARAMS_SHOUTED_CLEAR",
            "SPEECH_PARAMS_SHOUTED_CRITICAL"
          ];
        }
        static exists(ped) {
          return typeof ped !== "undefined" && ped.exists();
        }
        get Player() {
          return new Player2(NetworkGetPlayerIndexFromPed(this.handle));
        }
        get Money() {
          return GetPedMoney(this.handle);
        }
        set Money(amount) {
          SetPedMoney(this.handle, amount);
        }
        get Gender() {
          return IsPedMale(this.handle) ? Gender.Male : Gender.Female;
        }
        get Armor() {
          return GetPedArmour(this.handle);
        }
        set Armor(amount) {
          if (amount > 100)
            amount = 100;
          SetPedArmour(this.handle, amount);
        }
        get Accuracy() {
          return GetPedAccuracy(this.handle);
        }
        set Accuracy(accuracy) {
          if (accuracy > 100)
            accuracy = 100;
          SetPedAccuracy(this.handle, accuracy);
        }
        get Health() {
          return super.Health - 100;
        }
        set Health(amount) {
          super.Health = amount + 100;
        }
        get MaxHealth() {
          return super.MaxHealth - 100;
        }
        set MaxHealth(amount) {
          super.MaxHealth = amount + 100;
        }
        set Sweat(value) {
          SetPedSweat(this.handle, value);
        }
        set WetnessHeight(value) {
          if (value === 0) {
            ClearPedWetness(this.Handle);
          } else {
            SetPedWetnessHeight(this.handle, value);
          }
        }
        set Voice(value) {
          SetAmbientVoiceName(this.handle, value);
        }
        set ShootRate(value) {
          if (value > 1e3)
            value = 1e3;
          SetPedShootRate(this.handle, value);
        }
        get WasKilledByStealth() {
          return WasPedKilledByStealth(this.handle);
        }
        get WasKilledByTakedown() {
          return WasPedKilledByTakedown(this.handle);
        }
        get SeatIndex() {
          if (!this.CurrentVehicle)
            return VehicleSeat.None;
          const numberOfSeats = GetVehicleModelNumberOfSeats(this.CurrentVehicle.Model.Hash);
          for (let seat = -1; seat < numberOfSeats; seat++) {
            if (this.CurrentVehicle.getPedOnSeat(seat).Handle == this.handle) {
              return seat;
            }
          }
          return VehicleSeat.None;
        }
        get CurrentVehicle() {
          const veh = new Vehicle(GetVehiclePedIsIn(this.handle, false));
          return veh.exists() ? veh : null;
        }
        get LastVehicle() {
          const veh = new Vehicle(GetVehiclePedIsIn(this.handle, true));
          return veh.exists() ? veh : null;
        }
        get VehicleTryingToEnter() {
          const veh = new Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
          return veh.exists() ? veh : null;
        }
        get IsJumpingOutOfVehicle() {
          return IsPedJumpingOutOfVehicle(this.handle);
        }
        set StaysInVehicleWhenJacked(value) {
          SetPedStayInVehicleWhenJacked(this.handle, value);
        }
        set MaxDrivingSpeed(value) {
          SetDriveTaskMaxCruiseSpeed(this.handle, value);
        }
        get IsHuman() {
          return IsPedHuman(this.handle);
        }
        set IsEnemy(value) {
          SetPedAsEnemy(this.handle, value);
        }
        set IsPriorityTargetForEnemies(value) {
          SetEntityIsTargetPriority(this.handle, value, 0);
        }
        get IsPlayer() {
          return IsPedAPlayer(this.handle);
        }
        get IsCuffed() {
          return IsPedCuffed(this.handle);
        }
        get IsWearingHelmet() {
          return IsPedWearingHelmet(this.handle);
        }
        get IsRagdoll() {
          return IsPedRagdoll(this.handle);
        }
        get IsIdle() {
          return !this.IsInjured && !this.IsRagdoll && !this.IsInAir && !this.IsOnFire && !this.IsDucking && !this.IsGettingIntoAVehicle && !this.IsInCombat && !this.IsInMeleeCombat && (!this.isInAnyVehicle() || this.isSittingInAnyVehicle());
        }
        get IsProne() {
          return IsPedProne(this.handle);
        }
        set IsDucking(value) {
          SetPedDucking(this.handle, value);
        }
        get IsDucking() {
          return IsPedDucking(this.handle);
        }
        get IsGettingUp() {
          return IsPedGettingUp(this.handle);
        }
        get IsClimbing() {
          return IsPedClimbing(this.handle);
        }
        get IsJumping() {
          return IsPedJumping(this.handle);
        }
        get IsFalling() {
          return IsPedFalling(this.handle);
        }
        get IsStopped() {
          return IsPedStopped(this.handle);
        }
        get IsWalking() {
          return IsPedWalking(this.handle);
        }
        get IsRunning() {
          return IsPedRunning(this.handle);
        }
        get IsSprinting() {
          return IsPedSprinting(this.handle);
        }
        get IsDiving() {
          return IsPedDiving(this.handle);
        }
        get IsInParachuteFreeFall() {
          return IsPedInParachuteFreeFall(this.handle);
        }
        get IsSwimming() {
          return IsPedSwimming(this.handle);
        }
        get IsSwimmingUnderWater() {
          return IsPedSwimmingUnderWater(this.handle);
        }
        get IsVaulting() {
          return IsPedVaulting(this.handle);
        }
        get IsOnBike() {
          return IsPedOnAnyBike(this.handle);
        }
        get IsOnFoot() {
          return IsPedOnFoot(this.handle);
        }
        get IsInSub() {
          return IsPedInAnySub(this.handle);
        }
        get IsInTaxi() {
          return IsPedInAnyTaxi(this.handle);
        }
        get IsInTrain() {
          return IsPedInAnyTrain(this.handle);
        }
        get IsInHeli() {
          return IsPedInAnyHeli(this.handle);
        }
        get IsInPlane() {
          return IsPedInAnyPlane(this.handle);
        }
        get IsInFlyingVehicle() {
          return IsPedInFlyingVehicle(this.handle);
        }
        get IsInBoat() {
          return IsPedInAnyBoat(this.handle);
        }
        get IsInPoliceVehicle() {
          return IsPedInAnyPoliceVehicle(this.handle);
        }
        get IsJacking() {
          return IsPedJacking(this.handle);
        }
        get IsBeingJacked() {
          return IsPedBeingJacked(this.handle);
        }
        get IsGettingIntoAVehicle() {
          return IsPedGettingIntoAVehicle(this.handle);
        }
        get IsTryingToEnterALockedVehicle() {
          return IsPedTryingToEnterALockedVehicle(this.handle);
        }
        get IsInjured() {
          return IsPedInjured(this.handle);
        }
        get IsFleeing() {
          return IsPedFleeing(this.handle);
        }
        get IsInCombat() {
          return IsPedInCombat(this.handle, PlayerPedId());
        }
        get IsInMeleeCombat() {
          return IsPedInMeleeCombat(this.handle);
        }
        get IsInStealthMode() {
          return GetPedStealthMovement(this.handle);
        }
        get IsAmbientSpeechPlaying() {
          return IsAmbientSpeechPlaying(this.handle);
        }
        get IsScriptedSpeechPlaying() {
          return IsScriptedSpeechPlaying(this.handle);
        }
        get IsAnySpeechPlaying() {
          return IsAnySpeechPlaying(this.handle);
        }
        get IsAmbientSpeechEnabled() {
          return !IsAmbientSpeechDisabled(this.handle);
        }
        set IsPainAudioEnabled(value) {
          DisablePedPainAudio(this.handle, !value);
        }
        get IsPlantingBomb() {
          return IsPedPlantingBomb(this.handle);
        }
        get IsShooting() {
          return IsPedShooting(this.handle);
        }
        get IsAiming() {
          return this.getConfigFlag(78);
        }
        get IsReloading() {
          return IsPedReloading(this.handle);
        }
        get IsDoingDriveby() {
          return IsPedDoingDriveby(this.handle);
        }
        get IsGoingIntoCover() {
          return IsPedGoingIntoCover(this.handle);
        }
        get IsBeingStunned() {
          return IsPedBeingStunned(this.handle, 0);
        }
        get IsBeingStealthKilled() {
          return IsPedBeingStealthKilled(this.handle);
        }
        get IsPerformingStealthKill() {
          return IsPedPerformingStealthKill(this.handle);
        }
        get IsAimingFromCover() {
          return IsPedAimingFromCover(this.handle);
        }
        isInCover(expectUseWeapon = false) {
          return IsPedInCover(this.handle, expectUseWeapon);
        }
        get IsInCoverFacingLeft() {
          return IsPedInCoverFacingLeft(this.handle);
        }
        set FiringPattern(value) {
          SetPedFiringPattern(this.handle, value);
        }
        set DropsWeaponsOnDeath(value) {
          SetPedDropsWeaponsWhenDead(this.handle, value);
        }
        set DrivingSpeed(value) {
          SetDriveTaskCruiseSpeed(this.handle, value);
        }
        set DrivingStyle(style) {
          SetDriveTaskDrivingStyle(this.handle, Number(style));
        }
        set IsDrunk(isDrunk) {
          SetPedIsDrunk(this.handle, isDrunk);
        }
        set MotionBlur(value) {
          SetPedMotionBlur(this.handle, value);
        }
        get Task() {
          if (!this.tasks) {
            this.tasks = new Tasks(this);
          }
          return this.tasks;
        }
        get TaskSequenceProgress() {
          return GetSequenceProgress(this.handle);
        }
        set BlockPermanentEvents(block) {
          SetBlockingOfNonTemporaryEvents(this.handle, block);
        }
        isInAnyVehicle() {
          return IsPedInAnyVehicle(this.handle, false);
        }
        isInVehicle(vehicle) {
          return IsPedInVehicle(this.handle, vehicle.Handle, false);
        }
        isSittingInAnyVehicle() {
          return IsPedSittingInAnyVehicle(this.handle);
        }
        isSittingInVehicle(vehicle) {
          return IsPedSittingInVehicle(this.handle, vehicle.Handle);
        }
        setIntoVehicle(vehicle, seat) {
          SetPedIntoVehicle(this.handle, vehicle.Handle, Number(seat));
        }
        isHeadtracking(entity) {
          return IsPedHeadtrackingEntity(this.handle, entity.Handle);
        }
        isInCombatAgainst(target) {
          return IsPedInCombat(this.handle, target.Handle);
        }
        getJacker() {
          return new Ped(GetPedsJacker(this.handle));
        }
        getJackTarget() {
          return new Ped(GetJackTarget(this.handle));
        }
        getMeleeTarget() {
          return new Ped(GetMeleeTargetForPed(this.handle));
        }
        getKiller() {
          return Ped.fromHandle(GetPedSourceOfDeath(this.handle));
        }
        kill() {
          this.Health = -1;
        }
        resurrect() {
          const maxHealth = this.Health;
          const isCollisionEnabled = super.IsCollisionEnabled;
          ResurrectPed(this.handle);
          this.MaxHealth = maxHealth;
          this.Health = maxHealth;
          super.IsCollisionEnabled = isCollisionEnabled;
          ClearPedTasksImmediately(this.handle);
        }
        resetVisibleDamage() {
          ResetPedVisibleDamage(this.handle);
        }
        clearBloodDamage() {
          ClearPedBloodDamage(this.handle);
        }
        get IsInGroup() {
          return IsPedInGroup(this.handle);
        }
        set NeverLeavesGroup(value) {
          SetPedNeverLeavesGroup(this.handle, value);
        }
        leaveGroup() {
          RemovePedFromGroup(this.handle);
        }
        playAmbientSpeed(speechName, voiceName = "", modifier = SpeechModifier.Standard) {
          if (Number(modifier) >= 0 && Number(modifier) < this.speechModifierNames.length) {
            if (voiceName === "") {
              PlayAmbientSpeech1(this.handle, speechName, this.speechModifierNames[Number(modifier)]);
            } else {
              PlayAmbientSpeechWithVoice(this.handle, speechName, voiceName, this.speechModifierNames[Number(modifier)], false);
            }
          } else {
            throw new RangeError("modifier");
          }
        }
        applyDamage(damageAmount, armorFirst = true) {
          ApplyDamageToPed(this.handle, damageAmount, armorFirst);
        }
        hasBeenDamagedByWeapon(weapon) {
          return HasPedBeenDamagedByWeapon(this.handle, Number(weapon), 0);
        }
        hasBeenDamagedByAnyWeapon() {
          return HasPedBeenDamagedByWeapon(this.handle, 0, 2);
        }
        hasBeenDamagedByAnyMeleeWeapon() {
          return HasPedBeenDamagedByWeapon(this.handle, 0, 1);
        }
        clearLastWeaponDamage() {
          ClearPedLastWeaponDamage(this.handle);
        }
        get Bones() {
          if (!this.pedBones) {
            this.pedBones = new PedBoneCollection(this);
          }
          return this.pedBones;
        }
        get Weapons() {
          if (!this.weapons) {
            this.weapons = new WeaponCollection(this);
          }
          return this.weapons;
        }
        giveWeapon(weapon, ammoCount = 999, isHidden = false, equipNow = true) {
          GiveWeaponToPed(this.handle, weapon, ammoCount, isHidden, equipNow);
        }
        removeWeapon(weapon) {
          RemoveWeaponFromPed(this.handle, weapon);
        }
        removeAllWeapons() {
          RemoveAllPedWeapons(this.handle, true);
        }
        getLastWeaponImpactPosition() {
          const position = GetPedLastWeaponImpactCoord(this.handle)[1];
          return new Vector3(position[0], position[1], position[2]);
        }
        get CanRagdoll() {
          return CanPedRagdoll(this.handle);
        }
        set CanRagdoll(value) {
          SetPedCanRagdoll(this.handle, value);
        }
        ragdoll(duration = -1, ragdollType = RagdollType.Normal) {
          this.CanRagdoll = true;
          SetPedToRagdoll(this.handle, duration, duration, Number(ragdollType), false, false, false);
        }
        cancelRagdoll() {
          SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
        }
        giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
          GivePedHelmet(this.handle, !canBeRemovedByPed, Number(helmetType), textureIndex);
        }
        removeHelmet(instantly) {
          RemovePedHelmet(this.handle, instantly);
        }
        openParachute() {
          ForcePedToOpenParachute(this.handle);
        }
        getConfigFlag(flagId) {
          return GetPedConfigFlag(this.handle, flagId, true);
        }
        setConfigFlag(flagId, value) {
          SetPedConfigFlag(this.handle, flagId, value);
        }
        resetConfigFlag(flagId) {
          SetPedResetFlag(this.handle, flagId, true);
        }
        clone() {
          return new Ped(ClonePed(this.handle, false, false, false));
        }
        exists(ped) {
          if (!ped) {
            return super.exists() && GetEntityType(this.handle) === 1;
          }
          return ped?.exists() ?? false;
        }
        setComponentVariation(componentId, drawableId, textureId, paletteId = 0) {
          SetPedComponentVariation(this.handle, componentId, drawableId, textureId, paletteId);
        }
        setRandomComponentVariation() {
          SetPedRandomComponentVariation(this.handle, 0);
        }
        setDefaultComponentVariation() {
          SetPedDefaultComponentVariation(this.handle);
        }
        getDrawableVariation(componentId) {
          return GetPedDrawableVariation(this.handle, componentId);
        }
        getNumberOfDrawableVariations(componentId) {
          return GetNumberOfPedDrawableVariations(this.handle, componentId);
        }
        getTextureVariation(componentId) {
          return GetPedTextureVariation(this.handle, componentId);
        }
        getNumberTextureVariations(componentId, drawableId = this.getDrawableVariation(componentId)) {
          return GetNumberOfPedTextureVariations(this.handle, componentId, drawableId);
        }
        setRandomProps() {
          SetPedRandomProps(this.handle);
        }
        setPropIndex(propId, drawableId, textureId, attach = true) {
          SetPedPropIndex(this.handle, propId, drawableId, textureId, attach);
        }
        clearProp(propId) {
          ClearPedProp(this.handle, propId);
        }
        clearAllProps() {
          ClearAllPedProps(this.handle);
        }
        knockPropOff(p1, p2, p3, p4) {
          KnockOffPedProp(this.handle, p1, p2, p3, p4);
        }
        isPropValid(propId, drawableId, textureId) {
          return SetPedPreloadPropData(this.handle, propId, drawableId, textureId);
        }
        getPropIndex(propId) {
          return GetPedPropIndex(this.handle, propId);
        }
        getNumberOfPropDrawableVariations(propId) {
          return GetNumberOfPedPropDrawableVariations(this.handle, propId);
        }
        getNumberOfPropTextureVariations(propId, drawableId = this.getPropIndex(propId)) {
          return GetNumberOfPedPropTextureVariations(this.handle, propId, drawableId);
        }
        getPropTextureIndex(propId) {
          return GetPedPropTextureIndex(this.handle, propId);
        }
        setHelmetPropIndex(propIndex) {
          SetPedHelmetPropIndex(this.handle, propIndex);
        }
        setEyeColor(color) {
          SetPedEyeColor(this.handle, color);
        }
        getEyeColor() {
          return GetPedEyeColor(this.handle);
        }
        setHairColors(primary, highlight) {
          SetPedHairColor(this.handle, primary, highlight);
        }
        setHairColor(color) {
          this.setHairColors(color, this.getHairHighlightColor());
        }
        getHairColor() {
          return GetPedHairColor(this.handle);
        }
        setHairHighlightColor(color) {
          this.setHairColors(this.getHairColor(), color);
        }
        getHairHighlightColor() {
          return GetPedHairHighlightColor(this.handle);
        }
        getHeadOverlayNum(overlayId) {
          return GetPedHeadOverlayNum(overlayId);
        }
        getHeadOverlayValue(overlayId) {
          return GetPedHeadOverlayValue(this.handle, overlayId);
        }
        setHeadOverlayValue(overlayId, value) {
          const opacity = GetPedHeadOverlayData(this.handle, overlayId)[5];
          this.setHeadOverlay(overlayId, value, opacity);
        }
        getHeadOverlay(overlayId) {
          const [ret, overlayValue, colourType, firstColour, secondColour, overlayOpacity] = GetPedHeadOverlayData(this.handle, overlayId);
          if (!ret) {
            return void 0;
          }
          return [overlayValue, colourType, firstColour, secondColour, overlayOpacity];
        }
        setHeadOverlay(overlayId, index, opacity) {
          SetPedHeadOverlay(this.handle, overlayId, index, opacity);
        }
        getHeadOverlayOpacity(overlayId) {
          return GetPedHeadOverlayData(this.handle, overlayId)[5];
        }
        setHeadOverlayOpacity(overlayId, opacity) {
          this.setHeadOverlay(overlayId, this.getHeadOverlayValue(overlayId), opacity);
        }
        setHeadOverlayColor(overlayId, color) {
          let colorId = 0;
          if (overlayId === 1 || overlayId === 2 || overlayId === 10) {
            colorId = 1;
          } else if (overlayId === 5 || overlayId === 8) {
            colorId = 2;
          }
          SetPedHeadOverlayColor(this.handle, overlayId, colorId, color, color);
        }
        setHeadBlend(shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent = false) {
          SetPedHeadBlendData(this.handle, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
        }
        getHeadBlend() {
          const buffer = new ArrayBuffer(80);
          if (!Citizen.invokeNative("0x2746BD9D88C5C5D0", this.handle, new Float32Array(buffer))) {
            return void 0;
          }
          const { 0: shapeFirstId, 2: shapeSecondId, 4: shapeThirdId, 6: skinFirstId, 8: skinSecondId, 10: skinThirdId, 18: isParent } = new Uint32Array(buffer);
          const { 0: shapeMix, 2: skinMix, 4: thirdMix } = new Float32Array(buffer, 48);
          return [
            shapeFirstId,
            shapeSecondId,
            shapeThirdId,
            skinFirstId,
            skinSecondId,
            skinThirdId,
            shapeMix,
            skinMix,
            thirdMix,
            !!isParent
          ];
        }
        finalizeHeadBlend() {
          FinalizeHeadBlend(this.handle);
        }
        hasHeadBlendFinished() {
          return HasPedHeadBlendFinished(this.handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/PedBone.js
  var PedBone;
  var init_PedBone = __esm({
    "node_modules/@nativewrappers/client/lib/models/PedBone.js"() {
      init_models();
      PedBone = class extends EntityBone {
        constructor(owner, boneId) {
          super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
        }
        get IsValid() {
          return Ped.exists(this.Owner) && this.Index !== -1;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/PedBoneCollection.js
  var PedBoneCollection;
  var init_PedBoneCollection = __esm({
    "node_modules/@nativewrappers/client/lib/models/PedBoneCollection.js"() {
      init_models();
      PedBoneCollection = class extends EntityBoneCollection {
        constructor(owner) {
          super(owner);
        }
        get Core() {
          return new PedBone(this.owner, -1);
        }
        get LastDamaged() {
          const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
          return PedBone[outBone];
        }
        clearLastDamaged() {
          ClearPedLastDamageBone(this.owner.Handle);
        }
        getBone(boneIndex, boneName) {
          return new PedBone(this.owner, boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? ""));
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/Player.js
  var Player2;
  var init_Player = __esm({
    "node_modules/@nativewrappers/client/lib/models/Player.js"() {
      init_lib();
      init_cfx();
      init_models();
      Player2 = class {
        constructor(handle) {
          this.pvp = false;
          this.stateBagCookies = [];
          this.handle = handle;
          if (!IsDuplicityVersion()) {
            this.PvPEnabled = true;
          }
        }
        static fromPedHandle(handle) {
          return new Player2(NetworkGetPlayerIndexFromPed(handle));
        }
        static fromServerId(serverId) {
          return new Player2(GetPlayerFromServerId(serverId));
        }
        get Handle() {
          return this.handle;
        }
        get Character() {
          return this.Ped;
        }
        get Ped() {
          const handle = GetPlayerPed(this.handle);
          if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
            this.ped = new Ped(handle);
          }
          return this.ped;
        }
        get ServerId() {
          return GetPlayerServerId(this.handle);
        }
        get State() {
          return cfx_default.Player(this.ServerId).state;
        }
        AddStateBagChangeHandler(keyFilter, handler) {
          const cookie = AddStateBagChangeHandler(keyFilter, `player:${this.ServerId}`, handler);
          this.stateBagCookies.push(cookie);
          return cookie;
        }
        listenForStateChange(keyFilter, handler) {
          return this.AddStateBagChangeHandler(keyFilter, handler);
        }
        removeStateListener(tgtCookie) {
          this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
            const isCookie = cookie == tgtCookie;
            if (isCookie)
              RemoveStateBagChangeHandler(cookie);
            return isCookie;
          });
        }
        removeAllStateListeners() {
          for (const cookie of this.stateBagCookies) {
            RemoveStateBagChangeHandler(cookie);
          }
        }
        get Name() {
          return GetPlayerName(this.handle);
        }
        get PvPEnabled() {
          return this.pvp;
        }
        set PvPEnabled(value) {
          NetworkSetFriendlyFireOption(value);
          SetCanAttackFriendly(this.Character.Handle, value, value);
          this.pvp = value;
        }
        get IsDead() {
          return IsPlayerDead(this.handle);
        }
        get EntityPlayerIsAimingAt() {
          const [entityHit, entity] = GetEntityPlayerIsFreeAimingAt(this.handle);
          if (entityHit) {
            return Entity2.fromHandle(entity);
          }
          return null;
        }
        get StealthNoise() {
          return GetPlayerCurrentStealthNoise(this.handle);
        }
        get FakeWantedLevel() {
          return GetPlayerFakeWantedLevel(this.handle);
        }
        get PlayerGroup() {
          return GetPlayerGroup(this.handle);
        }
        get HasReserveParachute() {
          return GetPlayerHasReserveParachute(this.handle);
        }
        get HealthRechargeLimit() {
          return GetPlayerHealthRechargeLimit(this.handle);
        }
        get IsInvincible() {
          if (IsDuplicityVersion()) {
            return GetPlayerInvincible(this.handle);
          } else {
            return GetPlayerInvincible_2(this.handle);
          }
        }
        get MaxArmor() {
          return GetPlayerMaxArmour(this.handle);
        }
        get ParachuteModelOverride() {
          return new Model(GetPlayerParachuteModelOverride(this.handle));
        }
        get ParachutePackTintIndex() {
          return GetPlayerParachutePackTintIndex(this.handle);
        }
        get ParachuteTintIndex() {
          return GetPlayerParachuteTintIndex(this.handle);
        }
        get ParachuteColorTrailColor() {
          return Color.fromArray(GetPlayerParachuteSmokeTrailColor(this.handle));
        }
        get ReserveParachuteModelOverride() {
          return new Model(GetPlayerReserveParachuteModelOverride(this.handle));
        }
        get ReserveParachuteTintIndex() {
          return GetPlayerReserveParachuteTintIndex(this.handle);
        }
        get PlayerRgbColour() {
          return Color.fromArray(GetPlayerRgbColour(this.handle));
        }
        get Stamina() {
          return GetPlayerSprintStaminaRemaining(this.handle);
        }
        get SprintTimeRemaining() {
          return GetPlayerSprintStaminaRemaining(this.handle);
        }
        get TargetEntity() {
          const [entityHit, entity] = GetPlayerTargetEntity(this.handle);
          if (entityHit) {
            return Entity2.fromHandle(entity);
          }
          return null;
        }
        get Team() {
          return GetPlayerTeam(this.handle);
        }
        CanPedHearPlayer(ped) {
          return CanPedHearPlayer(this.handle, ped.Handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/Prop.js
  var Prop;
  var init_Prop = __esm({
    "node_modules/@nativewrappers/client/lib/models/Prop.js"() {
      init_models();
      Prop = class extends Entity2 {
        static exists(prop2) {
          return typeof prop2 !== "undefined" && prop2.exists();
        }
        constructor(handle) {
          super(handle);
        }
        exists() {
          return super.exists() && GetEntityType(this.handle) === 3;
        }
        placeOnGround() {
          PlaceObjectOnGroundProperly(this.handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/Vehicle.js
  var Vehicle;
  var init_Vehicle2 = __esm({
    "node_modules/@nativewrappers/client/lib/models/Vehicle.js"() {
      init_models();
      init_enums();
      init_Game();
      Vehicle = class extends Entity2 {
        constructor(handle) {
          super(handle);
        }
        static getModelDisplayName(vehicleModel) {
          return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
        }
        static getModelClass(vehicleModel) {
          return GetVehicleClassFromName(vehicleModel.Hash);
        }
        static getClassDisplayName(vehicleClass) {
          return `VEH_CLASS_${vehicleClass}`;
        }
        static exists(vehicle) {
          return typeof vehicle !== "undefined" && vehicle.exists();
        }
        exists() {
          return super.exists() && GetEntityType(this.handle) === 2;
        }
        get DisplayName() {
          return Vehicle.getModelDisplayName(this.Model);
        }
        get ClassDisplayName() {
          return Vehicle.getClassDisplayName(this.ClassType);
        }
        get NumberPlate() {
          return GetVehicleNumberPlateText(this.handle);
        }
        set NumberPlate(value) {
          SetVehicleNumberPlateText(this.handle, value.substring(0, 8));
        }
        get ClassType() {
          return GetVehicleClass(this.handle);
        }
        get BodyHealth() {
          return GetVehicleBodyHealth(this.handle);
        }
        set BodyHealth(value) {
          SetVehicleBodyHealth(this.handle, value);
        }
        get EngineHealth() {
          return GetVehicleEngineHealth(this.handle);
        }
        set EngineHealth(value) {
          SetVehicleEngineHealth(this.handle, value);
        }
        get PetrolTankHealth() {
          return GetVehiclePetrolTankHealth(this.handle);
        }
        set PetrolTankHealth(value) {
          SetVehiclePetrolTankHealth(this.handle, value);
        }
        get FuelLevel() {
          return GetVehicleFuelLevel(this.handle);
        }
        set FuelLevel(value) {
          SetVehicleFuelLevel(this.handle, value);
        }
        get OilLevel() {
          return GetVehicleOilLevel(this.handle);
        }
        set OilLevel(value) {
          SetVehicleOilLevel(this.handle, value);
        }
        get Gravity() {
          return GetVehicleGravityAmount(this.handle);
        }
        set Gravity(value) {
          SetVehicleGravityAmount(this.handle, value);
        }
        get IsEngineRunning() {
          return GetIsVehicleEngineRunning(this.handle);
        }
        set IsEngineRunning(value) {
          SetVehicleEngineOn(this.handle, value, true, true);
        }
        get IsEngineStarting() {
          return IsVehicleEngineStarting(this.handle);
        }
        set IsEngineStarting(value) {
          if ((this.IsEngineStarting || this.IsEngineRunning) && value) {
            return;
          }
          SetVehicleEngineOn(this.handle, value, !value, true);
        }
        get IsRadioEnabled() {
          if (Game.Player.Character.isInVehicle(this)) {
            return IsPlayerVehicleRadioEnabled();
          }
          return false;
        }
        set IsRadioEnabled(value) {
          SetVehicleRadioEnabled(this.handle, value);
        }
        set RadioStation(value) {
          this.IsRadioEnabled = true;
          SetVehRadioStation(this.handle, value);
        }
        get Speed() {
          return GetEntitySpeed(this.handle);
        }
        set Speed(value) {
          if (this.Model.IsTrain) {
            SetTrainSpeed(this.handle, value);
            SetTrainCruiseSpeed(this.handle, value);
          } else {
            SetVehicleForwardSpeed(this.handle, value);
          }
        }
        get WheelSpeed() {
          return GetVehicleDashboardSpeed(this.handle);
        }
        get Acceleration() {
          return GetVehicleCurrentAcceleration(this.handle);
        }
        get CurrentRPM() {
          return GetVehicleCurrentRpm(this.handle);
        }
        set CurrentRPM(value) {
          SetVehicleCurrentRpm(this.handle, value);
        }
        get HighGear() {
          return GetVehicleHighGear(this.handle);
        }
        set HighGear(value) {
          SetVehicleHighGear(this.handle, value);
        }
        get CurrentGear() {
          return GetVehicleCurrentGear(this.handle);
        }
        get SteeringAngle() {
          return GetVehicleSteeringAngle(this.handle);
        }
        set SteeringAngle(value) {
          SetVehicleSteeringAngle(this.handle, value);
        }
        get SteeringScale() {
          return GetVehicleSteeringScale(this.handle);
        }
        set SteeringScale(value) {
          SetVehicleSteeringScale(this.handle, value);
        }
        get IsAlarmSet() {
          return IsVehicleAlarmSet(this.handle);
        }
        set IsAlarmSet(value) {
          SetVehicleAlarm(this.handle, value);
        }
        get IsAlarmSounding() {
          return IsVehicleAlarmActivated(this.handle);
        }
        get AlarmTimeLeft() {
          return GetVehicleAlarmTimeLeft(this.handle);
        }
        set AlarmTimeLeft(value) {
          SetVehicleAlarmTimeLeft(this.handle, value);
        }
        startAlarm() {
          StartVehicleAlarm(this.handle);
        }
        get IsSirenActive() {
          return IsVehicleSirenOn(this.handle);
        }
        set IsSirenActive(value) {
          SetVehicleSiren(this.handle, value);
        }
        set IsSirenSilent(value) {
          DisableVehicleImpactExplosionActivation(this.handle, value);
        }
        soundHorn(duration) {
          StartVehicleHorn(this.handle, duration, Game.generateHash("HELDDOWN"), false);
        }
        get IsWanted() {
          return IsVehicleWanted(this.handle);
        }
        set IsWanted(value) {
          SetVehicleIsWanted(this.handle, value);
        }
        set ProvidesCover(value) {
          SetVehicleProvidesCover(this.handle, value);
        }
        set DropsMoneyOnExplosion(value) {
          SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, value);
        }
        get PreviouslyOwnedByPlayer() {
          return IsVehiclePreviouslyOwnedByPlayer(this.handle);
        }
        set PreviouslyOwnedByPlayer(value) {
          SetVehicleHasBeenOwnedByPlayer(this.handle, value);
        }
        get NeedsToBeHotwired() {
          return IsVehicleNeedsToBeHotwired(this.handle);
        }
        set NeedsToBeHotwired(value) {
          SetVehicleNeedsToBeHotwired(this.handle, value);
        }
        get AreLightsOn() {
          return GetVehicleLightsState(this.handle)[0];
        }
        set AreLightsOn(value) {
          SetVehicleLights(this.handle, value ? 3 : 4);
        }
        get AreHighBeamsOn() {
          return GetVehicleLightsState(this.handle)[1];
        }
        set AreHighBeamsOn(value) {
          SetVehicleFullbeam(this.handle, value);
        }
        get IsInteriorLightOn() {
          return IsVehicleInteriorLightOn(this.handle);
        }
        set IsInteriorLightOn(value) {
          SetVehicleInteriorlight(this.handle, value);
        }
        get IsSearchLightOn() {
          return IsVehicleSearchlightOn(this.handle);
        }
        set IsSearchLightOn(value) {
          SetVehicleSearchlight(this.handle, value, false);
        }
        get IsTaxiLightOn() {
          return IsTaxiLightOn(this.handle);
        }
        set IsTaxiLightOn(value) {
          SetTaxiLights(this.handle, value);
        }
        get IsLeftIndicatorLightOn() {
          const val = GetVehicleIndicatorLights(this.handle);
          return val === 1 || val === 3;
        }
        set IsLeftIndicatorLightOn(value) {
          SetVehicleIndicatorLights(this.handle, 1, value);
        }
        get IsRightIndicatorLightOn() {
          return GetVehicleIndicatorLights(this.handle) >= 2;
        }
        set IsRightIndicatorLightOn(value) {
          SetVehicleIndicatorLights(this.handle, 0, value);
        }
        get IsHandbrakeForcedOn() {
          return GetVehicleHandbrake(this.handle);
        }
        set IsHandbrakeForcedOn(value) {
          SetVehicleHandbrake(this.handle, value);
        }
        set AreBrakeLightsOn(value) {
          SetVehicleBrakeLights(this.handle, value);
        }
        set LightsMultiplier(value) {
          SetVehicleLightMultiplier(this.handle, value);
        }
        set CanBeVisiblyDamaged(value) {
          SetVehicleCanBeVisiblyDamaged(this.handle, value);
        }
        set Strong(toggle) {
          SetVehicleStrong(this.handle, toggle);
        }
        set CanBreak(toggle) {
          SetVehicleCanBreak(this.handle, toggle);
        }
        get IsDamaged() {
          return IsVehicleDamaged(this.handle);
        }
        get IsDriveable() {
          return IsVehicleDriveable(this.handle, false);
        }
        set IsDriveable(value) {
          SetVehicleUndriveable(this.handle, !value);
        }
        get IsEngineOnFire() {
          return IsVehicleEngineOnFire(this.handle);
        }
        get HasRoof() {
          return DoesVehicleHaveRoof(this.handle);
        }
        get IsLeftHeadLightBroken() {
          return GetIsLeftVehicleHeadlightDamaged(this.handle);
        }
        get IsRightHeadLightBroken() {
          return GetIsRightVehicleHeadlightDamaged(this.handle);
        }
        get IsRearBumperBrokenOff() {
          return IsVehicleBumperBrokenOff(this.handle, false);
        }
        get IsFrontBumperBrokenOff() {
          return IsVehicleBumperBrokenOff(this.handle, true);
        }
        set IsAxlesStrong(value) {
          SetVehicleHasStrongAxles(this.handle, value);
        }
        set CanEngineDegrade(value) {
          SetVehicleEngineCanDegrade(this.handle, value);
        }
        set EnginePowerMultiplier(value) {
          SetVehicleEnginePowerMultiplier(this.handle, value);
        }
        set EngineTorqueMultiplier(value) {
          SetVehicleEngineTorqueMultiplier(this.handle, value);
        }
        get LandingGearState() {
          return GetLandingGearState(this.handle);
        }
        set LandingGearState(value) {
          SetVehicleLandingGear(this.handle, value);
        }
        get RoofState() {
          return GetConvertibleRoofState(this.handle);
        }
        set RoofState(value) {
          switch (value) {
            case VehicleRoofState.Closed:
              RaiseConvertibleRoof(this.handle, true);
              RaiseConvertibleRoof(this.handle, false);
              break;
            case VehicleRoofState.Closing:
              RaiseConvertibleRoof(this.handle, false);
              break;
            case VehicleRoofState.Opened:
              LowerConvertibleRoof(this.handle, true);
              LowerConvertibleRoof(this.handle, false);
              break;
            case VehicleRoofState.Opening:
              LowerConvertibleRoof(this.handle, false);
              break;
          }
        }
        get LockStatus() {
          return GetVehicleDoorLockStatus(this.handle);
        }
        set LockStatus(value) {
          SetVehicleDoorsLocked(this.handle, value);
        }
        get MaxBraking() {
          return GetVehicleMaxBraking(this.handle);
        }
        get MaxTraction() {
          return GetVehicleMaxTraction(this.handle);
        }
        get IsOnAllWheels() {
          return IsVehicleOnAllWheels(this.handle);
        }
        get IsStopped() {
          return IsVehicleStopped(this.handle);
        }
        get IsStoppedAtTrafficLights() {
          return IsVehicleStoppedAtTrafficLights(this.handle);
        }
        get IsStolen() {
          return IsVehicleStolen(this.handle);
        }
        set IsStolen(value) {
          SetVehicleIsStolen(this.handle, value);
        }
        get IsConvertible() {
          return IsVehicleAConvertible(this.handle, false);
        }
        set IsBurnoutForced(value) {
          SetVehicleBurnout(this.handle, value);
        }
        get IsInBurnout() {
          return IsVehicleInBurnout(this.handle);
        }
        get Driver() {
          return this.getPedOnSeat(VehicleSeat.Driver);
        }
        get Occupants() {
          const driver = this.Driver;
          if (!Ped.exists(driver)) {
            return this.Passengers;
          }
          return [driver, ...this.Passengers];
        }
        get Passengers() {
          const passengerCount = this.PassengerCount;
          if (passengerCount === 0) {
            return [];
          }
          const result = [];
          for (let i = 0; i < this.PassengerCapacity; i++) {
            if (!this.isSeatFree(i)) {
              result.push(this.getPedOnSeat(i));
              if (result.length === passengerCount) {
                break;
              }
            }
          }
          return result;
        }
        get Doors() {
          if (!this._doors) {
            this._doors = new VehicleDoorCollection(this);
          }
          return this._doors;
        }
        get Mods() {
          if (!this._mods) {
            this._mods = new VehicleModCollection(this);
          }
          return this._mods;
        }
        get Wheels() {
          if (!this._wheels) {
            this._wheels = new VehicleWheelCollection(this);
          }
          return this._wheels;
        }
        get Windows() {
          if (!this._windows) {
            this._windows = new VehicleWindowCollection(this);
          }
          return this._windows;
        }
        extraExists(extra) {
          return DoesExtraExist(this.handle, extra);
        }
        isExtraOn(extra) {
          return this.extraExists(extra) ? IsVehicleExtraTurnedOn(this.handle, extra) : false;
        }
        toggleExtra(extra, toggle) {
          if (this.extraExists(extra)) {
            SetVehicleExtra(this.handle, extra, !toggle);
          }
        }
        getPedOnSeat(seat) {
          return new Ped(GetPedInVehicleSeat(this.handle, seat));
        }
        isSeatFree(seat) {
          return IsVehicleSeatFree(this.handle, seat);
        }
        wash() {
          this.DirtLevel = 0;
        }
        get DirtLevel() {
          return GetVehicleDirtLevel(this.handle);
        }
        set DirtLevel(value) {
          SetVehicleDirtLevel(this.handle, value);
        }
        placeOnGround() {
          SetVehicleOnGroundProperly(this.handle);
        }
        repair() {
          SetVehicleFixed(this.handle);
        }
        explode() {
          ExplodeVehicle(this.handle, true, false);
        }
        explodeNetworked() {
          NetworkExplodeVehicle(this.handle, true, false, false);
        }
        get CanTiresBurst() {
          return GetVehicleTyresCanBurst(this.handle);
        }
        set CanTiresBurst(value) {
          SetVehicleTyresCanBurst(this.handle, value);
        }
        set CanWheelsBreak(value) {
          SetVehicleWheelsCanBreak(this.handle, value);
        }
        set CanDeformWheels(value) {
          SetVehicleCanDeformWheels(this.handle, value);
        }
        get HasBombBay() {
          return this.Bones ? this.Bones.hasBone("door_hatch_1") && this.Bones.hasBone("door_hatch_r") : false;
        }
        openBombBay() {
          if (this.HasBombBay) {
            OpenBombBayDoors(this.handle);
          }
        }
        closeBombBay() {
          if (this.HasBombBay) {
            CloseBombBayDoors(this.handle);
          }
        }
        setHeliYawPitchRollMult(mult) {
          if (this.Model.IsHelicopter && mult >= 0 && mult <= 1) {
            SetHelicopterRollPitchYawMult(this.handle, mult);
          }
        }
        set TowingCraneRaisedAmount(value) {
          SetTowTruckCraneHeight(this.handle, value);
        }
        get TowedVehicle() {
          return new Vehicle(GetEntityAttachedToTowTruck(this.handle));
        }
        towVehicle(vehicle, rear) {
          AttachVehicleToTowTruck(this.handle, vehicle.Handle, rear, 0, 0, 0);
        }
        detachFromTowTruck() {
          DetachVehicleFromAnyTowTruck(this.handle);
        }
        detachTowedVehicle() {
          const vehicle = this.TowedVehicle;
          if (Vehicle.exists(this.TowedVehicle)) {
            DetachVehicleFromTowTruck(this.handle, vehicle.Handle);
          }
        }
        deform(position, damageAmount, radius) {
          SetVehicleDamage(this.handle, position.x, position.y, position.z, damageAmount, radius, false);
        }
        get PassengerCapacity() {
          return GetVehicleMaxNumberOfPassengers(this.handle);
        }
        get PassengerCount() {
          return GetVehicleNumberOfPassengers(this.handle);
        }
        set RespotTimer(time) {
          SetNetworkVehicleRespotTimer(this.NetworkId, time);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleDoor.js
  var VehicleDoor;
  var init_VehicleDoor = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleDoor.js"() {
      VehicleDoor = class {
        constructor(owner, index) {
          this._owner = owner;
          this._index = index;
        }
        get Index() {
          return this._index;
        }
        set Index(index) {
          this._index = index;
        }
        get AngleRatio() {
          return GetVehicleDoorAngleRatio(this._owner.Handle, this.Index);
        }
        set AngleRatio(value) {
          SetVehicleDoorControl(this._owner.Handle, this.Index, 1, value);
        }
        set CanBeBroken(value) {
          SetVehicleDoorBreakable(this._owner.Handle, this.Index, value);
        }
        get IsOpen() {
          return this.AngleRatio > 0;
        }
        get IsFullyOpen() {
          return IsVehicleDoorFullyOpen(this._owner.Handle, this.Index);
        }
        get IsBroken() {
          return IsVehicleDoorDamaged(this._owner.Handle, this.Index);
        }
        get Vehicle() {
          return this._owner;
        }
        open(loose = false, instantly = false) {
          SetVehicleDoorOpen(this._owner.Handle, this.Index, loose, instantly);
        }
        close(instantly = false) {
          SetVehicleDoorShut(this._owner.Handle, this.Index, instantly);
        }
        break(stayInTheWorld = true) {
          SetVehicleDoorBroken(this._owner.Handle, this.Index, stayInTheWorld);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleDoorCollection.js
  var VehicleDoorCollection;
  var init_VehicleDoorCollection = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleDoorCollection.js"() {
      init_enums();
      init_VehicleDoor();
      VehicleDoorCollection = class {
        constructor(owner) {
          this._vehicleDoors = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        getDoors(index) {
          if (!this._vehicleDoors.has(index)) {
            this._vehicleDoors.set(index, new VehicleDoor(this._owner, index));
          }
          return this._vehicleDoors.get(index);
        }
        getAllDoors() {
          return Object.keys(VehicleDoorIndex).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasDoor(index)) {
              return this.getDoors(index);
            }
            return null;
          }).filter((d) => d);
        }
        openAllDoors(loose, instantly) {
          this.getAllDoors().forEach((door) => {
            door?.open(loose, instantly);
          });
        }
        closeAllDoors(instantly) {
          this.getAllDoors().forEach((door) => {
            door?.close(instantly);
          });
        }
        breakAllDoors(stayInTheWorld) {
          this.getAllDoors().forEach((door) => {
            door?.break(stayInTheWorld);
          });
        }
        hasDoor(index) {
          if (this._owner.Bones === void 0)
            return false;
          switch (index) {
            case VehicleDoorIndex.FrontLeftDoor:
              return this._owner.Bones.hasBone("door_dside_f");
            case VehicleDoorIndex.FrontRightDoor:
              return this._owner.Bones.hasBone("door_pside_f");
            case VehicleDoorIndex.BackLeftDoor:
              return this._owner.Bones.hasBone("door_dside_r");
            case VehicleDoorIndex.BackRightDoor:
              return this._owner.Bones.hasBone("door_pside_r");
            case VehicleDoorIndex.Hood:
              return this._owner.Bones.hasBone("bonnet");
            case VehicleDoorIndex.Trunk:
              return this._owner.Bones.hasBone("boot");
            default:
              return false;
          }
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleMod.js
  var VehicleMod;
  var init_VehicleMod = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleMod.js"() {
      VehicleMod = class {
        constructor(owner, modType) {
          this._owner = owner;
          this._modType = modType;
        }
        get ModType() {
          return this._modType;
        }
        set ModType(modType) {
          this._modType = modType;
        }
        get Index() {
          return GetVehicleMod(this._owner.Handle, this.ModType);
        }
        set Index(value) {
          SetVehicleMod(this._owner.Handle, this.ModType, value, this.Variation);
        }
        get Variation() {
          return GetVehicleModVariation(this._owner.Handle, this.ModType);
        }
        set Variation(value) {
          SetVehicleMod(this._owner.Handle, this.ModType, this.Index, value);
        }
        get ModCount() {
          return GetNumVehicleMods(this._owner.Handle, this.ModType);
        }
        get Vehicle() {
          return this._owner;
        }
        remove() {
          RemoveVehicleMod(this._owner.Handle, this.ModType);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleToggleMod.js
  var VehicleToggleMod;
  var init_VehicleToggleMod = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleToggleMod.js"() {
      VehicleToggleMod = class {
        constructor(owner, modType) {
          this._owner = owner;
          this._modType = modType;
        }
        get ModType() {
          return this._modType;
        }
        set ModType(modType) {
          this._modType = modType;
        }
        get IsInstalled() {
          return IsToggleModOn(this._owner.Handle, this.ModType);
        }
        set IsInstalled(value) {
          ToggleVehicleMod(this._owner.Handle, this.ModType, value);
        }
        get LocalizedModTypeName() {
          return GetModSlotName(this._owner.Handle, this.ModType);
        }
        get Vehicle() {
          return this._owner;
        }
        remove() {
          RemoveVehicleMod(this._owner.Handle, this.ModType);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleModCollection.js
  var VehicleModCollection;
  var init_VehicleModCollection = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleModCollection.js"() {
      init_enums();
      init_VehicleMod();
      init_utils();
      init_VehicleToggleMod();
      VehicleModCollection = class {
        constructor(owner) {
          this._vehicleMods = /* @__PURE__ */ new Map();
          this._vehicleToggleMods = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        hasVehicleMod(type) {
          return GetNumVehicleMods(this._owner.Handle, type) > 0;
        }
        getMod(modType) {
          if (!this._vehicleMods.has(modType)) {
            this._vehicleMods.set(modType, new VehicleMod(this._owner, modType));
          }
          return this._vehicleMods.get(modType);
        }
        getToggleMod(modType) {
          if (!this._vehicleToggleMods.has(modType)) {
            this._vehicleToggleMods.set(modType, new VehicleToggleMod(this._owner, modType));
          }
          return this._vehicleToggleMods.get(modType);
        }
        getAllMods() {
          return Object.keys(VehicleModType).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasVehicleMod(index)) {
              return this.getMod(index);
            }
            return null;
          }).filter((m) => m);
        }
        get WheelType() {
          return GetVehicleWheelType(this._owner.Handle);
        }
        set WheelType(type) {
          SetVehicleWheelType(this._owner.Handle, type);
        }
        installModKit() {
          SetVehicleModKit(this._owner.Handle, 0);
        }
        get Livery() {
          const modCount = this.getMod(VehicleModType.Livery)?.ModCount;
          if (modCount !== void 0 && modCount > 0) {
            return this.getMod(VehicleModType.Livery)?.Index;
          }
          return GetVehicleLivery(this._owner.Handle);
        }
        set Livery(value) {
          if (value === void 0)
            return;
          const mod = this.getMod(VehicleModType.Livery);
          if (mod !== void 0 && mod.ModCount > 0) {
            mod.Index = value;
          } else {
            SetVehicleLivery(this._owner.Handle, value);
          }
        }
        get LiveryCount() {
          const modCount = this.getMod(VehicleModType.Livery)?.ModCount;
          if (modCount !== void 0 && modCount > 0) {
            return modCount;
          }
          return GetVehicleLiveryCount(this._owner.Handle);
        }
        get WindowTint() {
          return GetVehicleWindowTint(this._owner.Handle);
        }
        set WindowTint(tint) {
          SetVehicleWindowTint(this._owner.Handle, tint);
        }
        get PrimaryColor() {
          return GetVehicleColours(this._owner.Handle)[0];
        }
        set PrimaryColor(color) {
          SetVehicleColours(this._owner.Handle, color, this.SecondaryColor);
        }
        get SecondaryColor() {
          return GetVehicleColours(this._owner.Handle)[1];
        }
        set SecondaryColor(color) {
          SetVehicleColours(this._owner.Handle, this.PrimaryColor, color);
        }
        get RimColor() {
          return GetVehicleExtraColours(this._owner.Handle)[1];
        }
        set RimColor(color) {
          SetVehicleExtraColours(this._owner.Handle, this.PearlescentColor, color);
        }
        get PearlescentColor() {
          return GetVehicleExtraColours(this._owner.Handle)[0];
        }
        set PearlescentColor(color) {
          SetVehicleExtraColours(this._owner.Handle, color, this.RimColor);
        }
        set TrimColor(color) {
          SetVehicleInteriorColour(this._owner.Handle, color);
        }
        set DashboardColor(color) {
          SetVehicleDashboardColour(this._owner.Handle, color);
        }
        setModColor1(paintType, color) {
          SetVehicleModColor_1(this._owner.Handle, paintType, color, 0);
        }
        setModColor2(paintType, color) {
          SetVehicleModColor_2(this._owner.Handle, paintType, color);
        }
        get ColorCombination() {
          return GetVehicleColourCombination(this._owner.Handle);
        }
        set ColorCombination(value) {
          SetVehicleColourCombination(this._owner.Handle, value);
        }
        get ColorCombinationCount() {
          return GetNumberOfVehicleColours(this._owner.Handle);
        }
        get TireSmokeColor() {
          const color = GetVehicleTyreSmokeColor(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set TireSmokeColor(color) {
          SetVehicleTyreSmokeColor(this._owner.Handle, color.r, color.g, color.b);
        }
        get NeonLightsColor() {
          const color = GetVehicleNeonLightsColour(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set NeonLightsColor(color) {
          SetVehicleNeonLightsColour(this._owner.Handle, color.r, color.g, color.b);
        }
        isNeonLightsOn(light) {
          return IsVehicleNeonLightEnabled(this._owner.Handle, light);
        }
        setNeonLightsOn(light, on2) {
          SetVehicleNeonLightEnabled(this._owner.Handle, light, on2);
        }
        areAllNeonLightsOn() {
          if (!this.HasAllNeonLights) {
            return false;
          }
          let on2 = true;
          Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
            if (!on2) {
              return;
            }
            on2 = this.isNeonLightsOn(Number(key));
          });
          return on2;
        }
        setAllNeonLightsOn(on2) {
          Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
            this.setNeonLightsOn(Number(key), on2);
          });
        }
        get HasAllNeonLights() {
          return Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).findIndex((light) => !this.hasNeonLight(Number(light))) === -1;
        }
        hasNeonLight(light) {
          if (this._owner.Bones === void 0)
            return false;
          switch (light) {
            case VehicleNeonLight.Left:
              return this._owner.Bones.hasBone("neon_l");
            case VehicleNeonLight.Right:
              return this._owner.Bones.hasBone("neon_r");
            case VehicleNeonLight.Front:
              return this._owner.Bones.hasBone("neon_f");
            case VehicleNeonLight.Back:
              return this._owner.Bones.hasBone("neon_b");
            default:
              return false;
          }
        }
        get CustomPrimaryColor() {
          const color = GetVehicleCustomPrimaryColour(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set CustomPrimaryColor(color) {
          SetVehicleCustomPrimaryColour(this._owner.Handle, color.r, color.g, color.b);
        }
        get CustomSecondaryColor() {
          const color = GetVehicleCustomSecondaryColour(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set CustomSecondaryColor(color) {
          SetVehicleCustomSecondaryColour(this._owner.Handle, color.r, color.g, color.b);
        }
        get IsPrimaryColorCustom() {
          return GetIsVehiclePrimaryColourCustom(this._owner.Handle);
        }
        get IsSecondaryColorCustom() {
          return GetIsVehicleSecondaryColourCustom(this._owner.Handle);
        }
        clearCustomPrimaryColor() {
          ClearVehicleCustomPrimaryColour(this._owner.Handle);
        }
        clearCustomSecondaryColor() {
          ClearVehicleCustomSecondaryColour(this._owner.Handle);
        }
        get LicensePlateStyle() {
          return GetVehicleNumberPlateTextIndex(this._owner.Handle);
        }
        set LicensePlateStyle(style) {
          SetVehicleNumberPlateTextIndex(this._owner.Handle, style);
        }
        get LicensePlateType() {
          return GetVehiclePlateType(this._owner.Handle);
        }
        get LicensePlate() {
          return GetVehicleNumberPlateText(this._owner.Handle);
        }
        set LicensePlate(text) {
          SetVehicleNumberPlateText(this._owner.Handle, text);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleWheel.js
  var VehicleWheel;
  var init_VehicleWheel = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleWheel.js"() {
      VehicleWheel = class {
        constructor(owner, index) {
          this._owner = owner;
          this._index = index;
        }
        get Index() {
          return this._index;
        }
        set Index(index) {
          this._index = index;
        }
        get Vehicle() {
          return this._owner;
        }
        burst() {
          SetVehicleTyreBurst(this._owner.Handle, this.Index, true, 1e3);
        }
        fix() {
          SetVehicleTyreFixed(this._owner.Handle, this.Index);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleWheelCollection.js
  var VehicleWheelCollection;
  var init_VehicleWheelCollection = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleWheelCollection.js"() {
      init_VehicleWheel();
      init_enums();
      VehicleWheelCollection = class {
        constructor(owner) {
          this._vehicleWheels = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        getWheel(index) {
          if (!this._vehicleWheels.has(index)) {
            this._vehicleWheels.set(index, new VehicleWheel(this._owner, index));
          }
          return this._vehicleWheels.get(index);
        }
        getAllWheels() {
          return Object.keys(VehicleWheelIndex).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasWheel(index)) {
              return this.getWheel(index);
            }
            return null;
          }).filter((w) => w);
        }
        burstAllWheels() {
          this.getAllWheels().forEach((wheel) => {
            wheel?.burst();
          });
        }
        fixAllWheels() {
          this.getAllWheels().forEach((wheel) => {
            wheel?.fix();
          });
        }
        hasWheel(wheel) {
          if (this._owner.Bones === void 0)
            return false;
          switch (wheel) {
            case VehicleWheelIndex.FrontLeftWheel:
              return this._owner.Bones.hasBone("wheel_lf");
            case VehicleWheelIndex.FrontRightWheel:
              return this._owner.Bones.hasBone("wheel_rf");
            case VehicleWheelIndex.MidLeftWheel:
              return this._owner.Bones.hasBone("wheel_lm");
            case VehicleWheelIndex.MidRightWheel:
              return this._owner.Bones.hasBone("wheel_rm");
            case VehicleWheelIndex.RearLeftWheel:
              return this._owner.Bones.hasBone("wheel_lr");
            case VehicleWheelIndex.RearRightWheel:
              return this._owner.Bones.hasBone("wheel_rr");
            default:
              return false;
          }
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleWindow.js
  var VehicleWindow;
  var init_VehicleWindow = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleWindow.js"() {
      VehicleWindow = class {
        constructor(owner, index) {
          this._owner = owner;
          this._index = index;
        }
        get Index() {
          return this._index;
        }
        set Index(index) {
          this._index = index;
        }
        get IsIntact() {
          return IsVehicleWindowIntact(this._owner.Handle, this.Index);
        }
        get Vehicle() {
          return this._owner;
        }
        repair() {
          FixVehicleWindow(this._owner.Handle, this.Index);
        }
        smash() {
          SmashVehicleWindow(this._owner.Handle, this.Index);
        }
        rollUp() {
          RollUpWindow(this._owner.Handle, this.Index);
        }
        rollDown() {
          RollDownWindow(this._owner.Handle, this.Index);
        }
        remove() {
          RemoveVehicleWindow(this._owner.Handle, this.Index);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/VehicleWindowCollection.js
  var VehicleWindowCollection;
  var init_VehicleWindowCollection = __esm({
    "node_modules/@nativewrappers/client/lib/models/VehicleWindowCollection.js"() {
      init_enums();
      init_VehicleWindow();
      VehicleWindowCollection = class {
        constructor(owner) {
          this._vehicleWindows = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        getWindow(index) {
          if (!this._vehicleWindows.has(index)) {
            this._vehicleWindows.set(index, new VehicleWindow(this._owner, index));
          }
          return this._vehicleWindows.get(index);
        }
        getAllWindows() {
          return Object.keys(VehicleWindowIndex).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasWindow(index)) {
              return this.getWindow(index);
            }
            return null;
          }).filter((w) => w);
        }
        get AreAllWindowsIntact() {
          return AreAllVehicleWindowsIntact(this._owner.Handle);
        }
        rollDownAllWindows() {
          this.getAllWindows().forEach((window) => {
            window?.rollDown();
          });
        }
        rollUpAllWindows() {
          this.getAllWindows().forEach((window) => {
            window?.rollUp();
          });
        }
        hasWindow(window) {
          if (this._owner.Bones === void 0)
            return false;
          switch (window) {
            case VehicleWindowIndex.FrontLeftWindow:
              return this._owner.Bones.hasBone("window_lf");
            case VehicleWindowIndex.FrontRightWindow:
              return this._owner.Bones.hasBone("window_rf");
            case VehicleWindowIndex.BackLeftWindow:
              return this._owner.Bones.hasBone("window_lr");
            case VehicleWindowIndex.BackRightWindow:
              return this._owner.Bones.hasBone("window_rr");
            default:
              return false;
          }
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/models/index.js
  var init_models = __esm({
    "node_modules/@nativewrappers/client/lib/models/index.js"() {
      init_Entity();
      init_EntityBone();
      init_EntityBoneCollection();
      init_Ped();
      init_PedBone();
      init_PedBoneCollection();
      init_Player();
      init_Prop();
      init_Vehicle2();
      init_VehicleDoorCollection();
      init_VehicleModCollection();
      init_VehicleWheelCollection();
      init_VehicleWindowCollection();
    }
  });

  // node_modules/@nativewrappers/client/lib/Game.js
  var Game;
  var init_Game = __esm({
    "node_modules/@nativewrappers/client/lib/Game.js"() {
      init_Audio();
      init_enums();
      init_models();
      Game = class {
        static generateHash(input) {
          if (typeof input === "undefined") {
            return 0;
          }
          const _hash = this.hashCache.get(input);
          if (_hash)
            return _hash;
          const hash = GetHashKey(input);
          this.hashCache.set(input, hash);
          return hash;
        }
        static get Language() {
          return GetUiLanguageId();
        }
        static get GameTime() {
          return GetGameTimer();
        }
        static set TimeScale(time) {
          SetTimeScale(time <= 1 && time >= 0 ? time : 1);
        }
        static get FrameCount() {
          return GetFrameCount();
        }
        static get FPS() {
          return 1 / this.LastFrameTime;
        }
        static get LastFrameTime() {
          return GetFrameTime();
        }
        static get Player() {
          const handle = PlayerId();
          if (typeof this.cachedPlayer === "undefined" || handle !== this.cachedPlayer.Handle) {
            this.cachedPlayer = new Player2(handle);
          }
          return this.cachedPlayer;
        }
        static get PlayerPed() {
          return this.Player.Character;
        }
        static *playerList(excludeLocalPlayer = false) {
          const localPlayer = this.Player;
          for (const id of GetActivePlayers()) {
            if (excludeLocalPlayer && localPlayer.Handle === id) {
              continue;
            }
            yield new Player2(id);
          }
        }
        static get PlayerVersusPlayer() {
          return this.Player.PvPEnabled;
        }
        static set PlayerVersusPlayer(value) {
          this.Player.PvPEnabled = value;
        }
        static get MaxWantedLevel() {
          return GetMaxWantedLevel();
        }
        static set MaxWantedLevel(value) {
          if (value < 0) {
            value = 0;
          } else if (value > 5) {
            value = 5;
          }
          SetMaxWantedLevel(value);
        }
        static set WantedMultiplier(value) {
          SetWantedLevelMultiplier(value);
        }
        static set ShowPoliceBlipsOnRadar(toggle) {
          SetPoliceRadarBlips(toggle);
        }
        static get Nightvision() {
          return IsNightvisionActive();
        }
        static set Nightvision(toggle) {
          SetNightvision(toggle);
        }
        static get ThermalVision() {
          return IsSeethroughActive();
        }
        static set ThermalVision(toggle) {
          SetSeethrough(toggle);
        }
        static get IsMissionActive() {
          return GetMissionFlag();
        }
        static set IsMissionActive(toggle) {
          SetMissionFlag(toggle);
        }
        static get IsRandomEventActive() {
          return GetRandomEventFlag();
        }
        static set IsRandomEventActive(toggle) {
          SetRandomEventFlag(toggle);
        }
        static get IsCutsceneActive() {
          return IsCutsceneActive();
        }
        static get IsWaypointActive() {
          return IsWaypointActive();
        }
        static get IsPaused() {
          return IsPauseMenuActive();
        }
        static set IsPaused(toggle) {
          SetPauseMenuActive(toggle);
        }
        static get IsLoading() {
          return GetIsLoadingScreenActive();
        }
        static get CurrentInputMode() {
          return IsInputDisabled(2) ? InputMode.MouseAndKeyboard : InputMode.GamePad;
        }
        static get RadioStation() {
          const stationName = GetPlayerRadioStationName();
          return RadioStation[stationName];
        }
        static set RadioStation(station) {
          SetRadioToStationName(station);
        }
        static isControlPressed(inputMode, control) {
          return IsControlPressed(inputMode, Number(control));
        }
        static isDisabledControlPressed(inputMode, control) {
          return IsDisabledControlPressed(inputMode, Number(control));
        }
        static isControlJustPressed(inputMode, control) {
          return IsControlJustPressed(inputMode, Number(control));
        }
        static isDisabledControlJustPressed(inputMode, control) {
          return IsDisabledControlJustPressed(inputMode, Number(control));
        }
        static isControlReleased(inputMode, control) {
          return IsControlReleased(inputMode, Number(control));
        }
        static isDisabledControlReleased(inputMode, control) {
          return IsDisabledControlReleased(inputMode, Number(control));
        }
        static isControlJustReleased(inputMode, control) {
          return IsControlJustReleased(inputMode, Number(control));
        }
        static isDisabledControlJustReleased(inputMode, control) {
          return IsDisabledControlJustReleased(inputMode, Number(control));
        }
        static isControlEnabled(inputMode, control) {
          return IsControlEnabled(inputMode, Number(control));
        }
        static enableControlThisFrame(inputMode, control) {
          EnableControlAction(inputMode, Number(control), true);
        }
        static disableControlThisFrame(inputMode, control) {
          DisableControlAction(inputMode, Number(control), true);
        }
        static disableAllControlsThisFrame(inputMode) {
          DisableAllControlActions(inputMode);
        }
        static enableAllControlsThisFrame(inputMode) {
          EnableAllControlActions(inputMode);
        }
        static entityFromHandle(handle) {
          switch (GetEntityType(handle)) {
            case 1:
              return new Ped(handle);
            case 2:
              return new Vehicle(handle);
            case 3:
              return new Prop(handle);
          }
          return null;
        }
        static playSound(soundFile, soundSet) {
          Audio.playSound(soundFile, soundSet);
        }
        static playMusic(musicFile) {
          Audio.playMusic(musicFile);
        }
        static stopMusic(musicFile) {
          Audio.stopMusic(musicFile);
        }
        static doesGXTEntryExist(entry) {
          if (typeof entry === "number") {
            return DoesTextLabelExist(entry.toString());
          } else {
            return DoesTextLabelExist(entry);
          }
        }
        static getGXTEntry(entry) {
          return Game.doesGXTEntryExist(entry) ? GetLabelText(entry.toString()) : "";
        }
        set ExtendWorldBoundry(vec) {
          ExtendWorldBoundaryForPlayer(vec.x, vec.y, vec.z);
        }
        get LastVehicle() {
          return new Vehicle(GetPlayersLastVehicle());
        }
      };
      Game.hashCache = /* @__PURE__ */ new Map();
    }
  });

  // node_modules/@nativewrappers/client/lib/Camera.js
  var Camera;
  var init_Camera = __esm({
    "node_modules/@nativewrappers/client/lib/Camera.js"() {
      init_models();
      init_utils();
      init_Animations();
      Camera = class {
        constructor(handle) {
          this.shakeNames = [
            "HAND_SHAKE",
            "SMALL_EXPLOSION_SHAKE",
            "MEDIUM_EXPLOSION_SHAKE",
            "LARGE_EXPLOSION_SHAKE",
            "JOLT_SHAKE",
            "VIBRATE_SHAKE",
            "ROAD_VIBRATION_SHAKE",
            "DRUNK_SHAKE",
            "SKY_DIVING_SHAKE",
            "FAMILY5_DRUG_TRIP_SHAKE",
            "DEATH_FAIL_IN_EFFECT_SHAKE"
          ];
          this.handle = handle;
        }
        get IsActive() {
          return IsCamActive(this.handle);
        }
        set IsActive(active) {
          SetCamActive(this.handle, active);
        }
        get Position() {
          const pos = GetCamCoord(this.handle);
          return new Vector3(pos[0], pos[1], pos[2]);
        }
        set Position(position) {
          SetCamCoord(this.handle, position.x, position.y, position.z);
        }
        get Rotation() {
          const rot = GetCamRot(this.handle, 2);
          return new Vector3(rot[0], rot[1], rot[2]);
        }
        set Rotation(rotation) {
          SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
        }
        get Direction() {
          return this.ForwardVector;
        }
        set Direction(direction) {
          const dir = direction.normalize;
          const vec1 = new Vector3(dir.x, dir.y, 0);
          const vec2 = new Vector3(dir.z, vec1.distanceSquared(vec1), 0);
          const vec3 = vec2.normalize;
          this.Rotation = new Vector3(Math.atan2(vec3.x, vec3.y) * 57.29577951308232, this.Rotation.y, Math.atan2(dir.x, dir.y) * -57.29577951308232);
        }
        get ForwardVector() {
          const rotation = Vector3.multiply(this.Rotation, Math.PI / 180);
          const normalized = Vector3.normalize(new Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
          return new Vector3(normalized.x, normalized.y, normalized.z);
        }
        get FieldOfView() {
          return GetCamFov(this.handle);
        }
        set FieldOfView(fieldOfView) {
          SetCamFov(this.handle, fieldOfView);
        }
        get NearClip() {
          return GetCamNearClip(this.handle);
        }
        set NearClip(nearClip) {
          SetCamNearClip(this.handle, nearClip);
        }
        get FarClip() {
          return GetCamFarClip(this.handle);
        }
        set FarClip(farClip) {
          SetCamFarClip(this.handle, farClip);
        }
        set NearDepthOfField(nearDepthOfField) {
          SetCamNearDof(this.handle, nearDepthOfField);
        }
        get FarDepthOfField() {
          return GetCamFarDof(this.handle);
        }
        set FarDepthOfField(farDepthOfField) {
          SetCamFarDof(this.handle, farDepthOfField);
        }
        set DepthOfFieldStrength(strength) {
          SetCamDofStrength(this.handle, strength);
        }
        set MotionBlurStrength(strength) {
          SetCamMotionBlurStrength(this.handle, strength);
        }
        shake(shakeType, amplitude) {
          ShakeCam(this.handle, this.shakeNames[Number(shakeType)], amplitude);
        }
        stopShaking() {
          StopCamShaking(this.handle, true);
        }
        get IsShaking() {
          return IsCamShaking(this.handle);
        }
        set ShakeAmplitude(amplitude) {
          SetCamShakeAmplitude(this.handle, amplitude);
        }
        async playAnim(animName, animDict, position, rotation) {
          await LoadAnimDict(animDict);
          PlayCamAnim(this.handle, animName, animDict, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, false, 2);
          RemoveAnimDict(animDict);
        }
        pointAt(target, offset = new Vector3(0, 0, 0)) {
          if (target instanceof Entity2) {
            PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
          } else if (target instanceof PedBone) {
            PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
          } else {
            PointCamAtCoord(this.handle, target.x, target.y, target.z);
          }
        }
        stopPointing() {
          StopCamPointing(this.handle);
        }
        interpTo(to, duration, easePosition, easeRotation) {
          SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
        }
        get IsInterpolating() {
          return IsCamInterpolating(this.handle);
        }
        attachTo(object, offset) {
          if (object instanceof Entity2) {
            AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
          } else if (object instanceof PedBone) {
            AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
          }
        }
        detach() {
          DetachCam(this.handle);
        }
        delete() {
          DestroyCam(this.handle, false);
        }
        exists() {
          return DoesCamExist(this.handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/enums/CameraTypes.js
  var CameraTypes;
  var init_CameraTypes = __esm({
    "node_modules/@nativewrappers/client/lib/enums/CameraTypes.js"() {
      (function(CameraTypes2) {
        CameraTypes2["Scripted"] = "DEFAULT_SCRIPTED_CAMERA";
        CameraTypes2["Animated"] = "DEFAULT_ANIMATED_CAMERA";
        CameraTypes2["Spline"] = "DEFAULT_SPLINE_CAMERA";
        CameraTypes2["ScriptedFly"] = "DEFAULT_SCRIPTED_FLY_CAMERA";
        CameraTypes2["TimedSpline"] = "TIMED_SPLINE_CAMERA";
      })(CameraTypes || (CameraTypes = {}));
    }
  });

  // node_modules/@nativewrappers/client/lib/Pickup.js
  var Pickup;
  var init_Pickup = __esm({
    "node_modules/@nativewrappers/client/lib/Pickup.js"() {
      init_utils();
      Pickup = class {
        constructor(handle) {
          this.handle = handle;
        }
        get Position() {
          const coords = GetPickupCoords(this.handle);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        get IsCollected() {
          return HasPickupBeenCollected(this.handle);
        }
        delete() {
          RemovePickup(this.handle);
        }
        exists() {
          return DoesPickupExist(this.handle);
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/Raycast.js
  var RaycastResult;
  var init_Raycast = __esm({
    "node_modules/@nativewrappers/client/lib/Raycast.js"() {
      init_Game();
      init_utils();
      RaycastResult = class {
        constructor(handle) {
          this.handle = handle;
          this.hitPositionArg = new Vector3(0, 0, 0);
          this.hitSomethingArg = false;
          this.entityHandleArg = null;
          this.surfaceNormalArg = new Vector3(0, 0, 0);
          this.materialArg = 0;
          const results = GetShapeTestResultEx(this.handle);
          this.hitSomethingArg = results[1];
          this.hitPositionArg = new Vector3(results[2][0], results[2][1], results[2][2]);
          this.surfaceNormalArg = new Vector3(results[3][0], results[3][1], results[3][2]);
          this.materialArg = results[4];
          this.entityHandleArg = Game.entityFromHandle(results[5]);
          this.result = results[0];
        }
        get HitEntity() {
          return this.entityHandleArg;
        }
        get HitPosition() {
          return this.hitPositionArg;
        }
        get SurfaceNormal() {
          return this.surfaceNormalArg;
        }
        get DidHit() {
          return this.hitSomethingArg;
        }
        get DidHitEntity() {
          return this.entityHandleArg?.Handle !== 0;
        }
        get Material() {
          return this.materialArg;
        }
        get Result() {
          return this.result;
        }
      };
    }
  });

  // node_modules/@nativewrappers/client/lib/World.js
  var World;
  var init_World = __esm({
    "node_modules/@nativewrappers/client/lib/World.js"() {
      init_lib();
      init_Blip2();
      init_Camera();
      init_enums();
      init_CameraTypes();
      init_hashes();
      init_models();
      init_Pickup();
      init_Raycast();
      init_utils();
      World = class {
        static get RenderingCamera() {
          return new Camera(GetRenderingCam());
        }
        static set RenderingCamera(value) {
          if (value === null) {
            RenderScriptCams(false, false, 3e3, true, false);
          } else {
            value.IsActive = true;
            RenderScriptCams(true, false, 3e3, true, false);
          }
        }
        static get CurrentDate() {
          const year = GetClockYear();
          const month = GetClockMonth();
          const day = GetClockDayOfMonth();
          const hour = GetClockHours();
          const minutes = GetClockMinutes();
          const seconds = GetClockSeconds();
          return new Date(year, month, day, hour, minutes, seconds);
        }
        static set CurrentDate(date) {
          SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
          NetworkOverrideClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        static set Blackout(value) {
          SetBlackout(value);
        }
        static get CloudHat() {
          return this.currentCloudHat;
        }
        static set CloudHat(value) {
          this.currentCloudHat = value;
          if (this.currentCloudHat === CloudHat.Unknown) {
            this.currentCloudHat = CloudHat.Clear;
            ClearCloudHat();
            return;
          }
          SetCloudHatTransition(this.cloudHatDict.get(this.currentCloudHat) ?? "", 3);
        }
        static get CloudHatOpacity() {
          return GetCloudHatOpacity();
        }
        static set CloudHatOpacity(value) {
          SetCloudHatOpacity(Maths.clamp(value, 0, 1));
        }
        static get Weather() {
          switch (GetPrevWeatherTypeHashName()) {
            case -1750463879:
              return Weather.ExtraSunny;
            case 916995460:
              return Weather.Clear;
            case -1530260698:
              return Weather.Neutral;
            case 282916021:
              return Weather.Smog;
            case -1368164796:
              return Weather.Foggy;
            case 821931868:
              return Weather.Clouds;
            case -1148613331:
              return Weather.Overcast;
            case 1840358669:
              return Weather.Clearing;
            case 1420204096:
              return Weather.Raining;
            case -1233681761:
              return Weather.ThunderStorm;
            case 669657108:
              return Weather.Blizzard;
            case -273223690:
              return Weather.Snowing;
            case 603685163:
              return Weather.Snowlight;
            case -1429616491:
              return Weather.Christmas;
            case -921030142:
              return Weather.Halloween;
            default:
              return Weather.Unknown;
          }
        }
        static set Weather(value) {
          if (value !== Weather.Unknown) {
            const weather = this.weatherDict[value];
            SetWeatherTypeOverTime(weather, 1);
            setTimeout(() => {
              SetWeatherTypeNow(weather);
            }, 100);
          }
        }
        static get NextWeather() {
          switch (GetNextWeatherTypeHashName()) {
            case -1750463879:
              return Weather.ExtraSunny;
            case 916995460:
              return Weather.Clear;
            case -1530260698:
              return Weather.Neutral;
            case 282916021:
              return Weather.Smog;
            case -1368164796:
              return Weather.Foggy;
            case 821931868:
              return Weather.Clouds;
            case -1148613331:
              return Weather.Overcast;
            case 1840358669:
              return Weather.Clearing;
            case 1420204096:
              return Weather.Raining;
            case -1233681761:
              return Weather.ThunderStorm;
            case 669657108:
              return Weather.Blizzard;
            case -273223690:
              return Weather.Snowing;
            case 603685163:
              return Weather.Snowlight;
            case -1429616491:
              return Weather.Christmas;
            case -921030142:
              return Weather.Halloween;
            default:
              return Weather.Unknown;
          }
        }
        static set NextWeather(value) {
          if (value !== Weather.Unknown) {
            const weather = this.weatherDict[value];
            SetWeatherTypeOverTime(weather, 0);
          }
        }
        static get WeatherTransition() {
          const transition = GetWeatherTypeTransition();
          return [this.weatherDict[transition[0]], this.weatherDict[transition[1]], transition[2]];
        }
        static set WeatherTransition(transition) {
          SetWeatherTypeTransition(transition[0], transition[1], transition[2]);
        }
        static transitionToWeather(weather, duration) {
          if (weather !== Weather.Unknown) {
            SetWeatherTypeOverTime(this.weatherDict[weather], duration);
          }
        }
        static destroyAllCameras() {
          DestroyAllCams(false);
        }
        static createBlip(position, radius) {
          if (radius !== null && radius !== void 0) {
            return new Blip(AddBlipForRadius(position.x, position.y, position.z, radius));
          }
          return new Blip(AddBlipForCoord(position.x, position.y, position.z));
        }
        static createCamera(cameraType = CameraTypes.Scripted, active = true) {
          return new Camera(CreateCam(cameraType, active));
        }
        static createCameraWithParams(cameraType = CameraTypes.Scripted, position, rotation, fieldOfView) {
          return new Camera(CreateCamWithParams(cameraType, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, fieldOfView, true, 2));
        }
        static async createPed(model, position, heading = 0, isNetwork = true) {
          if (!model.IsPed || !await model.request(1e3)) {
            return null;
          }
          return new Ped(CreatePed(26, model.Hash, position.x, position.y, position.z, heading, isNetwork, false));
        }
        static createRandomPed(position) {
          return new Ped(CreateRandomPed(position.x, position.y, position.z));
        }
        static async createVehicle(model, position, heading = 0, isNetwork = true) {
          if (!model.IsVehicle || !await model.request(1e3)) {
            return null;
          }
          return new Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, isNetwork, false));
        }
        static async createRandomVehicle(position, heading = 0, isNetwork = true) {
          const vehicleCount = Object.keys(VehicleHash).length / 2;
          const randomIndex = Maths.getRandomInt(0, vehicleCount);
          const randomVehicleName = VehicleHash[randomIndex];
          const modelHash = GetHashKey(randomVehicleName);
          const model = new Model(modelHash);
          if (!model.IsVehicle || !await model.request(1e3)) {
            return null;
          }
          return new Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, isNetwork, false));
        }
        static async createProp(model, position, dynamic, placeOnGround, isNetwork = true) {
          if (!model.IsProp || !await model.request(1e3)) {
            return null;
          }
          const prop2 = new Prop(CreateObject(model.Hash, position.x, position.y, position.z, isNetwork, true, dynamic));
          if (placeOnGround) {
            prop2.placeOnGround();
          }
          return prop2;
        }
        static async CreatePickup(type, position, model, value, rotation) {
          if (!await model.request(1e3)) {
            return null;
          }
          let handle = 0;
          if (rotation !== void 0)
            handle = CreatePickupRotate(type, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, 0, value, 2, true, model.Hash);
          else
            handle = CreatePickup(type, position.x, position.y, position.z, 0, value, true, model.Hash);
          if (handle === 0) {
            return null;
          }
          return new Pickup(handle);
        }
        static async CreateAmbientPickup(type, position, model, value) {
          if (!await model.request(1e3)) {
            return null;
          }
          const handle = CreateAmbientPickup(type, position.x, position.y, position.z, 0, value, model.Hash, false, true);
          if (handle === 0) {
            return null;
          }
          return new Prop(handle);
        }
        static drawMarker(type, position, direction, rotation, scale, color, bobUpAndDown = false, faceCamera = false, rotateY = false, textureDict = null, textureName = null, drawOnEntity = false) {
          DrawMarker(Number(type), position.x, position.y, position.z, direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, scale.x, scale.y, scale.z, color.r, color.g, color.b, color.a, bobUpAndDown, faceCamera, 2, rotateY, textureDict, textureName, drawOnEntity);
        }
        static drawLightWithRange(pos, color, range, intensity) {
          DrawLightWithRange(pos.x, pos.y, pos.z, color.r, color.g, color.b, range, intensity);
        }
        static drawSpotLight(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
          DrawSpotLight(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut);
        }
        static drawSpotLightWithShadow(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
          DrawSpotLightWithShadow(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut, 0);
        }
        static drawLine(start, end, color) {
          DrawLine(start.x, start.y, start.z, end.x, end.y, end.z, color.r, color.g, color.b, color.a);
        }
        static drawPoly(vertexA, vertexB, vertexC, color) {
          DrawPoly(vertexA.x, vertexA.y, vertexA.z, vertexB.x, vertexB.y, vertexB.z, vertexC.x, vertexC.y, vertexC.z, color.r, color.g, color.b, color.a);
        }
        static raycast(source, direction, maxDistance, options, ignoreEntity) {
          const target = Vector3.add(source, Vector3.multiply(direction, maxDistance));
          return new RaycastResult(StartShapeTestRay(source.x, source.y, source.z, target.x, target.y, target.z, Number(options), ignoreEntity.Handle, 7));
        }
        static getClosestObject(model, coords, radius = 25, isMission = false) {
          const prop2 = GetClosestObjectOfType(coords.x, coords.y, coords.z, radius, model.Hash, isMission, false, false);
          if (prop2 !== 0) {
            return new Prop(prop2);
          }
          return null;
        }
        static getAllProps() {
          const handles = GetGamePool("CObject");
          const props = [];
          handles.forEach((handle) => props.push(new Prop(handle)));
          return props;
        }
        static getAllPropsInGamePool() {
          return this.getAllProps();
        }
        static getAllPeds() {
          const handles = GetGamePool("CPed");
          const peds = [];
          handles.forEach((handle) => peds.push(new Ped(handle)));
          return peds;
        }
        static getAllPedsInGamePool() {
          return this.getAllPeds();
        }
        static getAllVehicles() {
          const handles = GetGamePool("CVehicle");
          const vehicles = [];
          handles.forEach((handle) => vehicles.push(new Vehicle(handle)));
          return vehicles;
        }
        static getAllVehiclesInGamePool() {
          return this.getAllVehicles();
        }
        static getClosestVehicle(coords) {
          const vehicles = this.getAllVehicles();
          let currentVeh = null;
          let lastDistance = 9999;
          for (const vehicle of vehicles) {
            if (!currentVeh) {
              currentVeh = vehicle;
              lastDistance = coords.distance(vehicle.Position);
              continue;
            }
            const distance = coords.distance(vehicle.Position);
            if (distance < lastDistance) {
              currentVeh = vehicle;
              lastDistance = distance;
            }
          }
          return currentVeh;
        }
        static getAllPickups() {
          const pickups = [];
          const [handle, entityHandle] = FindFirstPickup(0);
          let pickup = new Pickup(entityHandle);
          if (pickup !== void 0 && pickup !== null && pickup.exists()) {
            pickups.push(pickup);
          }
          let findResult = [false, 0];
          do {
            findResult = FindNextPickup(handle, 0);
            if (findResult[0]) {
              pickup = new Pickup(findResult[1]);
              if (pickup !== void 0 && pickup !== null && pickup.exists()) {
                pickups.push(pickup);
              }
            }
          } while (findResult[0]);
          EndFindPickup(handle);
          return pickups;
        }
        static getAllPickupsInGamePool() {
          const handles = GetGamePool("CPickup");
          const pickups = [];
          handles.forEach((handle) => pickups.push(new Pickup(handle)));
          return pickups;
        }
      };
      World.currentCloudHat = CloudHat.Clear;
      World.cloudHatDict = /* @__PURE__ */ new Map([
        [CloudHat.Unknown, "Unknown"],
        [CloudHat.Altostratus, "altostratus"],
        [CloudHat.Cirrus, "Cirrus"],
        [CloudHat.Cirrocumulus, "cirrocumulus"],
        [CloudHat.Clear, "Clear 01"],
        [CloudHat.Cloudy, "Cloudy 01"],
        [CloudHat.Contrails, "Contrails"],
        [CloudHat.Horizon, "Horizon"],
        [CloudHat.HorizonBand1, "horizonband1"],
        [CloudHat.HorizonBand2, "horizonband2"],
        [CloudHat.HorizonBand3, "horizonband3"],
        [CloudHat.Horsey, "horsey"],
        [CloudHat.Nimbus, "Nimbus"],
        [CloudHat.Puffs, "Puffs"],
        [CloudHat.Rain, "RAIN"],
        [CloudHat.Snowy, "Snowy 01"],
        [CloudHat.Stormy, "Stormy 01"],
        [CloudHat.Stratoscumulus, "stratoscumulus"],
        [CloudHat.Stripey, "Stripey"],
        [CloudHat.Shower, "shower"],
        [CloudHat.Wispy, "Wispy"]
      ]);
      World.weatherDict = [
        "EXTRASUNNY",
        "CLEAR",
        "CLOUDS",
        "SMOG",
        "FOGGY",
        "OVERCAST",
        "RAIN",
        "THUNDER",
        "CLEARING",
        "NEUTRAL",
        "SNOW",
        "BLIZZARD",
        "SNOWLIGHT",
        "XMAS"
      ];
    }
  });

  // node_modules/@nativewrappers/client/lib/ui/interfaces/index.js
  var init_interfaces = __esm({
    "node_modules/@nativewrappers/client/lib/ui/interfaces/index.js"() {
    }
  });

  // node_modules/@nativewrappers/client/lib/ui/menu/items/panels/index.js
  var init_panels = __esm({
    "node_modules/@nativewrappers/client/lib/ui/menu/items/panels/index.js"() {
    }
  });

  // node_modules/@nativewrappers/client/lib/ui/menu/items/index.js
  var init_items = __esm({
    "node_modules/@nativewrappers/client/lib/ui/menu/items/index.js"() {
      init_panels();
    }
  });

  // node_modules/@nativewrappers/client/lib/ui/menu/modules/index.js
  var init_modules = __esm({
    "node_modules/@nativewrappers/client/lib/ui/menu/modules/index.js"() {
    }
  });

  // node_modules/@nativewrappers/client/lib/ui/menu/index.js
  var init_menu = __esm({
    "node_modules/@nativewrappers/client/lib/ui/menu/index.js"() {
      init_items();
      init_modules();
    }
  });

  // node_modules/@nativewrappers/client/lib/ui/index.js
  var init_ui = __esm({
    "node_modules/@nativewrappers/client/lib/ui/index.js"() {
      init_interfaces();
      init_menu();
    }
  });

  // node_modules/@nativewrappers/client/lib/weapon/index.js
  var init_weapon = __esm({
    "node_modules/@nativewrappers/client/lib/weapon/index.js"() {
    }
  });

  // node_modules/@nativewrappers/client/lib/weaponComponent/index.js
  var init_weaponComponent = __esm({
    "node_modules/@nativewrappers/client/lib/weaponComponent/index.js"() {
    }
  });

  // node_modules/@nativewrappers/client/lib/index.js
  var init_lib = __esm({
    "node_modules/@nativewrappers/client/lib/index.js"() {
      init_utils();
      init_Game();
      init_World();
      init_Model();
      init_models();
      init_enums();
      init_hashes();
      init_ui();
      init_weapon();
      init_weaponComponent();
    }
  });

  // ../typings/darkmarket.ts
  var init_darkmarket = __esm({
    "../typings/darkmarket.ts"() {
    }
  });

  // client/cl_darkmarket.ts
  var require_cl_darkmarket = __commonJS({
    "client/cl_darkmarket.ts"(exports) {
      init_lib();
      init_darkmarket();
      init_fivem();
      init_cl_utils();
      RegisterNuiCallbackType("npwd:fetchCrypto" /* FETCH_CRYPTO */);
      RegisterNuiCallbackType("npwd:makePurchase" /* MAKE_PURCHASE */);
      RegisterNuiProxy("npwd:makePurchase" /* MAKE_PURCHASE */);
      RegisterNuiCallbackType("npwd:tradeCrypto" /* INIATE_TRADE */);
      on(`__cfx_nui:${"npwd:fetchCrypto" /* FETCH_CRYPTO */}`, (data, cb) => {
        emitNet("npwd:fetchCrypto" /* FETCH_CRYPTO */);
        cb({});
      });
      onNet("npwd:showCryptoUi" /* SHOW_CRYPTO_UI */, (amount) => {
        SendNUIMessage({
          app: "DARKMARKET",
          method: "npwd:showCryptoUi" /* SHOW_CRYPTO_UI */,
          data: amount
        });
      });
      onNet("npwd:pickupWeapons" /* PICKUP_WEAPONS */, (coords, alertId) => __async(exports, null, function* () {
        const blip = World.createBlip(coords, 5);
        blip.Name = "Drop Off";
        blip.ShowRoute = true;
        blip.Sprite = 175;
        blip.Color = BlipColor.Yellow;
        SetBlipRouteColour(blip.Handle, BlipColor.Yellow);
        const weaponDropTick = setTick(() => __async(exports, null, function* () {
          if (Game.PlayerPed.Position.distance(coords) < 5) {
            yield Delay(250);
            blip.delete();
            clearTick(weaponDropTick);
          }
        }));
        yield Delay(1e4);
        SendNUIMessage({
          app: "DARKMARKET",
          method: "npwd:sendDarkMarketNotification" /* SEND_NOTIFICATION */,
          data: {
            title: "Darkmarket Alert",
            bankNotify: alertId,
            message: "Get to a car, you have 15 minutes."
          }
        });
      }));
      on(`__cfx_nui:${"npwd:tradeCrypto" /* INIATE_TRADE */}`, (data, cb) => {
        emitNet("npwd:tradeCrypto" /* INIATE_TRADE */, data);
        cb({});
      });
      onNet("npwd:dmAlertSuccess" /* ALERT_SUCCESS */, () => {
        SendNUIMessage({
          app: "DARKMARKET",
          method: "npwd:dmAlertSuccess" /* ALERT_SUCCESS */
        });
      });
      onNet("npwd:dmAlertFailure" /* ALERT_FAILURE */, () => {
        SendNUIMessage({
          app: "DARKMARKET",
          method: "npwd:dmAlertFailure" /* ALERT_FAILURE */
        });
      });
      onNet("npwd:dmNotifyOfTrade" /* NOTIFY_OF_TRADE */, (alertId) => {
        SendNUIMessage({
          app: "DARKMARKET",
          method: "npwd:sendDarkMarketNotification" /* SEND_NOTIFICATION */,
          data: {
            title: "Darkmarket Alert",
            bankNotify: alertId,
            message: "Coins received!"
          }
        });
      });
      onNet("npwd:spawnWeapons", (coords, weaponList) => {
        emitNet("pma-inv:world:openInventory", [coords.x, coords.y, coords.z], weaponList);
      });
    }
  });

  // ../typings/bennys.ts
  var init_bennys = __esm({
    "../typings/bennys.ts"() {
    }
  });

  // client/cl_bennys.ts
  var init_cl_bennys = __esm({
    "client/cl_bennys.ts"() {
      init_bennys();
      RegisterNuiCallbackType("npwd:getVehicleList" /* GET_VEHICLE_LIST */);
      RegisterNuiCallbackType("npwd:freeVehicle" /* FREE_VEHICLE */);
      RegisterNuiCallbackType("npwd:abandonVehicle" /* ABANDON_VEHICLE */);
      on(`__cfx_nui:${"npwd:getVehicleList" /* GET_VEHICLE_LIST */}`, (data, cb) => {
        emitNet("npwd:getVehicleList" /* GET_VEHICLE_LIST */);
        cb({});
      });
      on(`__cfx_nui:${"npwd:freeVehicle" /* FREE_VEHICLE */}`, (data, cb) => {
        emitNet("npwd:freeVehicle" /* FREE_VEHICLE */, data);
        cb({});
      });
      on(`__cfx_nui:${"npwd:abandonVehicle" /* ABANDON_VEHICLE */}`, (data, cb) => {
        emitNet("npwd:abandonVehicle" /* ABANDON_VEHICLE */, data);
        cb({});
      });
      onNet("npwd:getVehicleList" /* GET_VEHICLE_LIST */, (vehicleList) => {
        vehicleList.map((veh) => veh.model = GetDisplayNameFromVehicleModel(veh.model));
        SendNUIMessage({
          app: "BENNYS",
          method: "npwd:getVehicleList" /* GET_VEHICLE_LIST */,
          data: {
            vehicleList,
            impound: {
              regularFee: 5e3,
              policeFee: 12e3
            }
          }
        });
      });
      onNet("npwd:freeVehicle" /* FREE_VEHICLE */, () => {
        SendNUIMessage({
          app: "BENNYS",
          method: "npwd:freeVehicle" /* FREE_VEHICLE */
        });
        emitNet("npwd:getVehicleList" /* GET_VEHICLE_LIST */);
      });
      onNet("npwd:failImpound" /* FAIL_IMPOUND */, () => {
        SendNUIMessage({
          app: "BENNYS",
          method: "npwd:failImpound" /* FAIL_IMPOUND */
        });
      });
      onNet("npwd:abandonSuccess" /* ABANDON_SUCCESS */, () => {
        SendNUIMessage({
          app: "BENNYS",
          method: "npwd:abandonSuccess" /* ABANDON_SUCCESS */
        });
        emitNet("npwd:getVehicleList" /* GET_VEHICLE_LIST */);
      });
      onNet("npwd:abandonFail" /* ABANDON_FAIL */, () => {
        SendNUIMessage({
          app: "BENNYS",
          method: "npwd:abandonFail" /* ABANDON_FAIL */
        });
        emitNet("npwd:getVehicleList" /* GET_VEHICLE_LIST */);
      });
    }
  });

  // ../typings/property.ts
  var init_property = __esm({
    "../typings/property.ts"() {
    }
  });

  // client/cl_property.ts
  var require_cl_property = __commonJS({
    "client/cl_property.ts"(exports) {
      init_property();
      onNet("npwd:property:reload" /* RELOAD_APP */, () => __async(exports, null, function* () {
        emitNet("npwd:property:addPlayerCache" /* ADD_PLAYER */);
      }));
      onNet("pma:playerLoaded", () => {
        emitNet("npwd:property:addPlayerCache" /* ADD_PLAYER */);
      });
      RegisterNuiCallbackType("npwd:property:fetchOwnedProperties" /* FETCH_OWNED_PROPERTIES */);
      RegisterNuiCallbackType("npwd:property:getOnlinePlayers" /* GET_PLAYERS */);
      RegisterNuiCallbackType("npwd:property:givePlayerKey" /* GIVE_PLAYER_KEY */);
      RegisterNuiCallbackType("npwd:property:fetchKeyHolders" /* FETCH_KEY_HOLDERS */);
      RegisterNuiCallbackType("npwd:property:removePlayerKey" /* REMOVE_PLAYER_KEY */);
      onNet("npwd:property:getOwnedProperties", (properties) => {
        SendNUIMessage({
          app: "PROPERTY",
          method: "npwd:property:getOwnedProperties",
          data: properties
        });
      });
      on(`__cfx_nui:${"npwd:property:fetchOwnedProperties" /* FETCH_OWNED_PROPERTIES */}`, (data, cb) => {
        emitNet("pma-property-manager:getOwnedProperties");
        cb({});
      });
      on(`__cfx_nui:${"npwd:property:getOnlinePlayers" /* GET_PLAYERS */}`, (data, cb) => {
        emitNet("npwd:property:getOnlinePlayers" /* GET_PLAYERS */);
        cb({});
      });
      on(`__cfx_nui:${"npwd:property:givePlayerKey" /* GIVE_PLAYER_KEY */}`, (KeyData, cb) => {
        emitNet("pma-property-manager:givePlayerKey", KeyData);
        cb({});
      });
      onNet("npwd:property:getOnlinePlayers" /* GET_PLAYERS */, (players, source) => {
        const playersCopy = __spreadValues({}, players);
        delete playersCopy[source];
        SendNUIMessage({
          app: "PROPERTY",
          method: `${"npwd:property:getOnlinePlayers" /* GET_PLAYERS */}`,
          data: playersCopy
        });
      });
      var iterator2 = 0;
      onNet("npwd:property:alert", (alertMsg) => {
        SendNUIMessage({
          app: "PROPERTY",
          method: "npwd:property:alert",
          data: {
            title: "Property Alert",
            propertyNotify: iterator2 = iterator2 + 1,
            message: alertMsg
          }
        });
      });
      onNet("npwd:property:clearGiveKey", () => {
        SendNUIMessage({
          app: "PROPERTY",
          method: "npwd:property:clearGiveKey"
        });
      });
      on(`__cfx_nui:${"npwd:property:fetchKeyHolders" /* FETCH_KEY_HOLDERS */}`, (property, cb) => {
        emitNet("pma-property-manager:fetchKeyHolders", property);
        cb({});
      });
      onNet("npwd:property:returnKeyHolders", (sharedKeys) => {
        SendNUIMessage({
          app: "PROPERTY",
          method: "npwd:property:returnKeyHolders",
          data: sharedKeys
        });
      });
      on(`__cfx_nui:${"npwd:property:removePlayerKey" /* REMOVE_PLAYER_KEY */}`, (data, cb) => {
        emitNet("pma-property-manager:removePlayerKey", data);
        cb({});
      });
    }
  });

  // ../typings/boosting.ts
  var init_boosting = __esm({
    "../typings/boosting.ts"() {
    }
  });

  // client/cl_boosting.ts
  var init_cl_boosting = __esm({
    "client/cl_boosting.ts"() {
      init_boosting();
      RegisterNuiCallbackType("npwd:boosting:loadBoostingProfile" /* LOAD_BOOSTING_PROFILE */);
      RegisterNuiCallbackType("npwd:boosting:joinWaitList" /* JOIN_WAITLIST */);
      RegisterNuiCallbackType("npwd:boosting:leaveWaitList" /* LEAVE_WAITLIST */);
      on(`__cfx_nui:${"npwd:boosting:loadBoostingProfile" /* LOAD_BOOSTING_PROFILE */}`, (data, cb) => {
        emitNet("npwd:boosting:loadBoostingProfile" /* LOAD_BOOSTING_PROFILE */);
        cb({});
      });
      on(`__cfx_nui:${"npwd:boosting:joinWaitList" /* JOIN_WAITLIST */}`, (data, cb) => {
        emitNet("npwd:boosting:joinWaitList" /* JOIN_WAITLIST */, data.boostProfile);
        cb({});
      });
      on(`__cfx_nui:${"npwd:boosting:leaveWaitList" /* LEAVE_WAITLIST */}`, (data, cb) => {
        emitNet("npwd:boosting:leaveWaitList" /* LEAVE_WAITLIST */);
        cb({});
      });
      onNet("npwd:boosting:loadBoostingProfile" /* LOAD_BOOSTING_PROFILE */, (boostingProfile) => {
        SendNUIMessage({
          app: "BOOSTING",
          method: "npwd:boosting:loadBoostingProfile" /* LOAD_BOOSTING_PROFILE */,
          data: boostingProfile
        });
      });
      onNet("npwd:boosting:rewardContract" /* REWARD_CONTRACT */, () => {
        console.log("Contract rewarded!");
      });
    }
  });

  // client/client.ts
  var import_cl_photo, import_cl_exports, import_cl_darkmarket, import_cl_property, ClUtils;
  var init_client = __esm({
    "client/client.ts"() {
      init_cl_utils();
      init_cl_config();
      init_cl_main();
      init_cl_twitter();
      init_cl_contacts();
      init_cl_marketplace();
      init_cl_notes();
      import_cl_photo = __toESM(require_cl_photo());
      init_cl_messages();
      init_cl_calls_controller();
      init_cl_match();
      init_functions();
      import_cl_exports = __toESM(require_cl_exports());
      init_client_settings();
      init_cl_bank();
      import_cl_darkmarket = __toESM(require_cl_darkmarket());
      init_cl_bennys();
      import_cl_property = __toESM(require_cl_property());
      init_cl_boosting();
      ClUtils = new ClientUtils();
    }
  });
  init_client();
})();
