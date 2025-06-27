import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";

function AppointmentScheduling() {
  const navigationListData = [
    {
      name: "Create Patient",
      path: "",
      align: "left",
    },
    {
      name: "Create Invoice",
      path: "",
      align: "left",
    },
    {
      name: "Create New Schedule",
      path: "",
      align: "right",
    },
    {
      name: "Close",
      path: "",
      align: "right",
    },
    {
      name: "Save",
      path: "",
      align: "right",
    },
    {
      name: "Save & New",
      path: "",
      align: "right",
    },
  ];
  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <p>Appointment screen</p>
    </>
  );
}

export default AppointmentScheduling;
