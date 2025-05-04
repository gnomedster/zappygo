export default {
  addTestWidget: () => {
    canvas.addWidget({
      type: "TEXT_WIDGET",
      widgetName: "TestText",
      props: {
        text: "Hello from script!"
      },
      layout: {
        row: 0,
        column: 0,
        rowSpan: 2,
        colSpan: 20
      }
    });
  }
}
