import axios from '../helper/axios';
import Layout from "../layout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyPage = () => {
  const Textfield = ({
    name = '',
    title = '',
    type = 'text',
    value = '',
    onChange = (val) => {console.log(val) }
  }: {
    name: string,
    title: string,
    type: string,
    value: string,
    onChange: (val: string) => void
  }) => {
    const [val, setVal] = useState<string>(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
      setVal(e.target.value);
    }
    return (
      <div className="relative z-0 w-full mb-5 group">
        <input type={type} name={name} id={name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={val} onChange={(e) => handleChange(e)} placeholder=" " required />
        <label htmlFor={name} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{title}</label>
      </div>
    )
  }
  // const navigate = useNavigate();
  interface Todo {
    _id: string
    title: string
    done: boolean
    userId: string
  }
  const TodoItem = ({ todo }: { todo: Todo }) => {
    const editbtncls = "mb-1 mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full";
    const [isEdit, setEdit] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(todo?.title || '');
    const [isDeleted, setDelete] = useState<boolean>(false);
    const onDelete = () => {
      axios.put(`/api/todo/destory`, todo).then((res) => {
        toast.success(res.data.success)
        setDelete(true);
      }).catch(() => {
        toast.error('Network error');
      })
    }
    const onEdit = () => {
      if (isEdit) {
        //update todo
        axios.put('/api/todo', {
          id: todo._id,
          title: title,
          userId: todo.userId
        }).then((res) => {
          toast.success(res.data.success);
          setEdit(false);
        }).catch(() => {
          toast.error('network error');
        })
      } else {
        setEdit(true);
      }
    }
    return (
      <>
        {isDeleted ? <></> :
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-full flex flex-row justify-between" role="alert">
            <span className="font-medium w-full">{
              isEdit ? <>
                <Textfield name="title" title="title" value={title} type="text" onChange={(val) => setTitle(val)} />
              </> : title} </span>
            <div className="flex flex-col	">
              <button type="button" onClick={() => onEdit()} className={editbtncls}>{isEdit ? 'update' : 'edit'}</button>
              <button type="button" onClick={() => onDelete()} className={editbtncls}>delete</button>
            </div>
          </div>}
      </>
    )
  }

  const [todolist, setTodolist] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log('dddddddddddddd')
    if (loading) {
      axios.get('/api/todo').then((res: any) => {
        setTodolist(res.data.data);
        setLoading(false);
      }).catch(() => {
        toast.error('network error');
      })
    }

  }, [loading]);
  const CreateForm = ({ onCreact = () => { } }) => {
    const [_title, setTitle] = useState<string>('');
    const handleCreate = () => {
      if (!!!_title) {
        toast.error('title is required');
      } else {
        axios.post('/api/todo', {
          title: _title
        }).then((res) => {
          toast.success(res.data.success)
          setTitle('');
          onCreact()
        }).catch(() => {
          toast.error('network error');
        })
      }
    }
    return (
      <>
        <h1>Add Todo</h1>
        <Textfield name={'title'} title="title" value={_title} type="text" onChange={(val) => setTitle(val)} />
        <button type="button" onClick={() => handleCreate()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </>
    )
  }
  return (
    <Layout>
      <div className="py-20 bg-white h-full min-h-[100vh]">

        <form className="max-w-xl mx-auto">
          <CreateForm onCreact={() => setLoading(true)} />
          <div className="py-10 flex flex-col">
            {todolist?.map((todo, index) => (
              <TodoItem todo={todo} key={index} />
            ))}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default MyPage;
