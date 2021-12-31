import { networkType, myStxAddress, userSession } from "./auth";
import {
  callReadOnlyFunction,
  cvToJSON,
  standardPrincipalCV,
  stringAsciiCV,
  bufferCV,
  responseErrorCV,
  responseOkCV,
  trueCV,
  falseCV,
  uintCV,
   intCV,
  FungibleConditionCode,
  makeStandardSTXPostCondition,
} from "@stacks/transactions";

import { openContractCall } from "@stacks/connect";

const ContractAddress = "ST2C20XGZBAYFZ1NYNHT1J6MGMM0EW9X7PFZZEXA6";

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

async function appCallPublicFunction(optionsProps) {

  if (!optionsProps)
    return new Promise((resolve, reject) => reject("no arguments provided"));

  const options = {
    ...optionsProps,
    network: networkType(),
    appDetails: {
      name: "Amortize",
      icon: window.location.origin + "/img/Logo.svg",
    },
    senderAddress: myStxAddress(),
  };


  openContractCall(options);

};

export async function LockEquity(beneficiary, unlock, amount) {

  const postConditionAddress = myStxAddress();
  const postConditionCode = FungibleConditionCode.GreaterEqual;
  const postConditionAmount = uintCV(amount).value;
  const postConditions = [
    makeStandardSTXPostCondition(postConditionAddress, postConditionCode, postConditionAmount),
  ];

  appCallPublicFunction({
    contractAddress: "STYMF4ARBZEVT61CKV8RBQHC6NCGCAF7AQWH979K",
    contractName: "lock",
    functionName: "lock",
    postConditions,
    functionArgs: [
      // enter all your function arguments here but cast them to CV first
      standardPrincipalCV(beneficiary),
      uintCV(unlock),
      uintCV(amount)
    ],
  });

};

export function AddBeneficiary(beneficiary) {
  const functionArgs = [
    standardPrincipalCV(beneficiary)
  ];

  appCallPublicFunction("equity-multi-claim", "add-beneficiary", functionArgs);
}

export function ClaimEquity() {
  const functionArgs = [
  ];

  appCallPublicFunction("equity-multi-claim", "multi-claim", functionArgs);
}