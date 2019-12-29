module.exports = {
  ignore: ["**/**/**/styles.js", "**/**/*.test.js"],
  title: "Oplus Components",
  pagePerSection: true,
  sections: [
    {
      name: "Components",
      sectionDepth: 2,
      sections: [
        {
          name: "Atoms",
          components: () => ["./src/components/atoms/**/*.js"],
          sectionDepth: 2,
          exampleMode: "expand",
          usageMode: "expand"
        },
        {
          name: "Molecules",
          components: () => ["./src/components/molecules/**/*.js"],
          sectionDepth: 2,
          exampleMode: "expand",
          usageMode: "expand"
        }
      ]
    }
  ]
};
