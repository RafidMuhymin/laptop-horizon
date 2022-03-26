import ReactModal from "react-modal";

ReactModal.setAppElement(".App");

export default function Modal(props) {
  return <ReactModal {...props} />;
}
