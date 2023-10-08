import React from "react";

export default function ContactUs() {
  return (
    <>
        <div className="  margin " id="Contact">
      <div className="container box ">
        <h1>CONTACT US</h1>
        <form>
          <div class="mb-3">
            <label for="NAME" class="form-label">
              NAME
            </label>
            <input
              type="text"
              class="form-control"
              id="NAME"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="EMAIL" class="form-label">
              EMAIL
            </label>
            <input
              type="EMAIL"
              class="form-control"
              id="EMAIL"
            />
          </div>
          <div class="mb-3">
            <label for="MESSAGE" class="form-label">
              MESSAGE
            </label>
            <input
              type="textbox"
              class="form-control"
              id="MESSAGE"
            />
          </div>
          <button type="submit" class="btn btn-success marginb">
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
}
