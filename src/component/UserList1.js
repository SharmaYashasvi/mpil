import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./UserList.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAllUsers1 } from "../actions/userAction";
import Loader from "./Loader/Loader";
const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (error) {
      alert.error(error);
      console.log(error)
      dispatch(clearErrors());
    }
    dispatch(getAllUsers1());
  }, [dispatch, error]);

  const columns = [
    { field: "id", headerName:'User Id', minWidth: 50, flex: 1 },
   
    {
      field: "first_name",
      headerName: "First Name",
      minWidth: 70,
      flex: 1,
    },

    {
      field: "last_name",
      headerName: "Last Name",
      minWidth: 70,
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      minWidth: 300,
      flex: 1,
    },

    {
      field: "gender",
      headerName: "Gender",
      minWidth: 100,
      flex: 1,
    },

    {
      field: "income",
      headerName: "Income",
      minWidth: 50,
      flex: 1,
    },

    {
      field: "city",
      headerName: "City",
      minWidth: 100,
      flex: 1,
    },

    {
      field: "car",
      headerName: "Car",
      minWidth: 100,
      flex: 1,
    },

    {
      field: "quote",
      headerName: "Quote",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "phone_price",
      headerName: "Phone Price",
      minWidth: 100,
      flex: 1,
    },
    
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item.id,
        first_name:item.first_name,
        last_name:item.last_name,
        email:item.email,
        gender:item.gender,
        income:item.income,
        city:item.city,
        car:item.car,
        quote:item.quote,
        phone_price:item.phone_price,
      });
    });

  return (
    <Fragment>
       {
        loading ?
        (
          <Loader/>
        )
        :
        (
          <Fragment>
      <div>
        <div className="UserListContainer">
          <h1 id="UserListHeading">Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="UserListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
        )
       }
    </Fragment>
  );
};

export default UsersList;
