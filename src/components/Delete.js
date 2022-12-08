import React from 'react';
import DeleteForm from './DeleteForm';
import {Rpcs} from './Rpc'

const DeleteData = () => {
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
                name:"dbdestroy",
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
      console.log(error)
      setMessage(error.toString())
  }
  };

  return (
  <>
    <React.Fragment>
      <DeleteForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment><div className="main-form">
        {Message && <div> {Message} </div>}
      </div></>
  );
};

export default DeleteData;