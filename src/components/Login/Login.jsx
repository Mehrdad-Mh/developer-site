import React,{useState,useRef, useEffect} from 'react';
import { loginUser } from '../../services/userService';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate,NavLink} from "react-router-dom"
import SimpleReactValidator from 'simple-react-validator';
import { Sugar } from 'react-preloaders';
import { Helmet } from 'react-helmet';
const Login = () => {
    const [loading , setLoading] = useState(false);
const navigate = useNavigate();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    

    const [,forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
        messages : {
            required : "پر کردن این فیلد الزامی می باشد",
            min : "حداقل کارکتر مورد نیاز وارد نشده",
            email : "ایمیل وارد شده صحیح نمی باشد" ,
            password : "پسورد وارد شده صحیح نیست"
        },
        element : message => <div style={{color : "red" 
         }} >{message}</div> 
    }) )

    const reset = () =>{
        setEmail("");
        setPassword("");
    }

//     useEffect(() => {
// document.title = "تاپلرن | ورود به سایت"
//     },[])

    const handleSubmit = async event => {
        event.preventDefault();

        const user = {
            email,
            password
        }
       
        try{
           
        if(validator.current.allValid()){
            // setLoading(true);
            const { status , data} = await loginUser(user);
           
            if(status === 200){
              
               toast.success("ورود با موفقیت انجام شد" , {
                   position : "top-right",
                   closeOnClick : true
               });
   
               console.log(status,"status is")
               console.log(data,"server response data is")
               localStorage.setItem("token" , data.token);
               setLoading(false);
               navigate("/");
               // history.replace("/");
               reset();
            }
        }else{
            validator.current.showMessages();
           
            forceUpdate(1);

        }
        }catch (ex){
            console.log(ex);
            setLoading(false);
            toast.error("ورود با مشکل مواجه شد",{
                position : "top-left",
                closeOnClick : true
            })

        }


        
    }





    return ( 
        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>
                <Helmet>
                    <title>
                        تاپلرن | ورود به سایت 
                    </title>
                </Helmet>
                {loading ? (
                    <Sugar time={0} color="#fc03d7" customLoading={loading} />
                ) : null}
                <div className="form-layer">

                    <form onSubmit={handleSubmit} action="" method="">

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input 
                            type="email" 
                            name='email'
                            className="form-control" 
                            placeholder="ایمیل" 
                            aria-describedby="email-address"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                validator.current.showMessageFor("email")
                            }}
                            />
                              
                        </div>
                        {validator.current.message("email" , email , "required|email")}
                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input
                              type="password" 
                              name='password'
                              className="form-control" 
                              placeholder="رمز عبور " 
                              aria-describedby="password"
                              value={password}
                              onChange={e => {
                                setPassword(e.target.value);
                                validator.current.showMessageFor("password")
                              }}
                              />
                             
                        </div>
                        {validator.current.message("email" , email , "required|min:8")}
                        <div className="remember-me">
                            <label><input type="checkbox" name=""/>  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <NavLink to="/register"> <i className="zmdi zmdi-account"></i> عضویت در سایت </NavLink>
                        </div>
                        
                        <button className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
            <ToastContainer/>
        </main>
     );
}
 
export default Login;