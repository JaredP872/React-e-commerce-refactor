import { useState } from "react";
import "../styles/Contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({}); // State to manage form errors
  const [success, setSuccess] = useState(false); // State to manage success feedback

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email validation function
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate inputs
  const validateInputs = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Please enter your Fullname";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Provide a valid email address";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true); // Mark form submission as successful
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({ fullname: "", email: "", comments: "" });
    }
  };

  return (
    <>
      <main className="contact-container">
        <section className="thank-you-section">
          <h2>Thank you</h2>
          <p>
            Hello, and thank you for viewing our page! If you would like to
            leave a comment or get involved in a partnership, please reach out
            and let us know!
          </p>
        </section>
        <div className="form-container">
          <form id="form" onSubmit={handleSubmit}>
            <h2>Contact us!</h2>

            <div className="input-control">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && (
                <div className="error">{errors.fullname}</div>
              )}
            </div>

            <div className="input-control">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="input-control">
              <label htmlFor="comments">Leave a comment!</label>
              <textarea
                name="comments"
                rows="4"
                cols="90"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
          {success && (
            <p className="success-message">Thank you for contacting us!</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Contact;
