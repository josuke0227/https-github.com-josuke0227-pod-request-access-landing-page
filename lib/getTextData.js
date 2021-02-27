import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const dataDirectory = join(process.cwd(), "data");

export function getDataSlugs() {
  return fs.readdirSync(dataDirectory);
}

export function getDataBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dataDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

export function getData(fields = []) {
  const slugs = getDataSlugs();
  const posts = getDataBySlug(slugs[0], fields);
  return posts;
}
