import React from 'react'
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaPhoneAlt,FaTelegramPlane } from "react-icons/fa";

function Footer() {
    return (
        <>

            {/* Start Footer Pert */}

            <footer className='footer_area'>
                <div className="container">
                    <div className="row margin_bottom">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact_box">
                                <h3>Contact Info</h3>
                                <p><a href="#"><MdLocationPin className='footer_icon' /> Lalji Shopping, Maharaja Farm, Near Yogichowk, Surat.</a></p>
                                <p><a href="#" className='footer_phone'><FaPhoneAlt className='footer_icon' /> +91 12344 56786</a></p>
                                <p><a href="#"><MdEmail className='footer_icon' /> lalji007@example.com</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact_box">
                                <h3>Opening Hours</h3>
                                <p className='opening_hours'>
                                    Mon - Sat
                                    <span>All Time Open</span>
                                </p>
                                <p className='opening_hours'>
                                    Sunday
                                    <span>Closed</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact_box">
                                <h3>Newsletter</h3>
                                <form className='footer_form'>
                                    <input type="text" placeholder='Your email...' className='footer_control' />
                                    <button type='submit' className='btn'>
                                        Subcribes<FaTelegramPlane className='form_icon' />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copy_left">
                                <p>Food © 2022 - Designed by Lalji Group.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="copy_right">
                                <a href="#">Terms & Conditions</a><span>|</span><a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* End Footer Pert */}

        </>
    )
}

export default Footer;