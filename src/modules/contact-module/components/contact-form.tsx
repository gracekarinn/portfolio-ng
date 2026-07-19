"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "collecting" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "subject" | "message";

interface TerminalLine {
  kind: "command" | "prompt" | "reply" | "status" | "error" | "success";
  text: string;
}

const prompts: Record<FieldName, string> = {
  name: "What should I call you?",
  email: "What is the best email to reply to?",
  subject: "What would you like to talk about?",
  message: "Write your transmission.",
};

const fieldOrder: FieldName[] = ["name", "email", "subject", "message"];

function validateAnswer(field: FieldName, value: string) {
  if (!value.trim()) return "That response is required.";
  if (field === "name") {
    if (value.trim().length > 20) return "Name must be 20 characters or fewer.";
    if (!/^[\p{L}\s'-]+$/u.test(value.trim())) return "Name can only use letters, spaces, apostrophes, and hyphens.";
  }
  if (field === "email" && value.trim().length > 40) return "Email must be 40 characters or fewer.";
  if (field === "email" && !/^\S+@\S+\.\S+$/.test(value.trim())) return "That email format does not look right.";
  if (field === "message" && value.trim().length > 100) return "Message must be 100 characters or fewer.";
  return null;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("collecting");
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState("");
  const [answers, setAnswers] = useState<Record<FieldName, string>>({ name: "", email: "", subject: "", message: "" });
  const [transcript, setTranscript] = useState<TerminalLine[]>([
    { kind: "command", text: "grace@portfolio:~$ start-contact --interactive" },
    { kind: "status", text: "> secure channel open" },
    { kind: "prompt", text: `> ${prompts.name}` },
  ]);

  const currentField = fieldOrder[step];
  const isMessageStep = currentField === "message";
  const maxLength = currentField === "name" ? 20 : currentField === "email" ? 40 : currentField === "message" ? 100 : undefined;

  async function sendMessage(nextAnswers: Record<FieldName, string>) {
    setStatus("sending");
    setTranscript((lines) => [...lines, { kind: "status", text: "> validating transmission... ok" }, { kind: "status", text: "> sending to Grace's inbox..." }]);

    const data = new FormData();
    Object.entries(nextAnswers).forEach(([key, value]) => data.append(key, value));
    data.append("website", "");

    try {
      const response = await fetch("/api/contact", { method: "POST", body: data });
      const payload: unknown = await response.json();
      const responseMessage = typeof payload === "object" && payload !== null && "message" in payload && typeof payload.message === "string"
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
    const error = validateAnswer(currentField, answer);
    if (error) {
      setTranscript((lines) => [...lines, { kind: "error", text: `> ${error}` }, { kind: "prompt", text: `> ${prompts[currentField]}` }]);
      return;
    }

    const nextAnswers = { ...answers, [currentField]: answer };
    setAnswers(nextAnswers);
    setDraft("");
    setTranscript((lines) => [...lines, { kind: "reply", text: `$ ${answer}` }, { kind: "status", text: `> ${currentField} accepted ✓` }]);

    if (step === fieldOrder.length - 1) {
      void sendMessage(nextAnswers);
      return;
    }

    const nextStep = step + 1;
    const nextField = fieldOrder[nextStep];
    setStep(nextStep);
    setTranscript((lines) => [...lines, { kind: "prompt", text: `> ${prompts[nextField]}` }]);
  }

  return (
    <section className={isMessageStep ? "contact-terminal contact-terminal-message" : "contact-terminal"} aria-label="Interactive terminal contact">
      <div className="contact-terminal-transcript" aria-live="polite" role="log">
        {transcript.map((line, index) => <p key={`${line.text}-${index}`} className={`contact-terminal-line contact-terminal-line-${line.kind}`}>{line.text}</p>)}
      </div>
      {status === "collecting" && (
        <form className={isMessageStep ? "contact-terminal-input contact-terminal-input-message" : "contact-terminal-input"} onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="contact-terminal-answer">{prompts[currentField]}</label>
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
      {status === "collecting" && <p className="contact-terminal-step">step {step + 1} of {fieldOrder.length} · {currentField}</p>}
    </section>
  );
}
