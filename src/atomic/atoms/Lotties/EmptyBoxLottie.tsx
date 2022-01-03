import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/empty-box.json";

export const EmptyBoxLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{width: "100%", marginTop: 40}}>
      <Lottie options={defaultOptions} height={260} width={260}/>
    </div>
  );
};
