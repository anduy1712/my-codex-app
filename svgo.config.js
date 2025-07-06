module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Không remove fill/stroke
          removeUnknownsAndDefaults: false,
        },
      },
    },
    {
      name: "convertColors",
      params: {
        currentColor: true, // Tự động convert màu đơn thành currentColor
      },
    },
    {
      name: "customColorReplace",
      type: "perItem",
      fn: (node) => {
        // Thay thế fill/stroke nếu là kiểu màu
        ["fill", "stroke"].forEach((attr) => {
          const val = node.attributes?.[attr];
          if (
            typeof val === "string" &&
            (val.startsWith("#") || val.startsWith("rgb") || val === "black")
          ) {
            node.attributes[attr] = "currentColor";
          }
        });
      },
    },
  ],
};
