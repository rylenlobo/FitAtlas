"use client";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const List = ({item}) => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      category:"Hardware",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      category:"Software",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      category:"Furniture",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      category:"Consumable",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      category:"Hardware",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
    },
  ];

  // console.log(inventoryColumns);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 , color:"white"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">{item[0].col1}</TableCell>
            <TableCell className="tableCell">{item[1].col2}</TableCell>
            <TableCell className="tableCell">{item[2].col3}</TableCell>
            <TableCell className="tableCell">{item[3].col4}</TableCell>
            <TableCell className="tableCell">{item[4].col5}</TableCell>
            <TableCell className="tableCell">{item[5].col6}</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">
                {row.category}
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <div className="icons">
                  <EditOutlinedIcon
                    sx={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "green",
                      backgroundColor: "rgba(0, 128, 0, 0.151)",
                      height:"30px",
                      width:"30px",
                      borderRadius:"50%",
                      padding:"5px"
                    }}
                  />
                  <DeleteOutlineOutlinedIcon
                    sx={{ 
                      fontSize: "20px", 
                      cursor: "pointer",
                      color:"red",
                      backgroundColor: "rgba(0, 128, 0, 0.151)",
                      height:"30px",
                      width:"30px",
                      borderRadius:"50%",
                      padding:"5px"
                     }}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
