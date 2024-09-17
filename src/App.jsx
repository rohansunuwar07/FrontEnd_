import { createContext, useState } from "react";
import AppLink from "./AppLink";
import Home from "./Home";
import LearnExternalCss from "./LearnCss/LearnExternalCss";
import LearnInternalCss from "./LearnCss/LearnInternalCss";
import GetDynamicRoute from "./LearnDynamicRoute/GetDynamicRoute";
import LearnForm from "./LearnForm/LearnForm";
import LearnForm1 from "./LearnForm/LearnForm1";
import GetLocalStorage from "./LearnLocalStorage/GetLocalStorage";
import RemoveLocalStorage from "./LearnLocalStorage/RemoveLocalStorage";
import SetLocalStorage from "./LearnLocalStorage/SetLocalStorage";
import Routing from "./LearnRouting/Routing";
import UseState from "./LearnUseState/UseState";
import UseState1 from "./LearnUseState/UseState1";
import UseState2 from "./LearnUseState/UseState2";
import UseState3 from "./LearnUseState/UseState3";
import UseState4 from "./LearnUseState/UseState4";
import UseState5 from "./LearnUseState/UseState5";
import UseState6 from "./LearnUseState/UseState6";
import NestedRouting from "./NestedRouting/NestedRouting";
import NestedRouting1 from "./NestedRouting/NestedRouting1";
import Parent from "./PropDrilling/Parent";
import SessionStorage from "./SessionStorage/SessionStorage";
import LearnCleanupFunction from "./UseEffect/LearnCleanupFunction";
import LearnUseEffect from "./UseEffect/LearnUseEffect";
import LearnUseEffect1 from "./UseEffect/LearnUseEffect1";



export let Context = createContext();



function App() {



  let [name ,setName ] = useState("rohan");



  return (
    <>




    <Context.Provider value={name} >
    <Parent />
    </Context.Provider>


      {/*
     <LearnForm1 />
       <LearnUseEffect1 />
        */}
      {/* <AppLink />
      <Routing /> */}

      {/* <LearnCleanupFunction /> */}
      {/* <LearnUseEffect /> */}

      {/* <UseState6 /> */}
      {/* <UseState5 /> */}
      {/* <UseState4 /> */}
      {/* <UseState /> */}
      {/* <UseState1 /> */}
      {/* <UseState2 /> */}
      {/* <UseState3 /> */}
      {/* <NestedRouting1 /> */}
      {/* <NestedRouting /> */}
      {/* <Home /> */}
      {/* <LearnExternalCss></LearnExternalCss> */}
      {/* <LearnExternalCss /> */}
      {/* <LearnForm /> */}
      {/* <SetLocalStorage /> */}
      {/* <GetLocalStorage /> */}
      {/* <RemoveLocalStorage /> */}
      {/* <SessionStorage /> */}
    </>
  );
}

export default App;
