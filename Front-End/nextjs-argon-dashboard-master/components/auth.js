import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Storage } from "@stacks/storage";
import { StacksMainnet, StacksTestnet } from "@stacks/network";

const appConfig = new AppConfig(["store_write", "publish_data"]);

// Set this to true if you want to use Mainnet
const boolNetworkType = false;

export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

export function networkType() {
  if (boolNetworkType) return new StacksMainnet();
  else return new StacksTestnet();
}

export function myStxAddress() {
  if (boolNetworkType) return getUserData().profile.stxAddress.mainnet;
  else return getUserData().profile.stxAddress.testnet;
}

export function authenticate() {
  showConnect({
    appDetails: {
      name: "Amortize",
      icon: window.location.origin + "/img/Logo.svg",
    },
    redirectTo: "/",
    onFinish: () => {window.location.reload()},
    userSession: userSession,
  });
}

export function getUserData() {
  if (userSession.isUserSignedIn()) {
    return userSession.loadUserData();
  }
}

export function Signout() {
  if (userSession.isUserSignedIn()) {
    userSession.signUserOut("/profile");
  }
}
