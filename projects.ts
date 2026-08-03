import { faker } from "@faker-js/faker";

const projects = Array.from({ length: 12 }, () => ({
  id: faker.string.uuid(),
  title: faker.company.buzzPhrase(),
  description: faker.lorem.paragraph(),
  cover: faker.image.urlPicsumPhotos(),
  slug: faker.lorem.slug({ min: 3, max: 5 }),
}));
export default projects;
