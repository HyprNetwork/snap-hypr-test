import * as precompile from 'hypr-poker-export/precompile';
import { ethers } from 'ethers';
import IMentalPokerExecAbi from 'hypr-poker-export/abi/IMentalPokerExec.json';
import IMentalPokerVerifyAbi from 'hypr-poker-export/abi/IMentalPokerVerify.json';

async function _test() {
  alert('poker test');

  // @ts-ignore
  window.ethereum.request({
    method: 'wallet_requestSnaps',
    params: { 'local:http://localhost:10000': {} },
  });

  // window.ethereum.request({
  //   method: "wallet_invokeSnap",
  //   params: {
  //     snapId: "local:http://localhost:10000",
  //     request: {
  //       method: "hello",
  //     },
  //   },
  // });
}

export function test10() {
  _test().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
// alert('test1')
// export function test10(){
//   alert('test2')
// }