import { useState } from "react";
import { AlertCircle, Mail, MessageSquare, Send, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function submitForm(e) {
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

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_subject: formData.subject,
      to_name: "Victor Mugisha",
      message: formData.message,
    };

    // Send the email using EmailJS
    try {
      setSending(true);
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      if (response.status === 200) {
        toast.success("Email received! I'll get back to you soon.", {
          position: "top-center",
          autoClose: 5000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      toast.error("Email failed to send!", {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setSending(false);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formError) {
      setFormError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="pb-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's discuss how we can work together to bring your ideas to
            life.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Map Section */}
          <div className="w-full lg:w-1/2">
            <div className="h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.60532802224!2d29.96242731520134!3d-1.9294194478840436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1703550189234!5m2!1sen!2srw"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="h-full lg:h-[600px] bg-white rounded-2xl shadow-xl p-8 flex flex-col">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send Me a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Form Container - Takes remaining space */}
              <div className="flex-1 flex flex-col space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor transition-colors ${
                        formError.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {formError.name && (
                    <div className="flex items-center mt-1 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{formError.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor transition-colors ${
                        formError.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="yourname@example.com"
                    />
                  </div>
                  {formError.email && (
                    <div className="flex items-center mt-1 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{formError.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor transition-colors ${
                        formError.subject ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="What's this about?"
                    />
                  </div>
                  {formError.subject && (
                    <div className="flex items-center mt-1 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{formError.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message Field - Grows to fill remaining space */}
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`flex-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor transition-colors resize-none min-h-[120px] ${
                      formError.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                  />
                  {formError.message && (
                    <div className="flex items-center mt-1 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{formError.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={sending}
                    onClick={submitForm}
                    className="w-full bg-gradient-to-r from-primaryColor to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </section>
  );
}
