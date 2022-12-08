import React from 'react';
import ReadForm from './ReadForm';
import {Rpcs} from './Rpc'

const ReadData = () => {
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
                name:"dbread",
                authorization:[
                      {
                          actor: form.user,
                          permission:"active"
                      }
                  ],
                  data:{
                      id: form.id
                  }
              }
          ]
      },{broadcast:true,sign:true})
  
      console.log(tx) // output the tx to terminal, it's Json Object
      console.log(tx.processed.action_traces[0].console)
      setMessage(tx.processed.action_traces[0].console)
  }catch(error){
      console.log(error.toString())
      setMessage(error.toString())
  }
};

  return (
    <>
    <React.Fragment>
      <ReadForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
    <div className="main-form">
    {Message && <div> {Message} </div>}
  </div></>
  );
};

export default ReadData;