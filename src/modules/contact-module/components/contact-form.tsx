"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  CONTACT_FIELD_ORDER,
  CONTACT_MAX_LENGTHS,
  CONTACT_PROMPTS,
  INITIAL_CONTACT_ANSWERS,
  INITIAL_CONTACT_TRANSCRIPT,
} from "../constants";
import type { ContactApiResponse } from "@/service/contact/interfaces";
import type {
  ContactFormStatus,
  ContactTranscriptLine,
} from "../interfaces";
import type { ContactAnswers } from "../schemas";
import { validateContactAnswer } from "../utils";

function isContactApiResponse(payload: unknown): payload is ContactApiResponse {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "message" in payload &&
    typeof payload.message === "string"
  );
}

export function ContactForm() {
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<ContactFormStatus>("collecting");
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState("");
  const [answers, setAnswers] = useState<ContactAnswers>(INITIAL_CONTACT_ANSWERS);
  const [transcript, setTranscript] = useState<ContactTranscriptLine[]>(
    INITIAL_CONTACT_TRANSCRIPT,
  );

  const currentField = CONTACT_FIELD_ORDER[step];
  const isMessageStep = currentField === "message";
  const maxLength = CONTACT_MAX_LENGTHS[currentField];

  async function sendMessage(nextAnswers: ContactAnswers, honeypot: string) {
    setStatus("sending");
    setTranscript((lines) => [...lines, { kind: "status", text: "> validating transmission... ok" }, { kind: "status", text: "> sending to Grace's inbox..." }]);

    const data = new FormData();
    Object.entries(nextAnswers).forEach(([key, value]) => data.append(key, value));
    data.append("website", honeypot);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: data });
      const payload: unknown = await response.json();
      const responseMessage = isContactApiResponse(payload)
        ? payload.message
        : "Unable to send your message right now.";

      if (!response.ok) {
        setStatus("error");
        setTranscript((lines) => [...lines, { kind: "error", text: `> delivery failed: ${responseMessage}` }]);
        return;
      }

      setStatus("success");
      setTranscript((lines) => [...lines, { kind: "success", text: "> message sent successfully ✓" }, { kind: "status", text: `> ${responseMessage}` }]);
    } catch {
      setStatus("error");
      setTranscript((lines) => [...lines, { kind: "error", text: "> delivery failed: unable to reach the mail server" }]);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "collecting") return;

    const answer = draft.trim();
    const error = validateContactAnswer(currentField, answer);
    if (error) {
      setTranscript((lines) => [...lines, { kind: "error", text: `> ${error}` }, { kind: "prompt", text: `> ${CONTACT_PROMPTS[currentField]}` }]);
      return;
    }

    const nextAnswers = { ...answers, [currentField]: answer };
    setAnswers(nextAnswers);
    setDraft("");
    setTranscript((lines) => [...lines, { kind: "reply", text: `$ ${answer}` }, { kind: "status", text: `> ${currentField} accepted ✓` }]);

    if (step === CONTACT_FIELD_ORDER.length - 1) {
      void sendMessage(nextAnswers, honeypotRef.current?.value.trim() ?? "");
      return;
    }

    const nextStep = step + 1;
    const nextField = CONTACT_FIELD_ORDER[nextStep];
    setStep(nextStep);
    setTranscript((lines) => [...lines, { kind: "prompt", text: `> ${CONTACT_PROMPTS[nextField]}` }]);
  }

  return (
    <section className={isMessageStep ? "contact-terminal contact-terminal-message" : "contact-terminal"} aria-label="Interactive terminal contact">
      <div className="contact-terminal-transcript" aria-live="polite" role="log">
        {transcript.map((line, index) => <p key={`${line.text}-${index}`} className={`contact-terminal-line contact-terminal-line-${line.kind}`}>{line.text}</p>)}
      </div>
      {status === "collecting" && (
        <form className={isMessageStep ? "contact-terminal-input contact-terminal-input-message" : "contact-terminal-input"} onSubmit={handleSubmit}>
          <input
            ref={honeypotRef}
            className="contact-honeypot"
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
          />
          <label className="sr-only" htmlFor="contact-terminal-answer">{CONTACT_PROMPTS[currentField]}</label>
          <span aria-hidden="true">visitor@terminal:~$</span>
          {isMessageStep ? (
            <textarea id="contact-terminal-answer" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="type your message..." rows={4} maxLength={maxLength} autoFocus />
          ) : (
            <input id="contact-terminal-answer" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="type your answer..." maxLength={maxLength} autoFocus />
          )}
          <button type="submit" className="focus-ring">{isMessageStep ? "send ↵" : "enter ↵"}</button>
        </form>
      )}
      {status === "sending" && <p className="contact-terminal-wait">&gt; awaiting delivery response...</p>}
      {status === "collecting" && <p className="contact-terminal-step">step {step + 1} of {CONTACT_FIELD_ORDER.length} · {currentField}</p>}
    </section>
  );
}
