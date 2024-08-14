import Swal from "sweetalert2";
import { useTheme } from "@mui/material/styles";

const useToast = () => {
  const theme = useTheme();

  const showToast = async (
    icon: "success" | "error" | "warning" | "info" | "question",
    title: string
  ) => {
    const Toast = Swal.mixin({
      toast: true,
      position: window.innerWidth < 600 ? "top" : "top-right",
      iconColor: theme.palette.success.main,
      customClass: {
        popup: "custom-toast",
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        Object.assign(toast.style, {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[3],
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1.5),
          fontFamily: theme.typography.fontFamily,
          fontSize: window.innerWidth < 600 ? "0.785rem" : "0.895rem",
          minWidth: "200px",
          maxWidth: "270px",
          textAlign: "center",
          marginTop: window.innerWidth < 600 ? "144px" : "140px",
        });
      },
    });

    await Toast.fire({
      icon,
      title,
    });
  };

  return showToast;
};

export default useToast;
