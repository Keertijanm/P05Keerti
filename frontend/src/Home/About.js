import React from "react";
import mission from "../image/consult-min.jpg"
import vision from "../image/vision.png";
import Image from "../image/doctor.jpg";

const About = () => {
  return (
    <div width="100%">
      <div className="container">
        <div className="card my-5  ">
          <div className="row g-0">
            <div className="col-md-4 order-md-2">
              <img
                src={Image}
                className="img-fluid rounded-start"
                alt="..."
                width={300}
                height={300}
              />
              <img
                src={mission}
                className="img-fluid rounded-start"
                alt="..."
                width={300}
                height={300}
              />
              <img
                src={vision}
                className="img-fluid rounded-start"
                alt="..."
                width={300}
                
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">Online consultation</h3>

                <p className="card-text">
                  One of main issue with current pandemic situation is that the
                  hospitals are bit busy dealing with covid patients and other
                  patients showing similar symptoms so its not easy for their
                  regular patients who used to get a checkup or consultation.
                  This is worsened by the restrictions due to lockdowns and the
                  fear of contracting the contagious virus. So to deal with this
                  issue we have come up with an approach and built this system
                  which provides medical services and allows users to connect
                  and consult with doctors. The aim was to build a minimalist UI
                  for the system so people of any age group could easily
                  navigate through it. A hospital can register their doctors in
                  the system through their legal process and then patients can
                  search doctors from varied specialization for consultation.
                </p>

                <h3>Our Mission</h3>
                <p>
                  Our mission is to revolutionize the way people access and
                  receive medical care. We believe that every individual
                  deserves quality healthcare, regardless of location or
                  availability of resources.
                </p>
                <p>
                  With our platform, we aim to bridge the gap between patients
                  and doctors, connecting you with experienced and licensed
                  healthcare professionals in real-time. Our commitment to
                  patient-centric care drives us to continuously improve and
                  innovate,making sure that your health and wellbeing is our top
                  priority.
                </p>
                <p>
                  {" "}
                  Whether you're seeking a quick consultation, a second opinion,
                  or ongoing support, we're here to make sure that you receive
                  the best possible medical care. Join us on this journey to a
                  healthier tomorrow, and experience the power of accessible,
                  affordable and convenient healthcare.
                </p>

                <h3>Our Vision</h3>
                <p>
                  {" "}
                  Our vision at Online Doctor Consultancy is to create a world
                  where access to quality healthcare is a right, not a
                  privilege. We envision a future where every individual can
                  receive medical attention and support, regardless of their
                  location or circumstances.
                </p>
                <p>
                  Our platform aims to be the go-to destination for all your
                  healthcare needs, providing a comprehensive and seamless
                  experience. Our dedicated team of healthcare professionals and
                  cutting-edge technology will ensure that you receive the best
                  possible medical care, no matter where you are.
                </p>
                <p>
                  {" "}
                  With our platform, we want to empower people to take control
                  of their health and wellbeing, and provide them with the tools
                  and support they need to lead healthier and happier lives.{" "}
                </p>
                <p>
                  Join us as we work towards building a healthier future, one
                  consultation at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
