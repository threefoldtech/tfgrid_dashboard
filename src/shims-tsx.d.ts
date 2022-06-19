import Vue, { VNode } from "vue";

interface AppConfigs {
  gql_url: string;
  polkadot_url: string;
  proxy_url: string;
  version: string;
  APP_API_URL: string
  APP_STELLAR_HORIZON_URL: string
  APP_TFT_ASSET_ISSUER: string
  APP_BRIDGE_TFT_ADDRESS: string
  APP_ACTIVATION_SERVICE_URL: string
  APP_EXPLORER_URL: string
  APP_GRAPHQL_URL: string
  APP_GRIDPROXY_URL: string
  APP_NETWORK: string
}
declare let process: {
  env: {
    APP_API_URL: string
    APP_STELLAR_HORIZON_URL: string
    APP_TFT_ASSET_ISSUER: string
    APP_BRIDGE_TFT_ADDRESS: string
    APP_ACTIVATION_SERVICE_URL: string
    APP_EXPLORER_URL: string
    APP_GRAPHQL_URL: string
    APP_GRIDPROXY_URL: string
    APP_NETWORK: string
  }
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface WindowInterface extends Window {
      [url: URL]
    }

  }



  interface Window {
    configs: AppConfigs;
  }
}
