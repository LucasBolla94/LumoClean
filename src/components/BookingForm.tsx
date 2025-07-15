"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { COUNTRY_CODES } from "@/lib/CountryCodes";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import DatePicker from "react-datepicker";
import ClientOnly from "@/components/ClientOnly";
import "react-datepicker/dist/react-datepicker.css";

// =======================================================
// 🔷 CONFIGURAÇÃO - VALORES POR HORA
// =======================================================
const RATES = {
  Residential: 14.5,
  Business: 16.5,
};

// =======================================================
// 🔷 COMPONENTE BOOKING FORM
// =======================================================
export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    countryCode: "+44",
    email: "",
    postcode: "",
    city: "Glasgow",
    type: "Residential",
    date: null as Date | null,
    hours: 1,
    contactPrefs: {
      whatsapp: true,
      email: true,
      phone: true,
    },
  });

  const [estimate, setEstimate] = useState<number>(RATES.Residential);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Atualiza estimativa automaticamente
  useEffect(() => {
    setEstimate(RATES[form.type as keyof typeof RATES] * form.hours);
  }, [form.type, form.hours]);

  // Handle para mudanças nos campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name in form.contactPrefs) {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        contactPrefs: { ...prev.contactPrefs, [name]: checked },
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit do formulário
  const handleSubmit = async () => {
    setSubmitting(true);
    setSuccessMsg("");

    const { name, phone, email, postcode, date, contactPrefs } = form;

    if (!name || !phone || !email || !postcode || !date) {
      alert("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    if (!Object.values(contactPrefs).some((v) => v)) {
      alert("Please select at least one contact preference.");
      setSubmitting(false);
      return;
    }

    await addDoc(collection(db, "jobs"), {
      ...form,
      date: date.toISOString(),
      estimate,
      confirmed: false,
      active: false,
      createdAt: serverTimestamp(),
    });

    setSuccessMsg(
      "✅ Thank you! Our team will contact you shortly to confirm your booking."
    );

    setForm({
      name: "",
      phone: "",
      countryCode: "+44",
      email: "",
      postcode: "",
      city: "Glasgow",
      type: "Residential",
      date: null,
      hours: 1,
      contactPrefs: {
        whatsapp: true,
        email: true,
        phone: true,
      },
    });
    setSubmitting(false);
  };

  return (
    <ClientOnly>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="bg-white p-4 md:p-6 rounded-lg shadow max-w-xl mx-auto space-y-5"
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Book Your Cleaning
        </h2>

        <div>
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="border rounded p-3 w-full mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone (WhatsApp)</label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="border rounded p-3"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="7xxx xxx xxx"
              className="border rounded p-3 w-full"
              required
              pattern="[0-9\s]{7,15}"
              title="Enter a valid phone number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            type="email"
            className="border rounded p-3 w-full mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="postcode" className="block font-semibold">
            PostCode
          </label>
          <input
            id="postcode"
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            placeholder="e.g., G1 1AA"
            className="border rounded p-3 w-full mt-1 uppercase tracking-wide"
            required
          />
        </div>

        <div>
          <label htmlFor="city" className="block font-semibold">
            City
          </label>
          <select
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="border rounded p-3 w-full mt-1"
          >
            <option value="Glasgow">Glasgow</option>
            <option value="Edinburgh">Edinburgh</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block font-semibold">
            Type of Service
          </label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border rounded p-3 w-full mt-1"
          >
            <option value="Residential">Residential</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block font-semibold">
            Date
          </label>
          <DatePicker
            selected={form.date}
            onChange={(date: Date | null) =>
              setForm((prev) => ({ ...prev, date }))
            }
            className="border rounded p-3 w-full mt-1"
            minDate={new Date()}
            placeholderText="Select Date"
          />
        </div>

        <div>
          <label htmlFor="hours" className="block font-semibold">
            Number of Hours
          </label>
          <select
            id="hours"
            name="hours"
            value={form.hours}
            onChange={handleChange}
            className="border rounded p-3 w-full mt-1"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((h) => (
              <option key={h} value={h}>
                {h} hour{h > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="border border-gray-300 p-3 rounded">
          <legend className="font-semibold text-gray-700">
            Preferred Contact Method
          </legend>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            {(["whatsapp", "email", "phone"] as const).map((method) => (
              <label
                key={method}
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  name={method}
                  checked={form.contactPrefs[method]}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span className="capitalize">{method}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="text-blue-700 font-medium">
          Estimated Price: £{estimate.toFixed(2)}
          <div className="text-xs text-gray-500">
            This is an estimate. We will confirm exact details with you.
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition"
        >
          {submitting ? "Submitting..." : "Submit Booking"}
        </button>

        {successMsg && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-sm text-center shadow">
            {successMsg}
          </div>
        )}
      </form>
    </ClientOnly>
  );
}
