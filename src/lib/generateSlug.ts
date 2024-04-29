export default function generateSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-");
}
