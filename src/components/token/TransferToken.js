import React from 'react';
import DataForm from './TransferTokenForm';
import {Rpcs} from '../Rpc'

const Data = () => {
  const [Message, setMessage] = React.useState("");
  const handleOnSubmit = async (form) => {
    const api = Rpcs()
    console.log(form);
    try{
      // create new transaction and sign it
      const tx = await api.transact({
          actions:[
              {
                account: form.user,
                name:"transfer",
                authorization:[
                      {
                          actor: form.user,
                          permission:"active"
                      }
                  ],
                  data:{
                    from: form.from, to: form.to, quantity: form.quantity, memo: form.memo
                  }
              }
          ]
      },{broadcast:true,sign:true})
  
      console.log(tx) // output the tx to terminal, it's Json Object
      console.log(tx.processed.action_traces[0].console)
      setMessage(tx.processed.action_traces[0].console)
  }catch(error){
      console.log(error)
      setMessage(error.toString())
  }
  };

  return (
    <><React.Fragment>
      <DataForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment><div className="main-form">
        {Message && <div> {Message} </div>}
      </div></>
  );
};

export default Data;