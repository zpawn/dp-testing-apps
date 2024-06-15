const mockClient = {
  getProxyAuth: () => Promise.resolve({}),
  getAdminGenericProxyAuth: () => Promise.resolve({}),
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

  setAdminSetting: async () => {},
  setAdminSettingInvalid: async () => {},

  oauth2: () => ({
    getGenericCallbackUrl: () => Promise.resolve({
      callbackUrl: "deskpro.test/oauth2/1/generic/callback",
      poll: () => Promise.resolve({ token: "auth_code" }),
    }),
  }),
};

export { mockClient };
