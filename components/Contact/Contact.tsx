"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "../../src/actions";
import { Button } from "../ui/button";

export default function Form() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });
  useEffect(() => {
    if (sendEmailState.success) {
      alert("Email sent!");
    }
    if (sendEmailState.error) {
      alert("Error sending email!");
    }
  }, [sendEmailState]);

  return (
    <form action={sendEmailAction}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Nom - Prénom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom - Prénom"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="exemple@email.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Votre Message
        </label>
        <textarea
          rows={4}
          id="message"
          name="message"
          placeholder="Description de votre demande"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <Button type="submit" aria-label="Envoyer le formulaire" className="bg-green-700 hover:bg-accent text-white">
          Envoyer
        </Button>
      </div>
    </form>
  );
}


