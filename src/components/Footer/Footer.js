import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <MDBFooter className="page-footer font-small pt-4 mt-4 bg bg-light unique-color-dark">
        <MDBContainer fluid className="text-center text-md-left text-dark">
          <MDBRow>
            <MDBCol md="6">
              <div class="text-center container text-dark">
                <img src="./gbu.png" className="img-fluid footer-img" alt="" />
                <h4 className="font-weight-normal">
                  गौतम बुद्ध विश्वविद्यालय <br></br>
                  Gautam Buddha University <br></br>
                </h4>
                <br></br>
                <h6 className="font-weight-light text-dark">
                  Greater Noida Gautam Budh Nagar <br></br>
                  Uttar Pradesh (India) - 201310
                </h6>
                <a href="tel:01202344200">
                  <i className="fa fa-phone mr-3 text-dark text-decoration-none"></i>
                  Phone No.: 0120-2344200
                </a>
              </div>
              <div className="text-center mt-4">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-fb mx-1">
                      <i className="fab fa-facebook-f"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-tw mx-1">
                      <i className="fab fa-twitter"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1">
                      <i className="fab fa-google-plus"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-li mx-1">
                      <i className="fab fa-linkedin-in"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-dribbble mx-1">
                      <i className="fab fa-dribbble"> </i>
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled font-weight-normal">
                <li>
                  <a href="#!">Dr. B.R.Ambedkar Library</a>
                </li>
                <li>
                  <a href="#!">Corporate Relations Cell</a>
                </li>
                <li>
                  <a href="#!">Tender</a>
                </li>
                <li>
                  <a href="#!">E-Tender</a>
                </li>
                <li>
                  <a href="#!">IPR Cell</a>
                </li>
                <li>
                  <a href="#!">Media</a>
                </li>
                <li>
                  <a href="#!">E-Cell</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none " />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Important Links :
              </h5>
              <ul className="list-unstyled font-weight-normal">
                <li>
                  <a href="#!">GBU Cultural Council</a>
                </li>
                <li>
                  <a href="#!">GBU Sports Council</a>
                </li>
                <li>
                  <a href="#!">Meditation Center</a>
                </li>
                <li>
                  <a href="#!">Forms</a>
                </li>
                <li>
                  <a href="#!">Online Fee Payment</a>
                </li>
                <li>
                  <a href="#!">Sitemap</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Youtube Links
              </h5>
              <ul className="list-unstyled font-weight-normal">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCQF9UvxeNdWxtWhqlorVm9w"
                    target="_blank"
                  >
                    {" "}
                    GBU Learning Resources
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCmU_Lsw1s03PNjQ0_xE48QQ"
                    target="_blank"
                  >
                    {" "}
                    Electrical Engg.
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCqw1kF4WsAS_rybKgqQviXQ"
                    target="_blank"
                  >
                    {" "}
                    Applied Mathematics
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UClBWls_W9SAfR-O0PNXqPwQ"
                    target="_blank"
                  >
                    {" "}
                    Electronics & Communication Engg.
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.gbu.ac.in"> Gautam Buddha University </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
