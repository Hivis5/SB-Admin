import {useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useFormik} from 'formik'
import * as yup from 'yup';
function AddStudents(props) {

    let navigate = useNavigate();
    // let [name,setName]=useState("");
    // let [email,setEmail]=useState("");
    // let [mobile,setMobile]=useState("");
    // let [degree,setDegree]=useState("");
    // let [dept, setDept]=useState("");

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            mobile:'',
            degree:'',
            dept:''
        },
        validationSchema: yup.object({
            name:yup.string().required('Required'),
            email:yup.string().email('Invalid email address').required('Required'),
            mobile:yup.string().matches(/^\d{10}$/,"Mobile number not valid").required('Required'),
            degree:yup.string(),
            dept:yup.string()
        }),
        onSubmit:values=>{
            handleSave(values)
        }
    })

    let handleSave = async(data)=>{
       try {
        let res = await axios.post('https://61585ceb5167ba00174bbab4.mockapi.io/users/',data)
        console.log(res)
        navigate('/all-students')
       } catch (error) {
          console.log(error) 
       }
    }
    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
            <label for="name">Name</label>
            <input 
                id="name"
                name="name"
                type="text"
                class="form-control"
                placeholder="Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>):null}
            </div>

            <div className="form-group">
            <label for="email">Email</label>
            <input 
                id="email"
                name="email"
                type="email"
                class="form-control"
                placeholder="Email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>):null}
            </div>
            <div className="form-group">
            <label for="mobile">Mobile</label>
            <input 
                id="mobile"
                name="mobile"
                type="text"
                class="form-control"
                placeholder="Mobile"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile?(<div style={{color:"red"}}>{formik.errors.mobile}</div>):null}
            </div>
            <div className="form-group">
            <label for="degree">Mobile</label>
            <input 
                id="degree"
                name="degree"
                type="text"
                class="form-control"
                placeholder="Degree"
                onChange={formik.handleChange}
                value={formik.values.degree}
            />
            </div>
            <div className="form-group">
            <label for="dept">Mobile</label>
            <input 
                id="dept"
                name="dept"
                type="text"
                class="form-control"
                placeholder="Dept"
                onChange={formik.handleChange}
                value={formik.values.dept}
            />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>

        </div>
    )
}

export default AddStudents


{/* <form>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Mobile</label>
                    <input type="text" class="form-control" onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Degree</label>
                    <input type="text" class="form-control" onChange={(e)=>setDegree(e.target.value)} placeholder="Degree"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Department</label>
                    <input type="text" class="form-control" onChange={(e)=>setDept(e.target.value)} placeholder="Department"/>
                </div>
                <button className="btn btn-primary" onClick={handleSave}>Submit</button>
            </form> */}