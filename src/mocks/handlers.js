import { rest } from "msw";

const todos = [
  {
    id: `1`,
    title: `pia 1`,
  },
  {
    id: `2`,
    title: `pia 2`,
  },
  {
    id: `3`,
    title: `pia 3`,
  },
  {
    id: `4`,
    title: `pia 4`,
  },
  {
    id: `5`,
    title: `pia 5`,
  },
];

export const handlers = [
  rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json({
        projects: [
          {
            id: `1 ${pageIndex}`,
            name: `pia 1-(${pageIndex})`,
          },
          {
            id: `2 ${pageIndex}`,
            name: `pia 2-(${pageIndex})`,
          },
          {
            id: `3 ${pageIndex}`,
            name: `pia 3-(${pageIndex})`,
          },
          {
            id: `4 ${pageIndex}`,
            name: `pia 4-(${pageIndex})`,
          },
          {
            id: `5 ${pageIndex}`,
            name: `pia 5-(${pageIndex})`,
          },
        ],
        hasMore: pageIndex < 4,
        nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
      })
    );
    // return res(ctx.status(400));
  }),
  rest.post("http://localhost:3000/api/todo ", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(true));
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    console.log("111");
    return res(ctx.json(todos));
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json([
        {
          id: `1 ${pageIndex}`,
          name: `pia 1-(${pageIndex})`,
        },
        {
          id: `2 ${pageIndex}`,
          name: `pia 2-(${pageIndex})`,
        },
        {
          id: `3 ${pageIndex}`,
          name: `pia 3-(${pageIndex})`,
        },
        {
          id: `4 ${pageIndex}`,
          name: `pia 4-(${pageIndex})`,
        },
        {
          id: `5 ${pageIndex}`,
          name: `pia 5-(${pageIndex})`,
        },
      ])
    );
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `pia (${userId})`,
      })
    );
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    console.log("req.url :: ", req.url.searchParams);
    const id = req.url.searchParams.get("id");
    console.log("id :: ", id);
    return res(
      ctx.json({
        name: id === 1 ? "The one" : "The others",
      })
    );
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/todo", async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: "Todo from Server",
        },
      })
    );
  }),
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      return res(
        ctx.status(403),
        // And a response body, if necessary
        ctx.json({
          errorMessage: "Data not Found",
        })
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: id,
        //         age: 135,
        //       },
        //     ],
        //   },
        // })
      );
    }
  ),
];
