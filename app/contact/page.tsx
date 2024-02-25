"use client";

import axios from 'axios';
import { useForm, Controller } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";

import "./contact.css";

type FormSchema = {
  name: string;
  email: string;
  message: string;
};
const ContactPage = () => {
  const { toast } = useToast();

  const { handleSubmit, control } = useForm<FormSchema>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormSchema) {
    function callToast(msg: string) {
      toast({
        title: msg,
        variant: "destructive",
      });
    }
    if (data.name === "") callToast("Please enter your name");
    else if (data.message === "") callToast("Please enter your message");
    else if (data.email === "") callToast("Please enter your email");
    else if (data.email.match(/\S+@\S+\.\S+/) === null)
      callToast("Please enter a valid email");
    else {
      const sendData = async () => {
        try {
          const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            template_params: {
              name: data.name,
              message: data.message,
              email: data.email
            }
          });
          console.log(response.data);
          toast({
            title: `Hey ${data.name}, We receive your latter. We'll reach you soon.`, 
          });
        } catch (error: any) {
          console.error('Oops...', error);
          callToast("Oops..."+error.message);
        }
      };
      sendData();
    }
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-12 font-clourso"><span className='text-red-500'>Together </span>, Let&apos;s Create Memories: <span className="text-teal-500">Contact Us!</span></h1>
      {/* form container */}
      <form className="relative form__contact min-w-fit z-0" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <p>Hey, Stranger!</p>
          <p>
            My name is{" "}
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <span
                  className="form__field field--name"
                  data-placeholder="your name"
                  tabIndex={1}
                  contentEditable
                  role="textbox"
                  onBlur={(e) => field.onChange(e.target.textContent)}
                />
              )}
            />{" "}
            and I&apos;m writing tou you since I want to contact you about{" "}
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <span
                  className="form__field field--message"
                  data-placeholder="your message"
                  tabIndex={2}
                  contentEditable
                  onBlur={(e) => field.onChange(e.target.textContent)}
                />
              )}
            />
            .
          </p>
          <p>
            This is my{" "}
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <span
                  className="form__field field--email"
                  data-placeholder="email address"
                  tabIndex={3}
                  contentEditable
                  role="textbox"
                  onBlur={(e) => field.onChange(e.target.textContent)}
                />
              )}
            />
            .
          </p>
          <p>Hope to get in touch soon. Cheers!</p>
          <button type="submit" className="button button--xlarge" tabIndex={4}>
            Send message &#187;
          </button>
        </fieldset>
      </form>

      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
          </filter>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
          </filter>
          <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 15" />
          </filter>
          <filter id="blur4">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ContactPage;
