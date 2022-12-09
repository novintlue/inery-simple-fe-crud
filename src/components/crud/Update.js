import React from 'react';
import UpdateForm from './UpdateForm';
import {Rpcs} from '../Rpc'

const UpdateData = () => {
  const [Message, setMessage] = React.useState("");
  const handleOnSubmit = async (form) => {
    const api = Rpcs()
    try{
      // create new transaction and sign it
      const tx = await api.transact({
          actions:[
              {
                account: form.user,
                name:"dbupdate",
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
  
      setMessage(tx.processed.action_traces[0].console)
  }catch(error){
      setMessage(error.toString())
  }
  };

  return (
  <>
    <React.Fragment>
      <UpdateForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
    <br></br>
    <div className="main-form">
      {Message && <div> {Message} </div>}
    </div>
  </>
  );
};

export default UpdateData;