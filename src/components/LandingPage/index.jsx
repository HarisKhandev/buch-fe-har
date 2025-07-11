import { MaterialReactTable } from "material-react-table";

// nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

function LandingPage() {
  // should be memoized or stable
  const columns = [
    {
      accessorKey: "name.firstName", // access nested data with dot notation
      header: "First Name",
    },
    {
      accessorKey: "name.lastName",
      header: "Last Name",
    },
    {
      accessorKey: "address", // normal accessorKey
      header: "Address",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "state",
      header: "State",
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableFullScreenToggle={false}
      enableDensityToggle={false}
      // onPaginationChange={true}
      state={{
        showGlobalFilter: true,
      }}
      positionGlobalFilter="left"
      muiSearchTextFieldProps={{
        placeholder: 'Search All Props',
        sx: { minWidth: '18rem' },
        variant: 'outlined',
      }}
    />
  );
}

export default LandingPage;
