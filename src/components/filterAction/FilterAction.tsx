import React, {
  ChangeEvent,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import { getAllusers } from "../../services/api";
import "./filter.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  handleFilterValue,
  handleFilterBox,
} from "../../features/lendsqrSlice";

function FilterAction() {
  const dispatch = useDispatch();
  const [filterArgs, setFilterArgs] = useState({
    organisation: "",
    username: "",
    email: "",
    date: "",
    phone: "",
    status: "active",
  });

  console.log(filterArgs);

  const [organisations, setOrganisations] = useState([]);

  console.log(organisations);
  // console.log(moment().format(filterArgs.date));

  const loadData = async () => {
    const userData = await getAllusers();
    setOrganisations(userData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSelectOrg = (e: ChangeEvent<HTMLSelectElement>) => {
    let newArg = { ...filterArgs };
    newArg.organisation = e.target.value;
    setFilterArgs(newArg);
  };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    let newArg = { ...filterArgs };
    newArg.username = e.target.value;
    setFilterArgs(newArg);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    let newArg = { ...filterArgs };
    newArg.email = e.target.value;
    setFilterArgs(newArg);
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    let newArg = { ...filterArgs };
    newArg.date = e.target.value;
    setFilterArgs(newArg);
  };
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let newArg = { ...filterArgs };
    newArg.phone = e.target.value;
    setFilterArgs(newArg);
  };

  const handleReset = () => {
    let newArg = { ...filterArgs };
    newArg.phone = "";
    newArg.email = "";
    newArg.organisation = "";
    newArg.date = "";
    newArg.username = "";
    setFilterArgs(newArg);
    dispatch(handleFilterValue(organisations));
    dispatch(handleFilterBox(false));
  };

  const handleFilter = () => {
    try {
      if (
        filterArgs.organisation !== "" ||
        filterArgs.date !== "" ||
        filterArgs.email !== "" ||
        filterArgs.username ||
        filterArgs.phone
      ) {
        let filterdOrg = organisations.filter((element: any) => {
          let result = element?.orgName.includes(filterArgs.organisation);
          return result;
        });

        let filteredUsername = filterdOrg.filter((element: any) => {
          let result = element?.userName.includes(filterArgs.username);
          return result;
        });

        let filterdEmail = filteredUsername.filter((element: any) => {
          let result = element?.email.includes(filterArgs.email);
          return result;
        });

        if (filterArgs.date !== "") {
          let filterdDate = filterdEmail.filter((element: any) => {
            let dateX = new Date(filterArgs.date).toISOString();
            let result = element?.createdAt.includes(dateX);
            return result;
          });

          let filterdPhone = filterdDate.filter((element: any) => {
            let result = element?.phone.includes(filterArgs.phone);
            return result;
          });
          dispatch(handleFilterValue(filterdPhone));
          console.log(filterdPhone, "filterd result");
        } else {
          let filterdPhone = filterdEmail.filter((element: any) => {
            let result = element?.phoneNumber.includes(filterArgs.phone);
            return result;
          });
          dispatch(handleFilterValue(filterdPhone));
          console.log(filterdPhone, "filterd result");
        }
      }
      dispatch(handleFilterBox(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="filterBox">
      <div className="innerFt">
        <p>Organization</p>
        <select
          value={filterArgs.organisation}
          onChange={handleSelectOrg}
          className="selectInpt"
        >
          <option value="" selected disabled hidden>
            select
          </option>
          {organisations.map((itm: any, indx: number) => (
            <option value={itm?.orgName} key={indx}>
              {itm?.orgName}
            </option>
          ))}
        </select>
      </div>
      <div className="innerFt">
        <p>Username</p>
        <input
          value={filterArgs.username}
          onChange={handleUsername}
          placeholder="Username"
          type={"text"}
          className="selectInpt inpts"
        />
      </div>
      <div className="innerFt">
        <p>Email</p>
        <input
          value={filterArgs.email}
          onChange={handleEmail}
          placeholder="Email"
          type={"email"}
          className="selectInpt inpts"
        />
      </div>
      <div className="innerFt">
        <p>Date</p>
        <input
          value={filterArgs.date}
          onChange={handleDate}
          type={"date"}
          className="selectInpt inpts"
        />
      </div>
      <div className="innerFt">
        <p>Phone Number</p>
        <input
          value={filterArgs.phone}
          onChange={handlePhone}
          placeholder="Phone Number"
          type={"tel"}
          className="selectInpt inpts"
        />
      </div>

      <div className="innerFt">
        <p>Status</p>
        <select className="selectInpt">
          <option selected>active</option>
          <option>in-active</option>
        </select>
      </div>
      <div id="btnDiv">
        <button onClick={handleReset} id="btn1Fil">
          Reset
        </button>
        <button onClick={handleFilter} id="btn2Fil">
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterAction;
