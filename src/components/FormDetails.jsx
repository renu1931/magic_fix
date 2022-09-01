import React, { useState } from "react";
import Menu from "./Menu";
import image1 from "../images/image1.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import user from "../images/user.jpg";

function Form(props) {
  const [birth, setBirth] = useState("");
  const [working, setWorking] = useState("");
  const [income, setIncome] = useState("");
  const [currency, setCurrency] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [physicalStatus, setPhysicalStatus] = useState("");
  const [workCity, setWorkCity] = useState("");
  const [workingState, setWorkingState] = useState("");
  const [mothertongue, setMothertongue] = useState("");
  const [rassi, setRassi] = useState("");

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
    localStorage.setItem("birth", birth);
    localStorage.setItem("working", working);
    localStorage.setItem("income", income);
    localStorage.setItem("currency", currency);
    localStorage.setItem("martialstatus", martialStatus);
    localStorage.setItem("familystatus", familyStatus);
    localStorage.setItem("familytype", familyType);
    localStorage.setItem("physicalstatus", physicalStatus);
    localStorage.setItem("workcity", workCity);
    localStorage.setItem("rassi", rassi);
    localStorage.setItem("workingstate", workingState);
    localStorage.setItem("mothertongue", mothertongue);
    reset();
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };
  const object = {
    image: user,
    name: props.name,
    age: props.age,
    qualification: props.qualification,
    state: props.state,
    category: props.gender,
  };

  if (props.gender === object.category) {
    Menu.push(object);
    console.log("male=============>", { Menu });
  }

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
                  <p>qualification : {props.qualification}</p>
                  <p>Age : {props.age}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-5 m-auto">
                <input
                  placeholder="Date of Birth"
                  type="date"
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

                <select
                  placeholder="Working (Job)"
                  type="text"
                  {...register("working", {
                    required: "true",
                  })}
                  name="working"
                  id="form-input1"
                  onChange={(e) => setWorking(e.target.value)}
                >
                  <option value="">Working (Job)</option>
                  <option>Government</option>
                  <option>Defence</option>
                  <option>Private</option>
                  <option>Bussiness</option>
                  <option>Self-employed</option>
                  <option>Not Working</option>
                </select>

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
                <select
                  placeholder="Annual Income"
                  {...register("income", {
                    required: "True",
                  })}
                  type="email"
                  id="form-input1"
                  name="income"
                  onChange={(e) => setIncome(e.target.value)}
                >
                  <option value="">Annual Income</option>
                  <option>1 - 5 Lakhs</option>
                  <option>5 - 10 Lakhs</option>
                  <option>10 - 15 Lakhs</option>
                  <option>15 - 20 Lakhs</option>
                  <option>20 - 30 Lakhs</option>
                  <option>30+ Lakhs</option>
                </select>
                <div id="homepage-small1">
                  {errors.income?.type === "required" &&
                    "Annual Income is Required"}
                </div>
                <select
                  placeholder="Mother Tongue"
                  {...register("mothertongue", {
                    required: "True",
                  })}
                  type="text"
                  id="form-input1"
                  name="mothertongue"
                  onChange={(e) => setMothertongue(e.target.value)}
                >
                  <option value="">Mother Tongue</option>
                  <option>Hindi</option>
                  <option>Punjabi</option>
                  <option>Gujrati</option>
                  <option>Rajasthani</option>
                  <option>Benjali</option>
                  <option>Haryanvi</option>
                  <option>Angika</option>
                  <option>Arunachali</option>
                  <option>Assamese</option>
                  <option>Awadhi</option>
                  <option>Badaga</option>
                  <option>Benjali</option>
                  <option>Bhojpuri</option>
                  <option>Bihari</option>
                  <option>Chatisgarhi</option>
                  <option>Dogri</option>
                  <option>English</option>
                  <option>French</option>
                  <option>Garhwali</option>
                  <option>Garo</option>
                  <option>Gujrati</option>
                  <option>Haryanvi</option>
                  <option>Himachali/Pahari</option>
                  <option>Hindi</option>
                  <option>Kanauji</option>
                  <option>Kannada</option>
                  <option>Kashmiri</option>
                  <option>Khandesi</option>
                  <option>Khashi</option>
                  <option>Konkani</option>
                  <option>Kushali</option>
                  <option>Kumoani</option>
                  <option>Kutchi</option>
                  <option>Ladacki</option>
                  <option>Lepcha</option>
                  <option>Magahi</option>
                  <option>Maithili</option>
                  <option>Malayalam</option>
                  <option>Manipuri</option>
                  <option>Marathi</option>
                  <option>Marwari</option>
                  <option>Miji</option>
                  <option>Monpa</option>
                  <option>Nepali</option>
                  <option>Nicobarese</option>
                  <option>Oriya</option>
                  <option>Punjabi</option>
                  <option>Rajasthani</option>
                  <option>Sanskrit</option>
                  <option>Santhali</option>
                  <option>Sindhi</option>
                  <option>Sourashtra</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Tripuri</option>
                  <option>Tulu</option>
                  <option>Urdu</option>
                </select>
                <div id="homepage-small1">
                  {errors.mothertongue?.type === "required" &&
                    "Mother Tongue is Required"}
                </div>
              </div>
              <div className="col-md-5 m-auto">
                <select
                  placeholder="Currency"
                  {...register("currency", {
                    required: "true",
                  })}
                  name="currency"
                  maxLength={10}
                  id="form-input"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="">Currency</option>
                  <option>Algeria (Algerian dinar)</option>
                  <option>Afghanistan (Afghan afghani)</option>
                  <option>Andorra (Euro)</option>
                  <option>Angola (Angolan kwanza)</option>
                  <option>Armenia (Armenian dram)</option>
                  <option>Australia ( Australian dollar)</option>
                  <option>Bangladesh (Bangladeshi taka)</option>
                  <option>Belize (Belize dollar)</option>
                  <option>Brazil (Brazilian real)</option>
                  <option>
                    Central African Republic (Central African CFA franc)
                  </option>
                  <option>China (Chinese yuan)</option>
                  <option>Cuba (Cuban peso)</option>
                  <option>Czech Republic (Czech koruna)</option>
                  <option>Denmark (Danish krone)</option>
                  <option>Dominica (East Caribbean dollar)</option>
                  <option>East Timor (United States dollar)</option>
                  <option>Egypt ( Egyptian pound)</option>
                  <option>France (Euro)</option>
                  <option>Germany ( Euro)</option>
                  <option>Haiti (Haitian gourde)</option>
                  <option>India (Indian rupee)</option>
                  <option>Iran (Iranian rial)</option>
                  <option>Ireland (Euro)</option>
                  <option>Italy (Euro)</option>
                  <option>Japan (Japanese yen)</option>
                  <option>Kiribati (Australian dollar)</option>
                  <option>Korea, South (South Korean won)</option>
                  <option>Laos (Lao kip)</option>
                  <option>Lebanon ( Lebanese pound)</option>
                  <option>Libya (Libyan dinar)</option>
                  <option>Maldives (Maldivian rufiyaa)</option>
                  <option>Malta ( Euro)</option>
                  <option>Mexico (Mexican peso)</option>
                  <option>Nepal (Nepalese rupee)</option>
                  <option>Niger (West African CFA franc)</option>
                  <option>Pakistan (Pakistani rupee)</option>
                  <option>Peru (Peruvian sol)</option>
                  <option>Qatar (Qatari riyal)</option>
                  <option>Russia (Russian ruble)</option>
                  <option>Saint Kitts and Nevis (East Caribbean dollar)</option>
                  <option>Serbia (Serbian dinar)</option>
                  <option>Tonga (Tongan pa'anga)</option>
                  <option>Turkey (Turkish lira)</option>
                  <option>United Kingdom (British pound)</option>
                  <option>Zambia (Zambian kwacha)</option>
                </select>
                <div id="homepage-small">
                  {errors.currency?.type === "required" &&
                    "Currency is Required"}
                </div>
                <select
                  placeholder="Martial Status"
                  id="form-input1"
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
                  id="form-input1"
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
                  id="form-input1"
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
                  id="form-input1"
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
                <select
                  placeholder="Rassi"
                  {...register("rassi", {
                    required: "True",
                  })}
                  type="text"
                  id="form-input1"
                  name="rassi"
                  onChange={(e) => setRassi(e.target.value)}
                >
                  <option value="">Rassi</option>
                  <option>Dhanu(Saggittarrius)</option>
                  <option>Kanya(Virgo)</option>
                  <option>Kark(Cancer)</option>
                  <option>Kunbh(Aquarius)</option>
                  <option>Maker(Capricorn)</option>
                  <option>Meen(Pisces)</option>
                  <option>Mithun(Gemini)</option>
                  <option>Simha(Leo)</option>
                  <option>Tula(Libra)</option>
                  <option>Vrishabh(Taurus)</option>
                  <option>Vrishchik(Scorpio)</option>
                </select>
                <div id="homepage-small">
                  {errors.rassi?.type === "required" && "Rassi is Required"}
                </div>
              </div>
            </div>
          </form>
          <div className="text-center pt-4">
            <Link to="/profile-picture">
              <input
                type="submit"
                value="Submit"
                id="input-btn"
                onClick={handle}
                disabled={
                  !birth ||
                  !working ||
                  !income ||
                  !currency ||
                  !rassi ||
                  !martialStatus ||
                  !familyStatus ||
                  !familyType ||
                  !mothertongue ||
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
