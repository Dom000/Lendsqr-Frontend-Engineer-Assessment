import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { getSingleUser } from "../../services/api";
import "./userDetail.css";

function Empty() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
        }}
      >
        <h3>No user with this iD 🥺🥺🥺🥺</h3>
      </div>
    </div>
  );
}

function User() {
  const { id }: Params = useParams();
  const [user, setUser] = useState<null | any>(null);
  console.log(user);

  const loadData = async () => {
    const userData = await getSingleUser(id);
    setUser(userData);
  };
  useEffect(() => {
    loadData();
  }, []);

  if (user == "Something went wrong while parsing response JSON") {
    return <Empty />;
  }

  return (
    <div id="detailDiv">
      <div className="sevDiv">
        <p className="infotext">Personal Information</p>
        <div className="detailBox">
          <div>
            <p className="firstP">FULL NAME</p>
            <p className="secondP">
              {user?.profile?.firstName + "  " + user?.profile?.lastName}
            </p>
          </div>
          <div>
            <p className="firstP">PHONE NUMBER</p>
            <p className="secondP">{user?.profile?.phoneNumber}</p>
          </div>
          <div>
            <p className="firstP">EMAIL ADDRESS</p>
            <p className="secondP">{user?.profile?.address}</p>
          </div>
          <div>
            <p className="firstP">BVN</p>
            <p className="secondP">{user?.profile?.bvn}</p>
          </div>
          <div>
            <p className="firstP">GENDER</p>
            <p className="secondP">{user?.profile?.gender}</p>
          </div>
          <div>
            <p className="firstP">MARITAL STATUS</p>
            <p className="secondP">single</p>
          </div>
          <div>
            <p className="firstP">CHILDREN</p>
            <p className="secondP">---</p>
          </div>
          <div>
            <p className="firstP">TYPE OF RESIDENCE</p>
            <p className="secondP">Parent’s Apartment</p>
          </div>
        </div>
      </div>
      <div className="sevDiv">
        <p className="infotext">Education and Employment</p>
        <div className="detailBox">
          <div>
            <p className="firstP">LEVEL OF EDUCATION</p>
            <p className="secondP">{user?.education?.level}</p>
          </div>
          <div>
            <p className="firstP">EMPLOYMENT STATUS</p>
            <p className="secondP">{user?.education?.employmentStatus}</p>
          </div>
          <div>
            <p className="firstP">SECTOR OF EMPLOYMENT</p>
            <p className="secondP">{user?.education?.sector}</p>
          </div>
          <div>
            <p className="firstP">DURATION OF EMPLOYMENT</p>
            <p className="secondP">{user?.education?.duration}</p>
          </div>
          <div>
            <p className="firstP">OFFICE EMAIL</p>
            <p className="secondP">{user?.education?.officeEmail}</p>
          </div>
          <div>
            <p className="firstP">MONTHLY INCOME</p>
            <p className="secondP">
              ₦{user?.education?.monthlyIncome[0]}-₦
              {user?.education?.monthlyIncome[1]}
            </p>
          </div>
          <div>
            <p className="firstP">LOAN REPAYMENT</p>
            <p className="secondP">₦{user?.education?.loanRepayment}</p>
          </div>
        </div>
      </div>
      <div className="sevDiv">
        <p className="infotext">Socials</p>
        <div className="detailBox">
          <div>
            <p className="firstP">TWITTER</p>
            <p className="secondP">{user?.socials?.twitter}</p>
          </div>
          <div>
            <p className="firstP">FACEBOOK</p>
            <p className="secondP">{user?.socials?.facebook}</p>
          </div>
          <div>
            <p className="firstP">INSTAGRAM</p>
            <p className="secondP">{user?.socials?.instagram}</p>
          </div>
        </div>
      </div>
      <div className="sevDiv">
        <p className="infotext">Guarantor</p>
        <div className="detailBox">
          <div>
            <p className="firstP">FULL NAME</p>
            <p className="secondP">
              {user?.guarantor?.firstName + "  " + user?.guarantor?.lastName}
            </p>
          </div>
          <div>
            <p className="firstP">PHONE NUMBER</p>
            <p className="secondP">{user?.guarantor?.phoneNumber}</p>
          </div>
          <div>
            <p className="firstP">GENDER</p>
            <p className="secondP">{user?.guarantor?.gender}</p>
          </div>
          <div>
            <p className="firstP">ADRESS</p>
            <p className="secondP">{user?.guarantor?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
