import React, {
  ReactEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Card from "../../components/cards/Card";
import { FiUsers, FiDatabase } from "react-icons/fi";
import { HiOutlineUserGroup, HiOutlineDocumentText } from "react-icons/hi";
import "./user.css";
import { BsFilter, BsThreeDotsVertical } from "react-icons/bs";
import { getAllusers } from "../../services/api";
import moment from "moment";
import { TablePagination } from "@mui/material";
import CountUp from "react-countup";
import ActionTab from "../../components/actionTab/ActionTab";
import { useLocation, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import FilterAction from "../../components/filterAction/FilterAction";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filtertab, setFilterTab] = useState(false);
  const [userswithloan, setUsersWithLoan] = useState([]);
  const [userswithbalance, setUsersWithBalance] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [activerow, setActiveRow] = useState<any | null>(null);

  console.log(activerow);

  const loadData = async () => {
    const userData = await getAllusers();
    const newData = userData.filter((elemen: any) => {
      let newEle = elemen?.education?.loanRepayment !== "";
      return newEle;
    });
    const newData2 = userData.filter((elemen: any) => {
      let newEle = elemen?.accountBalance !== "";
      return newEle;
    });

    setUsersWithBalance(newData2);
    setUsersWithLoan(newData);
    setUsers(userData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = ({ id }: any) => {
    navigate(`/user/${id}`);
  };
  const handleShowTab = (e: number) => {
    setActiveRow(e);
  };

  const rows = users
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((element: any, index: number) => (
      <tr
        //   onClick={() => {
        //     router.push(`/admin/incentive_mgt/details`);
        //   }}
        className=" text-center trdiv1 hover:translate-x-0.5  transition-all cursor-pointer  hover:shadow-md  text-sm  text-textColor border-b"
        key={element?.id}
      >
        <td className="md:text-base text-xs p-3">
          <p>{element.orgName.substring(0, 12)}...</p>
        </td>
        <td className="md:text-base text-xs p-3">
          <p>{element.userName}</p>
        </td>

        <td className="md:text-base text-xs p-3">
          <p>{element.email.substring(0, 12)}...</p>
        </td>
        <td className="md:text-base text-xs p-3">
          <p>{element.phoneNumber.substring(0, 12)}...</p>
        </td>
        <td className="md:text-base text-xs p-3">
          <p>{new Date(element?.createdAt).toLocaleString()}</p>
        </td>
        <td className="md:text-base text-xs p-3">
          <span className="activebadge">Active</span>
        </td>
        <td className="md:text-base text-xs p-3">
          <>
            {activerow === index ? (
              <ActionTab
                // onDismiss={() => setActiveRow(null)}
                onClick={() => handleClick(element)}
              />
            ) : null}
            <BsThreeDotsVertical onClick={() => handleShowTab(index)} />
          </>
        </td>
      </tr>
    ));

  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: 18,
          letterSpacing: 3,
          color: "#213F7D",
          marginBottom: 30,
        }}
      >
        Users
      </p>
      <div id="cardHolder">
        <Card
          icon={<FiUsers style={{ color: "#DF18FF" }} />}
          iconBg={"#e018ff28"}
          title="USERS"
          Subtitle={<CountUp duration={8} end={users.length} />}
        />
        <Card
          icon={<HiOutlineUserGroup style={{ color: "#5718FF" }} />}
          iconBg={"#EEE8FF"}
          title="ACTIVE USERS"
          Subtitle={<CountUp duration={8} end={users.length} />}
        />
        <Card
          icon={<HiOutlineDocumentText style={{ color: "#F55F44" }} />}
          iconBg={"#FEEFEC"}
          title="USERS WITH LOANS"
          Subtitle={<CountUp duration={8} end={userswithloan.length} />}
        />
        <Card
          icon={<FiDatabase style={{ color: "#FF3366" }} />}
          iconBg={"#FFEBF0"}
          title="USERS ITH SAVINGS"
          Subtitle={<CountUp duration={8} end={userswithbalance.length} />}
        />
      </div>

      {/* table ################################# */}

      <div id="tableCard">
        <table>
          <thead>
            <tr>
              <td className="">
                <div className=" tddiv ">
                  <p>organization</p>
                  <BsFilter
                    onClick={() => setFilterTab(!filtertab)}
                    className="filterIcon"
                  />
                </div>
                {filtertab && <FilterAction />}
              </td>
              <td className="">
                <div className=" tddiv ">
                  <p className="">Username</p>
                  <BsFilter
                    onClick={() => setFilterTab(!filtertab)}
                    className="filterIcon"
                  />
                </div>
              </td>

              <td className="">
                <div className=" tddiv  ">
                  <p>Email</p>
                  <BsFilter
                    onClick={() => setFilterTab(!filtertab)}
                    className="filterIcon"
                  />
                </div>
              </td>
              <td className="">
                <div className="tddiv ">
                  <p className="">Phone number</p>
                  <BsFilter
                    onClick={() => setFilterTab(!filtertab)}
                    className="filterIcon"
                  />
                </div>
              </td>
              <td className="">
                <div className="tddiv  ">
                  <p className="">Date joined</p>
                  <BsFilter
                    onClick={() => setFilterTab(!filtertab)}
                    className="filterIcon"
                  />
                </div>
              </td>

              <td className="">
                <div className=" tddiv ">
                  <p className="">Status</p>
                  <BsFilter
                    onClick={() => setFilterTab(!filtertab)}
                    className="filterIcon"
                  />
                </div>
              </td>
              <td className=""></td>
            </tr>
          </thead>

          <tbody className="mx-4">{rows}</tbody>
        </table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

export default Users;
