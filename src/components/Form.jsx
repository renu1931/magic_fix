import React, { useState } from "react";
import { Link } from "react-router-dom";
import image4 from "../images/image4.jpg";
import { useForm } from "react-hook-form";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [birth, setBirth] = useState("");
  const [hobby, setHobby] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  const handle = () => {
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("mother-tongue", motherTongue);
    localStorage.setItem("country", country);
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
    localStorage.setItem("pincode", pincode);
    localStorage.setItem("DOB", birth);
    localStorage.setItem("hobby", hobby);
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
                  onChange={(e) => setFirstName(e.target.value)}
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
                  maxLength={10}
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
                  placeholder="Mother Tongue"
                  type="text"
                  {...register("mother_tongue", {
                    required: "true",
                  })}
                  id="form-input"
                  name="mother_tongue"
                  onChange={(e) => setMotherTongue(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.mother_tongue?.type === "required" &&
                    "This Field is Required"}
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
                  placeholder="Your Hobbies"
                  type="text"
                  {...register("hobbies", {
                    required: "true",
                  })}
                  id="form-input"
                  name="hobbies"
                  onChange={(e) => setHobby(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.hobbies?.type === "required" && "Enter Your Hobbies"}
                </div>
              </div>
            </div>
          </form>
          <div className="text-center pt-4">
            <Link to="/form-details">
              <input
                type="submit"
                value="Submit"
                id="input-btn"
                onClick={handle}
                disabled={
                  !firstName ||
                  !lastName ||
                  !phone ||
                  !email ||
                  !address ||
                  !motherTongue ||
                  !country ||
                  !state ||
                  !city ||
                  !pincode ||
                  !birth ||
                  !hobby
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
