import { Bounce } from "react-awesome-reveal";
import Contact from "../components/Hooks/Contact";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function ContactForm({ details = [] }) {
  const handleSendEmail = (e) => {
    e.preventDefault();

    const subject = document.querySelector("input.contactSubject");
    const message = document.querySelector("textarea.contactMessage");
    const reason = document.querySelector("select.contactSelect");
    const phone = document.querySelector("input.contactPhone");

    const templateParams = {
      subject: subject.value,
      message: message.value,
      reason: reason.value,
      phone: phone.value,
      to_email: details?.personalDetails?.email || "example@example.com",
    };

    emailjs
      .send(
        "service_q4mz69g",    
        "template_motnhd9",    
        templateParams,
        "hDzqQtESw86Hp0onJ"      
      )
      .then(
        (response) => {
          toast.success("Email sent successfully!");
          subject.value = "";
          message.value = "";
          phone.value = "";
        },
        (error) => {
          toast.error("Failed to send email. Try again later.");
        }
      );
  };

  return (
    <>
      <Contact />
      <Bounce className="pt-4">
        <form
          method="POST"
          onSubmit={handleSendEmail}
          className="flex flex-col gap-6 max-w-[450px] mx-auto"
        >
          {/* subject */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              <span>Subject</span>
              <input
                type="text"
                required
                placeholder="Mail subject"
                className="contactSubject w-full border border-primary bg-inherit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>
          </div>
          {/* select */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              <span>Reason</span>
              <select
                required
                className="contactSelect w-full border border-primary bg-inherit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
                <option value="Pricing">Pricing</option>
              </select>
            </label>
          </div>
          {/* phone */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              <span>Phone Number</span>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="contactPhone w-full border border-primary bg-inherit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>
          </div>
          {/* message */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              <span>Message</span>
              <textarea
                rows="6"
                required
                placeholder="Enter your message..."
                className="contactMessage w-full border border-primary bg-inherit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white cursor-pointer bg-green-700 text-lg font-semibold py-3 rounded-lg active:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_10px_theme(colors.primary.DEFAULT)] hover:shadow-[0_0_10px_theme(colors.primary.DEFAULT),0_0_15px_theme(colors.primary.DEFAULT)] transition-all"
          >
            Send Email
          </button>
        </form>
      </Bounce>
    </>
  );
}
