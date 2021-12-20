import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Storage } from '@stacks/storage';
import { StacksMainnet, StacksTestnet } from '@stacks/network';

const appConfig = new AppConfig(['store_write', 'publish_data']);

// Set this to true if you want to use Mainnet
const boolNetworkType = false; 

export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

export function networkType() {
  if(boolNetworkType)
    return new StacksMainnet();
  else 
    return new StacksTestnet();
}

export function myStxAddress() {
  if(boolNetworkType)
    if(getUserData() != null)
      return getUserData().profile.stxAddress.mainnet;
    else 
      return "";
  else
    if(getUserData() != null)
      return getUserData().profile.stxAddress.testnet;
    else
      return "";
}

export function authenticate() {
  showConnect({
    appDetails: {
      name: 'Amortize',
      icon: window.location.origin + '/assets/img/brand/Amortize_Logo1.png',
    },
    redirectTo: '/',
    onFinish: () => {
      // Get Access rights from smart contract
      window.location.assign("/admin/profile");
     
    },
    userSession: userSession,
  });
}

export function getUserData() {
  if(userSession.loadUserData() != undefined)
    return userSession.loadUserData();
  else
    return null;
  
}