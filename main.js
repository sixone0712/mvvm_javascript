import Scanner from "./src/Scanner";
import ViewModal from "./src/ViewModal";

const viewModal = ViewModal.get({
  isStop: false,

  changeContents() {
    this.wrapper.styles.background = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
    this.contents.properties.textContent = Math.random().toString(16).replace(".", "")
  },

  wrapper: ViewModal.get({
    styles: {
      width: "50%",
      height: '100px',
      background: "#ffa",
      cursor: "pointer",
    },
    events: {
      click(e, vm) {
        vm.isStop = true;
      }
    }
  }),
  title: ViewModal.get({
    properties: {
      innerHTML: "Title",
    },
  }),
  contents: ViewModal.get({
    properties: {
      textContent: "Contents",
    },
  }),
});

const scanner = new Scanner();
const binder = scanner.scan(document.querySelector("#target"));
binder.render(viewModal);

const animation = () => {
  viewModal.changeContents();
  binder.render(viewModal);
  if(!viewModal.isStop) {
    requestAnimationFrame(animation);
  }
}

animation()