import { dropdownStates } from "../atomic/organisms/HomeAllCards/HomeAllCards";

/**
 * Fetch Posts Data
 * @param page actualPage
 * @param state dropdownStates
 * @returns
 */
export async function fetchPosts(page = 0, state: dropdownStates = "angular") {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?query=${state}&page=${page}`
  );
  return res.json();
}
