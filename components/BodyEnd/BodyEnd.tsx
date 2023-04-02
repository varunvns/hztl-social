import React from "react";
import Script from "next/script";

function BodyEnd() {
  return (
    <>
      <Script
        src="Theme/js/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>

      <Script
        src="Theme/js/jquery-migrate-3.0.1.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/popper.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/bootstrap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/jquery.easing.1.3.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/jquery.waypoints.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/jquery.stellar.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/owl.carousel.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/jquery.magnific-popup.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/jquery.animateNumber.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/bootstrap-datepicker.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/scrollax.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="Theme/js/google-map.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/Theme/js/main.js" strategy="lazyOnload"></Script>
    </>
  );
}

export default BodyEnd;
