import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import EditPost from './EditPost';
// import {DataProvider} from './context/DatContext'
import {useEffect} from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import {useStoreActions} from 'easy-peasy';


function App() {
  const setPosts=useStoreActions((actions)=>actions.setPosts);
  const {data,fetchError,isLoading}=useAxiosFetch('http://localhost:3500/posts');

  useEffect(()=>{
    setPosts(data)
  },[data,setPosts])
  


  return (
    
      <Routes>
        <Route path="/" element={<Layout
          title="React Js Blog -Easy Peasy Redux"
        />}>
          <Route index element={<Home
          isLoading={isLoading}
          fetchError={fetchError}
          />} />
          <Route path="post">
            <Route index element={<NewPost/>} />
            <Route path=":id" element={<PostPage/>} />
          </Route>
          <Route path='edit/:id' element={<EditPost/>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    
  );
}














// function App() {
//   return (
//     <DataProvider>
//       <Routes>
//         <Route path="/" element={<Layout
//           title="React Js Blog"
//         />}>
//           <Route index element={<Home/>} />
//           <Route path="post">
//             <Route index element={<NewPost/>} />
//             <Route path=":id" element={<PostPage/>} />
//           </Route>
//           <Route path='edit/:id' element={<EditPost/>} />
//           <Route path="about" element={<About />} />
//           <Route path="*" element={<Missing />} />
//         </Route>
//       </Routes>
//     </DataProvider>
//   );
// }

{/* <Routes>
        <Route path="/" element={<Layout
          search={search}
          setSearch={setSearch}
          title="React Js Blog"
          width={width}
        />}>
          <Route index element={<Home posts={searchResults} fetchError={fetchError} isLoading={isLoading} />} />
          <Route path="post">
            <Route index element={<NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />} />
            <Route path=":id" element={<PostPage
              posts={posts}
              handleDelete={handleDelete}
            />} />
          </Route>
          
          <Route  path="edit/:id" element={<EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />} />
          
          
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes> */}





      // <Routes>
      // {/* exact path-because path is shered */}
      //   <Route  path='/' element={<Layout
      //     title={'React Js Blog'}
      //      search={search}
      //      setSearch={setSearch}
      //     />}> 
      //     {/* index-default  */}
      //     <Route index element={<Home 
      //      posts={posts}
      //     />}/>
      //     <Route path='post'>
      //         <Route index element ={<NewPost
      //         />}/>
              
      //       <Route path=':id' element={<PostPage
      //         posts={posts}
      //         handleDelete={handleDelete}
      //       />}/>
      //     </Route>
        
      //     <Route path='about' element={<About/>}/>
      //     <Route path='*' element={<Missing/>}/>
      //   </Route>
      // </Routes>
      
      
  

export default App;
