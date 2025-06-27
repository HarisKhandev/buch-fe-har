/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaClipboardList } from "react-icons/fa";
import CustomNavigationHeader from "../../../assets/genericComponents/CustomNavigationHeader";
import IMAGES from "../../../assets/images";
import { PATH } from "../../../config";
import CustomTable, {
  TableProfileInfo,
} from "../../../assets/genericComponents/CustomTable";
import ViewSingleAdmissionRequestModal from "./ViewSingleAdmissionRequestModal";
import CustomTableFilters from "../../../assets/genericComponents/CustomTableFilters";

function AdmissionRequestListing() {
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);

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
      name: "Create New Admission Request",
      path: PATH.CREATE_ADMISSION_REQUEST,
      align: "right",
    },
  ];

  const filtersListData = [
    {
      filter: "Search",
      state: "",
      setState: "",
    },
    {
      filter: "Select Filter",
      name: "Diagnosis Type",
      dropdownList: [
        { label: "Diagnosis 1", value: 1, key: "Diagnosis 1" },
        { label: "Diagnosis 2", value: 2, key: "Diagnosis 2" },
        { label: "Diagnosis 3", value: 3, key: "Diagnosis 3" },
      ],
      state: "",
      setState: "",
    },
  ];

  const columns = [
    {
      accessorKey: "requestId",
      header: "Request Id",
    },
    {
      accessorKey: "patient Details",
      header: "Patient Details",
      Cell: ({ cell }) => (
        <TableProfileInfo
          name={cell?.row?.original?.patientDetails?.name}
          img={cell?.row?.original?.patientDetails?.img}
          subName={cell?.row?.original?.patientDetails?.subName}
        />
      ),
    },
    {
      accessorKey: "doctor",
      header: "Doctor",
      Cell: ({ cell }) => (
        <TableProfileInfo
          name={cell?.row?.original?.doctors?.name}
          img={cell?.row?.original?.doctors?.img}
          doctorProfile
        />
      ),
    },
    {
      accessorKey: "admissionDate",
      header: "Admission Date",
    },
    {
      accessorKey: "admittingDiagnosis",
      header: "Admitting Diagnosis",
    },
    {
      accessorKey: "pco",
      header: "PCO",
      Cell: ({ cell }) => (
        <Button type="button" className="template-btn">
          <FaClipboardList size={18} />
          {cell?.row?.original?.pco}
        </Button>
      ),
    },
  ];

  const data = [
    {
      requestId: "1",
      patientDetails: {
        name: "Cody Forman",
        subName: "BIH100166",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Rochel Foose",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-11",
      admittingDiagnosis: "Paratyphoid fever A",
      pco: "Template#1",
    },
    {
      requestId: "2",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "3",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "4",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "5",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "6",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "7",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "8",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "9",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
    {
      requestId: "10",
      patientDetails: {
        name: "Mark Henry",
        subName: "BIH100167",
        img: IMAGES.PROFILE_LOGO,
      },
      doctors: {
        name: "Dr. Roochi Mill",
        img: IMAGES.PROFILE_LOGO,
      },
      admissionDate: "2023-08-12",
      admittingDiagnosis: "Paratyphoid fever B",
      pco: "Template#2",
    },
  ];

  const pageChange = (pageNumber) => {
    setPage(pageNumber - 1);
  };

  return (
    <>
      <CustomNavigationHeader listData={navigationListData} />
      <div className="custom-table">
        <CustomTableFilters listData={filtersListData} />
        <CustomTable
          columns={columns}
          data={data}
          pageChange={pageChange}
          page={page}
          setPage={setPage}
          muiTableBodyRowProps={() => ({
            onClick: () => {
              setModal(true);
            },
            sx: {
              cursor: "pointer",
            },
          })}
        />
      </div>
      <ViewSingleAdmissionRequestModal
        show={modal}
        onHide={() => setModal(!modal)}
      />
    </>
  );
}

export default AdmissionRequestListing;
