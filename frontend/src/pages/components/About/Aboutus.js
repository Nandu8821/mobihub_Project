
import "../../../css/Aboutus.css";
import { Link } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { GiPowerLightning } from "react-icons/gi";
import { TbSpeakerphone } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
const Aboutus = () => {
  return (
    <div className="All-About-Us">
    <>
<div className="Heading">
  <div className="content11">
    <h1>About us</h1>
  </div>
  <img src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="m" />
</div>

<div className="All-About-Us-1"> 
      {/* top Part start */}
      <div className="firstlayer">
        <div className="leftlayer">
          <h3>ABOUT US</h3>
          <h1>
            Shopify powers millions of  businesses worldwide
          </h1>
          <p>
            The all-in-one commerce platform to start, run, and  grow a
            business.
          </p>
          <button className="leftlayer-button">Get Started</button>
        </div>

        <div className="rightlayer">
          <img
            src="https://images.unsplash.com/photo-1557690267-fad2f168bb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ko"
          />
        </div>
      </div>
      <br/>
      <br/>

      <div className="secondlayer">
        <div className="secondlayer-left">
          <img
            src="https://images.unsplash.com/photo-1599317193916-642a55564630?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="c"
          />
        </div>

        <div className="secondlayer-right">
          <p>SHOPIFY STORY</p>
          <h1>
            The first Shopify store <br />
            was our own{" "}
          </h1>
          <p>
            Over a decade ago, we started a store to sell to sell snowboards
            online. None of the ecommerce solutions at the time gave us the
            control we needed to be successful—so we built our own.Today,
            businesses of all sizes use Shopify, whether they're selling online,
            in retail stores, or on-the-go.{" "}
          </p>
        </div>
      </div>
      {/* top part end*/}
      <br/>
      <br/>

      {/* Mission start  */}
      <div className="our-mission">
        <h3>OUR MISSION</h3>
        <h1>Making commerce better for everyone</h1>
        <p>
          {" "}
          We help people achieve independence by making it easier to start, run,
          and grow a business. We believe the future of commerce has more
          voices, not fewer, so we’re reducing the barriers to business
          ownership to make commerce better for everyone.{" "}
        </p>
      </div>

      {/* Mission End */}
      <br/>
      <br/>

      {/* Team Part start */}
      <div className="OurTeam">
        <div className="OurTeam-Left">
          <p>OUR TEAM AND OUR SOCIAL IMPACT</p>
          <h1>Creating a community for impact</h1>
          <p className="OurteamDesc">
            Shopify has grown from 5 people in a coffee shop to over 10,000
            across the globe. With millions of businesses powered by Shopify, we
            invest in our people and our communities. Our Social Impact
            initiatives focus on enabling an equitable future by building
            products and programs to support our team and merchants.{" "}
          </p>
        </div>
        <div className="OurTeam-Right">
          <img
            src="https://img.freepik.com/premium-vector/business-characters-group-work-together-developing-creative-ideas-businesspeople-teamwork-office-employees-brainstorm_87771-20090.jpg?w=1060"
            alt="cd"
          />
        </div>
      </div>
      {/* Team Part End */}
      <br/>
      <br/>

      {/* Our Commitment Start  */}
      <div className="Our-Commitment">
        <div className="Our-Commitment-Left">
          <p>OUR COMMITMENT TO SUSTAINABILITY</p>
          <h1>We're building a 100-year company</h1>
          <p>
            Shopify builds for the long term, and that means investing in our
            planet so that we can future proof Shopify and help our merchants
            future proof their businesses, too. Our Sustainability Fund includes
            kickstarting the carbon removal market and choosing renewable
            energy, reducing and removing our carbon emissions, and creating
            solutions for our merchants to do the same.
          </p>
          <Link to="">Read historical sustainability reports</Link>
          <Link to="">Read our 2022 Climate Report </Link>
        </div>
        <div className="Our-Commitment-Right">
          <img
            src="https://images.unsplash.com/photo-1570891836654-d4961a7b6929?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="c"
          />
        </div>
      </div>
      {/* Our Commitment Start  */}
      <br/>
      <br/>

      {/* Learn More About us  */}
      <div className="Mobi-Middle">
        <h1>Our-Commitment-Right</h1>
      </div>

      {/* Award winning Support  starts */}
      <div className="Award-winning">
        <div className="support">
          <MdSupportAgent />
          <h3>Award-winning support</h3>
          <p>
            Get the help you want with 24/7 support—before, during, and after
            your trial.
          </p>
          <Link to="" className="contact-link">
            Contact Support{" "}
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="Career">
        <GiPowerLightning /> 
          <h3>Career opportunities</h3>
          <p>
          Learn how you can have an impact by exploring opportunities at Shopify.
          </p>
          <Link to="" className="contact-link">
          Explore careers{" "}
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="media">
        <TbSpeakerphone />
          <h3>Press and media</h3>
          <p>
          Find press releases, executive team bios, and more.
          </p>
          <Link to="" className="contact-link">
          View press{" "}
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* Award winning Support  end */}
      <br/>
      <br/>
      {/* Joining our Company Start */}
      <div className="joinUS">
  <div className="content11">
    <h1>Interested in working at Mobihub?</h1>
    <button>See job openings</button>
  </div>
</div>
</div>


      {/* Joining our Company End */}
    </>
      
    </div>
  )
}

export default Aboutus
