import React from "react";
import { useEffect } from "react";
import { useContext } from "react"; 
import { UserContext } from "../utils/context";


function About() {

  const { setCurrentPath } = useContext(UserContext);
  useEffect(() => {
    setCurrentPath("/about/");
  }, []);
  
  return (
    <div className="container">
      <div className="card">
        <div className="m-3">
          <h4 className="card-header" >Our Story</h4>
          <p className="card-body" >
            Founded in 2007, Bottomless Vault Banking has been on a mission to
            redefine the banking experience. Guided by our vision to empower
            individuals and businesses, we combine traditional values with
            innovative technology, providing a range of comprehensive services
            designed to meet your financial needs. With a commitment to
            transparency, integrity, and unwavering customer service, we have
            built lasting relationships and remain dedicated to helping you
            achieve financial success.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Our Customers</h4>
          <p className="card-body" >
            At Bottomless Vault Banking, our customers are at the heart of
            everything we do. We believe in building strong, long-lasting
            relationships based on trust, understanding, and personalized
            service. Whether you're an individual looking for a reliable
            financial partner or a business seeking tailored banking solutions,
            we are here to support you every step of the way. We strive to
            create a welcoming and inclusive environment where every customer
            feels valued and heard. Your financial goals and aspirations are our
            top priority, and we are committed to providing you with the highest
            level of service, convenience, and flexibility. Join our family of
            satisfied customers and experience a banking relationship that goes
            beyond transactions - together, we thrive.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Our Team</h4>
          <p className="card-body" >
            Behind the success of Bottomless Vault Banking stands a dynamic and
            dedicated team of professionals who are passionate about delivering
            exceptional banking experiences. Comprised of experienced bankers,
            technology enthusiasts, and customer service experts, our team
            brings together diverse talents and expertise to serve you better.
            With a shared commitment to excellence, innovation, and continuous
            improvement, we work tirelessly to ensure that our customers' needs
            are met with the utmost care and attention. Guided by a
            customer-centric approach, our team is always ready to go the extra
            mile, providing personalized solutions and proactive support.
            Together, we form a cohesive unit driven by a common goal - your
            financial success.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Our Mission</h4>
          <p className="card-body" >
            At Bottomless Vault Banking, our mission is to empower individuals
            and businesses to achieve their financial goals with confidence. We
            strive to be more than just a bank; we aim to be a trusted partner
            and guide on your financial journey. Through innovative products,
            personalized services, and a commitment to excellence, we are
            dedicated to helping our customers thrive in an ever-changing
            financial landscape. We aim to provide accessible and inclusive
            banking solutions, ensuring that everyone has the opportunity to
            grow their wealth, secure their future, and make informed financial
            decisions. With our unwavering focus on integrity, transparency, and
            customer satisfaction, we are driven by the belief that financial
            success should be within reach for all. Your aspirations drive our
            mission, and we are here to support you every step of the way.
          </p>
        </div>
        <div className="m-3">
          <h4 className="card-header" >Our Vision</h4>
          <p className="card-body" >
            At Bottomless Vault Banking, our vision is to be the leading force
            in transforming the banking industry, setting new standards of
            excellence and innovation. We envision a future where banking is
            seamlessly integrated into the lives of our customers, making their
            financial journey effortless and rewarding. Our vision encompasses
            leveraging cutting-edge technology to deliver unparalleled
            convenience, security, and accessibility in all aspects of banking.
            We aspire to be the trusted companion of choice for individuals and
            businesses, providing them with comprehensive financial solutions
            that adapt to their evolving needs. By fostering a culture of
            continuous improvement and embracing emerging trends, we aim to stay
            ahead of the curve, anticipating and exceeding our customers'
            expectations. Ultimately, our vision is to empower our customers
            with the tools and knowledge they need to navigate the complexities
            of the financial world and achieve their dreams.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
