import { useStaticQuery, graphql } from 'gatsby';
export const useProjects = () => {
  const { alldata } = useStaticQuery(
    graphql`
      query {
        alldata {
          projects {
            name
            link
            img {
              url
            }
          }
        }
      }
    `
  );
  return alldata.projects;
};
