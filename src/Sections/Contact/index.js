import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import illustration from "../../assets/illustration.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
  

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
 // State to store form data
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const submitContactForm = async (data) => {
  console.log("Form Data - ", data)
  try {
    setLoading(true)
    const response = await axios.post(
      "https://webmafia94.onrender.com/api/v1/reach/contact",
      data
    );
    toast.success("Message sent successfully!");
    console.log("Email Res - ", response)
    setLoading(false)
  } catch (error) {
    toast.error("Something went wrong. Please try again later.");
    console.log("ERROR MESSAGE - ", error.message)
    setLoading(false)
  }
}

useEffect(() => {
  if (isSubmitSuccessful) {
    reset({
      email: "",
      name: "",
      message: "",
    })
  }
}, [reset, isSubmitSuccessful])

// Handler to update form data
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};



  return (
    <ContactSection  onSubmit={handleSubmit(submitContactForm)} className="relative" id="contact">
    <ToastContainer />
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons className="relative z-10">
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form className="relative z-10" onSubmit={handleSubmit}>
        <Row className="flex flex-row">
        <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-richblack-50">
          Name
        </label>
          <input name="name" type="text" id="name"  {...register("name", { required: true })} onChange={handleChange} placeholder="your name" />
          </div>
          <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-richblack-50">
          Email
        </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="enter working email id"
            {...register("email", { required: true })}
            onChange={handleChange}
          />
          </div>
        </Row>
        <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-richblack-50">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="form-style"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>
        <div style={{ margin: "0 auto" }}>
        <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
        </div>
      </Form>
      <img className="absolute w-[40%] -right-14 -bottom-1 -z-1" src={illustration} />
      
    </ContactSection>
  );
};

export default Contact; 

