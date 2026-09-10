import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

const token = process.env.SANITY_API_TOKEN || "";

export const canWriteToSanity = Boolean(projectId && token);

export const writeClient = canWriteToSanity
  ? createClient({ projectId, dataset, apiVersion, token, useCdn: false })
  : null;
