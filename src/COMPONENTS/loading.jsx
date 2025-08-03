import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";

function Loading({ loading }) {
  return (
    <div>
      {loading && (
        <div className="loading-circle">
          <BreakfastDiningIcon></BreakfastDiningIcon>
          Cargando...
        </div>
      )}
    </div>
  );
}

export default Loading;
