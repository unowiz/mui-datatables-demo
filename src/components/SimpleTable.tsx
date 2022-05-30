import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";


export const SimpleTable = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    
    const options:MUIDataTableOptions | undefined = {
        filterType: 'checkbox',
        responsive: 'simple',
      };
      
      return (
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
      );
}
