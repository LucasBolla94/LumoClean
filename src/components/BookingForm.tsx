"use client";

import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { postcodeValidator } from "postcode-validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ============================================================
// 🔷 CONFIGURATIONS (easy to edit in future)
// ============================================================

// Available service types
type ServiceType = "Residential" | "Business";

// Hourly rates for each service type (£/hour)
const RATES: Record<ServiceType, number> = {
  Residential: 14,
  Business: 16.5,
};

// Available booking start times
const TIMES: string[] = Array.from({ length: 14 }, (_, i) =>
  `${String(7 + i).padStart(2, "0")}:00`
);

// Available working hours (max 10)
const HOURS_OPTIONS: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

// ============================================================
// 🔷 COMPONENT
// ============================================================

export default function BookingForm() {
  // Form state
  const [form, setForm] = useState<{
    name: string;
    lastName: string;
    phone: string;
    email: string;
    service: ServiceType;
    date: Date | null;
    startTime: string;
    hours: number;
    postcode: string;
  }>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    service: "Residential",
    date: null,
    startTime: "07:00",
    hours: 1,
    postcode: "",
  });

  const [estimate, setEstimate] = useState<number>(0);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Initialize date on mount
  useEffect(() => {
    setForm((prev) => ({ ...prev, date: new Date() }));
  }, []);

  // Recalculate estimate and adjust max hours if needed
  useEffect(() => {
    if (!form.date) return;

    const startHour = parseInt(form.startTime.split(":")[0], 10);
    const endHour = startHour + form.hours;

    if (endHour > 23) {
      const maxHours = 23 - startHour;
      setForm((prev) => ({ ...prev, hours: Math.max(1, maxHours) }));
    }

    const rate = RATES[form.service];
    setEstimate(rate * form.hours);
  }, [form.startTime, form.hours, form.service, form.date]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit booking to Firestore
  const handleSubmit = useCallback(async () => {
    if (!form.date) return;

    setSubmitting(true);

    if (!postcodeValidator(form.postcode, "GB")) {
      alert("Please enter a valid UK postcode.");
      setSubmitting(false);
      return;
    }

    const q = query(
      collection(db, "books"),
      where("date", "==", form.date.toDateString()),
      where("confirmed", "==", true)
    );

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      alert("This date already has a confirmed booking.");
      setSubmitting(false);
      return;
    }

    const lastDocSnap = await getDocs(
      query(collection(db, "books"), orderBy("createdAt", "desc"), limit(1))
    );

    let lastNumber = 0;
    if (!lastDocSnap.empty) {
      const lastId = lastDocSnap.docs[0].data().serviceId;
      const num = parseInt(lastId.split("-")[1], 10);
      lastNumber = num;
    }

    const newId = `LUMO-${String(lastNumber + 1).padStart(6, "0")}`;

    await addDoc(collection(db, "books"), {
      ...form,
      date: form.date.toDateString(),
      estimate,
      createdAt: new Date(),
      active: false,
      confirmed: false,
      serviceId: newId,
    });

    alert(
      `Booking submitted successfully! Your reference number is ${newId}. Our team will contact you to confirm.`
    );

    setForm({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      service: "Residential",
      date: new Date(),
      startTime: "07:00",
      hours: 1,
      postcode: "",
    });

    setSubmitting(false);
  }, [form, estimate]);

  // ============================================================
  // 🔷 RENDER
  // ============================================================

  return (
    <section className="py-8 px-4 bg-white">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Book Your Cleaning
      </h2>

      {/* Service type buttons */}
      <div className="flex flex-wrap gap-4 mb-4">
        {(["Residential", "Business"] as ServiceType[]).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setForm({ ...form, service: type })}
            className={`px-4 py-2 rounded text-sm ${
              form.service === type
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <span className="font-medium">{type}</span>
            <span className="block text-xs mt-1">
              {type === "Residential"
                ? "Home cleaning for your personal space."
                : "Professional cleaning for offices & businesses."}
            </span>
          </button>
        ))}
      </div>

      {/* Form fields */}
      <div className="grid gap-3">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          className="border p-2 rounded"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone (WhatsApp)"
          className="border p-2 rounded"
          value={form.phone}
          onChange={handleChange}
          inputMode="tel"
        />
        <input
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={form.email}
          onChange={handleChange}
          type="email"
        />
        <input
          name="postcode"
          placeholder="Postcode"
          className="border p-2 rounded"
          value={form.postcode}
          onChange={handleChange}
        />

        <DatePicker
          selected={form.date}
          onChange={(date) => setForm({ ...form, date: date || null })}
          className="border p-2 rounded w-full"
          minDate={new Date()}
          placeholderText="Select date"
        />

        <select
          name="startTime"
          value={form.startTime}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {TIMES.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <select
          name="hours"
          value={form.hours}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {HOURS_OPTIONS.map((h) => (
            <option key={h} value={h}>
              {h} hour{h > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Estimated price */}
      <div className="mt-4 text-blue-600 font-semibold">
        Estimated Price: £{estimate.toFixed(2)} <br />
        <span className="text-sm text-gray-600">
          This is an estimate. We will contact you to confirm details.
        </span>
      </div>

      {/* Submit button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit Booking"}
      </button>
    </section>
  );
}
