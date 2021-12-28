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

import { userSession } from './auth';
import { Storage } from '@stacks/storage';
import { UserSession } from '@stacks/connect';

import { v4 as uuid } from 'uuid';

const storage = new Storage({ userSession });

const USERINFO_TABLE = 'USERINFO_TABLE.json';


export const saveUserInfo = async (userSession, userinfo, isPublic) => {
  await storage.putFile(USERINFO_TABLE, JSON.stringify({ userinfo, isPublic }), {
    encrypt: !isPublic,
    dangerouslyIgnoreEtag: true,
  });
};
// export const fetchUserInfo = async (userSession, username) => {
//   const tasksJSON = await storage.getFile(USERINFO_TABLE, {
//     decrypt: false,
//     username: username || undefined,
//   });
// };

export const defaultUserInfo = [
  {
    // complete: false,
    Username: "",
    EmailAddress: "",
    FirstName: "",
    LastName: "",
    id: uuid()
  },
];

export const fetchUserInfo = async (userSession, username) => {
  try {
    /** @type {string} raw JSON stored in Gaia */
    const userInfoJSON = await storage.getFile(USERINFO_TABLE, {
      decrypt: false,
      username: username || undefined,
    });
    if (userInfoJSON) {
      const json = JSON.parse(userInfoJSON);
      if (json.isPublic) {
        return {
          userinfo: json.userinfo,
          public: true,
        };
      } else {
        if (!username) {
          const decrypted = JSON.parse(await userSession.decryptContent(userInfoJSON));
          return {
            userinfo: decrypted.userinfo,
            public: false,
          };
        }
      }
    } else {
      return {
        userinfo: username ? null : defaultUserInfo,
        public: false,
      };
    }
  } catch (error) {
    if (username) {
      return {
        userinfo: null,
      };
    } else {
      return {
        userinfo: defaultUserInfo,
      };
    }
  }
};

