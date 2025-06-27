import Swal from "sweetalert2";

function SignOut() {
  function logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "rgb(36 35 35)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("buch_international_user");
        window.location.href = "/";
      }
    });
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        logout();
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          logout();
        }
      }}
    >
      Log out
    </div>
  );
}

export default SignOut;
