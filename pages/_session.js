import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Placeholder } from "@components";

const Forbidden = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Placeholder title="Forbidden" message="You don't have access" icon="🚫" />
    </div>
  );
}

const Session = ({children}) => {
  const [logged, setLogged] = useState(false);
  const router = useRouter()

  useEffect(() => {
    //read token from localStorage
      if (localStorage.getItem("token")) {
        setLogged(true);
      } else {
        // router.push({
        //     pathname: '/'
        // });
        setLogged(false);
      }
      // localStorage.getItem("token") ? setLogged(true) : setLogged(false);
    // return () => {
    //   console.log(logged)
    // };
  }, []);
    return (
        <>
          { logged ? children : <Forbidden /> }
        </>
    );
  };
  
  export default Session
  