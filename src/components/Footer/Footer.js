import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from '@material-ui/icons/Email';
import { Divider, IconButton } from "@material-ui/core";

export const Footer = () => {
  return (
    <div>
      <MDBFooter
        style={{ background: "url(../images/footer-background.jpg)" }}
        className="page-footer footer-bg "
      >
        <MDBContainer
          fluid
          className="text-center text-md-left footer-bg-wrapper py-5"
        >
          <MDBRow around>
            <MDBCol md="4">
              <div className="text-center container ">
                <img
                  src="./gbu.png"
                  className="img-fluid footer-img py-3"
                  alt=""
                />

                <h4 className="font-weight-normal">
                  गौतम बुद्ध विश्वविद्यालय <br></br>
                  Gautam Buddha University <br></br>
                </h4>
                <br />
                <h6 className="font-weight-light ">
                  Greater Noida Gautam Budh Nagar <br></br>
                  Uttar Pradesh (India) - 201310
                </h6>
                <a href="tel:01202344200">
                  <i className="fa fa-phone mr-3  text-decoration-none"></i>
                  Phone No.: 0120-2344200
                </a>
              </div>
              <div className="text-center mt-4">
                <ul className="list-unstyled list-inline">
                  <IconButton>
                    <EmailIcon style={{color:"#fff"}}/>
                  </IconButton>
                  <IconButton>
                    <FacebookIcon style={{color:"#fff"}}/>
                  </IconButton>
                  <IconButton>
                    <TwitterIcon style={{color:"#fff"}}/>
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon style={{color:"#fff"}}/>
                  </IconButton>
                  <IconButton>
                    <InstagramIcon style={{color:"#fff"}}/>
                  </IconButton>
                </ul>
              </div>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase my-5 font-weight-bold" style={{borderBottom:"3px solid #cc3636",paddingBottom:"5px"}}>
                Quick Links
              </h5>
              <ul className="list-unstyled font-weight-normal">
                <li className="py-2">
                  <a href="#!">Dr. B.R.Ambedkar Library</a>
                </li>
                <li className="py-2">
                  <a href="#!">Corporate Relations Cell</a>
                </li>
                <li className="py-2">
                  <a href="#!">Tender</a>
                </li>
                <li className="py-2">
                  <a href="#!">E-Tender</a>
                </li>
                <li className="py-2">
                  <a href="#!">IPR Cell</a>
                </li>
                <li className="py-2">
                  <a href="#!">Media</a>
                </li>
                <li className="py-2">
                  <a href="#!">E-Cell</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none " />
            <MDBCol md="2">
              <h5 className="text-uppercase my-5 font-weight-bold" style={{borderBottom:"3px solid #cc3636",paddingBottom:"5px"}}>
                Important Links
              </h5>
              <ul className="list-unstyled font-weight-normal">
                <li className="py-2">
                  <a href="#!">Cultural Council</a>
                </li>
                <li className="py-2">
                  <a href="#!">Sports Council</a>
                </li>
                <li className="py-2">
                  <a href="#!">Meditation Center</a>
                </li>
                <li className="py-2">
                  <a href="#!">Forms</a>
                </li>
                <li className="py-2">
                  <a href="#!">Online Fee Payment</a>
                </li>
                <li className="py-2">
                  <a href="#!">Sitemap</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase my-5 font-weight-bold" style={{borderBottom:"3px solid #cc3636",paddingBottom:"5px"}}>
                Youtube Links
              </h5>
              <ul className="list-unstyled font-weight-normal">
                <li className="py-2">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCQF9UvxeNdWxtWhqlorVm9w"
                    target="_blank"
                  >
                    GBU Learning Resources
                  </a>
                </li>
                <li className="py-2">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCmU_Lsw1s03PNjQ0_xE48QQ"
                    target="_blank"
                  >
                    Electrical Engg.
                  </a>
                </li>
                <li className="py-2">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCqw1kF4WsAS_rybKgqQviXQ"
                    target="_blank"
                  >
                    Applied Mathematics
                  </a>
                </li>
                <li className="py-2">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UClBWls_W9SAfR-O0PNXqPwQ"
                    target="_blank"
                  >
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
