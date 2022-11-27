import React, { useState } from "react";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Υποβολή");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Υποβολή");

        // Reset form fields
        setFullname("");
        setEmail("");
        setPhone("");
        setMessage("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Υποβολή");
      // Reset form fields
      setFullname("");
      setEmail("");
      setPhone("");
      setPhone("");
    }
    console.log(fullname, email, phone, message);
  };
  return (
    <main>
      <header className="p-2 sm:px-64 gap-4 pt-10">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg flex flex-col px-8 py-8 bg-white"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
          Φόρμα επικοινωνίας για ραντεβού
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-900 font-light mt-8"
          >
            Ονοματεπώνυμο<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"
          />
          {errors?.fullname && (
            <p className="text-red-500">Απαιτείται το Ονοματεπώνυμο!</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-900 font-light mt-4"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"
          />
          {errors?.email && (
            <p className="text-red-500">Απαιτείται το email!</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-900 font-light mt-4"
          >
            Τηλέφωνο<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"
          />
          {errors?.phone && (
            <p className="text-red-500">Απαιτείται το Τηλέφωνο!</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-900 font-light mt-4"
          >
            Μήνυμα<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Απαιτείται το Μήνυμα!</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Ευχαριστούμε! Το μήνυμά σας παρελήφθη!
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.
              </p>
            )}
          </div>
        </form>
      </header>
    </main>
  );
}