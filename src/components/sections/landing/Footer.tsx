import React from "react";

function Footer() {
  return (
    <div className="text-white bg-primary py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div>
          <p className="text-[34px] font-bold">E-Food Restaurant</p>
          <p className="mt-4 mb-8">
            Get your taste buds experience wonder.
          </p>

          <div className="flex gap-4">
            <div>
              <img src="/images/facebook_app_symbol.png" alt="social icon" />
            </div>
            <div>
              <img src="/images/linkedin.png" alt="social icon" />
            </div>
            <div>
              <img src="/images/twitter.png" alt="social icon" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-[28px]">Contact</p>
          <div className="flex gap-2 items-center">
  <div>
    <img src="/images/maps_and_flags.png" alt="location icon" />
  </div>
  <p><span className="hidden md:inline">E-food </span>Restaurant</p>
</div>

          <div className="flex gap-2 items-center">
            <div>
              <img src="/images/call_icon.png" alt="location icon" />
            </div>
            <p>+91 8431873870</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/images/envelop.png" alt="location icon" />
            </div>
            <p>21bcaf27@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="flex justify-center pt-32">
        Hemanth L ©2024 all right reserve.
      </p>
    </div>
  );
}

export default Footer;
