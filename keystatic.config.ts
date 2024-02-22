import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "mdhruvil/triveni",
    branchPrefix: "keystatic/",
  },
  ui: {
    brand: {
      name: "Triveni 2k24",
    },
  },
  collections: {
    events: collection({
      label: "Events",
      slugField: "name",
      path: "content/events/*",
      format: { contentField: "description" },
      schema: {
        name: fields.slug({
          name: {
            label: "Event Name",
          },
          slug: {
            description:
              "Slug goes in Url like for event 'Maze Runner' slug would be 'maze-runner' and url would be '/events/maze-runner'. Slug auto generated from event name but you can change it here",
          },
        }),
        description: fields.document({
          label: "Description",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
          tables: true,
          description:
            "Description of the event. (Events Structure, Rules And Regultions, etc. goes here)",
        }),
        eventImg: fields.image({
          label: "Event Image",
        }),
        entryFee: fields.text({
          label: "Entry Fee",
          multiline: true,
        }),
        eventDateAndTime: fields.object(
          {
            date: fields.date({
              label: "Date",
            }),
            time: fields.text({
              label: "Time",
              multiline: true,
            }),
          },
          { label: "Event Date And Time" }
        ),
        entryType: fields.multiselect({
          label: "Entry Type",
          options: [
            {
              label: "Solo",
              value: "solo",
            },
            {
              label: "Team",
              value: "team",
            },
          ],
          description: "Event is solo or team or for both",
        }),
        prize: fields.text({ label: "Prize", multiline: true }),
        domain: fields.relationship({
          label: "Domain",
          collection: "domains",
        }),
        department: fields.relationship({
          label: "Department",
          collection: "departments",
        }),
        AE_id: fields.text({
          label: "AllEvents ID",
        }),
      },
    }),
    domains: collection({
      label: "Domains",
      slugField: "name",
      path: "content/domains/*",
      schema: {
        name: fields.slug({
          name: {
            label: "Event Name",
          },
        }),
      },
    }),
    departments: collection({
      label: "Departments",
      slugField: "name",
      path: "content/departments/*",
      schema: {
        name: fields.slug({
          name: {
            label: "Department Name",
          },
        }),
      },
    }),
  },
});
