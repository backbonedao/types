export type Backbone = {
  app: App;
  id?: Id;
  events: Events;
  user: (params?: {
    name: string;
    permissions: any[];
    address: string;
  }) => Promise<boolean>;
  _getAddresses: Function;
  _LockAddress: Function;
  _removeAddress: Function;
};

export type API = {
  [key: string]: (...params: any[]) => Promise<any>;
  get: (key: string) => Promise<any>;
  getAll: () => Promise<Array<{ value: any; key: string; i: number }>>;
  query: (params: Query) => Promise<any>;
  put: (params: { key: string; value: any }) => Promise<any>;
  onAdd: (callback: Function) => Promise<any>;
};

export type App = {
  meta: Meta;
  network: Network;
  users: Users;
  _: { on: Function; listenLog: Function };
} & API;

export type Events = {
  on: (event: string, callback: Function) => any;
};

export type Id = {
  authenticateManual: (params: {
    name: string;
    permissions: any[];
    address: string;
  }) => Promise<boolean>;
  authenticate: () => Promise<boolean>;
  isAuthenticated: () => Promise<boolean>;
  registerApp: (manifest: Manifest) => Promise<boolean>;
  signObject: (params: { hash: string }) => Promise<{ signature: Buffer }>;
  getId: () => Promise<string>;
};

export type Meta = {
  getAppVersion: () => Promise<string>;
  getKeys: () => Promise<any>;
  _allMeta: Function;
  _getMeta: (key: string) => Promise<any>;
  _setMeta: Function;
};

export type Manifest = {
  [key: string]: any;
  "@id": string;
  address: string;
  permissions: any[];
  version: string;
  name: string;
  description?: string;
  git?: string;
  website?: string;
};

export type Network = {
  connect: (initiator?: { local_only: boolean }) => Promise<{
    peers: any[];
    destroyed: boolean;
    isListening: boolean;
    webrtc: any;
    webrtcOpts: any;
    ws: any;
    wsOpts: any;
  }>;
  disconnect: () => Promise<void>;
  getConnectionId: () => any;
  getNetwork: () => {
    peers: any[];
    destroyed: boolean;
    isListening: boolean;
    webrtc: any;
    webrtcOpts: any;
    ws: any;
    wsOpts: any;
  };
};

export type Users = {
  addTrustedUser: (params: {
    key: string;
    partition: any;
    skip_status_change?: boolean;
  }) => boolean;
  addUser: (params: {
    key: string;
    partition: any;
    skip_status_change?: boolean;
  }) => boolean;
  removeTrustedUser: (params: {
    key: string;
    partition: any;
    destroy?: boolean;
  }) => boolean;
  removeUser: (params: {
    key: string;
    partition: any;
    destroy?: boolean;
  }) => boolean;
};

export type Query = {
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  limit?: number;
  stream?: boolean;
  reverse?: boolean;
  include_meta?: boolean;
};
