import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
    const getAllProjects = gql` 
{
   projects {
    title
    id
    tags
    source
    image {
      url
    }
    description
   }
}
`;
    const { projects } = await graphcms.request(getAllProjects);
    return projects;
};