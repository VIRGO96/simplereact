import Repository from "./Repository";
const resource = "?";
export default {
  getText(payload) {
    return Repository.get(
      `${resource}action=parse&page=${payload}&prop=wikitext&formatversion=2&format=json`
    );
  },
};
