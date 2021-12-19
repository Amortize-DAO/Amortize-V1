import { networkType, myStxAddress, userSession } from "./auth";
import {
  callReadOnlyFunction,
  cvToJSON,
  standardPrincipalCV,
  uintCV,
  stringAsciiCV,
  bufferCV,
  responseErrorCV,
  responseOkCV,
  trueCV,
  falseCV,
} from "@stacks/transactions";

import { openContractCall } from "@stacks/connect";

export default async function appCallReadOnlyFunction(optionsProps) {
    if (!optionsProps)
      return new Promise((resolve, reject) => reject("no arguments provided"));
  
    const options = {
      ...optionsProps,
      network: networkType(),
      senderAddress: myStxAddress(),
    };
  
    return callReadOnlyFunction(options)
      .then((response) => {
        const responseJson = cvToJSON(response);
  
        return new Promise((resolve, reject) => resolve(responseJson));
      })
      .catch((e) => {
        return new Promise((resolve, reject) => reject(e));
      });
  }