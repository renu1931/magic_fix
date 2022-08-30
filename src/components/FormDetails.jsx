import React, { useState } from "react";

import image1 from "../images/image1.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Form(props) {
  const [qualifiaction, setQualification] = useState("");
  const [working, setWorking] = useState("");
  const [income, setIncome] = useState("");
  const [currency, setCurrency] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [physicalStatus, setPhysicalStatus] = useState("");
  const [workCity, setWorkCity] = useState("");
  const [workingState, setWorkingState] = useState("");

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
  const handle = () => {
    swal({
      title: "Registration Successfully!!",
      text: "Thanks For Visiting!",
      icon: "success",
      button: "OK!",
    });
    localStorage.setItem("qualification", qualifiaction);
    localStorage.setItem("working", working);
    localStorage.setItem("income", income);
    localStorage.setItem("currency", currency);
    localStorage.setItem("martialstatus", martialStatus);
    localStorage.setItem("familystatus", familyStatus);
    localStorage.setItem("familytype", familyType);
    localStorage.setItem("physicalstatus", physicalStatus);
    localStorage.setItem("workcity", workCity);
    localStorage.setItem("workingstate", workingState);
    reset();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        id="form-img-div"
        style={{
          backgroundImage: "url(" + image1 + ")",
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
                  <br />
                  <p>First Name : {props.name}</p>
                  <p>Last Name : {props.lastname}</p>
                  <p>Phone : {props.phone}</p>
                  <p>Email : {props.email}</p>
                  <p>Address : {props.address}</p>
                  <p>Gender : {props.gender}</p>
                </div>
                <div>
                  <p>Phone : {props.phone}</p>
                  <p>Message : {props.message}</p>
                  <br />
                  <p>Country : {props.country}</p>
                  <p>State : {props.state}</p>
                  <p>City : {props.city}</p>
                  <p>Pincode : {props.pincode}</p>
                  <p>Date of Birth : {props.date}</p>
                  <p>Age : {props.age}</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-5 m-auto">
                <input
                  placeholder="Enter Qualifications"
                  type="text"
                  {...register("qualification", {
                    required: "true",
                  })}
                  name="qualification"
                  id="form-input"
                  onChange={(e) => setQualification(e.target.value)}
                />

                <div id="homepage-small">
                  {errors.qualification?.type === "required" &&
                    "Qualification is Required"}
                </div>

                <input
                  placeholder="Working (Job)"
                  type="text"
                  {...register("working", {
                    required: "true",
                  })}
                  name="working"
                  id="form-input"
                  onChange={(e) => setWorking(e.target.value)}
                />

                <div id="homepage-small">
                  {errors.working?.type === "required" && "Working is Required"}
                </div>
                <input
                  placeholder="Working State"
                  {...register("workingState", {
                    required: "true",
                  })}
                  name="workingState"
                  id="form-input"
                  onChange={(e) => setWorkingState(e.target.value)}
                />
                <div id="homepage-small1">
                  {errors.workingState?.type === "required" &&
                    "Working State is Required"}
                </div>
                <input
                  placeholder="Working City"
                  type="text"
                  {...register("workingCity", {
                    required: "true",
                  })}
                  id="form-input"
                  name="workingCity"
                  onChange={(e) => setWorkCity(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.workingCity?.type === "required" &&
                    "Working City is Required"}
                </div>
                <input
                  placeholder="Annual Income"
                  {...register("income", {
                    required: "True",
                  })}
                  type="email"
                  id="form-input"
                  name="income"
                  onChange={(e) => setIncome(e.target.value)}
                />
                <div id="homepage-small1">
                  {errors.income?.type === "required" &&
                    "Annual Income is Required"}
                </div>
              </div>
              <div className="col-md-5 m-auto">
                <input
                  placeholder="Currency"
                  {...register("currency", {
                    required: "true",
                  })}
                  name="currency"
                  maxLength={10}
                  id="form-input"
                  onChange={(e) => setCurrency(e.target.value)}
                />
                <div id="homepage-small">
                  {errors.currency?.type === "required" &&
                    "Currency is Required"}
                </div>
                <select
                  placeholder="Martial Status"
                  id="form-input"
                  {...register("martialStatus", {
                    required: "true",
                  })}
                  name="martialStatus"
                  onChange={(e) => setMartialStatus(e.target.value)}
                >
                  <option value="">Martial Status</option>
                  <option>Widow</option>
                  <option>Married</option>
                  <option>Unmarried</option>
                  <option>Divorced</option>
                </select>
                <div id="homepage-small1">
                  {errors.martialStatus?.type === "required" &&
                    "Martial Status is Required"}
                </div>
                <select
                  placeholder="Family Status"
                  type="text"
                  {...register("familyStatus", {
                    required: "true",
                  })}
                  id="form-input"
                  name="familyStatus"
                  onChange={(e) => setFamilyStatus(e.target.value)}
                >
                  <option value="">Family Status</option>
                  <option>Middle Class</option>
                  <option>Upper Middle Class</option>
                  <option>Rich/Affluent</option>
                </select>
                <div id="homepage-small">
                  {errors.familyStatus?.type === "required" &&
                    "Family Status is Required"}
                </div>
                <select
                  placeholder="Family Type"
                  type="text"
                  {...register("familyType", {
                    required: "true",
                  })}
                  id="form-input"
                  name="familyType"
                  onChange={(e) => setFamilyType(e.target.value)}
                >
                  <option value="">Family Type</option>
                  <option>Joint Family</option>
                  <option>Nuclear Family</option>
                </select>
                <div id="homepage-small">
                  {errors.familyType?.type === "required" &&
                    "Family type is Required"}
                </div>
                <select
                  placeholder="Physical Status"
                  type="text"
                  id="form-input"
                  {...register("physicalStatus", {
                    required: "true",
                  })}
                  name="physicalStatus"
                  onChange={(e) => setPhysicalStatus(e.target.value)}
                >
                  <option value="">Physical Status</option>
                  <option>Normal</option>
                  <option>Physically challenged</option>
                </select>
                <div id="homepage-small1">
                  {errors.physicalStatus?.type === "required" &&
                    "Physical Status is Required"}
                </div>
              </div>
            </div>
          </form>
          <div className="text-center pt-4">
            <Link to="/">
              <input
                type="submit"
                value="Submit"
                id="input-btn"
                onClick={handle}
                disabled={
                  !qualifiaction ||
                  !working ||
                  !income ||
                  !currency ||
                  !martialStatus ||
                  !familyStatus ||
                  !familyType ||
                  !physicalStatus ||
                  !workCity ||
                  !workingState
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
