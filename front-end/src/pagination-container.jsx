import { Button, Divider, List } from "antd";
import Card from "./components/card";
const PaginationContainer = ({ data = [] }) => {
  const handleAdd = () => {
    console.log("add");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Card
      className="h-[70vh] w-full md:w-[50%] border rounded-lg"
      actions={<Button>Add</Button>}
    >
      <List
        className="h-[50vh]"
        pagination={{
          defaultPageSize: 10,
        }}
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item
            className="h-10"
            actions={[
              <div className="cursor-pointer" onClick={() => {}}>
                edit
              </div>,
              <div className="cursor-pointer" onClick={() => {}}>
                delete
              </div>,
            ]}
          >
            <List.Item.Meta
              className={`${item.completed ? "line-through" : ""}`}
              title={
                <div className={`${item.completed ? "line-through" : ""}`}>
                  {item.title}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
export default PaginationContainer;
