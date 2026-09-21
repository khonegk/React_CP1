// import './App.css'
// // import ProductCard from "./components/ProductCard.tsx";
// // import ProductList from "./components/ProductList.tsx";
// // function App() {
// //   return (
// //       <>
// //           <ProductCard title="Название товара" price={1500} inStock={true}/>
// //           <ProductList />
// //       </>
// //   )
// // }
// import TaskBoard from "./cp1/TaskBoard.tsx";
// import TaskIttem from "./cp1/TaskItem.tsx";
//
// export default App
//

import TaskList from './cp1/TaskBoard';

const tasks = [
    { id: 1, title: 'Изучить React', isCompleted: true },
    { id: 2, title: 'Сделать задание', isCompleted: false },
    { id: 3, title: 'Отправить работу', isCompleted: false },
];

function App() {
    return (
        <main>
            <h1>Мои задачи</h1>
            <TaskList tasks={tasks} />
        </main>
    );
}

export default App;
