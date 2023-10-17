"use client";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import useFetch from "../../utils/useFetch.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../Toast/Toast";

const List = () => {
  // console.log(data);

  const { data, reFetch } = useFetch("http://localhost:8800/api/product/");

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(null);

  const handleclick = async (id) => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      const authToken = user.token;

      const headers = {
        Authorization: `${authToken}`, // Use 'Bearer' if it's a token-based authentication
        "Content-Type": "application/json", // Set the content type according to your API requirements
      };

      const res = await axios.delete(
        `http://localhost:8800/api/product/${id}`,
        { headers }
      );
      setMessage(res.data)
      console.log(res);
      console.log(message);
      reFetch();
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Toast open={open} close={handleClose} type="success">
        {message}
      </Toast>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650, color: "black" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Id</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Type</TableCell>
              <TableCell className="tableCell">Category</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">
                  {row._id.slice(0, 8)}..
                </TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.displayimg[0]} alt="" className="image" />
                    {row.productName.slice(0, 15)}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.productType}</TableCell>
                <TableCell className="tableCell">{row.category}</TableCell>
                <TableCell className="tableCell">{row.price[0]}</TableCell>
                <TableCell className="tableCell">{row.weight[0]}</TableCell>
                <TableCell className="tableCell">
                  <div className="icons">
                    <Link to={`/update/${row._id}`}>
                      <EditOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "green",
                          backgroundColor: "rgba(0, 128, 0, 0.151)",
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
                    </Link>
                    <DeleteOutlineOutlinedIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "red",
                        backgroundColor: "rgba(0, 128, 0, 0.151)",
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                      onClick={() => handleclick(row._id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
