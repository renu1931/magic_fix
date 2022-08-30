import React, { useState } from "react";
// import { Link } from "react-router-dom";
import image4 from "../images/image4.jpg";
import { useForm } from "react-hook-form";
import FormDetails from "./FormDetails";

function Form(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [birth, setBirth] = useState("");
  const [age, setAge] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  const handle = (e) => {
    localStorage.setItem("firstname", name);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("gender", gender);
    localStorage.setItem("country", country);
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
    localStorage.setItem("pincode", pincode);
    localStorage.setItem("DOB", birth);
    localStorage.setItem("age", age);
    reset();
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        id="form-img-div"
        style={{
          backgroundImage: "url(" + image4 + ")",
          backgroundPosition: "center",
        }}
      >
        <div
          className="container pb-5"
          style={{ backgroundColor: "rgba(0,0,0,0.35)", borderRadius: "20px" }}
        >
          <div>
            <h1 id="form-title">
              Your information will help us find the
              <br /> Best Match for you
            </h1>
            <div id="props-div">
              <h3 id="props-h3">Your Previously Data</h3>
              <div id="props-para-flex-div">
                <div>
                  <p>Name : {props.name}</p>
                  <p>Email : {props.email}</p>
                </div>
                <div>
                  <p>Phone : {props.phone}</p>
                  <p>Message : {props.message}</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-5 m-auto">
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("first_name", {
                    required: "true",
                  })}
                  name="first_name"
                  id="form-input"
                  onChange={(e) => setName(e.target.value)}
                />

                <div id="homepage-small">
                  {errors.first_name?.type === "required" &&
                    "First Name is Required"}
                </div>

                <input
                  placeholder="Last Name"
                  type="text"
                  {...register("last_name", {
                    required: "true",
                  })}
                  name="last_name"
                  id="form-input"
                  onChange={(e) => setLastName(e.target.value)}
                />

                <div id="homepage-small">
                  {errors.last_name?.type === "required" &&
                    "Last Name is Required"}
                </div>

                <input
                  placeholder="Phone"
                  {...register("phone", {
                    required: "true",
                  })}
                  name="phone"
                  type="number"
                  id="form-input"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.phone?.type === "required" && "Phone is Required"}
                </div>
                <input
                  placeholder="Enter Email"
                  {...register("user_email", {
                    required: "This Field is Required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid e-mail address",
                    },
                  })}
                  type="email"
                  id="form-input"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.user_email?.type === "required" &&
                    "Email is Required"}
                </div>
                <input
                  placeholder="Address"
                  id="form-input"
                  {...register("address", {
                    required: "true",
                  })}
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.address?.type === "required" && "Address is Required"}
                </div>
                <input
                  placeholder="Gender"
                  type="text"
                  {...register("gender", {
                    required: "true",
                  })}
                  id="form-input"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.gender?.type === "required" && "Gender is Required"}
                </div>
              </div>
              <div className="col-md-5 m-auto">
                <input
                  placeholder="Country"
                  type="text"
                  {...register("country", {
                    required: "true",
                  })}
                  id="form-input"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.country?.type === "required" && "Country is Required"}
                </div>
                <input
                  placeholder="State"
                  type="text"
                  id="form-input"
                  {...register("state", {
                    required: "true",
                  })}
                  name="state"
                  onChange={(e) => setState(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.state?.type === "required" && "State is Required"}
                </div>
                <input
                  placeholder="City"
                  type="text"
                  {...register("city", {
                    required: "true",
                  })}
                  id="form-input"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.city?.type === "required" && "City is Required"}
                </div>
                <input
                  type="number"
                  placeholder="Pincode"
                  {...register("pincode", {
                    required: "true",
                  })}
                  name="pincode"
                  id="form-input"
                  onChange={(e) => setPincode(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.pincode?.type === "required" && "Pincode is Required"}
                </div>
                <input
                  placeholder="Date of Birth"
                  id="form-input"
                  {...register("birth", {
                    required: "true",
                  })}
                  name="birth"
                  onChange={(e) => setBirth(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.birth?.type === "required" &&
                    "Date of Birth is Required"}
                </div>
                <input
                  placeholder="Your Age"
                  type="text"
                  {...register("age", {
                    required: "true",
                  })}
                  id="form-input"
                  name="age"
                  onChange={(e) => setAge(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.age?.type === "required" && "Enter Your Age"}
                </div>
              </div>
            </div>
          </form>
          <div className="text-center pt-4">
            <input
              type="submit"
              value="Submit"
              id="input-btn"
              onClick={handle}
              disabled={
                !name ||
                !lastName ||
                !phone ||
                !email ||
                !address ||
                !gender ||
                !country ||
                !state ||
                !city ||
                !pincode ||
                !birth ||
                !age
              }
            />
          </div>
        </div>
      </div>
      <FormDetails
        name={name}
        lastname={lastName}
        phone={phone}
        email={email}
        address={address}
        gender={gender}
        country={country}
        state={state}
        city={city}
        pincode={pincode}
        date={birth}
        age={age}
      />
    </div>
  );
}
export default Form;
