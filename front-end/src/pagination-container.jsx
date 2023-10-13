import { Button, Checkbox, List, Modal } from "antd";
import Card from "./components/card";
import { useEffect, useState } from "react";
import todos from "./api/todos";
import TextArea from "antd/es/input/TextArea";
import toast from "react-hot-toast";

const PaginationContainer = () => {
  // -------------------------------------------- TODO STATE--------------------------------------------
  const [data, setData] = useState([]);
  const fetchTodos = () => {
    todos.getTodos().then((res) => {
      if (res) {
        setData(res?.data?.sort((a, b) => a.completed - b.completed));
      }
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // -------------------------------------------- MODAL STATE--------------------------------------------
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  // -------------------------------------------- MODAL HANDLERS--------------------------------------------
  const handleAdd = () => {
    setModal(false);
    todos
      .addTodo({
        title: modalData?.title,
        completed: false,
      })
      .then((res) => {
        fetchTodos();
        setModalData({});
        toast.success("Todo Added");
      });
  };

  const handleEdit = () => {
    setModal(false);
    todos
      .updateTodo({
        ...modalData,
        title: modalData?.title,
        completed: false,
      })
      .then((res) => {
        fetchTodos();
        setModalData({});
        toast.success("Todo Updated");
      });
  };

  const handleDelete = (id) => {
    todos.deleteTodo(id).then((res) => {
      fetchTodos();
      toast.success("Todo Deleted");
    });
  };

  const handleCancel = () => {
    setModal(false);
    setModalData({});
  };

  // -------------------------------------------- TOGGLE HANDLERS--------------------------------------------
  const toggleComplete = (todo) => {
    todos
      .updateTodo({
        ...todo,
        completed: !todo?.completed,
      })
      .then((res) => {
        fetchTodos();
        setModalData({});
        toast.success("Todo Updated");
      });
  };

  return (
    <Card
      className="h-content w-full md:w-[50%] border rounded-lg"
      actions={
        <Button
          onClick={() => {
            setModal(true);
          }}
        >
          Add
        </Button>
      }
    >
      <List
        className="h-content w-full"
        pagination={{
          defaultPageSize: 10,
        }}
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item
            className="h-content"
            actions={[
              <div
                className="cursor-pointer"
                onClick={() => {
                  setModalData(item);
                  setModal(true);
                }}
              >
                edit
              </div>,
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                delete
              </div>,
            ]}
          >
            <List.Item.Meta
              className={` ${item.completed ? "line-through" : ""}`}
              title={
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={item.completed}
                    onChange={() => {
                      toggleComplete(item);
                    }}
                  />
                  <div className={`${item.completed ? "line-through" : ""}`}>
                    {item.title}
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />

      <Modal
        title={modalData?.id ? "Edit" : "Add New Todo"}
        open={modal}
        onCancel={handleCancel}
        centered
        footer={[
          <Button
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>,
          modalData?.id ? (
            <Button
              onClick={() => {
                handleEdit();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleAdd();
              }}
            >
              Add
            </Button>
          ),
        ]}
      >
        <div className="flex flex-col mt-4 gap-2">
          <span className="text-sm">Title</span>
          <TextArea
            value={modalData?.title}
            onChange={(e) => {
              setModalData({ ...modalData, title: e.target.value });
            }}
          />
        </div>
      </Modal>
    </Card>
  );
};
export default PaginationContainer;
