import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Modal(props) {
  return <ReactModal {...props} />;
}
