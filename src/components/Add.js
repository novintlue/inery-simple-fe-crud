import React from 'react';
import DataForm from './AddForm';
import {Rpcs} from './Rpc'

const AddData = () => {
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
                name:"dbcreate",
                authorization:[
                      {
                          actor: form.user,
                          permission:"active"
                      }
                  ],
                  data:{
                      id: form.id, user: form.user, data: form.data
                  }
              }
          ]
      },{broadcast:true,sign:true})
  
      console.log(tx) // output the tx to terminal, it's Json Object
      console.log(tx.processed.action_traces[0].console)
      setMessage(tx.processed.action_traces[0].console)
  }catch(error){
      console.log(error)
      setMessage(error.toSting())
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

export default AddData;