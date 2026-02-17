import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "egv1st9m",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
