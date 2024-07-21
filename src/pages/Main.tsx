import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate("/menus")}>
      메뉴보기
    </button>
  );
};

export default Main;
