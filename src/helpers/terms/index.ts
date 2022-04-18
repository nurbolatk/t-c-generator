import { TermsFormValues } from "types";

export async function saveData(data: TermsFormValues): Promise<void> {
  await window.localStorage.setItem("__terms_data__", JSON.stringify(data));
}

export async function getData(): Promise<TermsFormValues | null> {
  const data = await window.localStorage.getItem("__terms_data__");
  if (data) {
    return JSON.parse(data);
  }
  return null;
}
