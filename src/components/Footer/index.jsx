import {
  BsFacebook,
  BsFillThreadsFill,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#f0ffe5] py-14">
      {/* top section */}
      <div className="flex justify-between pt-16 px-28">
        <div className="w-full max-w-64 flex flex-col gap-1">
          <h4 className="text-xl font-medium">SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p className="text-base font-normal text-[#838383]">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <div className="flex flex-col gap-2">
            <input
              className="h-9 w-full px-5 py-1 text-sm border border-black/20"
              type="text"
              placeholder="Enter Your Email Address"
            />

            <button
              className="w-32 h-9 bg-[#247822] font-semibold text-base text-white rounded-3xl"
              type="button"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">ABOUT US</h4>
          <ul className="text-base font-normal text-[#838383] flex flex-col gap-2">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">OUR SERVICES</h4>
          <ul className="text-base font-normal text-[#838383] flex flex-col gap-2">
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">USEFUL LINKS</h4>
          <ul className="text-base font-normal text-[#838383] flex flex-col gap-2 w-[193px]">
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">GET IN TOUCH</h4>
          <ul className="text-base font-normal text-[#838383] flex flex-col gap-2 w-[218px]">
            <li>
              Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
              Gurgaon, Haryana, India 122003
            </li>
            <li>Call: +919958287272</li>
            <li>Email: care@chaperoneplants.com</li>
          </ul>
        </div>
      </div>
      {/* Middle Section */}
      <div className="px-28">
        <h3 className="text-[22px] font-medium">CHAPERONE</h3>
        <p className="text-[#838383] text-base font-normal mb-4">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>
      <div className="px-28 pb-11">
        <h3 className="text-[22px] font-medium mb-[10px]">Follow Us On</h3>
        <div className="flex gap-2">
          {/* Social media icons */}
          <a
            href="https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <button type="button">
              <BsInstagram className="text-2xl" />
            </button>
          </a>
          <a href="https://www.facebook.com/?_rdr" target="_blank">
            <button type="button">
              <BsFacebook className="text-2xl" />
            </button>
          </a>
          <a href="https://www.threads.net/login" target="_blank">
            <button type="button">
              <BsFillThreadsFill className="text-2xl" />
            </button>
          </a>
          <a href="https://www.threads.net/login" target="_blank">
            <button type="button">
              <BsYoutube className="text-2xl" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/company/chaperone-plants/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BCWtN0IiJQYSWxKPuX68pcA%3D%3D"
            target="_blank"
          >
            <button type="button rounded-full overflow-hidden">
              <BsLinkedin className="text-2xl rounded-full" />
            </button>
          </a>
        </div>
      </div>
      {/* Bottom Section */}
      <hr className="border-t border-[#000000]/20" />
      <div className="mt-[17px] px-28 font-medium text-[#000000]/40">
        &copy; 2023, chaperone.com All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
