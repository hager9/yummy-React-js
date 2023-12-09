import { useFormik } from 'formik';
import React from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';


export default function Contact() {

  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "name minlength is 3").max(15, "name maxlength is 15").required('name is required'),
    email: Yup.string().email("email pattern is invalid").required("email is required"),
    phone: Yup.string().matches(phoneRegex, "phone is invalid").required('phone is required'),
    age: Yup.number().min(14, "your age must be at least 14").max(95, "maxmum age is 95").required('age is required'),
    password: Yup.string().matches(/^[A-Z][A-Za-z0-9]{5,8}/, "password should start with uppercase letter & only contain letters (A-Z or a-z) and numbers (0-9) & be between 6 and 9 characters in total.")
      .required('password is required')
      .min(6).max(9),
    rePassword: Yup.string().oneOf([Yup.ref("password")], "rePassword don't match the password").required('rePassword is required')
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      age: '',
      password: '',
      rePassword: '',
    }, validationSchema,
    onSubmit: ()=>{console.log('successful submit')}
  });



  return <>
   <Helmet>
                <title>Yummy Contact</title>
                <meta name="description" content="yummy contact page" />
    </Helmet>
    
    <div className="row g-4 ps-5">
      <form onSubmit={formik.handleSubmit}>
      <div className="contact d-flex justify-content-center align-items-center min-vh-100">
                    <div className="container text-center">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <input name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="nameInput" type="text" className="form-control" placeholder="Enter Your Name"/>
                                {formik.errors.name && formik.touched.name ? <div className="text-danger font-bold mt-2 p-2">{ formik.errors.name }</div> : ''}
                            </div>
                            <div className="col-md-6">
                                <input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="emailInput" type="email" className="form-control" placeholder="Enter Your Email"/>
                                {formik.errors.email && formik.touched.email ? <div className="text-danger font-bold mt-2 p-2">{ formik.errors.email }</div> : ''}
                            </div>
                            <div className="col-md-6">
                                <input name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id="phoneInput" type="text" className="form-control" placeholder="Enter Your Phone"/>
                                {formik.errors.phone && formik.touched.phone ? <div className="text-danger font-bold mt-2 p-2">{ formik.errors.phone }</div> : ''}
                            </div>
                            <div className="col-md-6">
                                <input name='age' value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} id="ageInput" type="number" className="form-control" placeholder="Enter Your Age"/>
                                {formik.errors.age && formik.touched.age ? <div className="text-danger font-bold mt-2 p-2">{ formik.errors.age }</div> : ''}
                            </div>
                            <div className="col-md-6">
                                <input name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="passwordInput" type="password" className="form-control" placeholder="Enter Your Password"/>
                                {formik.errors.password && formik.touched.password ? <div className="text-danger font-bold mt-2 p-2">{ formik.errors.password }</div> : ''}
                            </div>
                            <div className="col-md-6">
                                <input name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} id="repasswordInput" type="password" className="form-control" placeholder="Enter repassword"/>
                                {formik.errors.rePassword && formik.touched.rePassword ? <div className="text-danger font-bold mt-2 p-2">{ formik.errors.rePassword }</div> : ''}
                            </div>
                            
            </div>
            <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn btn-outline-danger px-2 my-3">Submit</button>
                        
                    </div>
                </div>
    </form>
    </div>

  </>
} 