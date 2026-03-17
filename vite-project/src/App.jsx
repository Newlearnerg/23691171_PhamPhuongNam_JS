import ProductList from "./Buoi1/Bai5/ProductList.jsx";
import Header from "./Buoi2/Bai1/Header.jsx"
import StudentInfo from "./Buoi2/Bai1/StudentInfo.jsx"
//import {useState} from "react";


function App() {
  const student = {
    hoTen : 'Pham Phuong Nam',
    mssv : '23691171',
    lop : 'DHKHMT19A'
  }

  return (
    <>
      <Header />
      <StudentInfo
        hoTen={student.hoTen}
        mssv={student.mssv}
        lop={student.lop}
      />
    </>
  );
}

export default App
