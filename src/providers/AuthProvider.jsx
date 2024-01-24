import { createContext, useEffect, useState } from "react"
import usePublicAxios from "../Hooks/useAxiosPublic";
import { getUserInstanceFromLS, removeInstance } from "../Utils/StorageOperations";



export const CentralContext = createContext(null);


const CentralContextComp = ({ children }) => {

  const publicAxios = usePublicAxios();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);


  // Create User
  const CreateUser = (data) => {
    setLoading(true);
    return publicAxios.post('/user', data)
  }

  // Logout User
  const LogOutUser = () => {
    setLoading(true);
    return removeInstance();
  }

  // login User
  const LoginUser=(data)=>{
    console.log("Context",data);
    return publicAxios.put('/user',data)
  }

  // Hold user Instance
  useEffect(()=>{
    // This call back function if used for hold the user instance for every effect !
    const unSubscribe =()=> getUserInstanceFromLS();
    if(unSubscribe){
      setLoading(false);
      setUser(unSubscribe);
    }else{
      setUser({})
    }
    return ()=>{
      return getUserInstanceFromLS()
    }
  },[])


  const contextInfo = {
    user,
    loading,
    CreateUser,
    LogOutUser,
    setUser,
    setLoading,
    LoginUser
  }

  return (
    <CentralContext.Provider value={contextInfo}>
      {children}
    </CentralContext.Provider>
  )
}

export default CentralContextComp