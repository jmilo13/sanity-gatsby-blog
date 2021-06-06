export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60bc16a02e76d4c112e2a4f4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rabip8r4",
                  apiId: "7f290f90-94b6-41ec-b564-b3fa067405ba",
                },
                {
                  buildHookId: "60bc16a04d9b8cac5564d5d3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-mcpze6tu",
                  apiId: "4f0b82d8-8282-4ea2-bdbe-d55913df974e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jmilo13/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-mcpze6tu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
