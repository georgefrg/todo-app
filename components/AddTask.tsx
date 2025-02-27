"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

function AddTask() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState();

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        ADD NEW TASK
        <AiOutlinePlus size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form method="dialog" onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
