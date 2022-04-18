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

export async function saveID(id: number | string): Promise<void> {
  await window.localStorage.setItem("__terms_id__", JSON.stringify(id));
}

export async function getID(): Promise<number | string | null> {
  const data = await window.localStorage.getItem("__terms_id__");
  if (data) {
    return JSON.parse(data);
  }
  return null;
}
