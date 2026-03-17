import PropTypes from "prop-types"
import "./StudentInfo.css"

function StudentInfo({hoTen="", mssv="", lop=""}) {
    return (
        <>
            <div className="student-info">
                <p className="student-name"><b>Họ và tên: </b>{hoTen}</p>
                <p className="student-id"><b>Mã số sinh viên: </b>{mssv}</p>
                <p className="student-class"><b>Lớp học phần: </b>{lop}</p>
            </div>
        </>
    )
}

StudentInfo.propTypes = {
    hoTen: PropTypes.string,
    massv: PropTypes.string,
    lop: PropTypes.string
}

export default StudentInfo