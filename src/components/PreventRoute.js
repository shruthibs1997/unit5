import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../context/AuthContextProvider";

function PreventRoute({children,exact,path}){
    const {token}=useContext(AuthContext);
    
    if(token===""){
        return <Redirect to="/signup"/>
    }else{
        return(
            <Route exact={exact} path={path}>{children}</Route>
        )
    }

}
export default PreventRoute;