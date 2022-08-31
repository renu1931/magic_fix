import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import demo from "../images/demo.png";
import { Link } from "react-router-dom";

export default function ProfilePicture() {
  const [image, setImage] = useState("");
  const [imagecrop, setImagecrop] = useState(false);
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setpview(null);
  };
  const onCrop = (view) => {
    setpview(view);
  };
  const saveCropImage = () => {
    setprofile([...profile, { pview }]);
    setImagecrop(false);
  };

  return (
    <div>
      <div id="skip">
        <Link to="/">
          <button>Skip</button>
        </Link>
      </div>
      <div className="profile_img text-center">
        <div className="flex flex-column justify-content-center align-items-center">
          <h2 id="profile-h2">Select Your Profile Photo</h2>
          <div className="container">
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",

                border: "4px solid rgb(245, 79, 176)",
              }}
              onClick={() => setImagecrop(true)}
              src={profileFinal.length ? profileFinal : demo}
              aria-hidden
              alt="demo-image"
            />
            <div className="container-div" onClick={() => setImagecrop(true)}>
              <h3 id="cover">
                {pview ? (
                  <i class="fa-solid fa-edit"></i>
                ) : (
                  <i class="fa-solid fa-camera-rotate"></i>
                )}
              </h3>
            </div>
          </div>
          <br />

          <Dialog
            visible={imagecrop}
            header={() => <p className="update text-center">Update Profile</p>}
            onHide={() => setImagecrop(false)}
          >
            <div className="confirmation-content">
              <Avatar
                width={500}
                height={400}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
                shadingColor={"#474649"}
                backgroundColor={"#474649"}
              />
              <div>
                <div className="text-center my-5">
                  <Button
                    id="input-btn"
                    onClick={saveCropImage}
                    label="Save"
                    icon="pi pi-check"
                  ></Button>
                </div>
              </div>
            </div>
          </Dialog>
          <InputText
            id="inputText"
            accept="/image/*"
            style={{ displY: "none" }}
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substring(0, 5) === "image") {
                setImage(file);
                console.log("image===========>", setImage);
              } else {
                setImage(null);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
