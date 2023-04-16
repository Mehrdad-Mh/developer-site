import React, { useState , useRef, useEffect } from 'react';
import { registerUser } from './../../services/userService';
import { toast , ToastContainer } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [fullname, setFulname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [policy , setPolicy] = useState();

    const [,forceUpdate]=useState();
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

    let reset = () => {
        setFulname("");
        setEmail("");
        setPassword("");

    }

    useEffect(() =>{
document.title = "تاپلرن | عضویت در سایت"
    },[])

    const handleSubmit = async e => {
        e.preventDefault();
        // باتوجه به این که کلید و مفدار یکی هستند اسم یکیشون رو مینویسیم
        const user = {
            fullname,
            email,
            password
        };
        console.log(user, "user details")

   try{

    if(validator.current.allValid()){

        const{ status } = await registerUser(user);
        if (status === 201) {
                    toast.success("کاربر با موفقیت ثبت نام شد", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    console.log(toast.success , "toast is")
                    console.log(status, "status is")
                    reset();
       }

    }else{

        validator.current.showMessages()
        forceUpdate(1);
    }

  } catch (ex) {
    toast.error("کاربر با موفقیت ثبت نام نشد", {
                position: "top-left",
                closeOnClick: true
            });
            console.log(ex,"err is")
   }

   console.log(user);
      
        // .then(({ data, status }) => {
        //     if (status === 201) {
        //         toast.success("کاربر با موفقیت ثبت نام شد", {
        //             position: "top-right",
        //             closeOnClick: true
        //         });
        //         console.log(data, "res is")
        //         reset();
        //     }


        // }).catch((err) => {
        //     toast.error("کاربر با موفقیت ثبت نام نشد", {
        //         position: "top-left",
        //         closeOnClick: true
        //     });
        //     console.log(err,"err is")
        // });
        
      



    }


    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input
                                type="text"
                                name='fullname'
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={fullname}
                                onChange={e => {
                                    setFulname(e.target.value)
                                    validator.current.showMessageFor("fullname")
                                }}
                            />
                           
                        </div>
                        {validator.current.message("fullname" , fullname , "required|min:5")}
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
                                    setPassword(e.target.value)
                                    validator.current.showMessageFor("password")
                                }}
                            />
                           
                        </div>
                        {validator.current.message("password" , password , "required|min:8")}
                        <div className="accept-rules">
                            <label>
                           
                                <input 
                            type="checkbox" 
                            name="policy" 
                            value={policy} 
                            onChange={e => {
                                setPolicy(e.currentTarget.checked);
                                validator.current.showMessageFor("policy")
                            }}
                            />
                             
                              قوانین و مقررات سایت را میپذیرم 
                            
                              </label>
                              {validator.current.message("policy" , policy , "required")}
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <NavLink to="/login"> <i className="zmdi zmdi-account"></i> ورود به سایت </NavLink>
                        </div>

                        <button className="btn btn-success"> عضویت در سایت </button>

                    </form>
                </div>

            </div>
            <ToastContainer/>
        </main>
    );
}

export default Register;