import PropTypes from "prop-types";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PaginationComponent from "./Pagination";
import { PAGINATION_PAGE_SIZE } from "../../config";
import CustomAvatarName from "./CustomAvatarName";

function CustomTable({
  columns,
  data,
  searchTitle,
  page,
  pageChange,
  muiTableBodyRowProps,
  enableActions,
}) {
  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data ?? []}
        enableColumnOrdering
        enableColumnResizing
        enableColumnDragging
        enableGrouping
        muiTableBodyRowProps={muiTableBodyRowProps}
        enableFullScreenToggle={false}
        enableDensityToggle={false}
        enableBottomToolbar={false}
        state={{
          showGlobalFilter: true,
          // isLoading: true
        }}
        positionGlobalFilter="left"
        muiSearchTextFieldProps={{
          size: "small",
          placeholder: searchTitle,
          sx: { minWidth: "18rem" },
          variant: "outlined",
        }}
        enableRowActions={enableActions}
        positionActionsColumn="last"
        renderRowActions={({ row }) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              e.stopPropagation();
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
              <Tooltip title="Edit">
                <IconButton
                  className="edit-btn-table"
                  onClick={() => console.log("Edit", row)}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete">
                <IconButton
                  className="delete-btn-table"
                  onClick={() => console.info("Delete")}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </div>
        )}
      />
      <PaginationComponent
        totalNumber={Math.ceil(data.length / PAGINATION_PAGE_SIZE)}
        page={page}
        pageChange={pageChange}
      />
    </>
  );
}

CustomTable.propTypes = {
  columns: PropTypes.object.isRequired,
  searchTitle: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  pageChange: PropTypes.object.isRequired,
  muiTableBodyRowProps: PropTypes.object.isRequired,
  enableActions: PropTypes.object.isRequired,
};

export default CustomTable;

export function TableProfileInfo({ name, subName, img, doctorProfile }) {
  return (
    <div>
      {doctorProfile ? (
        <div className="doctor-column-set">
          {img ? (
            <img src={img} alt={name} className="img-fluid" />
          ) : (
            <CustomAvatarName name={name} />
          )}
          <div>{name}</div>
        </div>
      ) : (
        <div className="patient-column-set">
          {img ? (
            <img src={img} alt={name} className="img-fluid" />
          ) : (
            <CustomAvatarName name={name} />
          )}
          <div>
            <div className="fw-medium">{name}</div>
            <div>{subName}</div>
          </div>
        </div>
      )}
    </div>
  );
}

TableProfileInfo.propTypes = {
  name: PropTypes.object.isRequired,
  subName: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  doctorProfile: PropTypes.object.isRequired,
};
