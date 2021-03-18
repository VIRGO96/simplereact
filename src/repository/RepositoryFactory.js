import WikiRepository from "./WikiRepository";

const repositories = {
  wiki_repository: WikiRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
