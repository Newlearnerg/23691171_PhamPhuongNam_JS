import "./Header.css"
import PropTypes from "prop-types";

function Header({img = "https://picsum.photos/200"}) {
    return(
        <>
            <div className="profile-image">
                <img className="image" src= {img} alt="Can't load image" />
                <h1 className="title">THÔNG TIN SINH VIÊN</h1>
            </div>
        </>
    )
}

Header.propTypes = {
    img: PropTypes.string
}

export default Header;