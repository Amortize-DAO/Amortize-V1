// import { networkType, myStxAddress, userSession } from "./auth";
// import {
//   callReadOnlyFunction,
//   cvToJSON,
//   standardPrincipalCV,
//   uintCV,
//   stringAsciiCV,
//   bufferCV,
//   responseErrorCV,
//   responseOkCV,
//   trueCV,
//   falseCV,
// } from "@stacks/transactions";
// import { userSession } from './auth';
// import { Storage } from '@stacks/storage';

// import { openContractCall } from "@stacks/connect";

// export default async function appCallReadOnlyFunction(optionsProps) {
//     if (!optionsProps)
//       return new Promise((resolve, reject) => reject("no arguments provided"));

//     const options = {
//       ...optionsProps,
//       network: networkType(),
//       senderAddress: myStxAddress(),
//     };

//     return callReadOnlyFunction(options)
//       .then((response) => {
//         const responseJson = cvToJSON(response);

//         return new Promise((resolve, reject) => resolve(responseJson));
//       })
//       .catch((e) => {
//         return new Promise((resolve, reject) => reject(e));
//       });
//   }

// src/storage.js

import { v4 as uuid } from 'uuid';
import { userSession } from './auth';
import { Storage } from '@stacks/storage';

const USERINFO_TABLE = 'USERINFO_TABLE.json';

export async function saveUserInfo(userinfo)
{
  const storage = new Storage({ userSession });
  return await storage.putFile(USERINFO_TABLE, JSON.stringify({ userinfo }));
}

export const defaultUserInfo = 
{
    Username: "",
    EmailAddress: "",
    FirstName: "",
    LastName: "",
    id: uuid(),
};

export async function fetchUserInfo()
{
  const storage = new Storage({ userSession });
  try {
    
    const userInfoJSON = await storage.getFile(USERINFO_TABLE);
    if (userInfoJSON) {
      const json = JSON.parse(userInfoJSON);
      return json.userinfo;
    }
  } catch (error) {
    return defaultUserInfo;
  }
}


