const {JsonRpc, JsSignatureProvider,Api}=require("../ineryjs/dist");
const rpc=new JsonRpc(process.env.URL);
const signatureProvider=new JsSignatureProvider([process.env.PRIVATE_KEY]);
const api=new Api({rpc,signatureProvider});

export function Rpcs() {
  return api
}

export default Rpcs;