const tree = {
    data: "Matt",
    children: [
      {
        data: "Joe",
        children: [
          {
            data: "Beau",
            children: [
              { data: "Ada", children: [] },
              { data: "Cory", children: [{ data: "Bria", children: [] }] },
            ],
          },
          {
            data: "Kara",
            children: [{ data: "Luka", children: [] }],
          },
        ],
      },
      {
        data: "Opal",
        children: [{ data: "Rory", children: [] }],
      },
    ],
  };

  console.log(tree.children[0].children[0].children[1].children[0].data)