import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?[0-9\s-]{7,15}$/.test(val), {
      message: "Invalid phone number",
    }),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const SERVICE_ID = "service_03jkwcc";
      const TEMPLATE_ID = "template_9tz7zwa";
      const USER_ID = "BaFswMHyviXUIlHws";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
      toast.success("Message sent successfully!", { duration: 2000 });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.", { duration: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 p-6 text-gray-200 flex flex-col items-center justify-center">
      <Toaster position="top-right" />

      <h2 className="text-4xl font-bold mb-8 text-center text-purple-400 w-full max-w-7xl">
        Contact Me
      </h2>

      {/* Responsive container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-12 flex-grow">
        {/* Form: order 1 on mobile, left on desktop */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="order-1 md:order-1 w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col"
          noValidate
        >
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className={`input input-bordered input-primary w-full bg-gray-700 text-gray-100 placeholder-gray-400 ${
                errors.name ? "input-error" : ""
              }`}
              {...register("name")}
              disabled={loading}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className={`input input-bordered input-primary w-full bg-gray-700 text-gray-100 placeholder-gray-400 ${
                errors.email ? "input-error" : ""
              }`}
              {...register("email")}
              disabled={loading}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Phone (optional) */}
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-300">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+91xxxxxxxxxx"
              className={`input input-bordered input-primary w-full bg-gray-700 text-gray-100 placeholder-gray-400 ${
                errors.phone ? "input-error" : ""
              }`}
              {...register("phone")}
              disabled={loading}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6 flex-grow">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={7}
              placeholder="Your message here..."
              className={`textarea textarea-bordered textarea-primary w-full bg-gray-700 text-gray-100 placeholder-gray-400 ${
                errors.message ? "textarea-error" : ""
              }`}
              {...register("message")}
              disabled={loading}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full flex justify-center items-center gap-2"
          >
            {loading && <span className="loading loading-spinner loading-sm"></span>}
            Send
          </button>
        </form>

        {/* Map + Follow me: order 2 on mobile, right on desktop */}
        <div className="order-2 md:order-2 flex flex-col w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Map container */}
          <div className="flex-grow h-[500px]">
            {/* Replace iframe src with your map */}
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.356137883125!2d85.1067803037594!3d25.5936480416968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581270368427%3A0xe526d92f4bacc843!2sGardanibagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1749303424769!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Follow me section */}
          <div className="flex justify-center items-center gap-6 bg-gray-700 py-6">
            <a
              href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-red-600 hover:text-red-400 text-3xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-500 hover:text-pink-300 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/animesh.prakash.16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-600 hover:text-blue-400 text-3xl"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} <a target= "_blank" href="https://parkour-animesh.vercel.app/"><strong>Animesh Prakash</strong></a>. All rights reserved.
      </footer>
    </section>
  );
};

export default ContactSection;
