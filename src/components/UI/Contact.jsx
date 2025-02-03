import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function submitForm(e) {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormError({
        name: !formData.name ? "Name is required" : "",
        email: !formData.email ? "Email is required" : "",
        subject: !formData.subject ? "Subject is required" : "",
        message: !formData.message ? "Message is required" : "",
      });
      return;
    }

    const serviceId = "service_s5v8wdn";
    const templateId = "template_pmdu0hc";
    const publicKey = "_DeMbz3bx5N9dE5ph";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_subject: formData.subject,
      to_name: "Victor Mugisha",
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // Email Sent Successfully
        console.log("Email sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        // Email Failed to Send
        console.log("Email failed to send", error);
      });
  }

  return (
    <section className="pb-16" id="contact">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in Touch
        </h2>
        <div className="md:flex justify-between items-start gap-4">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.60532802224!2d29.96242731520134!3d-1.9294194478840436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1703550189234!5m2!1sen!2srw"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" onSubmit={submitForm}>
              <div className="mb-5 flex flex-col items-start gap-1">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                {formError.name && (
                  <p className="pl-3 text-red-600">{formError.name}</p>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                {formError.email && (
                  <p className="pl-3 text-red-600">{formError.email}</p>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                {formError.subject && (
                  <p className="pl-3 text-red-600">{formError.subject}</p>
                )}
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows="6"
                  placeholder="Your Message Here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full h-32 p-3 focus:outline-none rounded-[5px] resize-none"
                />
                {formError.message && (
                  <p className="pl-3 text-red-600">{formError.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
