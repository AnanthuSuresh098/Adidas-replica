import "./address.css"
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";

export const Address=()=>{
    return (
      <>
        <Navbar />
        <div class="nkcontainer">
          <h2 id="nkhead">Add Address</h2>

          <input
            id="addIns"
            class="fname"
            type="text"
            placeholder="First Name"
          />
          <input
            id="addIns"
            class="Lname"
            type="text"
            placeholder="Last Name"
          />
          <input
            id="addIns"
            class="Lname"
            type="number"
            placeholder="Mobile Number"
          />
          <input id="addIns" class="fname" type="text" placeholder="Email" />

          <input
            id="addIns"
            class="address"
            type="text"
            placeholder="Address"
          />
          <input id="addIns" class="fname" type="text" placeholder="Landmark" />
          <input id="addIns" class="fname" type="text" placeholder="City" />
          <input id="addIns" class="Lname" type="text" placeholder="State" />
          <input
            id="addIns"
            class="fname"
            type="text"
            placeholder="Enter Pincode"
          />
          <button id="addIns" id="home" class="sing">
            Home
          </button>
          <button id="addIns" class="sing">
            office
          </button>
          <button id="addIns" class="sing">
            other
          </button>
          <br />
          <div id="cb">
            <input class="check" type="checkbox" />
            Make this my default address
          </div>
          <br />
          <button class="btncancel">Cancel</button>
          <a href="/Payment">
            <button class="btnaddress">Continue</button>
          </a>
        </div>
        <Footer />
      </>
    );
}