import type { ContactFieldName } from "./interfaces";
import { contactFieldSchemas } from "./schemas";

export function validateContactAnswer(
  field: ContactFieldName,
  value: string,
): string | null {
  const result = contactFieldSchemas[field].safeParse(value);
  return result.success ? null : result.error.issues[0]?.message ?? "Invalid response.";
}
