import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/loading.json";

export const LoadingLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={120} width={120} />
    </div>
  );
};
