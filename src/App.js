import React, { useState } from "react";
import Table from "./component/table";
import Add from "./component/add";

import tableList from './data/tableList.json';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  // Cú pháp: const [state, setState] = useState(initialState);
  //   state: biến trạng thái hiện tại.
  //   setState: hàm để cập nhật giá trị của biến trạng thái.
  //   initialState: giá trị khởi tạo ban đầu cho biến trạng thái.

  const toggleAdd = () => {
    setShowAdd(true);

  };

  const toggleClose = () => {
    setShowAdd(false);
  };

  const [prod, setProd] = useState(tableList); //lưu trữ danh sách sinh viên được khởi tao từ file json

  const [newProd, setNewProd] = useState({//lưu trữ thông tin sinh viên mới
    name: "",
    birth: "",
    position: "",
    status: "Active"
  });

  const handleChangeAdd = (event) => { //lấy thông tin sinh viên mới
    const { name, value } = event.target;// Lấy tên và giá trị của input field từ sự kiện
    setNewProd({  // Cập nhật state `newProd` với giá trị mới của input field
      ...newProd, // Sử dụng spread operator để sao chép tất cả các thuộc tính hiện có của `newProd
      [name]: value // và cập nhật giá trị của thuộc tính có tên là `name` với giá trị mới `value`
    });
  };

  const handleAdd = () => {//thêm sinh viên mới vào danh sách
    if (newProd.name === "" || newProd.birth === "" || newProd.position === "") {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if(newProd.name.length >50)
      {
        alert("Tên Không quá 50 ký tự");
      }
    if (newProd.birth.indexOf('/') === -1) { // Check if the birth date has the correct format dd/mm/yyyy, -1 là không tìm thấy
      alert("Ngày sinh không hợp lệ, phải dùng định dạng dd/mm/yyyy");
      return;
    }
    if (newProd.birth.indexOf('/') !== 2){ 
      alert("Ngày sinh không hợp lệ, phải dùng định dạng dd/mm/yyyy");
      return;
    } 
    var a = newProd.birth.split('/');// tách chuỗi ngày sinh thành mảng dựa vào dấu /
    for (let i = 0; i < a.length; i++){
      for(let j =0; j < a[i].length; j++)
        {
          if (a[i][j] < '0' || a[i][j] > '9') 
          {
            alert("Ngày sinh không hợp lệ");
              return;
          }
        }
    }


    const newUser = {
      id: prod.length + 1,
      ...newProd
    };
    const AddUser = [...prod, newUser]; 
    setProd(AddUser);
    toggleClose();
  };

  const renderListData = () => {//hiển thị danh sách sinh viên
    const filterProd = [...prod] //tạo bản sao của danh sách sinh viên để lọc dữ liệu không ảnh hưởng đến danh sách gốc
    return  <Table onAdd={toggleAdd}  prod={filterProd} ></Table>; //
  }

  return (
    
    <div className="container-fuild">    
      <div className="header">
        <div className="action">
          <h2 className="title">
            Quản lý học viên
          </h2>

          <div>
          <button className="export">
            <i className="fa-solid fa-file" />
              Nhập dữ liệu
          </button>
          <button className="export">
            <i className="fa-solid fa-file" />
              Xuất dữ liệu
          </button>
          <button className="add" onClick={toggleAdd}>
            <i className="fa-solid fa-plus-circle"></i>
              Thêm học viên
          </button>
          </div>
        </div>
      </div>

      {renderListData()}
      <div className="footer">
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              Hiển thị {prod.length}/25 bản ghi
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button type="button" className="btn btn-primary">Trang trước</button>
              <button type="button" className="btn btn-primary">1</button>
              <button type="button" className="btn btn-primary">2</button>
              <button type="button" className="btn btn-primary">3</button>
              <button type="button" className="btn btn-primary">4</button>
              <button type="button" className="btn btn-primary">5</button>
              <button type="button" className="btn btn-primary">Trang sau</button>
            </div>
          </div>
        </div>
      </div>
      {showAdd && <Add onClose={toggleClose} onChange={handleChangeAdd} onAdd={handleAdd} />}
    </div>

    
  )
}
 
export default App;