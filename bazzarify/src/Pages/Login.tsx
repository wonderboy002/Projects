import { FaGoogle } from "react-icons/fa";
function Login() {
    return (
        <div className="LoginPage">
            <h1>Login Here</h1>
            <main>
                <div className="gender">
                    <label>Gender</label>
                    <select name="gender" id="gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="dob">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" id="dob" placeholder="Select date of Birth" />
                </div>
                <div className="google">
                    <h1>Already Signed in once??</h1>
                    <span className="googleSignin">
                        <img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" height={20} width={20}/>
                         <span>Sign in with Google</span></span>
                </div>
            </main>
        </div>
    );
}

export default Login;
