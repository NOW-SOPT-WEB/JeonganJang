import { useNavigate } from "react-router-dom";
import { PATH } from "../../router/route";

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHome = () => navigate(PATH.HOME);
  const goMypage = () => navigate(PATH.MYPAGE);
  const goSignup = () => navigate(PATH.SIGNUP);
  const goBack = () => navigate(-1);

  return {
    goHome,
    goMypage,
    goSignup,
    goBack,
  };
};

export default useEasyNavigate;
