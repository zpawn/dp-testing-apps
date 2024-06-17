import type { IDeskproClient } from "@deskpro/app-sdk";

const mockClient: IDeskproClient = {
  run: () => Promise.resolve(),

  onReady: () => {},
  onShow: () => {},
  onChange: () => {},
  onTargetAction: () => {},
  onAdminSettingsChange: () => {},
  onElementEvent: () => {},

  getProxyAuth: () => new Promise(() => {}),
  getAdminGenericProxyAuth: () => new Promise(() => {}),
  resize: () => {},
  setWidth: () => {},
  setHeight: () => {},
  registerElement: () => {},
  deregisterElement: () => {},
  setBadgeCount: () => {},
  setTitle: () => {},

  entityAssociationSet: async () => {},
  entityAssociationDelete: async () => {},
  entityAssociationGet: async () => null,
  entityAssociationList: async () => [""],
  entityAssociationCountEntities: async () => 0,

  setState: async () => ({ isSuccess: false, errors: [] }),
  setUserState: async () => ({ isSuccess: false, errors: [] }),
  getState: async () => [],
  getUserState: async () => [],
  deleteState: async () => false,
  deleteUserState: async () => false,
  hasState: async () => false,
  hasUserState: async () => false,

  setSetting: async () => {},
  setSettings: async () => {},

  setBlocking: async () => {},

  registerTargetAction: async () => {},
  deregisterTargetAction: async () => {},

  getOAuth2CallbackUrl: async () => ({ url: "", statePath: "", statePathPlaceholder: "" }),
  getStaticOAuth2CallbackUrl: async () => ({ url: "" }),
  getStaticOAuth2CallbackUrlValue: async () => "",
  getStaticOAuth2Token: async () => null,
  getEntityAssociation: () => ({
    set: () => Promise.resolve(),
    delete: () => Promise.resolve(),
    get: () => Promise.resolve(null),
    list: () => Promise.resolve(["001"]),
  }),

  setAdminSetting: async () => {},
  setAdminSettingInvalid: async () => {},
  sendDeskproUIMessage: () => Promise.resolve(),

  oauth2: () => ({
    getCallbackUrl: () => Promise.resolve({
      callbackUrl: "deskpro.test/oauth2/1/generic/callback",
      poll: () => Promise.resolve({ statePath: "statePath", statePathPlaceholder: "statePathPlaceholder" }),
    }),
    getGenericCallbackUrl: () => Promise.resolve({
      callbackUrl: "deskpro.test/oauth2/1/generic/callback",
      poll: () => Promise.resolve({ token: "auth_code" }),
    }),
    getAdminGenericCallbackUrl: () => Promise.resolve({
      callbackUrl: "deskpro.test/oauth2/1/generic/callback",
      poll: () => Promise.resolve({ token: "thisIsToken" }),
    }),
  }),
  deskpro: () => ({
    send: () => Promise.resolve(),
    appendContentToActiveTicketReplyBox: () => Promise.resolve(),
    appendLinkToActiveTicketReplyBox: () => Promise.resolve(),
  }),
};

export { mockClient };
