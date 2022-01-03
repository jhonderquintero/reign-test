import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/not-found.json";

export const NotFoundLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Lottie options={defaultOptions} height={240} width={240} />
    </div>
  );
};
